require('dotenv').config()

const sequelize = require('./db');
const models = require('./models/models')

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path')

const router = require('./routes/index')

const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload(     {}))
app.use('/api', router)

// обработка ошибок, последний Middleware
app.use(errorHandler)

// app.get('/', (reg, res) => {
//     res.status(200).json({message: 'WORKING IS IT'})
// })//Принимает запрос и ответ

const start = async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen( PORT, () => console.log(`Server runtime on PORT = ${PORT} ` ));
    } catch(e){
        console.log(e);
    }
}

start();