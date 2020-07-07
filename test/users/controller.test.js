const usersMock = require('../../utils/mocks/users');
const controller = require('../../api/components/users/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - users', () => {
  test('should return object users', () => {
    return Controller.getUsers().then((users) => {
      expect(users).toStrictEqual(usersMock);
    });
  });

  test('should return object user', () => {
    return Controller.getUser(1).then((user) => {
      expect(user).toStrictEqual(usersMock[0]);
    });
  });

  test('should return object user created', () => {
    const createUser = {
      "email": "linux.carl@gmail.com",
      "firstName": "Carlos",
      "lastName": "Ramírez",
      "rol":"admin",
      "password":"vstlod pa$$word__3 r-5*"
    }
    return Controller.createUser(createUser).then((user) => {
      expect(user).toMatchObject({ id: expect.any(Number) });
    });
  });
  test('should return object user updated', () => {
    const updateUser = {
        "email": "linux_car-los.443@carlos.com",
        "firstName": "Carlos",
        "lastName": "Ramírez",
        "rol":"customer",
        "urlImage":"https://www.shareicon.net/data/2015/10/09/653498_users_512x512.png",
        "active": false
    }
    return Controller.updateUser(updateUser,1).then((user) => {
      expect(user[0]).toBe(1);
    });
  });
  test('should return object IdUser', () => {
    return Controller.removeUser(3).then((user) => {
      expect(typeof user.id).toBe('number');
    });
  });
});
