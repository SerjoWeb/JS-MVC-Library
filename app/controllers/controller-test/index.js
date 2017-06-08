import ModelTest from '../../models/model-test';

let ControllerTest = {
  init() {
    return ModelTest.getData();
  }
};

export default ControllerTest;
