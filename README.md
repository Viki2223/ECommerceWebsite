# 🛒 E-Commerce Website

A full-stack e-commerce web application built with modern web technologies. This project simulates a real-world online shopping platform, offering features like user authentication, product browsing, shopping cart, and admin panel for managing products and orders.

## 🚀 Features

- User Registration and Login
- Product Listing with Categories
- Add to Cart and Checkout Functionality
- Admin Dashboard to Manage Products and Orders
- Order Summary and Confirmation
- Responsive UI for Desktop and Mobile
- Error Handling and Alerts

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3
- JavaScript
- Bootstrap

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB with Mongoose

**Tools & Libraries:**
- EJS (Embedded JavaScript templating)
- Express-session for session handling
- Bcrypt for password hashing
- dotenv for managing environment variables

## 📁 Project Structure

```

ECommerceWebsite/
│
├── config/             # MongoDB connection setup
├── controllers/        # Logic for handling routes
├── middlewares/        # Auth and admin middlewares
├── models/             # Mongoose models (User, Product, Order)
├── public/             # Static files (CSS, images)
├── routes/             # Express routes
├── views/              # EJS templates
├── .env                # Environment variables
├── app.js              # Main server file
└── package.json        # Project metadata and dependencies

````

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Viki2223/ECommerceWebsite.git
   cd ECommerceWebsite
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your `.env` file:**
   Create a `.env` file in the root and add:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   SESSION_SECRET=yourSecretKey
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   Open your browser at `http://localhost:3000`

## 📸 Screenshots

*Add screenshots here if available to showcase the UI.*

## 👤 Author

**Vikram Kumar**
📧 [Email](mailto:vikramkumar1316@gmail.com)
🔗 [GitHub](https://github.com/Viki2223)

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo, create a branch, and submit a pull request.

```

---

Let me know if you'd like me to include preview images, deployment instructions (e.g., using Render/Heroku), or convert it to a Hindi version for local audiences too.
```
