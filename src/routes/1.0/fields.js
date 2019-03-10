import { fields as fieldsController } from '../../controllers';

const PREFIX = '/fields';

const { create, deleteById, getAll, getById } = fieldsController;

export default {
  public: router => {
    router.get(`${PREFIX}/`, getAll);
    router.get(`${PREFIX}/:id`, getById);
  },
  private: router => {
    router.post(`${PREFIX}/create`, create);
    router.delete(`${PREFIX}/delete/:id`, deleteById);
  },
};
