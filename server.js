const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Default Loading for the Server
app.use('/', (req, res) => {
    res.send({ 
        status: 200,
        message: 'Server Loaded Successfully',
        Description: ' RestAPI For a MEAN Application Project',
        Port: 5500,
        BaseUrl: 'http://localhost:5500/'  
    });
})

app.listen(5500, function(){
    console.log('listening on port 5500');
})