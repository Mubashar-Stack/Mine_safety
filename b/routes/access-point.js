
var express = require('express');
var router = express.Router();

var model = require('../models/access-point-model');

router.get('/', function(req, res) {
    model.getaccessPoints(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getaccessPoint(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    model.addaccessPoint(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updateaccessPoint(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deleteaccessPoint(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
  
module.exports = router;
