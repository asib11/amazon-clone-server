const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('amazon server is running')
})

app.listen(port, ()=>{
    console.log(`amazon server port is ${port}`)
})