module.exports = (sequelize, DataTypes)=>{
    const Admin = sequelize.define("Admin", {
        name : {
            type: DataTypes.STRING
        }, 
        email: {
            type: DataTypes.STRING
        },
        designation: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.INTEGER
        }
    })
    return Admin;
}