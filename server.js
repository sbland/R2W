const express = require('express');
//const config = require('config')
const neo4JDriver = require('./neo4j')
const app = express();
const cors = require('cors')
require('dotenv').config()
const neo4j = require('neo4j-driver');

//boady-parser middleware
app.use(express.json())
app.use(neo4JDriver);
app.use(cors())

// use routes
app.use('/api/cases', require('./routes/api/cases'))
app.use('/api/actions', require('./routes/api/actions'))
//app.use('/api/graph', require('./routes/api/graph'))

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`server started on port ${port}`))

/*
const driver = neo4j.driver(
    'bolt://localhost:7687', 
    neo4j.auth.basic(
        'neo4j', 
        'R2W'
        ))
        
const driver = neo4j.driver(
    'bolt://52.87.235.130:32924', 
    neo4j.auth.basic(
        'neo4j', 
        'quarterdecks-woods-banks'
    )
)

const driver = neo4j.driver(
    'bolt://hobby-ejfophcjhphmgbkeandgnhfl.dbs.graphenedb.com:24787', 
    neo4j.auth.basic(
        'mahmud', 
        'b.eUXWi6RJ1XG0.MUPdzKcS3UvdXsJW'
        )) */