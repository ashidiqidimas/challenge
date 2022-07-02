let usersRepository = [
  {
    id: "1",
    name: "budi",
    password: "bud1",
  },
  {
    id: "2",
    name: "tina",
    password: "t1n4",
  },
  {
    id: "3",
    name: "tomo",
    password: "t0m0",
  }
];

const getUsers = () => {
  return usersRepository;
}

const createUser = (name, password) => {
  const id = `${usersRepository.length + 1}`;

  const newUser = {id: id, name: name, password: password};
  usersRepository.push(newUser);

  console.log(`Success created user with id: ${id}, name: ${name}, password: ${password}`);
  console.log("Current users:")
  console.log(usersRepository);
}

const updateUser = (id, name, password) => {
  const newUser = {id: id, name: name, password: password};
  usersRepository.push(newUser);

  const index = usersRepository.findIndex(user => user.id == id);
  usersRepository[index].name = name;
  usersRepository[index].password = password;

  console.log(`Success updated user with id: ${id}, name: ${name}, password: ${password}`);
  console.log("Current users:")
  console.log(usersRepository);
}

const deleteUser = (id) => {
  usersRepository = usersRepository.filter(user => user.id != id);
  console.log(usersRepository);
}

module.exports = {getUsers, createUser, updateUser, deleteUser};
