module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User", {
        name:{
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        designation: {
            type: DataTypes.STRING
        },
        password:{
            
            type: DataTypes.INTEGER
        }
    })
    return User;
}