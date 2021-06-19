var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getdeviceAssociations: (cb) => {
        return db.query("SELECT * FROM device_association", cb)
    },
    getdeviceAssociation: (id, cb) => {
        return db.query("SELECT * FROM device_association WHERE id=?", [id], cb)
    },
    getempdeviceAssociation: (id, cb) => {
        console.log("..hello")
        return db.query("SELECT DISTINCT * FROM device_association WHERE wifi_tags_id=?", [id], cb)
    },
    adddeviceAssociation: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            wifi_tags_id: parseInt( input.wifi_tags_id ),
            employee_id: parseInt( input.employees_id ),
            
            
               

        }
        console.log(data);
        return db.query("INSERT INTO device_association SET ?", [data], cb)
    },
    updatedeviceAssociation: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            wifi_tags_id: parseInt( input.wifi_tags_id ),
            employee_id: parseInt( input.employees_id ),
            
            
               

        }
        return db.query("UPDATE device_association SET ? WHERE id=?", [data, input.id], cb)
    },
    deletedeviceAssociation: (id, cb) => {
        return db.query("DELETE FROM device_association WHERE id=?", [id], cb);
    }
}

module.exports = model;
