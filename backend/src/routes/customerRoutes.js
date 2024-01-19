import caretakerController from '../controllers/caretakerController';

const express = require('express');
const router = express.Router();

// routers
router.get('/', caretakerController.show);
router.post('/', caretakerController.register);
router.get('/:id', caretakerController.index);

export default router;
