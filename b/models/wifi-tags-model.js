var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getwifiTagss: (cb) => {
        return db.query("SELECT * FROM wifi_tags", cb)
    },
    getwifiTags: (id, cb) => {
        return db.query("SELECT * FROM wifi_tags WHERE id=?", [id], cb)
    },
    addwifiTags: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            name: input.name,
            tag_mac: input.tag_mac,
            tag_type: input.tag_type,
               

        }
        return db.query("INSERT INTO wifi_tags SET ?", [data], cb)
    },
    updatewifiTags: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            name: input.name,
            tag_mac: input.tag_mac,
            tag_type: input.tag_type,
               

        }
        return db.query("UPDATE wifi_tags SET ? WHERE id=?", [data, input.id], cb)
    },
    deletewifiTags: (id, cb) => {
        return db.query("DELETE FROM wifi_tags WHERE id=?", [id], cb);
    }
}

module.exports = model;
