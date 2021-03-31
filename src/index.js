import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import redis from 'redis';
import RedisStore from 'connect-redis';
import passport from "passport";
import facebookRouter from './routes/facebook.route';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8888;
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'i dont know';

const redisStore = RedisStore(session);
const redisClient = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT, password: REDIS_PASSWORD });

const app = express();
app.use(session({
    secret: "OcSen Hoc Code",
    store: new redisStore({
        client: redisClient
    }),
    cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', facebookRouter);

app.listen(PORT, () => {
    console.log(`Service startup: http://localhost:${PORT}`);
});