
const bcrypt =  require('bcrypt');
const TABLE = 'users';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getUsers(filter={}) {
    const users = await store.getAll(TABLE, filter);
    return users || [];
  }

  async function getUser(filter={}) {
    const user = await store.getOne(TABLE, filter);
    return user || [];
  }

  async function createUser(userData) {
    const { password } =  userData;
    delete userData.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = await store.create(TABLE, userData);
    const { id: userId } = newUser;

    await store.create('authentication', { userId, password: hashedPassword});
    return [userId] || [];
  }

  async function updateUser(userData, id) {
    const updated = await store.update(TABLE, userData, id);
    return updated || [];
  }

  async function removeUser(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }

  return {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
  }
}
