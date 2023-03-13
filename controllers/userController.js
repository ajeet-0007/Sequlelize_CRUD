const db = require("../models");
const User = db.user;
const Admin = db.user;
const Task = db.task;
let z = {};
exports.getLogin = (req, res) => {
    res.render("login.ejs", {
        empdata: 'user'
      });
}

let currentUser = {};
exports.userDashboard = async (req, res) => {
    const resposne = {
      email: req.body.email,
      password: req.body.password,
    };
    currentUser = resposne;
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
    if (userActive.length>0) {
      res.redirect('/user/dashboard')
    }
  };



  exports.getUserData = async (req, res) => {
    z.y=1;
    const userData = await User.findAll({
        where: {
            email: currentUser.email
        }
    });
    
    const data = await User.findAll({
      include: [{
          model: Task,
          as: 'task'
      }],
      where: { id: userData[0].dataValues.id}
  })
    const taskdata = data[0].dataValues.task;
    // console.log(taskdata);
   
    // for(let i=0; i<taskdata.length;i++){
    //   console.log(taskdata[i].dataValues.task);
    // }
    if(data==null){
      z.z=1;
     return res.render('userDashboard.ejs', {
      userData: userData,
      z:z
     });
    }else{
      z.z=2;
    res.render('userDashboard.ejs', {
        userData: userData,
        taskdata: taskdata,
        z:z
    })
  }
}

exports.addUserTask = async (req, res) => {
    // console.log(currentUser);

    const userData = await User.findAll({
        where: {
            email: currentUser.email
        }
    });
    const taskData = {
        userId: userData[0].dataValues.id,
        task: req.body.task
    }
    const data = await Task.create(taskData);
    res.redirect('/user/dashboard');
    // res.render('userDashboard.ejs', {
    //     userData: userData,
    //     data: data, 
    //     z:z,
    // })
}