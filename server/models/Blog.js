const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    author:{
        type: String,
        required: true
    },
    questionLink:{
        type:String,
        required:true
    },
    body:{
        type: String,
        required: true
    },
    codeUrl: {
        type: String,
        required: true
    },
    youtubeUrl:{
        type: String,
    },
    image1: {
        type: String
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },
    image4: {
        type: String
    },
    image5: {
        type: String
    },
    date: {
        type: String,
        required: true,
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
