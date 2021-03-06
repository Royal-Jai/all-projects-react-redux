
import postMessage from '../model/postModel.js';

export const getPosts = async (req, res) => {
    try{
        const postMessage = await postMessage.find();
        res.status(200).json(postMessage);
    }
    catch(err) {
       res.status(404).json({message:err.message})
    }
};

export const createPosts = async  (req, res) => {
   const post = req.body;
   const newPost = new postMessage(post);
   try{
     await newPost.save();
     res.status(201).json(newPost)
   }
   catch{
    res.status(401).json({message:err.message})
   }
};
