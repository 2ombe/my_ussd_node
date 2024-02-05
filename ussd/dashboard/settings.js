const express = require("express")

const _=require("lodash")
const UserServices = require("../service/service")

module.exports=(menu)=>{
    // define menu state
    menu.state("dashboard.settings",{
        run:async()=>{
menu.con(`Enter your 4 digits pin`)
        },
        // next object links to next state based on user input
        next:{
            "\\d{4}":"dashboard.settingd.newPin",
        },
    })
menu.state("dashboard.settings.newPin",{
    run:async()=>{
        const val=menu
        session["newPin"]=val

        menu.con(`Confirm your 4 digit new pin`)
    },
    next:{
        "*\\d{4}":"dashboard.settings.updatePin"
    },
    defaultNext:"invalidOption"
})

menu.state("dashboard.settings.updatePin",{
    run:async()=>{
        const {val,args:{plateNumber}}=menu
        if(session.newPin===val){
            await UserServices.changePin(session.newPin,plateNumber)
            menu.end(`You have successfully change the pin! `)
        }else{
            menu.end(`Your new pin don't change`)
        }
    }
})
menu.state("invalidOption",{
    run:()=>{
        menu.end(`Invalid option`)
    }
})
return menu

}