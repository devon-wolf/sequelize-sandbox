const { Router } = require('express');
const Handle = require('../models/Handle');

module.exports = Router()
	.post('/', (req, res, next) => {
		Handle
			.create(req.body)
			.then(handle => res.send(handle))
			.catch(next);
	});