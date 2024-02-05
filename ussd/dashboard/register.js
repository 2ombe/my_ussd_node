const UserServices = require("../service/service")


module.exports=(menu)=>{
    menu.state("dashboard.registerMotor",{
        run:async()=>{
            const {val} = menu
            menu.con(`Enter your ID number`)
        },
        next:{
            "*\\d":"dashboard.registerMotor.idNumber"
        },
        defaultNext:"invalidOption"
    })

    menu.state("dashboard.registerMotor.idNumber",{
        run:async()=>{
            const {val,args:{idNumber}}=menu
            sessions["idNumber"]=val
            menu.con(`Enter your vehicle plate number`)
        },
        next:{
            "*":"dashboard.registerMotor.plateNumber",
        },
defaultNext:("invalidOption")
    })
    menu.state("dashboard.registerMotor.plateNumber",{
        run:async()=>{
            sessions["plateNumber"]=val
            menu.con(`Enter your vehicle category`)
        },
        next:{
            "*":"dashboard.registerMotor.category",
        },
        defaultNext:"invalidOption"
    })

    menu.state("dashboard.registerMotor.category",{
        run:async()=>{
            sessions['category']=val
            // save the data to the databse
            const userdata={
                idNumber:sessions.idNumber,
                plateNumber:sessions.plateNumber,
                category:sessions.category
            }
            await UserServices.registerMotor(userdata)
            menu.end("Motor registration successful!")
        },
        next:{
            "*":"dashboard.registerMotor.category",
        },
        defaultNext:"invalidOption"

    })
    menu.state("invalidOption",{
        run:()=>{
            menu.end(`Incorect input`)
        }
    })
    return menu
}