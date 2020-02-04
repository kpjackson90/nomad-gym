const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
const { setupDB } = require('./config/databaseConnection');

beforeEach(async () => await setupDB());

jest.useFakeTimers();

describe('gyms', () => {
  it('returns all gyms', async () => {
    const query = `
    {
      gyms {
        id
        name
      }
    }
  `;

    const res = await request.post('/graphql').send({ query });

    expect(res.body.data).toHaveProperty('gyms', [
      {
        id: '5e221654aed5372fbf195205',
        name: 'this is the gym name'
      }
    ]);
  });

  it('returns a gym based on id', async () => {
    const query = `
      {
          gym(id: "5e221654aed5372fbf195205"){
              id
              name
          }
      }
      `;

    const res = await request.post('/graphql').send({ query });

    expect(res.body.data).toHaveProperty('gym', {
      name: 'this is the gym name',
      id: '5e221654aed5372fbf195205'
    });
  });
});
