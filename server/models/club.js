var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clubSchema = new Schema({
    name: {type: String, unique: true, required: 'Club name is required'},
    tag: {type: String},
    description: {type: String},
    //Relationship attributes
    ownerId: {type: String},
    participantIds: {type: Array}
});

module.exports = mongoose.model('club', clubSchema);