var Venta = require('../models/venta');

// Display list of all ventas.
exports.venta_list = function (req, res) {
    Venta.find(function (err, ventas) {
        if (err) return console.error(err);
        res.json(ventas);
        console.log(ventas);
    })
};

// Display detail page for a specific venta.
exports.venta_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: venta detail: ' + req.params.id);
};

// Display venta create form on GET.
exports.venta_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: venta create GET');
};

// Handle venta create on POST.
exports.venta_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: venta create POST');
};

// Display venta delete form on GET.
exports.venta_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: venta delete GET');
};

// Handle venta delete on POST.
exports.venta_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: venta delete POST');
};

// Display venta update form on GET.
exports.venta_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: venta update GET');
};

// Handle venta update on POST.
exports.venta_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: venta update POST');
};