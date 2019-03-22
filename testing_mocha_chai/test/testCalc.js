const expect = require("chai").expect;
const calc = require("../calc.js");
const fetch = require("node-fetch");
const PORT = 3355;
const URL = `http://localhost:${PORT}/api/calc/`;
let server;

describe("Calculator API", function () {
    describe("Test the basic Calculator API", function () {
        it(" Add 4 + 3. Should return 7", function () {
            const result = calc.add(4, 3);
            expect(result).to.be.equal(7);
        })
    })
    describe("testing the REST Calc api", function () {
        before(function (done) {
            calc.calcServer(PORT, function (s) {
                server = s;
                done();
            })
        })
        after(function () {
            server.close();
        })
        it("Add 4 + 3 should return 7", async function () {
            const res = await fetch(URL + "add/4/3").then(r => r.text());
            expect(res).to.be.equal('7');
        })
        it("Sub 3-2 should return 1", async function () {
            const res = await fetch(URL + "subtract/3/2").then(r => r.text())
            expect(res).to.be.equal('1');
        })
        it("multiply 3*2 should return 6", async function () {
            const res = await fetch(URL + "multiply/3/2").then(r => r.text())
            expect(res).to.be.equal('6');
        })
        it("divide 3/3 should be 1", async function () {
            const res = await fetch(URL + "divide/3/3").then(r => r.text())
            expect(res).to.be.equal('1');
        })
        it("100 / 0 should throw an error", async function () {
            expect(() => calculate.divide(4, 0)).to.throw();
        });
    })  
})