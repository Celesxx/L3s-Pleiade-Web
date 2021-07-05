const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.pluralize(null);

const DataSchema = mongoose.Schema({
    filename: { type: String, required: false },
    utilisateur: { type: String, required: false },
    activité: {type: String, required: false },
    accelero: {type: Array, required: false },
    tag: {type: String, required: false}
}); 

DataSchema.plugin(AutoIncrement, {inc_field: 'id_data'});
module.exports = mongoose.model('Data', DataSchema);