const express = require('express');
const router = express.Router();

const {
  registerApplicant, registerFile, getApplicants
} = require('../controllers/applicantController');

//Adding Routes
router.route('/application/submit').post(registerApplicant);
router.route('/application/fileupload').post(registerFile);
router.route('/applications').get(getApplicants);

module.exports = router;