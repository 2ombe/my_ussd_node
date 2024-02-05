const {Router}=require('express')
const bodyParser = require('body-parser')


const routes=app=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    const router = Router()

    app.post('/',(req,res)=>{
        menubar(req).run(req.body,ussdResult=>{
            res.send(ussdResult)
        })
    })
    return router
}

module.exports=routes