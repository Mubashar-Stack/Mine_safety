var db = require("../db");
var dateFormat = require('dateformat');
const { signedCookie } = require("cookie-parser");

let model = {
    getactiveDevices: (cb) => {
        return db.query("SELECT * FROM active_devices", cb)
    },
    getactiveDevice: (id, cb) => {
        return db.query("SELECT * FROM active_devices WHERE id=?", [id], cb)
    },
    addactivedevice: (input, cb) => {

        var tag = db.query("SELECT * FROM active_devices WHERE id=?", [input.id], cb);
        if(tag.lenght == null){
            let data = {
                tag_id: input.id,
                active_tag_mac: input.tag_mac,
                 
            }
            
            return db.query("INSERT INTO active_devices SET ?", [data], cb)

        }else{
            return {msg: "Already present!"};
        }

        
    },
    updateactiveDevice: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            tag_id: input.id,
            active_tag_mac: input.tag_mac,
             
        }
        return db.query("UPDATE active_devices SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteactiveDevice: (id, cb) => {
        return db.query("DELETE FROM active_devices WHERE id=?", [id], cb);
    }
}

module.exports = model;
