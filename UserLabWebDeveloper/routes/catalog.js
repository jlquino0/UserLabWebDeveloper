var express = require('express');
var router = express.Router();

// Require controller modules.
var cliente_controller = require('../controllers/clienteController');

/// cliente ROUTES ///
router.get('/',cliente_controller.index);

// GET request for creating cliente. NOTE This must come before route for id (i.e. display cliente).
router.get('/cliente/create', cliente_controller.cliente_create_get);

// POST request for creating cliente.
router.post('/cliente/create', cliente_controller.cliente_create_post);

// GET request to delete cliente.
router.get('/cliente/:id/delete', cliente_controller.cliente_delete_get);

// POST request to delete cliente.
router.post('/cliente/:id/delete', cliente_controller.cliente_delete_post);

// GET request to update cliente.
router.get('/cliente/:id/update', cliente_controller.cliente_update_get);

// POST request to update cliente.
router.post('/cliente/:id/update', cliente_controller.cliente_update_post);

// GET request for one cliente.
router.get('/cliente/:id', cliente_controller.cliente_detail);

// GET request for list of all clientes.
router.get('/clientes', cliente_controller.cliente_list);


module.exports = router;