import expect from 'expect';
import request from 'supertest';
import faker from 'faker';

import app from '../../src/server';
import { User } from '../../src/models';

const API_URL = '/api/1.0/users';

before(async () => await User.deleteMany({}));

describe(`POST ${API_URL}/register`, () => {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  it('should create a new user', done => {
    request(app)
      .post(`${API_URL}/register`)
      .send({ name, email, password, password2: password })
      .expect(200)
      .expect(res => {
        expect(res.body.name).toBe(name);
        expect(res.body.email).toBe(email);
        expect(res.body).toHaveProperty('_id');
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.find()
          .then(users => {
            expect(users.length).toBe(1);
            expect(users[0].name).toBe(name);
            expect(users[0].email).toBe(email);
            expect(users[0]).toHaveProperty('_id');
            done();
          })
          .catch(e => done(e));
      });
  });

  it('should authorize the new user', done => {
    request(app)
      .post(`${API_URL}/login`)
      .send({ email, password })
      .expect(200)
      .expect(res => {
        expect(res.body.success).toBe(true);
        expect(res.body).toHaveProperty('token');
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});
