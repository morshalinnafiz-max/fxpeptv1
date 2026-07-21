const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');
const path = require('path');

const db = require('./db');
const products = require('./data/products');

const app = express();
const PORT = process.env.PORT || 5000;

// ── View engine ──────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Static files ─────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── Body parsing ─────────────────────────────────────────────
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ── Session ───────────────────────────────────────────────────
app.use(session({
  secret: process.env.SESSION_SECRET || 'fxpept-dev-secret-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 days
}));

// ── Flash messages ────────────────────────────────────────────
app.use(flash());

// ── Global locals ─────────────────────────────────────────────
app.use((req, res, next) => {
  res.locals.user      = req.session.user || null;
  res.locals.success   = req.flash('success');
  res.locals.error     = req.flash('error');
  res.locals.cartCount = cartCount(req);
  next();
});

// ── Helpers ───────────────────────────────────────────────────
function cartCount(req) {
  const cart = req.session.cart || [];
  return cart.reduce((s, i) => s + i.quantity, 0);
}

function cartItems(req) {
  const cart = req.session.cart || [];
  return cart.map(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return null;
    return { ...p, productId: item.productId, quantity: item.quantity };
  }).filter(Boolean);
}

function cartTotal(req) {
  return cartItems(req).reduce((s, i) => s + i.price * i.quantity, 0);
}

function requireLogin(req, res, next) {
  if (!req.session.user) {
    req.flash('error', 'Please log in to continue.');
    return res.redirect('/login');
  }
  next();
}

function generateOrderNumber() {
  const ts  = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `FXP-${ts}-${rnd}`;
}

// ── HOME ──────────────────────────────────────────────────────
app.get('/', (req, res) => {
  const featured = products.filter(p => p.badge).slice(0, 8);
  res.render('index', { featured });
});

// ── PRODUCTS ──────────────────────────────────────────────────
app.get('/products', (req, res) => {
  const { category, q } = req.query;
  let list = [...products];

  if (q) {
    const query = q.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.strength.toLowerCase().includes(query)
    );
  } else if (category && category !== 'all') {
    list = list.filter(p => p.category === category);
  }

  const categories = [...new Set(products.map(p => p.category))];
  res.render('products', {
    products: list,
    categories,
    currentCategory: category || 'all',
    searchQuery: q || ''
  });
});

// ── PRODUCT DETAIL ────────────────────────────────────────────
app.get('/product/:slug', (req, res) => {
  const product = products.find(p => p.slug === req.params.slug);
  if (!product) return res.status(404).render('404', { title: 'Not Found' });
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  res.render('product', { product, related });
});

// ── CART ──────────────────────────────────────────────────────
app.get('/cart', (req, res) => {
  res.render('cart', {
    cart:  cartItems(req),
    total: cartTotal(req)
  });
});

// AJAX add to cart
app.post('/cart/add', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity  = Math.max(1, parseInt(req.body.quantity) || 1);
  const product   = products.find(p => p.id === productId);
  if (!product) return res.json({ success: false });

  const cart = req.session.cart || [];
  const idx  = cart.findIndex(i => i.productId === productId);
  if (idx >= 0) {
    cart[idx].quantity = Math.min(cart[idx].quantity + quantity, 99);
  } else {
    cart.push({ productId, quantity });
  }
  req.session.cart = cart;

  const count = cart.reduce((s, i) => s + i.quantity, 0);
  res.json({ success: true, cartCount: count });
});

// Update quantity
app.post('/cart/update', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity  = parseInt(req.body.quantity);
  const cart = req.session.cart || [];

  if (quantity <= 0) {
    req.session.cart = cart.filter(i => i.productId !== productId);
  } else {
    const idx = cart.findIndex(i => i.productId === productId);
    if (idx >= 0) cart[idx].quantity = Math.min(quantity, 99);
    req.session.cart = cart;
  }
  res.redirect('/cart');
});

// Remove item
app.post('/cart/remove', (req, res) => {
  const productId = parseInt(req.body.productId);
  req.session.cart = (req.session.cart || []).filter(i => i.productId !== productId);
  res.redirect('/cart');
});

