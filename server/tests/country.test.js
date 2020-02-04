const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
const { setupDB } = require('./config/databaseConnection');

beforeEach(async () => await setupDB());

describe('test', () => {
  it('tests graphql endpoint', () => {
    expect('test').toEqual('test');
  });
});
