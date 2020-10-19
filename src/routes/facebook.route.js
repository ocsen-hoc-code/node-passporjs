import express from 'express';
import passport from 'passport';
import facebookController from '../controllers/facebook.controller';
const facebookRouter = express.Router();
facebookRouter.get('/auth/facebook', passport.authenticate('facebook'));
facebookRouter.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/fail'
}));

facebookRouter.get('/success', (req, res) => {
    console.log('req.user', req.user);
    if (req.isAuthenticated()) {
        res.status(200).send('Susscess');
    } else {
        res.redirect('/fail');
    }
});
facebookRouter.get('/fail', (req, res) => { res.status(200).send('Fail'); });

export default facebookRouter;