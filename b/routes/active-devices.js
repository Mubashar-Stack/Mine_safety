
var express = require('express');
var router = express.Router();

var model = require('../models/active-devices');

router.get('/', function(req, res) {
    model.getactiveDevices(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getactiveDevice(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    model.addactiveDevice(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updateactiveDevice(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deleteactiveDevice(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
  

module.exports = router;
