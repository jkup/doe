const express = require('express');
const api = require('./api');
const app = express();

// Use pug for templating
app.set('view engine', 'pug');

// Use public for static assets
app.use(express.static('public'));

/**
 * Home Route
 */
app.get('/', (req, res) => {
    const posts = api.queryPosts(5);
    res.render('index', { posts });
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
    const url = req.path.slice(1);
    console.log(url);
    const post = api.getPost(url);
});

/**
 * Server listening on 3000
 */
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});