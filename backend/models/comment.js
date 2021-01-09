const mongoose=require('mongoose');
const Joi = require('joi');

const replySchema = new mongoose.Schema({
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    text: {type: String, required: true, minlength: 5, maxlength: 255 },
    postDate: {type: Date, default: Date.now()}
});

const Reply = mongoose.model('Reply', replySchema);

const commentSchema = new mongoose.Schema({
    videoId: {type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    text: {type: String, required: true, minlength: 5, maxlength: 255 },
    postDate: {type: Date, default: Date.now()},
    replies: [replySchema]
});

const Comment = mongoose.model('comment',commentSchema);

function validateComment(comment) {
    const schema = Joi.object({
        videoId: Joi.string().required(),
        likes: Joi.number(),
        dislikes: Joi.number(),
        text: Joi.string().min(5).max(255).required(),
        postDate: Joi.date(),
    });
    return schema.validate(comment);
}

function validateReply(reply){
    const schema = Joi.object({
        likes: Joi.number(),
        dislikes: Joi.number(),
        text: Joi.string().min(5).max(255).required()
    });
    return schema.validate(reply);
}

exports.Schema = replySchema;
exports.Reply = Reply;
exports.validateReply = validateReply;
exports.Comment = Comment;
exports.validate = validateComment;
exports.commentSchema = commentSchema;

