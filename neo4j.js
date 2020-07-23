const neo4j = require('neo4j-driver');

// Create Driver
const driver = neo4j.driver(
    'bolt://52.87.235.130:32924', 
    neo4j.auth.basic(
        'neo4j', 
        'quarterdecks-woods-banks'
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