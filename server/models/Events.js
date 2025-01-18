const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Clubs",
        required: true
    }, 
    eventTitle: {
        type: String, 
        required: true 
    }, 
    date: {
        type: Date, 
        required: true
    }, 
    startTime: {
        type: String, 
        required: true
    }, 
    endTime: {
        type: String, 
        required: true
    }, 
    location: {
        type: String, 
        required: true
    }, 
    host: {
        type: String, 
        ref: "Clubs",
        required: true
    }
    
});

module.exports = mongoose.model('Events', EventsSchema);