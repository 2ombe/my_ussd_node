const UserServices = require("../service/service")

module.exports=(menu)=>{
    menu.state=("dashboard.checkValidity",{
        run:async()=>{
            const {val}=menu
            menu.con(`Enter your plate to check insurence validity date`)
        },
        next:{
            "*\\d":"dashboard.checkValidity.plateNumber",
        },
        defaultNext:"invalid option"
    })
    
    menu.state("dashboard.checkValidity.plateNumber",{
        run:async()=>{
            const{val,args:{plateNumber}}=menu
            const user = await UserServices.findUserByPlate(plateNumber)
            if(user){
                const expirationDate=user.insuranceExpirationDate
                menu.end(`Your insurance expiration date is: ${expirationDate}`)
            }else{
                menu.end(`User not found. Please enter a valid plate number.`)
            }
        }
       
    })
menu.state("invalidOption",{
    run:()=>{
        menu.end(`Incored input`)
    }
})
return menu
}