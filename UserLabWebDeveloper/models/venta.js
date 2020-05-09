var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VentaSchema = new Schema(
    {
        description: { type: String, required: true },
        cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
        producto: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
        cantidad: { type: String, required: true },

    }
);

// Virtual for Venta's URL
VentaSchema
    .virtual('url')
    .get(function () {
        return '/catalog/venta/' + this._id;
    });

//Export model
module.exports = mongoose.model('Venta', VentaSchema);