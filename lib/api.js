const fs = require('fs');
const path = require('path');
const marked = require('marked');
const postMeta = require('yaml-front-matter');
const dirPath = path.join(__dirname, '../', 'posts');

/**
 * 
 * 
 * @param {number} [limit=5]
 */
function queryPosts(limit = 5) {
    const files = fs.readdirSync(dirPath);
    let posts = [], post,  postContent, postContentWithMeta;

    for (let i = 0; i < limit; i++) {
        // Read in the Markdown
        postContent = fs.readFileSync(path.join(dirPath, files[i]), 'utf8');

        // Extract meta data from top of post
        postContentWithMeta = postMeta.loadFront(postContent);

        post = {
            title: postContentWithMeta.title,
            description: postContentWithMeta.description,
            image: '/images/' + postContentWithMeta.image
        };

        // 
        posts.push(post);
    }

    return posts;
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