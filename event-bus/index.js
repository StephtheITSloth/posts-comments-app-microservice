const express = require('express')
const axios =  require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan =  require('morgan')


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.post('/events', (req,res) => {
    const event = req.body

    axios.post('http://localhost:4000/events', event).catch(e => console.log(e.message))
    axios.post('http://localhost:4001/events', event).catch(e => console.log(e.message))
    axios.post('http://localhost:4002/events', event).catch(e => console.log(e.message))
    res.send({ status: 'OK'})
})

app.listen(4005, () => {
    console.log('listening on port 4005')
})