const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  price: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  image: { 
    type: String, 
    trim: true 
  },
  category: { 
    type: [String], 
    required: true 
  },
  featured: { 
    type: Boolean, 
    default: false 
  },
  rating: { 
    type: Number, 
    default: 0, 
    min: 0, 
    max: 5 
  },
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);
