const ussdMenu = require('ussd-menu-builder')

let sessions={}

let menu = new ussdMenu()

menu.sessionConfig({
    start:(sessionId,callback)=>{
        // initialize current session if it doesn't exist
        // this is callled by menu.run()
        if(!(sessionId in sessions)) sessions[sessionId]={}
        callback()

    },
    end:(sessionId,callback)=>{
        //clear current session 
        // this is called by menu.end()
        delete sessions[sessionId]
        callback()
    },
    set:(sessionId,key,value,callback)=>{
        //store key-value pair in current seaaion
        sessions[sessionId][key]=value
        callback()
    },
    get:(sessionID,key,callback)=>{
        // retrive value by key in current session
        let value = sessions[sessionID][key]
        callback(null,value)
    }
})

module.exports=menu