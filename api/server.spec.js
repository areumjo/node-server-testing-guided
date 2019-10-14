const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig.js');

// general testing for the server
describe('the server', () => {
    beforeEach(async () => {
        // clean the db
        await db('hobbits').truncate();
    })

    describe('GET /', () => {
        xit('should run the testing env', () => {
            expect(process.env.DB_ENV).tobe('testing');
        });

        it('should return status 200', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });

        it('should return the correct object', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json');
                    expect(res.body).toEqual({ api: 'up' }); // need toEqual, for toBe, it is not primitive type so js don't think this is same
                });
        });
    });

    describe('GET /hobbits', () => {
        it('should return list of hobbits', () => {
            return request(server)
                .get('/hobbits')
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toBe('application/json');
                    expect(res.body.length).toBe(0);
                })
        })
    })
});