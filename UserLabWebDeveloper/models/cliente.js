var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClienteSchema = new Schema(
    {
        first_name: { type: String, required: true, max: 100 },
        family_name: { type: String, required: true, max: 100 },
        date_of_birth: { type: String, required: true, max: 100 },
        dni: { type: String, required: true, max: 100 },
        mobile: { type: String, required: true, max: 100 },
        address: { type: String, required: true, max: 100 },
    }
);

// Virtual for Cliente's full name
ClienteSchema
    .virtual('name')
    .get(function () {

        // To avoid errors in cases where an Cliente does not have either a family name or first name
        // We want to make sure we handle the exception by returning an empty string for that case

        var fullname = '';
        if (this.first_name && this.family_name) {
            fullname = this.family_name + ', ' + this.first_name
        }
        if (!this.first_name || !this.family_name) {
            fullname = '';
        }

        return fullname;
    });

// Virtual for Cliente's URL
ClienteSchema
    .virtual('url')
    .get(function () {
        return '/catalog/cliente/' + this._id;
    });

//Export model
module.exports = mongoose.model('Cliente', ClienteSchema);