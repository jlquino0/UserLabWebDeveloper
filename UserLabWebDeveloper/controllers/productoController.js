var Producto = require('../models/producto');

// Display list of all productos.
exports.producto_list = function (req, res) {
    Producto.find(function (err, productos) {
        if (err) return console.error(err);
        res.json(productos);
        console.log(productos);
    })
};

// Display detail page for a specific producto.
exports.producto_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: producto detail: ' + req.params.id);
};

// Display producto create form on GET.
exports.producto_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: producto create GET');
};

// Handle producto create on POST.
exports.producto_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: producto create POST');
};

// Display producto delete form on GET.
exports.producto_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: producto delete GET');
};

// Handle producto delete on POST.
exports.producto_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: producto delete POST');
};

// Display producto update form on GET.
exports.producto_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: producto update GET');
};

// Handle producto update on POST.
exports.producto_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: producto update POST');
};