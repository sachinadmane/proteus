let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server=require('../server');
chai.use(chaiHttp);

/*
 * Test the /GET route
 */
describe('/GET user', () => {
    it('it should GET a particular user by Id', (done) => {
        chai.request(server)
            .get('/user/4')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});

