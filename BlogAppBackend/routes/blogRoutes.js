const express = require('express');
const router = express.Router();
const blogModel = require('../model/blogData');
const jwt = require('jsonwebtoken');
const { isValidObjectId } = require('mongoose');
function verifyToken(req,res,next){
    let token=req.headers.token;
    try{
        
    if(!token) throw 'Unauthorized Access';
    else{
        let payload=jwt.verify(token,'secret');
        if(!payload) throw 'Unauthorized Access';
        next();
    }
}catch (error){
    console.log(error);
}
}

router.get('/',verifyToken, async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id',verifyToken, async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.status(200).send({message:'deleted successfully'});
    } catch (error) {
        res.status(500).send(error);
    }
});



router.post('/blog/post', verifyToken,async (req, res) => {
    try {
        const newBlog = await blogModel.create(req.body);
        
        res.status(200).send({Message: 'Blog created successfully', newBlog});
    } catch (error) {
        res.status(400).send(error);
    }
});


router.put('/edit/:id', verifyToken,async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(400).send('Update unsuccessful');
    }
});



router.delete('/delete/:id', verifyToken, async (req, res) => {
    const { id } = req.params;

    // Validate the ID
    if (!isValidObjectId(id)) {
        return res.status(400).send('Invalid blog ID');
    }

    try {
        const blog = await blogModel.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        res.status(200).send({ message: 'Blog deleted successfully', blog });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
