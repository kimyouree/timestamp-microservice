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
app.get('/api/:date', function (req, res) {
    // ❤️‍🔥❤️‍🔥❤️‍🔥 NEXT: ❤️‍🔥❤️‍🔥❤️‍🔥 clean up and iterate
    const dateString = req.params.date;
    const dateInt = +dateString;

    if (isDateTypeUnix(dateInt)) {
        const unixTimestamp = new Date(dateInt);
        res.json({
            unix: dateInt,
            utc: unixTimestamp.toUTCString(),
        });
    } else {
        const unixTimestamp = new Date(dateString);
        res.json({
            unix: new Date(dateString).getTime(),
            utc: unixTimestamp.toUTCString(),
        });
    }
});

function isDateTypeUnix(date) {
    // Check if date is a unix timestamp
    if (!isNaN(date)) {
        // Check if it is a valid unix timestamp
        const unixTimestampMilliseconds = date;
        const unixDate = new Date(unixTimestampMilliseconds * 1000);
        if (unixDate instanceof Date && !isNaN(unixDate)) {
            return true; // turn these to a constant
        }
    } else {
        // Check if it is a valid date string
        return false;
    }
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
