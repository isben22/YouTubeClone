const{Comment,validate}=require('../models/comment');
const express = require('express');
const router = express.Router();

//All end points and route handlers go here

//get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        return res.send(comments);
    } catch (ex) {
        return res.status(500).send(`Internal server Error: ${ex}`);
    }
    
});
//get comment by videoID
router.get('/video/:videoId', async (req, res) => {
    try {
        //console.log(req.params.id);
        const comments = await Comment.find({videoId:req.params.videoId});
        console.log(comments);
        return res.send(comments);
    } catch (ex) {
        console.log(ex);
        return res.status(500).send(`internal server error : ${ex}`)
    }
});
//Post a new comment
router.post('/', async (req,res) => {
    try {
        const{error}=validate(req.body);
        if (error)
            return res.status(400).send(error);

        const comment = new Comment({
            videoId: req.body.videoId,
            text: req.body.text,
            postDate: req.body.postDate,
        });

        await comment.save();
        
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

//Post reply
router.post('/reply/:videoId', async (req,res) => {
    try {
        console.log(req.params.videoId);
        const{error}=validate(req.body);
        if (error)
            return res.status(400).send(error);

        const reply = new Reply({
            videoId: req.body.videoId,
            text: req.body.text,
            postDate: req.body.postDate,
           
        });

        await comment.save();
        
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

module.exports = router;