const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
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

  async function getUser(id) {
    const user = await store.getById(TABLE, id);
    return user || [];
  }

  async function createUser(userData) {
    userData.create_at= date;
    const created = await store.create(TABLE, userData);
    return created || [];
  }

  async function updateUser(userData, id) {
    userData.update_at= date;
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
