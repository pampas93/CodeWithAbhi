var keystone = require('keystone');
var Post = keystone.list('Post');
var User = keystone.list('User');

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

postController.showPost = async (req, res) => {
    var data = {};
    data.post = await Post.model.findOne({slug: req.params.id});
    data.user = await User.model.findOne({"_id": data.post.author}).select('displayName');
    return data;
}

module.exports = postController;