// ── CHECKOUT ──────────────────────────────────────────────────
app.get('/checkout', requireLogin, (req, res) => {
  const cart = cartItems(req);
  if (cart.length === 0) return res.redirect('/cart');
  res.render('checkout', { cart, total: cartTotal(req), user: req.session.user });
});

app.post('/checkout', requireLogin, (req, res) => {
  const cart  = cartItems(req);
  const total = cartTotal(req);
  if (cart.length === 0) return res.redirect('/cart');

  const orderNumber = generateOrderNumber();
  const notes = (req.body.notes || '').trim();

  db.prepare(`
    INSERT INTO orders (user_id, order_number, status, total, notes, items_json)
    VALUES (?, ?, 'Pending Payment', ?, ?, ?)
  `).run(req.session.user.id, orderNumber, total, notes || null, JSON.stringify(cart));

  // Clear cart
  req.session.cart = [];

  const order = {
    order_number: orderNumber,
    total,
    items: cart,
    notes
  };
  res.render('order-confirmation', { order });
});

// ── ORDERS ────────────────────────────────────────────────────
app.get('/orders', requireLogin, (req, res) => {
  const rows = db.prepare(
    'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC'
  ).all(req.session.user.id);

  const orders = rows.map(o => ({ ...o, items: JSON.parse(o.items_json), total: parseFloat(o.total) }));
  res.render('orders', { orders });
});

app.get('/order/:orderNumber', requireLogin, (req, res) => {
  const row = db.prepare(
    'SELECT * FROM orders WHERE order_number = ? AND user_id = ?'
  ).get(req.params.orderNumber, req.session.user.id);

  if (!row) return res.status(404).render('404', { title: 'Order Not Found' });
  const order = { ...row, items: JSON.parse(row.items_json), total: parseFloat(row.total) };
  res.render('order-detail', { order });
});

// ── DASHBOARD ─────────────────────────────────────────────────
app.get('/dashboard', requireLogin, (req, res) => {
  const rows = db.prepare(
    'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC'
  ).all(req.session.user.id);
  const orders = rows.map(o => ({ ...o, items: JSON.parse(o.items_json), total: parseFloat(o.total) }));
  res.render('dashboard', { orders });
});

// ── AUTH ──────────────────────────────────────────────────────
app.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    req.flash('error', 'Email and password are required.');
    return res.redirect('/login');
  }
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email.toLowerCase().trim());
  if (!user || !bcrypt.compareSync(password, user.password)) {
    req.flash('error', 'Invalid email or password.');
    return res.redirect('/login');
  }
  req.session.user = { id: user.id, name: user.name, email: user.email };
  req.flash('success', `Welcome back, ${user.name}!`);
  res.redirect('/dashboard');
});

app.get('/register', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('register');
});

app.post('/register', (req, res) => {
  const { name, email, password, confirm } = req.body;
  if (!name || !email || !password) {
    req.flash('error', 'All fields are required.');
    return res.redirect('/register');
  }
  if (password.length < 6) {
    req.flash('error', 'Password must be at least 6 characters.');
    return res.redirect('/register');
  }
  if (password !== confirm) {
    req.flash('error', 'Passwords do not match.');
    return res.redirect('/register');
  }
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email.toLowerCase().trim());
  if (existing) {
    req.flash('error', 'An account with that email already exists.');
    return res.redirect('/register');
  }
  const hash = bcrypt.hashSync(password, 10);
  const result = db.prepare(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
  ).run(name.trim(), email.toLowerCase().trim(), hash);

  req.session.user = { id: result.lastInsertRowid, name: name.trim(), email: email.toLowerCase().trim() };
  req.flash('success', 'Account created! Welcome to FxPept.');
  res.redirect('/dashboard');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

// ── PEPTIDE CALCULATOR ────────────────────────────────────────
app.get('/calculator', (req, res) => {
  res.render('calculator', { title: 'Peptide Reconstitution Calculator' });
});

// ── 404 ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// ── START ─────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`FxPept running on http://0.0.0.0:${PORT}`);
});
