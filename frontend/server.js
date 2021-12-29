let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');

// app.use(express.static(path.join(__dirname + '/src/index.html'))); 
app.use(express.static('./dist/frontend')); 

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/angular-heroku'})
})

app.listen(port, (err) => {
    (err) ? console.log(err):console.log(`config success on port ${port}`)
});

