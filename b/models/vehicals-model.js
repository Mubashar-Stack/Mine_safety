var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getVehicals: (cb) => {
        return db.query("SELECT * FROM vehicals", cb)
    },
    getVehical: (id, cb) => {
        return db.query("SELECT * FROM vehicals WHERE id=?", [id], cb)
    },
    addVehical: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            serialnumber: input.serialnumber,
            vtype: input.vtype,
            vnotes: input.vnotes,
            

        }
        return db.query("INSERT INTO vehicals SET ?", [data], cb)
    },
    updateVehical: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            serialnumber: input.serialnumber,
            vtype: input.vtype,
            vnotes: input.vnotes,
            

        }
        return db.query("UPDATE vehicals SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteVehical: (id, cb) => {
        return db.query("DELETE FROM vehicals WHERE id=?", [id], cb);
    }
}

module.exports = model;
