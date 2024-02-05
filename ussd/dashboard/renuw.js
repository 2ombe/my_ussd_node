const _ =require('lodash')
const UserServices = require('../service/service')
const { json } = require('body-parser')


module.exports=(menu)=>{
    //Define new status
    menu.state("dashboard.renew",{
        run: async()=>{
            const {val}=menu
            menu.con(`Enter plate number`)
        },
        // next object links the next state based user input
        next:{
            "*\\":"dashboard.renew.plateNumber",
        },
        defaultNext:"invalidOption"
    })
    menu.state("dashboard.renew.plateNumber",{
        run:async()=>{
            const{val,
                args:{plateNumber}}=menu
                sessions["number"]=val
                const user = await UserServices.findUserByPlate(plateNumber)

                const enteredValue = json.parse(val)
                console.log(enteredValue,user.number)
                menu.con(`Enter amount to send`)
            
        },
        //next object links to next state based on user input
        next:{
            "*\\d":"dashboard.renew.amount",
        },
        defaultNext:"InvalidOption"
    })
    menu.state("dashboard.renew.amount",{
        run:async()=>{

            const {val,args:{plateNumber}}=menu
            const owner = await UserServices.findUserByPlate(plateNumber)
            const savedAmount = await UserServices.findUserByPlate(val)
            if(owner){
                const amountToSend = sessions.amount
                const balance = savedAmount.amount+amountToSend
                const receiverPhone = reciever.phone;
        await UserServices.updateBalance(balance, senderPhone);
        await UserServices.updateBalance(amountToSend + reciever.amount, receiverPhone);
        menu.end(`You have successfully renewed with amount ${amountToSend} to ${savedAmount.plateNumber}.`)
            }else{
                menu.end("Invalid receipient")
            }
        },
        next:{
            "*\\d{10":"dashboard.renew.amount"
        }
    })
    menu.state("invalidOption",{
        run:()=>{
            menu.end(`Incorect input`)
        }
    })
    return menu
}