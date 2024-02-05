'use strict'



module.exports={
up:async(QueryInterface,Sequelize)=>{
    await QueryInterface.createTable('users',{
       
        plateNumber:{
            type:Sequelize.STRING
        },
        pin:{
            type:Sequelize.INTEGER
        },
        amout:{type:Sequelize.INTEGER},
        createdAt:{
            type:Sequelize.Date,
            allowNull:false
        }
    },{
        constraints:{
            charset:'AL32UTF8'
        },
        dialectOptions:{
            useUTC:false,
            timezone:'Etc/GMT+2'
        }
    })
},
down:async(QueryInterface,Sequelize)=>{
    await QueryInterface.dropTable('users')
}
}