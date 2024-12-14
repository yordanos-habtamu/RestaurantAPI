# Restaurant Menu API

Welcome to the **Restaurant Menu API**! This Node.js application allows you to manage a restaurant's menu with full CRUD (Create, Read, Update, Delete) functionality. Data is stored in a JSON file for simplicity, making it lightweight and easy to use.

---

## Features

- **GET**: Retrieve all menu items.
- **POST**: Add new menu items.
- **PUT**: Update existing menu items.
- **DELETE**: Remove menu items.
- **File-based Storage**: Uses a JSON file to store menu data, eliminating the need for a database.
- **Dynamic ID Management**: Automatically generates unique IDs for new items.
- **Error Handling**: Provides meaningful error messages for invalid or incomplete requests.

---

## Installation and Setup

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system.

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/restaurant-menu-api.git
   cd restaurant-menu-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Initialize Data File**
   Create a `menu.json` file in the root directory and add an empty array:

   ```json
   []
   ```

4. **Run the Application**
   Start the server:

   ```bash
   node app.js
   ```

   The server will be available at `http://localhost:8080`.

---

## API Endpoints

### **GET /menu**

- **Description**: Retrieve all menu items.
- **Response**:
  - **200 OK**: Returns an array of menu items.

### **POST /menu**

- **Description**: Add a new menu item.
- **Request Body**:
  ```json
  {
    "name": "String",
    "price": "Number",
    "description": "String (optional)"
  }
  ```
- **Response**:
  - **201 Created**: Returns the created menu item.
  - **400 Bad Request**: If required fields (`name`, `price`) are missing.

### **PUT /menu/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id**

- **Description**: Update an existing menu item by ID.
- **Request Body**:
  ```json
  {
    "name": "String",
    "price": "Number",
    "description": "String"
  }
  ```
- **Response**:
  - **200 OK**: Returns the updated menu item.
  - **404 Not Found**: If the menu item does not exist.

### **DELETE /menu/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id**

- **Description**: Delete a menu item by ID.
- **Response**:
  - **204 No Content**: If the menu item is successfully deleted.
  - **404 Not Found**: If the menu item does not exist.

---

## Example Usage

### Using cURL

- **GET**:

  ```bash
  curl http://localhost:3000/menu
  ```

- **POST**:

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name": "Burger", "price": 5.99}' http://localhost:3000/menu
  ```

- **PUT**:

  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"name": "Veggie Burger", "price": 6.99}' http://localhost:3000/menu/1
  ```

- **DELETE**:

  ```bash
  curl -X DELETE http://localhost:3000/menu/1
  ```

### Using Postman

1. Open Postman.
2. Create a new request.
3. Set the method (GET, POST, PUT, DELETE).
4. Enter the URL (e.g., `http://localhost:3000/menu`).
5. Add a JSON body for POST and PUT requests.
6. Send the request and view the response.

---

## Project Structure

```
restaurant-menu-api/
├── app.js          # Main application file
├── menu.json       # JSON file for menu data storage
└── package.json    # Project dependencies
```

---

## Future Enhancements

- **Search and Filter**: Enable searching and filtering of menu items.
- **Pagination**: Add pagination support for the GET endpoint.
- **Authentication**: Secure endpoints with user authentication.
- **Category Management**: Organize menu items into categories.
- **Database Support**: Replace JSON file storage with a database for scalability.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- Author\:s Yordanos Habtamu
- **Email**:[Email](jordrichh7@gmail.com)**
- **GITHUB**\*\*[GitHub](https://github.com/yordanos-habtamu)**

