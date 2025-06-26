# ShopEZ - MERN Stack Application

ShopEZ is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js) as part of the Smart Bridge project. This application provides a seamless shopping experience for users, allowing them to browse, filter, and purchase products, as well as manage orders. It includes both user and admin functionalities.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Usage](#usage)
5. [Tech Stack](#tech-stack)
6. [Features](#features)
   - [User Features](#user-features)
   - [Admin Features](#admin-features)
7. [Demo Video](#demo-video)

---

## Project Structure

The project is organized into two main folders:
- *client/* - Contains the front-end React code for the application.
- *server/* - Contains the back-end Node.js and Express code.

## Installation

### 1. Clone the Repository
 bash
git clone https://github.com/VSowmya134/ShopEZ.git
cd shopEZ-PROJECT


### 2. Install Dependencies
IGNORE THE ERRORS WHILE INSTALLING, CONTINUE TO RUN THE APPLICATION
#### Server
 bash
cd server
npm install


#### Client
 bash
cd client
npm install


## Environment Variables

Add your own configuration in server.js in the root of the *server* folder. 

mongoose.connect(mongodb+srv://username:password@url/ShopEZ?retryWrites=true&w=majority&appName=Cluster)


## Usage
IF YOU STILL ENCOUNTER ANY ERRORS WHILE RUNNING THE SERVER OR CLIENT, REMOVE THE NODE_MODULES FOLDER AND RUN npm install. NOW TRY AGAIN, IT WILL WORK
### Running the Server
The server runs on port 5000.
 bash
cd server
node index.js || npm run dev


### Running the Client
The client will start on port 3000 by default.
 bash
cd client
npm run dev


## Tech Stack
- *Frontend*: React, CSS, Redux Toolkit
- *Backend*: Node.js, Express.js
- *Database*: MongoDB


## Features

### User Features
1. *User Registration and Login*:
   - Register as a new user or log in with existing credentials.
     
![Screenshot 2025-04-11 142955](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/9e3a8d4b5af70018977b2d43019d7aafe8f5bd35/client/assets/Screenshot%202025-06-24%20160456.png)

![Screenshot 2025-04-11 143135](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/9e3a8d4b5af70018977b2d43019d7aafe8f5bd35/client/assets/Screenshot%202025-06-24%20160442.png)

![Screenshot 2025-04-11 142834](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/fd3ed2a19581d9c4da0d4fedd2ffa0e149bba271/client/assets/Screenshot%202025-06-24%20161101.png)

2. *Product Browsing and Filtering*:
   - Filter products by categories, gender, popularity, price (low to high or high to low).
     
![Screenshot 2025-04-11 143402](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/6b75b235428fbf4f90e0e16dfd717b9acc586bbb/client/assets/Screenshot%202025-06-24%20161251.png)

3. *Shopping Cart*:
   - Add products to the cart and proceed to checkout.

![Screenshot 2025-04-11 164804](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/501c1c894d04d7b8de6d43c0a91c5ae6a19f77d6/client/assets/Screenshot%202025-06-24%20161545.png)
![Screenshot 2025-04-11 170609](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/a3eb400c3b938a0b18453db2909557ca12c0e3e7/client/assets/Screenshot%202025-06-24%20161753.png)

4. *Checkout and Order Placement*:
   - Provide details such as address, city, pincode, mobile number, notesto place an order.
     
![Screenshot 2025-04-11 143534](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/c6f6233abcc93b32af24ef5d1499cdd8ffaf34f0/client/assets/Screenshot%202025-06-24%20162159.png)

![Screenshot 2025-04-11 143633](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/c6f6233abcc93b32af24ef5d1499cdd8ffaf34f0/client/assets/Screenshot%202025-06-24%20162417.png)

5. *Order Details*:
   - View orders from the user profile page.

![Screenshot 2025-04-11 143947](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/c6f6233abcc93b32af24ef5d1499cdd8ffaf34f0/client/assets/Screenshot%202025-06-24%20162455.png)


### Admin Features
1. *Admin Login*:
   - Login using admin credentials:
     - *Email*: admin@gmail.com
     - *Password*: admin

![Screenshot 2025-04-11 144043](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/4f44a6cf942bc794db63ac62361e0e4083b79fc8/client/assets/Screenshot%202025-06-24%20163000.png)




2. *Order Management*:
   - View the total number of orders and their details, including the number of orders placed by each user.

![Screenshot 2025-04-11 144043](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/4525871f9a8a8bce51c953181c023cc248970509/client/assets/Screenshot%202025-06-24%20163206.png)



3. *Product Management*:
   - Add, update, or remove products.
   - Add products with categories, images, brands, etc.

![Screenshot 2025-04-11 144110](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/320d7092dc9d857b786b42a286d33bb7765f669e/client/assets/Screenshot%202025-06-24%20163555.png)


4. *Order Management*:
   - View all placed orders, update their status (e.g., Order Placed, In Transit, Delivered), and cancel orders if necessary.

![Screenshot 2025-04-11 144245](https://github.com/SnehaYadavWorld11/shopEz-ecommerce-deploy-to-render/blob/985325b32e85308b506979b0606f17b57ad5bc98/client/assets/Screenshot%202025-06-24%20163840.png)




