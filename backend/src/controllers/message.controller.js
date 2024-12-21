import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import cloudinary from '../lib/cloudinary.js';
import { getReceiverSocketId } from '../lib/socket.js';
import { io } from '../lib/socket.js';

export const getUserFromSidebar = async (req, res) => {
  try {
    const myId = req.user._id;
    const me = await User.findById(myId).select('-password');
    if (!me) {
      return res.status(404).json({ message: 'User not found' });
    }
    const friends = me.friends;

    const friendDetails = await Promise.all(
      friends.map((userId) => User.findById(userId).select('-password'))
    );

    res.status(200).json(friendDetails);
  } catch (error) {
    console.log('Error in getUsersFromSidebar controller: ', error.message);
    res.status(500).json({ message: 'Internal serever error' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log('Error in getMessages controller: ', error.message);
    res.status(500).json({ message: 'Internal serever error' });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { id: receiverId } = req.params;
    const { text, image } = req.body;

    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // send only to receiver
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in sendMessage controller: ', error.message);
    res.status(500).json({ message: 'Internal serever error' });
  }
};
