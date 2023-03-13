const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view-engine", "ejs");

const db = require("./models");
const User = db.user;
const Admin = db.admin;

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/login", async (req, res) => {
  const response = {
    name: req.body.name,
    email: req.body.email,
    designation: req.body.designation,
    password: req.body.password,
  };
  console.log(response.designation);
  if (response.designation == "admin" || response.designation == "Admin") {
    await Admin.create(response);
    res.redirect('/admin/login');
  } else if (response.designation == "user" || response.designation == "User") {
    await User.create(response);
    res.redirect('/user/login');
  }
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(3000);
