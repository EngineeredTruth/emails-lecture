import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

import config from './config.js';
import emailCtrl from './emailCtrl.js';


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));


// App Listen
app.listen(config.port, () => {
    console.log('listening on port ', config.port);
});
