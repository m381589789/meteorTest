/**
 * Created by Administrator on 2016/9/5.
 */
Meteor.publish('posts', function (author) {
    return Posts.find();
});