const request = require('supertest');
const app = require('../src/app');

describe('POST /text-analyzer', () => {
    it("should respond with json containing the same body.text message if it was passed as {text: some text''}",
        (done) => {
            let data = {
                text: "Sample test from apiTest.js"
            }
            request(app)
                .post('/text-analyzer')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .expect(data, done);
        });

    it("should respond with an empty body if not text field is found in the request body",
        (done) => {
            let data = {
                badTextField: "Sample test from apiTest.js"
            }
            request(app)
                .post('/text-analyzer')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400)
                .expect('Undefined text', done);
        });
});

