const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())
app.use(cors())
//This is store in memory (downside we will loose all our data)
const posts = {

}
app.get('/posts', (req,res)=>{
    res.status(200)
    res.send(posts)
})

app.post('/posts', async (req,res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body

    posts[id] = {
        id,title
    }

await axios('http://localhost:4005/events', {
    type: "PostCreated",
    data: {
        id, title
    }

})

    res.send(posts[id])
})

app.listen(4000, () => {
    console.log(`listening on port: 4000`)
})