const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog')
const moment = require('moment')

//Get all the blogs => GET /blog/
router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.find({}).sort({ date: 'desc' });

        return res.status(200).json(allBlogs)

    } catch (err) {
        return res.status(404).json({ message: "Internal Server error", err })
    }
});

//Get a particular blog with id => /blog/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const blog = await Blog.findById(id)

        if (!blog) {
            return res.status(404).json({ message: "Blog now found" })
        }

        let url = blog.codeUrl
        url += ".js"

        return res.status(200).json({ blog, codeUrl: url })

    } catch (err) {
        return res.status(404).json({ message: "Internal Server error", err })
    }

});

//Create a new blog => POST /blog/create-blog
router.post(`/create-blog`, async (req, res) => {

    try {
        const { title, author, questionLink, body, codeUrl, youtubeUrl, image1, image2, image3, image4, image5 } = req.body

        if (!title || !author || !questionLink || !body || !codeUrl) {
            return res.status(404).json({ message: "Please Input all the fields" })
        }

        const newBlog = new Blog({
            title,
            author,
            questionLink,
            body,
            codeUrl,
            youtubeUrl,
            image1,
            image2,
            image3,
            image4,
            image5,
            date: moment().format("Do MMM YY")
        })

        await newBlog.save((err) => {
            if (err) {
                return res.json({ message: 'Internal Server error', err })
            }
            res.status(200).json({ message: 'Blog Saved successfully' })
        })

    } catch (err) {
        return res.status(404).json({ message: "Internal Server error", err })
    }

})

//Update a blog with :id => POST /blog/edit/:id
router.post(`/edit/:id`, (req, res) => {
    const id = req.params.id
    Blog.findOneAndUpdate({ "_id": id }, req.body, { new: true }, (err, docs) => {
        if (err) {
            return res.json({ message: 'Internal Server error', err })
        }
        res.status(200).json({ message: 'Blog Edited successfully' })
    })
})

//Delete a blog with :id => Post /blog/delete/:id
router.post(`/delete/:id`, (req, res) => {
    const { id } = req.params

    Blog.findByIdAndDelete(id, (err, docs) => {
        if (err) {
            return res.json({ message: 'Internal Server error', err })
        }
        res.status(200).json({ message: 'Blog Deleted successfully' })
    })
})

module.exports = router;