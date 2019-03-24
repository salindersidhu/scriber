const request = require('supertest');

/* Import API server app */
const app = require('../../app');
const apiBaseUrl = '/api/v1';

/* User API test suite */
describe('User API', () => {
    test('It should response the GET method', () => {
        return request(app).get(`${apiBaseUrl}/users`).expect(404);
    });
});
