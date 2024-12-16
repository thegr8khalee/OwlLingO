import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';

export const signup = async (req, res) => {
  const { fullName, email, password, nativeLang, langToLearn } = req.body;
  try {
    if (!fullName) {
      return res.status(400).json({ message: 'full name cant be empty' });
    }
    if (!email) {
      return res.status(400).json({ message: 'email cant be empty' });
    }
    if (!password) {
      return res.send(400).json({ message: 'password cant be empty' });
    }
    if (!nativeLang) {
      return res.send(400).json({
        message:
          'please choose your native language(the language you wish to teach)',
      });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 chars long ' });
    }
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ massage: 'Email already in use ' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      nativeLang,
      langToLearn,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
        nativeLang: newUser.nativeLang,
        langToLearn: newUser.langToLearn,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data ' });
    }
  } catch (error) {
    console.log('Error in signup controller: ', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'All feilds are required ' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credenstials ' });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
      nativeLang: user.nativeLang,
      langToLearn: user.langToLearn,
    });
  } catch (error) {
    console.log('Error in login Controller: ', error.maessage);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged Out ' });
  } catch (error) {
    console.log('Eror logout controller: ', error.maessage);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
