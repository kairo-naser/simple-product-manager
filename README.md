# Simple Product Manager

## Overview

This project is a simple product management application that allows users to create, read, update, and delete products. It serves as a basic example of a RESTful API built with Node.js.

## Features

- Create new products
- Retrieve product information
- Update existing products
- Delete products

## Project Structure

- `controllers/`: Contains the logic for handling product-related requests.
  - `productController.js`: Manages product operations.
- `data/`: Holds product data and related scripts.
  - `createProducts.js`: Script to create sample products.
  - `deleteProducts.js`: Script to delete products.
  - `getProducts.js`: Script to retrieve product information.
  - `products.json`: JSON file storing product data.
  - `updateProducts.js`: Script to update product information.
- `server.js`: The main server file that initializes the application.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simple-product-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server, run:

```bash
node server.js
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /products`: Create a new product.
- `GET /products`: Retrieve all products.
- `GET /products/:id`: Retrieve a specific product by ID.
- `PUT /products/:id`: Update a product by ID.
- `DELETE /products/:id`: Delete a product by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
