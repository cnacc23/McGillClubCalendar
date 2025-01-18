const mongoose = require('mongoose');

//add logo 

const ClubsSchema = new mongoose.Schema ({

  name: { type: String, required: true },
  link: { type: String, required: true },
  logo: { type: String, required: true } // URL to logo image
});

module.exports = mongoose.model('Club', ClubSchema);