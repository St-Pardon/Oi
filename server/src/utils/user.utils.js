const users = [];

const addUser = (id, room, username) => {
  username = username.trim();
  room = room.trim();
  const checkUser = users.find(
    (user) => user.room === room && user.username === username
  );
  if (!checkUser) {
    return { error: 'Username already exist' };
  }
  const user = { id, room, username };
  users.push(user);
  return user;
};

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index > -1) {
    return users.splice(index, 1)[0];
  }
};

const getAllUsers = (room) => users.filter((user) => user.room === room);
