import { v4 as uuid } from "uuid";

let users = [
  {
    id: uuid(),
    name: "Serhat",
    email: "deneme@deneme",
    country: "Turkey",
    contact: 5305222221,
  },
  {
    id: uuid(),
    name: "Sena",
    email: "deneme2@deneme",
    country: "Turkey",
    contact: 5305222222,
  },
];

const getUsers = (req, res) => {
  res.status(200).send(users);
};
const getSingleUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((i) => i.id == id);
  console.log(id);
  if (!user) {
    res.status(404).send("User not found !");
  }
  res.send(user);
};

const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuid(),
    name: name,
    email: email,
    country: country,
    contact: contact,
  };
  users.push(user);

  res.send("Create a new user");
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((i) => i.id == id);
  users = users.filter((i) => i.id !== id);
  console.log(id);
  if (!user) {
    res.status(404).send("User not found !");
  }
  res.send("Delete user");
};

const editUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((i) => i.id == id);
  const { name, email, country, contact } = req.body;
  user.name = name;
  user.email = email;
  user.country = country;
  user.contact = contact;
  console.log(id);
  if (!user) {
    res.status(404).send("User not found !");
  }
  res.send("editing user");
};

export { getUsers, getSingleUser, deleteUser, createUser, editUser };
