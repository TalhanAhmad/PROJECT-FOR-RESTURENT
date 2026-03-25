const MenuItem = require('../models/MenuItem');

exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMenuItemsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const items = await MenuItem.find({ category });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSpecialItems = async (req, res) => {
  try {
    const items = await MenuItem.find({ isSpecial: true });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMenuItem = async (req, res) => {
  const item = new MenuItem(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
