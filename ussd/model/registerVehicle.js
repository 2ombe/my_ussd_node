
const {  Model } = require('sequelize')

module.exports=(sequelize,DataTypes)=>{
    class users extends Model{
        static associate(models){

        }
    }
    users.init({
        plateNumber:DataTypes.STRING,
        PIN:DataTypes.INTEGER,
        amount:DataTypes.INTEGER,
        createdAt:DataTypes.DATE,
        expirationDate:DataTypes.DATE
    },{
        sequelize,
        modelName:'users'
    })
    return users
}