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
  });
});
