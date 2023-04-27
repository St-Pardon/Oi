import dotenv from 'dotenv';
import passport from 'passport';
import { userModel } from '../models/user.models.js';
import { Strategy as localStrategy } from 'passport-local';
import {
  ExtractJwt as ExtractJWT,
  Strategy as JWTstrategy,
} from 'passport-jwt';
import { moreInfoModel } from '../models/moreInfo.model.js';

// const passport = require("passport");
// const { userModel } = require("../models/user.model");
// const localStrategy = require("passport-local").Strategy;
// const JWTstrategy = require("passport-jwt").Strategy;
// const ExtractJWT = require("passport-jwt").ExtractJwt;

dotenv.config();

passport
  .use(
    new JWTstrategy(
      {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        jsonWebTokenOptions: {
          maxAge: '48h',
        },
      },
      async (token, done) => {
        try {
          return done(null, token.user);
        } catch (error) {
          return done(error);
        }
      }
    )
  )

  .use(
    'signup',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const data = req.body;
          const { username } = req.body;

          // checks if user's username or email already exist
          const checkUsername = await userModel.findOne({ username });
          const checkMail = await userModel.findOne({ email });

          if (checkUsername) {
            return done(null, false, { message: 'Username already exist' });
          }

          if (checkMail) {
            return done(null, false, { message: 'Email already exist' });
          }

          const user = await userModel.create({ ...data, email, password });
          await moreInfoModel.create({ user_id: user._id });
          
          return done(null, user);
        } catch (error) {
          console.log('some err');
          return done(error);
        }
      }
    )
  )

  .use(
    'signin',
    new localStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          // const user = await userModel.findOne({ email: email })
          const user = email.includes('@')
            ? await userModel.findOne({ email })
            : await userModel.findOne({ username: email });

          if (!user) {
            return done(null, false, { message: 'User not found' });
          }

          const validate = await user.isValidPassword(password);

          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }

          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
