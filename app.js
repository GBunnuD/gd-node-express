const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Hello World this is GD's App!")
})

app.get('/about', (req, res) => {
    res.send("You have requested the about page of GD's App!")
})
app.get('/contact', (req, res) => {
    res.send("This is the Contact Page of GD's App!")
})
app.get('/help', (req, res) => {
    res.send("Help Page of GD's App!")
})

app.get('/help/:name', (req, res) => {
    res.send(`help response for ${req.params.name}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})