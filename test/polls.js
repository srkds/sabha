let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require("../index")

chai.use(chaiHttp);

describe('Polls', ()=>{
    describe("/GET ping", ()=>{
        it("Ping is working", (done) => {
            chai.request(app)
            .get("/api/v1/ping")
            .end((err,res)=>{
                res.should.have.status(200)
                done();
            })
        })
    })
})