import { v4 as uuid } from "uuid";
import User from "../models/userModel.js";
import { json } from "express";

const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({ users });
};
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      // Belirtilen ID ile kullanıcı bulunamadı.
      return res.status(404).json({ error: "User not found" });
    }

    // console.log("User--->", user);
    res.status(200).json({ user, id: user._id });
  } catch (error) {
    // Başka bir hata oluştu.
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);

  await user.save();
  res.send("Create a new user");
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    res.status(404).send("User not found !");
  }

  res.send("Delete user");
};

const editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    country: req.body.country,
    contact: req.body.contact,
  });

  await user.save();
  res.send("editing user");
};

export { getUsers, getSingleUser, deleteUser, createUser, editUser };
