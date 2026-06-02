import "../config/env.js";
import passport from "passport";

import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
 console.log(process.env.GOOGLE_CLIENT_ID);
 console.log(process.env.GITHUB_CLIENT_ID);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      return done(null, {
        id: profile.id,
        email: profile.emails?.[0]?.value,
        name: profile.displayName,
        provider: "google",
      });
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      return done(null, {
        id: profile.id,
        email: profile.emails?.[0]?.value,
        name: profile.displayName,
        provider: "github",
      });
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails"]
    },
    async (accessToken, refreshToken, profile, done) => {
      return done(null, {
        id: profile.id,
        email: profile.emails?.[0]?.value,
        name: profile.displayName,
        provider: "facebook",
      });
    }
  )
);