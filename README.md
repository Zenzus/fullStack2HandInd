# fullStack2HandInd

Why would you consider a Scripting Language as JavaScript as your Backend Platform?
- 
•	using the same language on both the front end and the back end.

•	JavaScript is the most popular programming language.

•	The fact that the whole Node.js technology stack is open-source


Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
-
Pros

•	better efficiency and overall developer productivity

•	code sharing and reuse

•	speed and performance

•	easy knowledge sharing within a team

•	huge number of free tools

cons


Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:
-
Deploying Node.js app on digital ocean

Ensure that you Node-process restarts after a (potential) exception that closed the application
-

Ensure that you Node-process restarts after a server (Ubuntu) restart
-

Ensure that you can run “many” node-applications on a single droplet on the same port (80)
-
This can be accomplished by implementing a reversy proxy i.e Nginx


Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code.
- 


Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages 
-
We can test our code with mocha, and use chai’s expect to make our tests more readable.
```
const expect = require("chai").expect;
const calc = require("../calc.js");
const fetch = require("node-fetch");
const PORT = 3355;
const URL = http://localhost:${PORT}/api/calc/;
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
```
Explain, using relevant examples, the Express concept; middleware.
-

Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
-

Demonstrate a simple Server Side Rendering example using a technology of your own choice (pug, EJS, ..).
-

Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using, for example, the Request package.
-

Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
-

Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed.
-

NoSQL, MongoDB and MongooseExplain, generally, what is meant by a NoSQL database.
-

NoSQL is an approach to database design that can accomodate a wide variety of data models, including key-value, document, columnar and graph formats. NoSQL, which stand for "not only SQL," is an alternative to traditional relational databases in which data is placed in tables and data schema is carefully designed before the database is built. NoSQL databases are especially useful for working with large sets of distributed data.
Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
-

Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
-

Mongoose defines a schema for your data models so your documents follow a specific structure with pre-defined data types.
Mongoose provides optional pre and post save operations for data models. This makes it easy to define hooks and custom functionality on successful reads/writes etc. You can also define custom methods that act on a particular instance (or document). While you can achieve similar functionality with the native MongoDB driver, Mongoose makes it easier to define and organize such methods within your schema definition.

These two topics will be introduced in period-3
-

Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
-

Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere
-

Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB
-

Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
-

Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization.
-
rule 1 Favor embedding unless there is a compelling reason not to.
rule 2 Needing to access an object on its own is a compelling reason not to embed it.
rule 3 Arrays should not grow without bound. If there are more than a couple of hundred documents on the “many” side, don’t embed them; if there are more than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.
rule 4 Don’t be afraid of application-level joins: if you index correctly and use the projection specifier (as shown in part 2) then application-level joins are barely more expensive than server-side joins in a relational database.
rule 5 Consider the write/read ratio when denormalizing. A field that will mostly be read and only seldom updated is a good candidate for denormalization: if you denormalize a field that is updated frequently then the extra work of finding and updating all the instances is likely to overwhelm the savings that you get from denormalizing.
rule 6 As always with MongoDB, how you model your data depends – entirely – on your particular application’s data access patterns. You want to structure your data to match the ways that your application queries and updates it.

Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization 
-

Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
-
