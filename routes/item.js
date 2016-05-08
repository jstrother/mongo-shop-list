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
	console.log(req.params.id);
	console.log(req.body.name);
	Item.update(req.params.id, req.body.name, function(item) {
		res.json(item);
	}, function(err) {
		res.status(400).json(err);
	});
});

router.delete('/items/:id', function(req, res) {
	Item.delete(req.params.id, function(item) {
		res.json(item);
	}, function(err) {
		res.status(400).json(err);
	});
});

module.exports = router;