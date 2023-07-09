// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
const e = require('express');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
// ❤️‍🔥❤️‍🔥❤️‍🔥 NEXT: ❤️‍🔥❤️‍🔥❤️‍🔥 clean up and iterate
app.get('/api/:date', function (req, res) {
    const dateString = req.params.date;
    // detect unix timestamp & convert to integer
    const dateInt = +dateString;

    if (!isNaN(dateInt)) {
        const unixTimestamp = new Date(dateInt);
        res.json({
            unix: dateInt,
            utc: unixTimestamp.toUTCString(),
        });
    } else {
        const unixTimestamp = new Date(dateString);
        res.json({
            unix: unixTimestamp.getTime(),
            utc: unixTimestamp.toUTCString(),
        });
    }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
