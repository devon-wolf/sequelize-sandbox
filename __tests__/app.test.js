require('../lib/models/associations');
const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');

describe('sequelize-sandbox routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('creates a handle', () => {
    const newHandle = {
      name: 'Charlie',
      bio: 'Just a horse'
    };

    return request(app)
      .post('/api/v1/handles')
      .send(newHandle)
      .then(response => expect(response.body).toEqual({
        id: 1,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        ...newHandle
      }));
  });
});
