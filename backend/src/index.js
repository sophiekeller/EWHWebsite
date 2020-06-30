//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const images = require("./assets/images.js");

// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all leads
app.get('/leads', (req, res) => {
  res.send(leads);
});
//
// // get a specific question
// app.get('/:id', (req, res) => {
//   const question = questions.filter(q => (q.id === parseInt(req.params.id)));
//   if (question.length > 1) return res.status(500).send();
//   if (question.length === 0) return res.status(404).send();
//   res.send(question[0]);
// });
//
// // insert a new question
// app.post('/', (req, res) => {
//   const {title, description} = req.body;
//   const newQuestion = {
//     id: questions.length + 1,
//     title,
//     description,
//     answers: [],
//   };
//   questions.push(newQuestion);
//   res.status(200).send();
// });
//
// // insert a new answer to a question
// app.post('/answer/:id', (req, res) => {
//   const {answer} = req.body;
//
//   const question = questions.filter(q => (q.id === parseInt(req.params.id)));
//   if (question.length > 1) return res.status(500).send();
//   if (question.length === 0) return res.status(404).send();
//
//   question[0].answers.push({
//     answer,
//   });
//
//   res.status(200).send();
// });

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});

// the database
const leads = [
    {   name: 'Victoria Tan',
        title: 'Team Lead',
        year: 'Senior',
        major: 'Mechanical Engineering',
        projects: 'Menstrual Waste Incinerator',
        image: images.electrical  },
    {   name: 'Sophie Keller',
        title: 'Business Lead',
        year: 'Junior',
        major: 'Computer Science',
        projects: 'INDAGO, Team Site',
        image: null },
    {   name: 'Navin Ramsaroop',
        title: 'Software Lead',
        year: 'Senior',
        major: 'Computer Science',
        projects: 'Menstrual Game, Rex',
        image: null },
]

const team_members = [
    {   name: 'Victoria Tan',
        title: 'Team Lead',
        year: 'Senior',
        major: 'Mechanical Engineering',
        projects: 'Menstrual Waste Incinerator',
        image: null  },
    {   name: 'Sophie Keller',
        title: 'Business Lead',
        year: 'Junior',
        major: 'Computer Science',
        projects: 'INDAGO, Team Site',
        image: null },
    {   name: 'Navin Ramsaroop',
        title: 'Software Lead',
        year: 'Senior',
        major: 'Computer Science',
        projects: 'Menstrual Game, Rex',
        image: null },
]
