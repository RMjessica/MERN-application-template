// handlers for routes 
import PostMessage from '../modules/postMessage.js'

export const getPosts = (req, res) => {
  res.send('This works');
}

export const createPost = (req, res) => {
  res.send('Post Creation');
}