const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const path = require('path');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use(
    sass({
        src: __dirname + '/public/scss',
        dest: __dirname + '/public/css',
        debug: true,
        outputStyle: 'compressed',
    })
);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    const campgrounds = [
        {
            name: 'Pico de Loro',
            image:
                'https://s3-ap-southeast-1.amazonaws.com/tz-mag-ph/wp-content/uploads/2016/09/20232154/pico-de-loro-770x438.jpg',
        },
        {
            name: 'Mt. Makiling',
            image:
                'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2019/06/DSC_0252.jpg?fit=4096%2C2304&ssl=1',
        },
        {
            name: 'Pico de Loro',
            image:
                'https://s3-ap-southeast-1.amazonaws.com/tz-mag-ph/wp-content/uploads/2016/09/20232154/pico-de-loro-770x438.jpg',
        },
        {
            name: 'Mt. Makiling',
            image:
                'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2019/06/DSC_0252.jpg?fit=4096%2C2304&ssl=1',
        },
        {
            name: 'Pico de Loro',
            image:
                'https://s3-ap-southeast-1.amazonaws.com/tz-mag-ph/wp-content/uploads/2016/09/20232154/pico-de-loro-770x438.jpg',
        },
        {
            name: 'Mt. Makiling',
            image:
                'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2019/06/DSC_0252.jpg?fit=4096%2C2304&ssl=1',
        },
        {
            name: 'Pico de Loro',
            image:
                'https://s3-ap-southeast-1.amazonaws.com/tz-mag-ph/wp-content/uploads/2016/09/20232154/pico-de-loro-770x438.jpg',
        },
        {
            name: 'Mt. Makiling',
            image:
                'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2019/06/DSC_0252.jpg?fit=4096%2C2304&ssl=1',
        },
        {
            name: 'Pico de Loro',
            image:
                'https://s3-ap-southeast-1.amazonaws.com/tz-mag-ph/wp-content/uploads/2016/09/20232154/pico-de-loro-770x438.jpg',
        },
        {
            name: 'Mt. Makiling',
            image:
                'https://i2.wp.com/danielsecotravels.com/wp-content/uploads/2019/06/DSC_0252.jpg?fit=4096%2C2304&ssl=1',
        },
    ];
    res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', (req, res) => {
    res.send('you hit the post route');
});
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
