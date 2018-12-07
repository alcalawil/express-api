const request = require('supertest');
const app = require('../src/app');

describe('POST /text-analyzer', () => {
    it('respond with json containing the same body.text message', (done) => {
        let data = {
            text: "Sample test from apiTest.js"
        }
        request(app)
            .post('/text-analyzer')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(data, done);
    });
});