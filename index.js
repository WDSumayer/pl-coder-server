const express = require ('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;


const courses = require('./data/course-catagory.json');

app.get('/courses', (req, res) => {
    res.send(courses)
})
const course = require('./data/course.json');
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c.id === id);
    res.send(selectedCourse)
    console.log(selectedCourse)
})

app.get('/', (req, res) => {
    res.send('api server is running')
});
app.listen(port, () => {
    console.log('port', port)
})