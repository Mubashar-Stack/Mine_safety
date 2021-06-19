var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getAssets: (cb) => {
        return db.query("SELECT * FROM Assets", cb)
    },
    getAsset: (id, cb) => {
        return db.query("SELECT * FROM Assets WHERE id=?", [id], cb)
    },
    addAssets: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            serialnumber: input.serialnumber,
            atype: input.atype,
            anotes: input.anotes,
            

        }
        return db.query("INSERT INTO Assets SET ?", [data], cb)
    },
    updateAssets: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            serialnumber: input.serialnumber,
            atype: input.atype,
            anotes: input.anotes,
            

        }
        return db.query("UPDATE Assets SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteAssets: (id, cb) => {
        return db.query("DELETE FROM Assets WHERE id=?", [id], cb);
    }
}

module.exports = model;
