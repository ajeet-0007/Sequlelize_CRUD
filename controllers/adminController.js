const db = require("../models");
const User = db.user;
const Admin = db.admin;

exports.getLogin = (req, res) => {
  res.render("login.ejs", {
    empdata: "admin",
  });
};

exports.getAdminData = async (req, res) => {
  const userData = await User.findAll({});
  res.render("adminDashboard.ejs", {
    userData: userData,
    empdata: "admin",
  });
};


exports.adminDashboard = async (req, res) => {
  const resposne = {
    email: req.body.email,
    password: req.body.password,
  };
  // console.log(resposne);
  const adminActive = await Admin.findAll({
    where: {
      email: resposne.email,
      password: resposne.password,
    },
  });
  // console.log(adminActive);
  if (adminActive.length > 0) {
    res.redirect("/admin/dashboard");
  }
};



exports.deleteUser = async (req, res) => {
  const response = {
    id: req.body.deletedUser,
  };
  console.log(response);
  const dats = await User.destroy({
    where: {
      id: response.id,
    },
  });
  console.log(dats);
  const userData = await User.findAll({});
  res.render("adminDashboard.ejs", {
    userData: userData,
  });
};
