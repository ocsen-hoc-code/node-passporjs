import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";

const FacebookStrategy = strategy.Strategy;

dotenv.config();

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, { ...obj, extra_data: 'test extra data' });
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
            done(null, profile);
        }
    )
);

export default {}