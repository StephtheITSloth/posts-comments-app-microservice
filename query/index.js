const express =  require('express')
const cors =  require('cors')
const BodyParser = require('body-parser')
const app =  express()

const posts = {}

app.use(cors())
app.use(BodyParser.json)

app.get('/posts', (req,res) => {
    res.send(posts)

})

app.post('/events', (req,res) => {
    const {type, data} = req.body

    if(type === 'PostCreate'){
        const {id, title} = data
        posts[id] = { id, title, comments: []}
    }

    if(type === 'CommentCreated'){
        const {id, content, postId} = data

        const post = posts[postId]

        post.comments.push({id, content})
    }

    console.log(posts)

    res.send({})
})

app.listen(4002, () => {
    console.log('listening on port 4002')
})