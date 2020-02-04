const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
const { setupDB } = require('./config/databaseConnection');

beforeEach(async () => await setupDB());

jest.useFakeTimers();

describe('cities', () => {
  it('returns all cities', async () => {
    const query = `
    {
      cities {
        id
        city_name
      }
    }
  `;

    const res = await request.post('/graphql').send({ query });

    expect(res.body.data).toHaveProperty('cities', [
      { city_name: 'Sao Paulo', id: '5e221564aed5372fbf195203' }
    ]);
  });

  it('returns a city based on id', async () => {
    const query = `
      {
          city(id: "5e221564aed5372fbf195203"){
              id
              city_name
          }
      }
      `;

    const res = await request.post('/graphql').send({ query });

    expect(res.body.data).toHaveProperty('city', {
      city_name: 'Sao Paulo',
      id: '5e221564aed5372fbf195203'
    });
  });
});
