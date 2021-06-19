var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getEmployees: (cb) => {
        return db.query("SELECT * FROM employees", cb)
    },
    getEmployee: (id, cb) => {
        return db.query("SELECT * FROM employees WHERE id=?", [id], cb)
    },
    addEmployee: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            identityCard: input.identityCard,
            firstname: input.firstname,
            lastname: input.lastname,
            photo: input.photo,
            bloodType: input.bloodType,
            MedicalNotes: input.MedicalNotes,
            Qualifications: input.Qualifications,
            FirstAidLevel: input.FirstAidLevel,
            createdAt: currentDate,
            updatedAt: currentDate	

        }
        return db.query("INSERT INTO employees SET ?", [data], cb)
    },
    updateEmployee: (input, cb) => {
        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');
        let data = {
            identityCard: input.identityCard,
            firstname: input.firstname,
            lastname: input.lastname,
            photo: input.photo,
            bloodType: input.bloodType,
            MedicalNotes: input.MedicalNotes,
            Qualifications: input.Qualifications,
            FirstAidLevel: input.FirstAidLevel,
            updatedAt: currentDate
        }
        return db.query("UPDATE employees SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteEmployee: (id, cb) => {
        return db.query("DELETE FROM employees WHERE id=?", [id], cb);
    }
}

module.exports = model;
