const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfController = require('../controllers/pdfcontroller');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('pdf'), pdfController.uploadPDF);

module.exports = router;
