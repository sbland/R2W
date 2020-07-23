const neo4j = require('neo4j-driver');
const config = require('./config');

// Create Driver
const driver = neo4j.driver(
    config.DATABASE_URL,
    neo4j.auth.basic(
        config.DATABASE_USER,
        config.DATABASE_PSWRD,
    )
)

var session = driver.session();
//console.log(session)

session
  .run("MATCH (n) RETURN n")
  .then((result) =>{
    console.log('number of records:  ' + result.records.length)
    session.close()

  })
  .catch(e => {
    session.close()
    console.log(e)
   })

// Express middleware
module.exports = function(req, res, next) {
    req.driver = driver;
    next();
};