const express = require('express');
const listController = require('../controllers/placelists');

const router = express.Router();

//GET /placelists/place
router.route('/getData').get(listController.getPlaces);
router.route('/getData/:id').get(listController.getPlacebyId);
router.route('/createReservation').post(listController.createResevation);
router.route('/getReservation').get(listController.getReservation);

module.exports = router;