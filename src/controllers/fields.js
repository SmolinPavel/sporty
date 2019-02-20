import { Field } from '../models';

const getAll = (req, res) => {
  Field.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        return res.status(404).json({ nofield: 'There are no fields' });
      }

      res.json(profiles);
    })
    .catch(() => res.status(404).json({ field: 'There are no fields' }));
};

const getById = (req, res) => {
  const { id } = req.params;

  Field.findOne({ _id: id })
    .populate('user', ['name', 'avatar'])
    .then(field => {
      if (!field) {
        res.status(404).json({ nofield: 'There is no field with this id' });
      }

      res.json(field);
    })
    .catch(err => res.status(404).json({ field: 'There is no field with this id' }));
};

const create = (req, res) => {
  const { id } = req.user;

  const { name, lat, long } = req.body;

  const newFieldData = { user: id, name, location: { lat, long } };

  // Check if field exists
  Field.findOne({ name }).then(field => {
    if (field) {
      res.status(400).json({ name: 'Field with this name already exists' });
    }

    console.log(req.body);
    console.log(newFieldData);
    // Save Field
    new Field(newFieldData)
      .save()
      .then(field => res.json(field))
      .catch(err => console.log(err.message));
  });
};

export default {
  create,
  getAll,
  getById,
};
