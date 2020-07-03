const measuresMock = require('../../utils/mocks/measures');
const controller = require('../../api/components/measures/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - measures', () => {
  test('should return object measures', () => {
    return Controller.getMeasures().then((measures) => {
      expect(measures).toStrictEqual(measuresMock);
    });
  });

  test('should return object measure', () => {
    return Controller.getMeasure(1).then((measure) => {
      expect(measure).toStrictEqual(measuresMock[0]);
    });
  });
});
