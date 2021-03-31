const request = require('supertest');
const app = require('../app');

describe('fileServer routes', () => {
  it('looks into the public directory, reads the index.html File, and sends its contents as a response', async() => {
    const response = await request(app);
    expect(response.text).toEqual('<h1>This is the contents!</h1>')
  })
});
