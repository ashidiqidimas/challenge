const userRepository = require("./users.repository");

const getAllUsers = (req, res) => {
  const allUsers = userRepository.getUsers();
  return res.status(200).json(allUsers);
}

const getUser = (req, res) => {
  const { id } = req.params;

  const users = userRepository.getUsers();
  const user = users.find(user => user.id == id);

  // check whether a user with the given id is exist
  if (user !== undefined) {
    return res.status(200).json(user);
  } else {
    return res.status(400).send(`Error: Can't get user with id ${id} because is not exist`)
  }
}

const createUser = (req, res) => {
  const { name, password } = req.body;

  // id generation will be handled in users.repository
  userRepository.createUser(name, password);
  res.status(200).send(`Success created user with name: ${name}, password: ${password}`);
}

const updateUser = (req, res) => {
  const { id, name, password } = req.body;

  // check whether a user with the given id is exist
  const users = userRepository.getUsers();
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) { // id exist
    userRepository.updateUser(id, name, password);
    res.status(200).send(`Success updated user with id: ${id}, name: ${name}, password: ${password}`);
  } else { // id doesn't exist
    res.status(400).send(`Error: Can't update because user with id ${id} is not exist`);
  }
}

const deleteUser = (req, res) => {
  const { id } = req.params;

  const users = userRepository.getUsers();
  const user = users.find(user => user.id == id);

  // check whether a user with the given id is exist
  if (user !== undefined) {
    userRepository.deleteUser(id)
    return res.status(200).send(`Success deleted user with id ${id}`);
  } else {
    return res.status(400).send(`Error: Can't delete because user with id ${id} is not exist`);
  }
}

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };