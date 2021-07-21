const express = require('express');
const router = express.Router();

//Controller1
const { create,
        read, 
        readId,
        update, 
        //delet,
        remove,
        objectById } = require('../controllers/claseEjemploController');

router.post('/', create);

router.get('/', read);

router.get('/:id', readId);

router.put('/:id', update);

//router.delete('/:id', delet);

router.delete('/:id', remove);

router.param('id', objectById);

module.exports = router;