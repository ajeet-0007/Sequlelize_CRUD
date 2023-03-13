const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize("organizationDb", "root", "12345", {
    host: "localhost",
    logging: false,
    dialect: "mysql",
})

try{
    sequelize.authenticate();
}catch(e){
    console.log("Error Occured in connecting database");
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require('./admin')(sequelize, DataTypes)
db.user = require('./user')(sequelize, DataTypes);
db.task = require('./task')(sequelize, DataTypes);

db.user.hasMany(db.task, {
    foreignKey: 'userId',
    as: 'task'
})

db.task.belongsTo(db.user, {
    foreignKey: 'userId',
    as: 'user'
})


db.sequelize.sync({force: false});
module.exports = db;