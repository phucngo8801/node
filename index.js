const express = require ('express')
const app = express()
const port = 300
app.get('/hello' ,(req, res) => res.send('hello world !'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))