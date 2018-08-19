var keystone = require('keystone');
var Post = keystone.list('Post');

var postController = {};

//TODO: Send posts as in when we receive, and remove await

//list posts for homepage
postController.listPosts = async (req, res) => {

    var posts = await Post.model.find()
        .where('state', 'published')
        .sort('-publishedAt')
        .exec(function (err, data) {
            if (err) {
                return null;
            }
        });

    return posts;
}

module.exports = postController;