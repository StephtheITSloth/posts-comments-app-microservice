const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios =  require('axios')
const morgan =  require('morgan')



const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
 
const commentsByPostId = {}

app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsByPostId[req.params.id] || [])
})
app.post('/posts/:id/comments', async (req,res) => {
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPostId[req.params.id] || []

    comments.push({id: commentId, content: content})
    commentsByPostId[req.params.id] = comments

    await axios.post('http://localhost:4005/events', {
        type: "CommentCreated",
        data: {
            id : commentId, content, postId: req.params.id
        }
    })

    res.status(201).send(comments)
})

app.post('/events', (req,res) => {
    console.log('Event Received', req.body.type)

    res.send({})
})

app.listen(4001, () => {
    console.log('listening on port: 4001')
})