import express from 'express';
import { json } from 'body-parser';
import passport from "passport";
import facebookRouter from './routes/facebook.route';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8888;

const app = express();
app.use(passport.initialize());
app.use(json());
app.use('/', facebookRouter);

app.listen(PORT, () => {
    console.log(`Service startup: http://localhost:${PORT}`);
});