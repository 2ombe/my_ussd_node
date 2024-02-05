"use strict";

const { Sequelize } = require("sequelize");

module.exports={
    up:async(queryInterface,Sequelize)=>{
        await queryInterface.builkInsert(
            "users",[
                {
                    plateNumber:"RRA134M",
                    pin:1234,
                    amount:"3000",
                    expirationDate:"2024-09-28T10:55:51.603Z"
                },
                {
                    plateNumber:"RRB134Z",
                    pin:6475,
                    amount:"4000",
                    expirationDate:"2024-08-28T10:55:51.603Z"
                },
                {
                    plateNumber:"RBA134K",
                    pin:5467,
                    amount:"78000",
                    expirationDate:"2025-01-28T10:55:51.603Z"
                },
            ],
            {}
        )
    },
    down:async(queryInterface,Sequelize)=>{
        await queryInterface.builkDelete("users",null,)
    }
}