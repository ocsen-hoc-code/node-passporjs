import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from "passport";
import facebookRouter from './routes/facebook.route';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8888;

const app = express();
app.use(session({ secret: "OcSen Hoc Code" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', facebookRouter);

app.listen(PORT, () => {
    console.log(`Service startup: http://localhost:${PORT}`);
});