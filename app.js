const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

//swagger documentation
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//connection logic connect to mongodb
mongoose.connect(uri).then(
    async () => {

        console.log(`Connected to MongoDB Database`)

        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT}`);
        });
    }
).catch((err) => {
    console.log(`Error connecting to MongoDB Database: ${err}`);
});


