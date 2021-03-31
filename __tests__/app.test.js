const request = require('supertest');
const app = require('../app');

describe('fileServer routes', () => {
  it('looks into the public directory, reads the index.html File, and sends its contents as a response', async() => {
    const response = await request(app)
    .get('/index.html');
    expect(response.text).toEqual(`<!DOCTYPE html>
<h1>This is the contents!</h1>
`)
  })
});
