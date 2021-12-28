let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    path = require('path');

app.use(express.static(__dirname + '/dist')); 

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(port, (err) => {
    (err) ? console.log(err):console.log(`config success on port ${port}`)
});


