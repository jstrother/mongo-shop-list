var express = require('express');
var Item = require('../services/item');
var router = express.Router();

router.get('/items', function(req, res) {
	Item.list(function(items) {
		res.json(items);
	}, function(err) {
		res.status(400).json(err);
	});
});

router.post('/items', function(req, res) {
	Item.save(req.body.name, function(item) {
		res.status(201).json(item);
	}, function(err) {
		res.status(400).json(err);
	});
});

router.put('/items/:id', function (req, res) {
	Item.update(req.params.id, req.body.name, function(item) {
		console.log('Successfully changed ' + req.body.name + ' at id ' + req.params.id);
		console.log(item);
		res.json(item);
	}, function(err) {
		console.log('Tried changing ' + req.body.name + ' at id ' + req.params.id);
		res.status(400).json(err);
	});
});

router.delete('/items/:id', function(req, res) {
	Item.delete(req.params.id, function(item) {
		console.log('Successfully deleted ' + req.body.name + ' at id ' + req.params.id);
		res.json(item);
	}, function(err) {
		console.log('Tried deleting ' + req.body.name + ' at id ' + req.params.id);
		res.status(400).json(err);
	});
});

module.exports = router;