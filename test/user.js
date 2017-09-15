let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server=require('../server');
chai.use(chaiHttp);

/*
 * Test the /GET route -> http://localhost:8080/user/4
 */
describe('/GET user', () => {
    it('it should GET a particular user by Id', (done) => {
        chai.request(server)
            .get('/user/4')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

/*
 * Test the /PUT route -> http://localhost:8080/user/7
 */
describe('/PUT user', () => {
    it('it should update a particular user with the value sent in the body', (done) => {
        chai.request(server)
            .put('/user/4')
            .set('content-type', 'application/json')
            .send({"value": "test"})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

/*
 * Test the /POST route -> http://localhost:8080/user
 */

describe('/POST user', () => {
    it('it should create a new object while mapping the POST request to the widget PUT method', (done) => {
        chai.request(server)
            .post('/user')
            .set('content-type', 'application/json')
            .send({"value": "test","id":"9"})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

