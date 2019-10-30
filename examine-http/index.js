const express = require('express')
const app = express()
const port = 3000
var path=require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>  res.sendFile(path.join(__dirname, '/public/', 'index.html')));

app.get('/api/exercise', function (req, res){
    console.log(res.status(200).send(req.query));



} )

app.post('/api/exercise', function (req, res){
    if(req.body.firstname){
        res.send('<h1>Hello from Express!</h1>\n' +
            '<h2>POST parameters</h2>\n' +
            '<p>I received these parameters: </p>\n' +
            '<ul>\n' +
            '    <li>firstname: '+req.body.firstname+'</li>\n' +
            '    <li>lastname: '+req.body.lastname+'</li>\n' +
            '</ul>\n')
    }
    else if(req.body.fruit){
        res.send('<h1>Hello from Express!</h1>\n' +
            '<h2>POST parameters</h2>\n' +
            '<p>I received these parameters: </p>\n' +
            '<ul>\n' +
            '    <li>fruit: '+req.body.fruit+'</li>\n' +
            '    <li>gender: '+req.body.gender+'</li>\n' +

            '</ul>\n')
    }

    else{
        res.status(403)
    }


} )


app.post('/api/login', function (req, res){
    if (req.body.user ==="mark" && req.body.pwd==="giraffe" ){
        res.status(200).send({user:req.body.user})
    }
    else{
        res.status(403)
    }

} )




app.listen(port, () => console.log(`Example app listening on port ${port}!`))