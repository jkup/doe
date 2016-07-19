const express = require('express');
const api = require('./api');
const app = express();


/**
 * Home Route
 */
app.get('/', (req, res) => {
    // Get post excerpts(limit=5)
});

/**
 * Archive Page
 */
app.get('/archive', (req, res) => {
    // Get paginated post excerpts(limit=5)
});

/**
 * Atom Feed
 */
app.get('/feed', (req, res) => {
    // res.set('Content-Type', 'application/atom+xml');
});

/**
 * Individual Post Wildcard Route
 */
app.get('/*', (req, res) => {

});

/**
 * Server listening on 3000
 */
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});