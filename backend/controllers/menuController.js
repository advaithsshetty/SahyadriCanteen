const MenuItem = require('../models/MenuItem');

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new menu item
const addMenuItem = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Edit a menu item
const editMenuItem = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    const { id } = req.params;
    const menuItem = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    const { id } = req.params;
    const menuItem = await MenuItem.findByIdAndDelete(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCategories = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({}, 'category');
    const categories = menuItems
      .flatMap(item => item.category.flatMap(cat => cat.split(',').map(c => c.trim())))
      .filter((value, index, self) => self.indexOf(value) === index);
    
    res.json(categories);
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getFeatured = async (req, res) => {
  try{
    const featuredItems = await MenuItem.find({featured:true});
    res.json(featuredItems);
  }catch(error){
    res.status(500).json({message:'Server error'});
  }
};

module.exports = {
  getAllMenuItems,
  addMenuItem,
  editMenuItem,
  deleteMenuItem,
  getCategories,
  getFeatured,
};
