const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World for asdrubal!')
})

app.get('/status', (req, res) => {
  res.send({
    version: '1.0',
    status: 'ok',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})