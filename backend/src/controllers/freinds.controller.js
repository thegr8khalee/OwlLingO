import User from '../models/user.model';

export const searchUsers = async (req, res) => {
  try {
    const myId = req.user._id;
    const { fullName, nativeLang, langToLearn } = req.body;

    const searchParams = {};

    if (fullName) searchParams.fullName = new RegExp(fullName, 'i');
    if (nativeLang) searchParams.nativeLang = nativeLang;
    if (langToLearn) searchParams.langToLearn = langToLearn;

    const result = await User.find({
      ...searchParams,
      _id: { $ne: myId },
    }).select(-'password');

    res.status(200).json(result);
  } catch (error) {
    console.error('Error in search:', error);
    res.status(500).json({ message: 'Internal server error' });
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
        $pull: { friendReq: senderId },
        $addToSet: { friends: senderId },
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