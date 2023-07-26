const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  try {
    const { userName, password, email, phoneNumber, address } = req.body;

    const validateUser = await User.find({ email });

    if (validateUser.length > 0)
      return res
        .status(500)
        .json({ success: false, message: "User already exists!" });

    const passwordEncrypt = await bcrypt.hash(password, 10);

    const user = {
      userName,
      password: passwordEncrypt,
      email,
      phoneNumber,
      address,
    };
    await User.create(user);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById({ _id: id });

    if (!user)
      return res
        .status(500)
        .json({ success: false, message: "User does not exists!" });

    const { password, ...anothers } = user;

    res.status(200).json({
      success: true,
      user: anothers._doc,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users)
      return res
        .status(404)
        .json({ success: false, message: "Users dont exist!" });

    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById({ _id: id });

    console.log(user);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist!" });

    const newUser = await User.findByIdAndUpdate(user._id, { ...req.body });

    res.status(200).json({
      success: true,
      message: "User updated succesfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById({ _id: id });

    console.log(user);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist!" });

    const newUser = await User.findByIdAndDelete(user._id);

    res.status(200).json({
      success: true,
      message: "User deleted succesfully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

module.exports = { createUser, getUser, getAllUsers, updateUser, deleteUser };
