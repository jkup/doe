const fs = require('fs');
const path = require('path');
const marked = require('marked');
const postMeta = require('yaml-front-matter');
const dirPath = path.join(__dirname, '../', 'posts');

/**
 * 
 * 
 * @param {number} [limit=5]
 * @param {string} [type='excerpt']
 */
function queryPosts(limit = 5, type = 'excerpt') {
    const files = fs.readdirSync(dirPath);
    let markup = '', postMarkup,  postContent, postContentWithMeta;

    for (let i = 0; i < limit; i++) {
        // Read in the Markdown
        postContent = fs.readFileSync(path.join(dirPath, files[i]), 'utf8');

        // Extract meta data from top of post
        postContentWithMeta = postMeta.loadFront(postContent).__content;

        // Transform it into HTML
        postMarkup = marked(postContentWithMeta);

        // Append it to HTML blob
        markup += postMarkup;
    }

    return markup;
}


/**
 * 
 * 
 * @param {any} title
 */
function getPost(title) {
  
}

module.exports = {
    queryPosts,
    getPost
};