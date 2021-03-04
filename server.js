const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// --------- Settings ---------
app.set('port', process.env.PORT || 3000);

// --------- Middlewares ---------
app.use(express.json()); // Permite trabajar con archivos JSON con el servidor
app.use(express.urlencoded({extended: false})) // Permite trabajar con Formularios con el servidor
app.use(morgan('dev'));

// --------- Routes ---------
/*Main Route */
app.get('/', (request,response) => {
    response.send('Welcome to my API (CRUD Students) - Briam Flores');
});

app.use(require('./routes/students'));

// --------- Static files ---------


// --------- Starting server ---------
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});