import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";

const FacebookStrategy = strategy.Strategy;

dotenv.config();

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACBOOK_SECRET_KEY,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
            profileFields: ["email", "name"]
        },
        function (accessToken, refreshToken, profile, done) {
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);
            console.log('profile', profile);
            done(null, profile);
        }
    )
);

export default {}