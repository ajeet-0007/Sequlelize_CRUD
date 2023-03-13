module.exports = (sequelize, DataTypes)=>{
    const Task = sequelize.define("Task", {
        userId : {
            type: DataTypes.INTEGER
        },
        task:{
            type: DataTypes.STRING
        }
    })
    return Task;
}