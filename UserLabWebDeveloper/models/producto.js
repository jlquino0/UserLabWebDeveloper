var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductoSchema = new Schema(
    {
        description: { type: String, required: true },
        inventario: { type: String, required: true },

    }
);

// Virtual for Producto's URL
ProductoSchema
    .virtual('url')
    .get(function () {
        return '/catalog/producto/' + this._id;
    });

//Export model
module.exports = mongoose.model('Producto', ProductoSchema);