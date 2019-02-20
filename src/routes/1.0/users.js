import { users as usersController } from '../../controllers';
import { validateLoginInput, validateRegisterInput } from '../../validation';

const PREFIX = '/users';

export default {
  public: router => {
    router.get(`${PREFIX}/test`, usersController.test);
    router.post(`${PREFIX}/register`, validateRegisterInput, usersController.register);
    router.post(`${PREFIX}/login`, validateLoginInput, usersController.login);
  },
  private: router => {
    router.get(`${PREFIX}/current`, usersController.current);
  },
};
