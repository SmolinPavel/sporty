import { fields as fieldsController } from '../../controllers';

const PREFIX = '/fields';

const { create, getAll, getById } = fieldsController;

export default {
  public: router => {
    router.get(`${PREFIX}/`, getAll);
    router.get(`${PREFIX}/:id`, getById);
  },
  private: router => {
    router.post(`${PREFIX}/create`, create);
  },
};
