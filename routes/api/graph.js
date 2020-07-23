const express = require('express');
const { session } = require('neo4j-driver');
const router = express.Router()

//@route Get api/graph
//@desc  Get the graph data
//access Public
router.get('/graph', (req,res) => {
    // Create Driver session
    const session = req.driver.session();

    session
    .run('MATCH n LIMIT {limit}', {limit: 100})
    .then(results => {
        console.log(results.records)
        session.close();
    });
})

// Adding the below to the end of your route files will ensure any invalid url
// that starts with `/api/cases/` will fail instead of being passed onto the next
// endpoint in the server
router.use('*', (req, res) => {
    console.log('Invalid api endpoint')
    res.status(403)
    res.send('invalid api endpoint')
})

module.exports = router;