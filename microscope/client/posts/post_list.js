/**
 * Created by Administrator on 2016/9/5.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});