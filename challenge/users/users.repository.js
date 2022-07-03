let usersRepository = [
  {
    email: "budi@email.com",
    password: "bud1",
  },
  {
    email: "tina@email.com",
    password: "t1n4",
  },
  {
    email: "tomo@email.com",
    password: "t0m0",
  }
];

const getAllUsers = () => {
  return usersRepository;
}

module.exports = { getAllUsers };