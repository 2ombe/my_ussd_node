const db = require('../model')
class UserServices{
    static async findUserByPlate(plate){
        try {
            const plate = await db.users.findOne({where:{phone}})
            if(!user)return null;
            return user
        } catch (error) {
            return undefined
        }
    }

    static async renewInsurence(amount,plate){
        try {
            const user = await db.users.update(
                {amount},
                {where:{phone}}
            )
            return user
        } catch (error) {
            return error
        }
    }
    
}

module.exports=UserServices