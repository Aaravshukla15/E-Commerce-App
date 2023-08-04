# E-Commerce-App

# E-Commerce App using React and Strapi

This repository contains an E-Commerce web application built with React and Strapi. The app provides a user-friendly interface for browsing and purchasing products, as well as managing the product inventory through the Strapi CMS.

## Features

- Browse products by category and search for specific items
- View detailed product information and images
- Add products to the shopping cart
- Proceed to checkout and place orders
- Admin dashboard to manage products, categories, and orders

## Installation

Follow the instructions below to set up and run the E-Commerce app locally:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

2. Install the dependencies for both the frontend (React) and backend (Strapi):

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Configure the Strapi CMS:

   - Set up a PostgreSQL or MongoDB database (based on your preference) and update the `backend/config/database.js` file with the appropriate credentials.
   - Run the following commands to set up the database and populate it with sample data:

```bash
# Create the necessary tables and initial admin user
cd backend
npm run setup

# Start the Strapi server
npm run develop
```

4. Start the React frontend:

```bash
# In a new terminal, navigate back to the frontend directory and start the development server
cd frontend
npm start
```

5. Access the application:

   - The React frontend will be accessible at: `http://localhost:3000`
   - The Strapi CMS will be accessible at: `http://localhost:1337`

## Usage

- Visit the frontend application URL to browse and purchase products.
- Access the Strapi CMS URL to manage products, categories, and orders using the admin dashboard.
- To log in to the Strapi admin panel, use the credentials you specified during the setup process.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your fork.
5. Submit a pull request to the main repository.

Please ensure that your code follows the existing coding style and conventions.

## License

This E-Commerce App is open-source and licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the open-source community and the authors of the libraries and frameworks used in this project.

## Contact

If you have any questions or need further assistance, feel free to contact the project maintainers:

- Your Name: ahuklaarav10@gmail.com
