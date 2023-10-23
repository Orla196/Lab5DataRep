const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/name', (req,res)=>{ //listening for a get method
    console.log(req.query.fname); //Logging the 'fname'
    res.send('Hello '+req.query.fname+' '+req.query.lname);  // Sending a response of 'Hello' concatenated with 'fname' and 'lname'
})

app.post('/name', (req,res)=>{ //listening for a post method
    res.send('Hello '+req.body.fname+' '+req.body.lname);  // Sending a response of 'Hello' concatenated with 'fname' and 'lname'
})

app.get('/', (req, res) => { //listeningt http request for port 3000 and sending response 
    res.send('Hello from Representation & Querying')
})

app.get('/whatever', (req, res) => { //listeningt http request for port 3000/whatever and sending response 
    res.send('Hello from whatever')
})

app.get('/hello', (req, res) => { //listeningt http request for port 3000/hello and sending response 
    res.send('Hello')
})

app.get('/hello/:name', (req, res) => { //listeningt http request for port 3000/hello/name and sending response 
    console.log(req.params.name); //takes in name as parameter and returns in after the word hello
    res.send('Hello ' + req.params.name)
})

app.get('/api/books', (req, res) => { //listeningt http request for port 3000/api/books and sending response 
    // Array of book data
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];
    res.status(200).json({
        books: data // Sending a JSON response with the book data
    })
})

app.get('/test', (req, res) => {  // Handling GET request for the path '/test'
    res.sendFile(path.join(__dirname+'/index.html'))  // Sending the index.html file as a response
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})