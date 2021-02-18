# shunya-shop
Marketplace App

Private cryptocurrency enabled e-Commerce app build with MERN stack and Redux

# Features

Full featured shopping cart
Product reviews and ratings
Top products carousel
Product pagination
Product search feature
User profile with orders
Admin product management
Admin user management
Admin Order details page
Mark orders as delivered option
Checkout process (shipping, payment method, etc)
PayPal / credit card / CryptoCurrency integration
Database seeder (products & users)

# Install Dependencies (frontend & backend)
npm install
cd frontend
npm install
Run
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
Build & Deploy
# Create frontend prod build
cd frontend
npm run build
There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

# Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data

# Import data
npm run data:import

# Destroy data
npm run data:destroy
Sample User Logins

admin@sevenport.io (Admin)
123456

john@sevenport.io (Customer)
123456

jane@sevenport.io (Customer)
123456

# License
The MIT License

