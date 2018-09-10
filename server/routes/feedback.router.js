const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req,res) => {
    const id = req.params.id;
    console.log('feedback id to get ',id);
    const queryText = 'SELECT * FROM feedback';
    pool.query(queryText)
    .then((result) => {
        console.log('query results ',result);
         res.send(result.rows);
    }).catch((error) => {
        console.log('error made making select query ',error);
        res.sendStatus(500);
    });
});

module.exports = router;