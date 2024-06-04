# Top N Products Web Application

This is a React-based frontend web application that allows users to browse and filter top N products fetched from a backend server. The application consists of two main pages: one for presenting all products and another for spotlighting a specific product.

## Features

- Display all products with detailed information including name, company, category, price, rating, discount, and availability.
- Filter products based on category, e-commerce company, rating, price range, and availability.
- Sort products by price, rating, discount, and pagination support for smooth navigation.
- Integrated with a backend server developed to handle product data.

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd top-n-products-web-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Technologies Used

- React.js
- Material-UI (for styling)
- Axios (for making HTTP requests)

## API Integration

The frontend application is integrated with a backend server to fetch product data. Make sure to update the API endpoint URL in the `api.js` file to point to your backend server.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
