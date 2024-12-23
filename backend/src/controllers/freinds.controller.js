import User from '../models/user.model.js';

export const searchUsers = async (req, res) => {
  try {
    const myId = req.user._id;
    const { fullName, nativeLang, langToLearn } = req.body;

    const searchParams = {};

    if (fullName) searchParams.fullName = new RegExp(fullName, 'i');
    if (nativeLang) searchParams.nativeLang = new RegExp(nativeLang, 'i');
    if (langToLearn) searchParams.langToLearn = new RegExp(langToLearn, 'i');

    const result = await User.find({
      ...searchParams,
      _id: { $ne: myId },
    }).select({ password: 0 });

    res.status(200).json(
      result.map((user) => ({
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
        profilePic: user.profilePic,
        nativeLang: user.nativeLang,
        langToLearn: user.langToLearn,
        createdAt: user.createdAt,
        friendReq: user.friendReq,
      }))
    );
  } catch (error) {
    console.error('Error in search:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const suggestUsers = async (req, res) => {
  try {
    const myId = req.user._id;
    const me = await User.findById(myId);
    if (!me) return res.status(400).json({ message: 'Cant find me in the db' });
    const suggestedUsers = await User.find({
      nativeLang: me.langToLearn,
      langToLearn: me.nativeLang,
    });
    if (!suggestedUsers)
      return res.status(400).json({ message: 'Cant find suggetsed Users' });

    const filtered = suggestedUsers.filter((user) => {
      return !user.friendReq.includes(myId) && !user.friends.includes(myId) && !me.friendReq.includes(user._id);
    });

    res.status(200).json(filtered);
  } catch (error) {
    console.log('Error in find suggested Users', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const sendRequest = async (req, res) => {
  try {
    const myId = req.user._id;
    const { receiverId } = req.body;

    if (!receiverId) {
      return res.status(400).json({ message: 'Receiver ID is required.' });
    }

    const receiver = await User.findByIdAndUpdate(
      receiverId,
      { $addToSet: { friendReq: myId } },
      { new: true }
    );

    if (!receiver) {
      res.status(400).json({ message: 'error sending request to db' });
    }

    res
      .status(200)
      .json({ message: 'Friend request sent successfully.', receiver });
  } catch (error) {
    console.error('Error in send request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const acceptRequest = async (req, res) => {
  try {
    const myId = req.user._id;
    const { senderId } = req.body;

    if (!senderId) {
      return res.status(400).json({ message: 'Sender ID is required.' });
    }

    const user = await User.findByIdAndUpdate(
      myId,
      {
        $addToSet: { friends: senderId },
        $pull: { friendReq: senderId },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    await User.findByIdAndUpdate(senderId, {
      $addToSet: { friends: myId },
    });

    res.status(200).json({ message: 'Friend request accepted.', user });
  } catch (error) {
    console.error('Error in accepting request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const delRequest = async (req, res) => {
  try {
    const myId = req.user._id;
    const { senderId } = req.body;

    if (!senderId) {
      return res.status(400).json({ message: 'Sender ID is required.' });
    }

    const user = await User.findByIdAndUpdate(
      myId,
      {
        $pull: { friendReq: senderId },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res
      .status(200)
      .json({ message: 'Friend request deleted successfully.', user });
  } catch (error) {
    console.error('Error in deleting request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const cancelRequest = async (req, res) => {
  try {
    const myId = req.user._id;
    const { senderId } = req.body;

    if (!senderId) {
      return res.status(400).json({ message: 'Sender ID is required.' });
    }

    const user = await User.findByIdAndUpdate(
      senderId,
      {
        $pull: { friendReq: myId },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res
      .status(200)
      .json({ message: 'Friend request cancelled successfully.', user });
  } catch (error) {
    console.error('Error in cancelling request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loadFriends = async (req, res) => {
  try {
    const myId = req.user._id;
    if (!myId) {
      return res.status(400).json({ message: 'myId missen' });
    }

    const freinds = await User.findById(myId);
    if (!freinds) {
      return res.status(400).json({ message: "can't fetch your info from db" });
    }

    res.status(200).json({
      freinds: freinds.friends,
    });
  } catch (error) {
    console.error('Error in fetching friends:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loadFriendReq = async (req, res) => {
  try {
    const myId = req.user._id;
    if (!myId) {
      return res.status(400).json({ message: 'myId is missing' });
    }

    const user = await User.findById(myId);
    if (!user) {
      return res
        .status(400)
        .json({ message: "Can't fetch your info from the database" });
    }

    const friendReqIds = user.friendReq;

    // Fetch each friend request from the database
    const friendRequests = await Promise.all(
      friendReqIds.map(async (id) => {
        const friend = await User.findById(id).select('-password'); // Exclude sensitive fields like password
        return {
          _id: friend._id,
          fullName: friend.fullName,
          email: friend.email,
          profilePic: friend.profilePic,
          nativeLang: friend.nativeLang,
          langToLearn: friend.langToLearn,
        };
      })
    );

    res.status(200).json(friendRequests);
  } catch (error) {
    console.error('Error in fetching friend requests:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
