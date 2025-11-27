import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { users } from "../shared/schema.js";
import { db } from "./db.js";

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  let user = await db.select().from(users).where({ googleId: profile.id }).limit(1);
  if (!user.length) {
    user = await db.insert(users).values({
      googleId: profile.id,
      email: profile.emails![0].value,
      name: profile.displayName,
      avatar: profile.photos![0].value,
    }).returning();
  }
  return done(null, user[0]);
}));

passport.serializeUser((user: any, done) => done(null, user));
passport.deserializeUser((user: any, done) => done(null, user));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/dashboard");
});
