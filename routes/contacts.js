const express = require('express');
const router = express.Router();
const db = require('./../database');

router.get("/all", function(req, res) {
	db.Contact.findAll()
		.then( persons => {
			res.status(200).send(JSON.stringify(persons));
		})
		.catch( err => {
			res.status(500).send(JSON.stringify(err));
		});
});

router.get("/:id", function(req, res) {
	db.Contact.findByPk(req.params.id)
		.then( person => {
			res.status(200).send(JSON.stringify(person));
		})
		.catch( err => {
			res.status(500).send(JSON.stringify(err));
		});
});

router.put("/", function(req, res) {
	db.Contact.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		id: req.body.id
	})
		.then( person => {
			res.status(200).send(JSON.stringify(person));
		})
		.catch( err => {
			res.status(500).send(JSON.stringify(err));
		});
});

router.delete("/:id", function(req, res) {
	db.Contact.destroy({
		where: {
			id: req.params.id
		}
	})
		.then( () => {
			res.status(200).send();
		})
		.catch( err => {
			res.status(500).send(JSON.stringify(err));
		});
});

module.exports = router;
