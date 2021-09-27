var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//TODO: decide whether we are using the generatedID or our own 

var eventSchema = new Schema({
    name: {type: String, required: 'Event name is required'},
    description: {type: String},
    isPublic: {type: Boolean},
    //Relationship attributes
    scheduleId: {type: Schema.Types.ObjectId, ref: 'Schedule'},
    clubId: {type: Schema.Types.ObjectId, ref: 'Club'},
    creatorId: {type: Schema.Types.ObjectId, ref: 'User'},
    attendeeIds: {type: Array}
});

module.exports = mongoose.model('event', eventSchema);