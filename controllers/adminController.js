const db = require("../models");
const User = db.user;
const Admin = db.user;

exports.getLogin = (req, res) => {
  res.render("login.ejs", {
    empdata: 'admin'
  });
}

exports.adminDashboard = async (req, res) => {
  const resposne = {
    email: req.body.email,
    password: req.body.password,
  };
  const userActive = await User.findAll({
    where: {
      email: resposne.email,
      password: resposne.password,
    },
  });
  const adminActive = await Admin.findAll({
    where: {
      email: resposne.email,
      password: resposne.password,
    },
  });
  if (adminActive.length>0) {
    res.redirect('/admin/dashboard')
  }
};

exports.getAdminData = async (req, res) => {
    const userData = await User.findAll({});
    res.render('adminDashboard.ejs', {
        userData: userData,
        empdata: "admin"
    })
}