const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
const { setupDB } = require('./config/databaseConnection');

beforeEach(async () => await setupDB());

jest.useFakeTimers();

describe('countries', () => {
  it('returns all countries', async () => {
    const query = `
    {
      countries {
        id
        country
      }
    }
  `;

    const res = await request.post('/graphql').send({ query });

    expect(res.body.data).toHaveProperty('countries', [
      { country: 'test Country 5', id: '5df0f045f6b07c1e11e206fe' },
      { country: 'Colombia', id: '5e221491aed5372fbf195201' },
      { country: 'Brazil', id: '5e22151caed5372fbf195202' }
    ]);
  });

  it('returns single country', async () => {
    const query = `
    {
      country(id: "5df0f045f6b07c1e11e206fe") {
        id
        country
      }
    }`;

    const res = await request.post('/graphql').send({ query });

    expect(res.body.data).toHaveProperty('country', {
      country: 'test Country 5',
      id: '5df0f045f6b07c1e11e206fe'
    });
  });
});
