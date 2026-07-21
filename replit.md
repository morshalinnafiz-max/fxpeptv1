# FxPept — Research Peptides Canada

## Project Overview
FxPept is a full-stack e-commerce web application for a Canadian research peptides supplier. Built with Node.js + Express, EJS templating, and SQLite (better-sqlite3).

## Features
- Product catalog with 29 research peptides across 4 categories
- Shopping cart (session-based)
- User authentication (register/login/logout) with bcryptjs hashing
- Order placement & tracking
- User dashboard
- **Peptide Reconstitution Calculator** (`/calculator`) — reconstitution & dosing tool
- Flash messages, AJAX cart, mobile-responsive nav

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express 4
- **Templating:** EJS
- **Database:** SQLite via better-sqlite3
- **Auth:** express-session + bcryptjs
- **Flash:** connect-flash

## Project Structure
```
server.js          # Main Express app & all routes
db.js              # SQLite setup & schema
data/
  products.js      # Product catalogue (29 items)
  fxpept.db        # SQLite database (auto-created)
views/
  partials/        # header.ejs, footer.ejs
  index.ejs        # Home page
  products.ejs     # Catalog
  product.ejs      # Product detail
  cart.ejs         # Cart
  checkout.ejs     # Checkout
  order-confirmation.ejs
  order-detail.ejs
  orders.ejs
  dashboard.ejs
  login.ejs
  register.ejs
  calculator.ejs   # Peptide calculator
  404.ejs
public/
  css/style.css
  images/          # Product images (JPEG)
  favicon.ico
```

## Running the App
```bash
node server.js
```
Starts on port 5000 (or `$PORT`).

## User Preferences
- Keep all product data in `data/products.js` (not database)
- SQLite for user accounts and orders only
- Session-based cart (no DB storage for cart)
