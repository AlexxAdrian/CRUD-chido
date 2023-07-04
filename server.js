require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('El servidor está corriendo en http://localhost:3000/employee');
});

app.use('/employee', employeeController);
app.engine(
    "hbs",
    exphbs({
        defaultLayout: path.join(__dirname, 'views/layouts/mainLayout'), // Ruta actualizada
        extname: ".hbs",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
        },
    })
);