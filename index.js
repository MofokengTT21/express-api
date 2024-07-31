import express from 'express';

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/api/hello', function (req, res) {
    const name = req.query.name;

    res.json ({
        message : "Hello, " + name
    });
    
});

app.post('/api/hello', function (req, res) {
    const name = req.body.name;

    res.json ({
        message : "Hello, " + name
    });
    
});

app.listen (3000, function () {
    console.log("Example app listening in port 3000!");
});
