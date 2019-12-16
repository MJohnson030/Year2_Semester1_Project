const express = require('express');
const app = express();
const hbs = require('express-handlebars');
app.use(express.static('public'))
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
// Routing
app.get('/home',  (req, res) => {
    res.render('index', { layout: false });
});
app.get('/',  (req, res) => {
    res.render('education', { layout: false });
});
app.get('/skillset',  (req, res) => {
    res.render('skillset', { layout: false });
});
app.get('/workexp',  (req, res) => {
    res.render('workexp', { layout: false });
});
app.listen(process.env.PORT || , function 2020 () => {
    console.log('Server is starting at port ', 2020);
});