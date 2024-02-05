const _=require('lodash')
const checkValidity=require('./validity')
const renew = require('./renuw')
const newMotor=require('./new')
const settings=require('./settings')

const instructions=`Chose the service to proceed with: \n1. ckeck validity \n2. renew \n3 register vehicle \n4 request help`

module.exports=menu=>{
    // define status
    menu.state("dashboard",{
        run:async()=>{
            // use menu.con( to send request with terminating session)

            const{val,args:{plateNumber}}=menu
            menu.con(instructions)
        },
        // next object links to the next state without terminating the bsession
        next:{
            '1':'dashboard.checkValidity',
            '2':'dashboard.registerMotor',
            '3':'dashboard.renew',
            '4':'dashboard.settings'
        }
    })

    menu.state("invalidOption",{
        run:()=>{
            menu.end(`Invalid option`)
        }
    })
    _.over([checkValidity,renew,newMotor,settings])(menu)
    return menu
}