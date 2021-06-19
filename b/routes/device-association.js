
var express = require('express');
var router = express.Router();

var model = require('../models/device-association-model');

router.get('/', function(req, res) {
    model.getdeviceAssociations(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getdeviceAssociation(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.get('/emp/:id', function(req, res) {
    let id = req.params.id;
    model.getempdeviceAssociation(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    model.adddeviceAssociation(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatedeviceAssociation(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletedeviceAssociation(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
  
module.exports = router;
