const express = require('express');
const app = express();
const port = 3005;

const bodyParser = require('body-parser', ); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/exercise', (request, response) => {
    console.log(request.method, request.path);
    for (const key in request.query) {
        console.log(`${key}: ${request.query[key]}`);
    }
    response.send(request.query);
});

// app.get('/api/exercise', (request, response) => {
//     console.log(request.headers);
//     console.log('GET parameters', request.query);
//     // let resp = '<h1>Hello from Express! (GET)</h1>';
//     // resp += '<h2>GET parameters</h2>';
//     // resp += `<p>Parameters: </p>`;
//     // resp += '<ul>';
//     // for (let k in request.query) {
//     //     resp += `<li>${k}: ${request.query[k]}</li>`;
//     // }
//     // resp += '</ul>';
//     response.status(200).send(request.query);
// });

app.post('/api/exercise', (request, response) => {
    console.log(request.headers);
    console.log('POST data', request.body);
    let resp = '<h1>Hello from Express!</h1>';
    resp += '<h2>POST parameters</h2>';
    resp += `<p>I received these parameters: </p>`;
    resp += '<ul>';
    for (let k in request.body) {
        resp += `<li>${k}: ${request.body[k]}</li>`;
    }
    resp += '</ul>';
    response.status(200).send(resp);
});


app.post('/api/login', (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        res.status(400).send();
        return;
    };

    if (user === 'mark' && pwd === 'giraffe') {
        res.send({ login: user });
    } else {
        res.status(403).send();
    }
});


app.listen(port, (err) => {
    if (err) {
        console.log('Something bad happened');
    }

    console.log(`server is listening on ${port}`);
});