var Cliente = require('../models/cliente');

exports.index = function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all clientes.
//2
exports.cliente_list = function (req, res, next) {
    /*
    var fluffy = new Cliente(
        {
            first_name: 'fluffy',
            family_name: 'fluffyFamily',
            date_of_birth: '11/11/2020',
            dni: '2491353020101',
            mobile: '37131777',
            address: 'z16'
        });
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
    });
    */
    Cliente.find(function (err, clientes) {
        if (err) return console.error(err);
        res.json(clientes);
        console.log(clientes);
    })

};

// Display detail page for a specific cliente.
exports.cliente_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente detail: ' + req.params.id);
};

// Display cliente create form on GET.
exports.cliente_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente create GET');
};

// Handle cliente create on POST.
exports.cliente_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente create POST');
};

// Display cliente delete form on GET.
exports.cliente_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente delete GET');
};

// Handle cliente delete on POST.
exports.cliente_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente delete POST');
};

// Display cliente update form on GET.
exports.cliente_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente update GET');
};

// Handle cliente update on POST.
exports.cliente_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: cliente update POST');
};