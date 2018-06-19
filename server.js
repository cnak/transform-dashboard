var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});

app.get('/tickets/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Opened Tickets", "Closed Tickets"];
    let colors = ["#e74c3c", "#27ae60"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 10) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });
    });

    res.json(values);
});

app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

app.get('/birthday/next', function (req, res) {
    res.json({
        name: 'Cedric',
        date: '24th May',
        imageUrl: 'images/ced.jpg'
    })
});

app.get('/winning-behaviour/now', function (req, res) {
    res.json({
        name: 'Speak Up',
        date: '',
        imageUrl: 'images/winning-behaviour.jpg'
    })
});

app.get('/holidays/all', function (req, res) {
    res.json([
        {
            label: "Cedric",
            value: "29/06"
        },
        {
            label: "Jem",
            value: "13/08"
        },
        {
            label: "Carola",
            value: "23/09"
        }
    ]);
});

app.get('/team-social/all', function (req, res) {
    res.json([
        {
            label: "DI&DIT Hub Drinks",
            value: "14/06"
        },
        {
            label: "Karaoke",
            value: "21/06"
        },
        {
            label: "Major Event",
            value: "O0/00"
        }
    ]);    
});

app.get('/team-news/all', function (req, res) {
    res.json([
        {
            label: "Sita's Wedding",
            value: "27/08"
        },
        {
            label: "Baby Robyn Due",
            value: "24/09"
        },
    ]);
});

app.get('/stats/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});

app.listen(3001, function () {
    console.log('Data being served from http://localhost:3001');
});