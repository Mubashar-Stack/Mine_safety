var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getaccessPoints: (cb) => {
        return db.query("SELECT * FROM access_points", cb)
    },
    getaccessPoint: (id, cb) => {
        return db.query("SELECT * FROM access_points WHERE id=?", [id], cb)
    },
    addaccessPoint: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            ipAddress: input.ipAddress,
            name: input.name,
            type: input.type,
            app: input.app,
            parent: input.parent,
            port: input.port,
            deviceID: input.deviceID,
            inMine: input.inMine
            

        }
        return db.query("INSERT INTO access_points SET ?", [data], cb)
    },
    updateaccessPoint: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            ipAddress: input.ipAddress,
            name: input.name,
            type: input.type,
            app: input.app,
            parent: input.parent,
            port: input.port,
            deviceID: input.deviceID,
            inMine: input.inMine
            

        }
        return db.query("UPDATE access_points SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteaccessPoint: (id, cb) => {
        return db.query("DELETE FROM access_points WHERE id=?", [id], cb);
    }
}

module.exports = model;
