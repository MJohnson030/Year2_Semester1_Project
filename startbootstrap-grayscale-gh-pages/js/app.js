const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.use(express.static('public'))

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

// Routing
app.get('',  (req, res) => {
    res.render('index', { layout: false });
});

app.get('/footer',  (req, res) => {
    res.render('footer', { layout: false });
});

app.get('/head',  (req, res) => {
    res.render('head', { layout: false });
});

var PORT = 2020;
app.listen(process.env.PORT||PORT () => {
    console.log(`Server started on ${PORT}`);
});
