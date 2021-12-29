let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');

app.use(express.static(path.join(__dirname + '/dist/frontend'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/angular-heroku'))
})

app.listen(port, (err) => {
    (err) ? console.log(err):console.log(`config success on port ${port}`)
});

