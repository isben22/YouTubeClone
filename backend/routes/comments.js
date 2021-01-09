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
router.post('/new', async (req,res) => {
    try {
        const{error}=validate(req.body);
        if (error)
            return res.status(400).send(error);

        const comment = new Comment ({
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
router.post('/reply/:id', async (req,res) => {
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
//Update a comment
router.put('/:id', async (req, res) => {
    try{
        const{ error } = validateComments(req.body);
        if(error) return res.status(400).send(error);

        const comment = await comments.findByIdAndUpdate(
            req.params.id,
            {
                videoId: req.body.videoId,
                text: req.body.text,
            },
            {new: true}
        );
        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);

            await comment.save();

            return res.send(comment);
          } catch(ex) {
              return res.status(500).send(`Internal Server Error: ${ex}`);
          }
});

router.delete('/:videoId', async (req, res) => {
    try{

        const comment = await Comment.deleteOne({videoId:req.params.videoId});

        if (!comment)
            return res.status(400).send(`The comment with id "${req.params.videoId}" does not exist.`);

        return res.send(comment);
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;