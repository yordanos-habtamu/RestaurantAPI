const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
const menuFilePath = './menu.json';

// Middleware to parse JSON request bodies
app.use(express.json());

// Utility function to read the menu from the JSON file
const readMenuFromFile = () => {
  try {
    const data = fs.readFileSync(menuFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Utility function to write the menu to the JSON file
const writeMenuToFile = (menu) => {
  fs.writeFileSync(menuFilePath, JSON.stringify(menu, null, 2), 'utf8');
};

// GET /menu - Retrieve all menu items
app.get('/menu', (req, res) => {
  const menu = readMenuFromFile();
  res.json(menu);
});

// POST /menu - Add a new menu item
app.post('/menu', (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }

  const menu = readMenuFromFile();
  const newItem = {
    id: menu.length > 0 ? menu[menu.length - 1].id + 1 : 1,
    name,
    price,
    description: description || '',
  };

  menu.push(newItem);
  writeMenuToFile(menu);
  res.status(201).json(newItem);
});

// PUT /menu/:id - Update an existing menu item
app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const menu = readMenuFromFile();
  const itemIndex = menu.findIndex((item) => item.id === parseInt(id));

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Menu item not found.' });
  }

  const updatedItem = { ...menu[itemIndex], name, price, description };
  menu[itemIndex] = updatedItem;
  writeMenuToFile(menu);
  res.json(updatedItem);
});

// DELETE /menu/:id - Remove a menu item
app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  const menu = readMenuFromFile();
  const filteredMenu = menu.filter((item) => item.id !== parseInt(id));

  if (menu.length === filteredMenu.length) {
    return res.status(404).json({ error: 'Menu item not found.' });
  }

  writeMenuToFile(filteredMenu);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Restaurant menu app listening at http://localhost:${port}`);
});
