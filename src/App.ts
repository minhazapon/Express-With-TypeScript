import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('express with typeScript!')
})

export default app;