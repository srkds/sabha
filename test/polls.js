let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../index");
let should = chai.should();

chai.use(chaiHttp);

describe("Polls", () => {
  describe("/GET ping", () => {
    it("Ping is working", (done) => {
      chai
        .request(app)
        .get("/api/v1/ping")
        .end((err, res) => {
          res.should.be.status(200);
          done();
        });
    });
  });

  describe("/POST signup", () => {
    it("Signup", (done) => {
      chai
        .request(app)
        .post("/api/v1/signup")
        .send({
          name: "Nirav",
          email: "nirav@test3.com",
          password: "123",
          bio: "optional",
        })
        .end((err, res) => {
          if (err) {
            console.log(err);
          }
          res.should.have.status(200);
          let { id, ...resBody } = res.body;
          resBody.should.be.eql({
            name: "Nirav",
            email: "nirav@test3.com",
          });
          done();
        });
    });
    it("Signup with existing email", (done) => {
      chai
        .request(app)
        .post("/api/v1/signup")
        .send({
          name: "Nirav",
          email: "nirav@test3.com",
          password: "123",
          bio: "optional",
        })
        .end((err, res) => {
          if (err) {
            console.log(err);
          }
          res.should.have.status(400);
          done();
        });
    });
  });

  describe("Signin", ()=>{
    it("Signin", (done)=>{
      chai.request(app)
      .post("/api/v1/signin")
      .send({
        email: "nirav@test3.com",
        password: "123",
      }).end((err, res) =>{
        res.should.have.status(200)
        let { _id, ...resBody } = res.body.user;
          resBody.should.be.eql({
                name: "Nirav",
                email: "nirav@test3.com"
        });
          done();
      })
    })
  })
});
