const userRepository = require("./users.repository");

const login = (req, res) => {
  const { email, password } = req.body;

  const users = userRepository.getAllUsers();
  const user = users.find(user => user.email == email);
  console.log(user);

  // check whether a user with the given email is exist and password is correct
  if (user !== undefined && user.password == password) {
    return res.status(200).send(`Login with email ${email} and password ${password} success`);
  } else {
    return res.status(400).send(`Error: Email or password is wrong. Please try again`)
  }
}

const getAllUsers = (req, res) => {
  res.status(200).json(userRepository.getAllUsers());
}

module.exports = { login, getAllUsers };