const express = require("express");
const User = require("../models/UsersModel");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  // const { name, email, password, password2 } = req.body;
  // let errors = [];
  const newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  //Hash
  bcrypt.genSalt(10, (err, salt) =>
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      //set password to hashed
      newUser.password = hash;
      // save User
      newUser
        .save()
        .then((user) => {
          console.log(user);
          res.redirect("/users");
        })
        .catch((err) => console.log(err));
    })
  );
});

//login handle
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", {
//     successRedirect: "/users/admin",
//     failureRedirect: "/users/login",
//     failureFlash: true,
//   })(req, res, next);
// });

router.post("/", (req, res, next) => {
    res.redirect("/users/admin");
  
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

module.exports = router;
