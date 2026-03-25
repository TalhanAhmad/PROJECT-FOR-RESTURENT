# 📚 Complete Project Index & File Guide

## 🎯 Quick Navigation

- **[QUICKSTART.md](./QUICKSTART.md)** - Start here! 5-minute setup guide
- **[INSTALLATION.md](./INSTALLATION.md)** - Complete installation instructions
- **[CHECKLIST.md](./CHECKLIST.md)** - Step-by-step customization checklist
- **[README.md](./README.md)** - Full project documentation

---

## 📁 Project File Structure & Descriptions

### Root Level Files

```
project1-for-hong-kong/
├── .gitignore                  # Ignore node_modules, .env files
├── README.md                   # Complete project documentation
├── QUICKSTART.md              # 5-minute setup guide
├── INSTALLATION.md            # Detailed installation guide
├── CHECKLIST.md               # Customization checklist
└── <this file>                # File index you're reading
```

---

## 🖥️ Backend Files (`/backend`)

### Main Server File
```
backend/
└── server.js                   # Express app setup & MongoDB connection
                               # Imports all routes
                               # Starts server on port 5000
```

### Controllers (Business Logic)
```
backend/controllers/
├── menuController.js           # GET all menu items
│                               # GET items by category
│                               # GET special items
│                               # POST create menu item
│
├── reviewController.js         # GET all reviews
│                               # GET average rating
│                               # POST create review
│
├── orderController.js          # POST create order
│                               # GET order status
│                               # GET all orders
│
└── contactController.js        # POST send message
                               # GET restaurant info
```

### Models (Database Schemas)
```
backend/models/
├── MenuItem.js                 # Menu item schema (name, price, category)
├── Review.js                   # Review schema (rating, comment, source)
└── Order.js                    # Order schema (items, status, customer info)
```

### Routes (API Endpoints)
```
backend/routes/
├── menuRoutes.js              # /api/menu - Menu endpoints
├── reviewRoutes.js            # /api/reviews - Review endpoints
├── orderRoutes.js             # /api/orders - Order endpoints
└── contactRoutes.js           # /api/contact - Contact endpoints

Routers are imported and used in server.js
```

### Configuration
```
backend/
├── package.json               # Dependencies (Express, MongoDB, CORS, etc)
├── .env                       # Environment variables (MONGODB_URI, PORT)
├── .env.example               # Template for .env file
├── .gitignore                 # Ignore node_modules, .env
└── README.md                  # Backend-specific documentation
```

---

## ⚛️ Frontend Files (`/frontend`)

### Main Application Files
```
frontend/src/
├── App.js                      # Main React component with Router setup
├── index.js                    # React entry point (mounts to #root)
└── index.css                   # Global CSS & Tailwind imports
```

### Components (Reusable UI Elements)
```
frontend/src/components/
├── Navbar.js                   # Navigation bar with logo & buttons
│                               # Includes hamburger menu for mobile
│                               # WhatsApp & Call buttons
│
├── Footer.js                   # Footer with contact info
│                               # Social media links
│                               # Hours & location
│
├── MenuCard.js                 # Individual menu item card
│                               # Shows price, name, description
│                               # Add to cart button
│
└── ReviewCard.js               # Customer review card
                               # Shows rating stars
                               # Customer name & quote
```

### Pages (Full Page Components)
```
frontend/src/pages/
├── HomePage.js                 # "/" - Home page
│                               # Hero section, specials, reviews, about
│
├── MenuPage.js                 # "/menu" - Menu page
│                               # 50+ items with category filter
│
├── AboutPage.js                # "/about" - About us
│                               # Story, why choose us, stats
│
└── ContactPage.js              # "/contact" - Contact page
                               # Contact form, hours, location, map
```

### Styling
```
frontend/
├── tailwind.config.js          # Tailwind configuration
│                               # Custom colors (Red, Gold, Dark)
│                               # Theme settings
│
├── postcss.config.js           # PostCSS configuration
│                               # Processes Tailwind CSS
│
└── src/index.css               # Global styles & utility classes
                               # .btn-primary, .card, .section-title
```

### Public Files
```
frontend/public/
├── index.html                  # Main HTML file
│                               # Meta tags, title, root div
│
└── manifest.json               # PWA manifest
                               # App name, icons, theme color
```

### Configuration
```
frontend/
├── package.json                # Dependencies (React, Tailwind, Axios, etc)
├── .env.example                # Template for environment variables
├── .gitignore                  # Ignore node_modules, build, .env
└── README.md                   # Frontend-specific documentation
```

---

## 🧭 Navigation Map

### URLs/Routes
```
/ (Home)
  ├── Hero section with buttons
  ├── Special dishes section
  ├── Customer reviews
  └── About quick section

/menu (Menu)
  ├── Category filter buttons
  └── Grid of all menu items

/about (About)
  ├── Restaurant story
  ├── Why choose us
  └── Stats & features

/contact (Contact)
  ├── Contact form
  ├── Business hours
  ├── Map placeholder
  └── Quick order section
```

---

## 🔗 API Endpoints

### Menu Endpoints
```
GET /api/menu                    # Get all menu items
GET /api/menu/category/[name]   # Get items by category
GET /api/menu/special            # Get special/featured items
POST /api/menu                   # Create new menu item
```

### Review Endpoints
```
GET /api/reviews                 # Get all approved reviews
GET /api/reviews/rating          # Get average rating & count
POST /api/reviews                # Submit new review
```

### Order Endpoints
```
POST /api/orders                 # Create new order
GET /api/orders                  # Get all orders
GET /api/orders/:id              # Get specific order status
```

### Contact Endpoints
```
POST /api/contact                # Send contact form message
GET /api/contact/info            # Get restaurant info
```

---

## 🎨 Key Features by Location

### Click-to-Call & WhatsApp
```
Navbar.js           # Header buttons
Footer.js           # Footer links
HomePage.js         # Home page buttons
ContactPage.js      # Contact page
```

### Menu Display
```
MenuPage.js         # Main menu with filtering
MenuCard.js         # Individual item cards
HomePage.js         # Featured items section
```

### Reviews & Ratings
```
HomePage.js         # Reviews section on home
ReviewCard.js       # Individual review display
reviewController.js # Backend review management
Review.js           # Database schema
```

### Contact Form
```
ContactPage.js      # Form UI
contactController.js # Form processing
```

---

## 🗄️ Database Collections

### MenuItem Collection
```
{
  _id: ObjectId
  name: String
  description: String
  category: String (enum: Soups, Rice, Chow Mein, etc)
  price: Number
  image: String (optional)
  isSpecial: Boolean
  createdAt: Date
}
```

### Review Collection
```
{
  _id: ObjectId
  name: String
  rating: Number (1-5)
  comment: String
  source: String (Google, Facebook, Internal)
  isApproved: Boolean
  createdAt: Date
}
```

### Order Collection
```
{
  _id: ObjectId
  customerName: String
  customerPhone: String
  items: [
    {
      menuItemId: ObjectId
      name: String
      quantity: Number
      price: Number
    }
  ]
  totalPrice: Number
  orderType: String (Dine-in, Takeout, Delivery)
  specialInstructions: String
  status: String (Pending, Confirmed, Preparing, Ready, etc)
  createdAt: Date
}
```

---

## 📦 Dependencies

### Backend (Node.js)
- **express** - Web framework
- **mongoose** - MongoDB driver
- **cors** - Cross-origin requests
- **dotenv** - Environment variables
- **nodemon** - Auto-reload (dev)

### Frontend (React)
- **react** - UI library
- **react-router-dom** - Page routing
- **tailwindcss** - Styling
- **axios** - HTTP requests
- **react-icons** - Icon library

---

## 🎯 Customization Quick Links

### Contact Information
- Phone: Search for `+92-XXX-XXXXXXX`
- Email: Search for `info@hkrest.com`
- Location: Search for `Peshawar, Pakistan`

### Colors
- `frontend/tailwind.config.js` - Primary red, secondary gold, etc

### Menu Items
- `frontend/src/pages/MenuPage.js` - Mock data object
- Backend: `/api/menu` POST endpoint

### Reviews
- `frontend/src/pages/HomePage.js` - Mock reviews array
- Backend: `/api/reviews` POST endpoint

### Hours of Operation
- `frontend/src/pages/ContactPage.js` - Hours display
- `backend/controllers/contactController.js` - Hours data

---

## 🚀 Getting Started

### 1. Install
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Start
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm start
```

### 3. Customize
See [CHECKLIST.md](./CHECKLIST.md) for step-by-step guide

### 4. Deploy
See [INSTALLATION.md](./INSTALLATION.md) for deployment instructions

---

## 📊 File Count Summary

| Category | Count | Purpose |
|----------|-------|---------|
| React Components | 4 | UI elements |
| Pages | 4 | Full pages |
| Controllers | 4 | Business logic |
| Models | 3 | Database schemas |
| Routes | 4 | API endpoints |
| Config | 8 | Settings files |
| **Total** | **31** | Complete app |

---

## ⚡ Quick Command Reference

```bash
# Start backend (Terminal 1)
cd backend && npm run dev

# Start frontend (Terminal 2)
cd frontend && npm start

# Build for production
cd frontend && npm run build

# Test API
curl http://localhost:5000/api/menu

# Install new package
npm install package-name

# View documentation
README.md, QUICKSTART.md, INSTALLATION.md
```

---

## 🎓 Learning Path

1. **Start:** QUICKSTART.md (5 min)
2. **Understand:** README.md (10 min)
3. **Setup:** INSTALLATION.md (20 min)
4. **Customize:** CHECKLIST.md (1 hour)
5. **Deploy:** INSTALLATION.md Deployment section (30 min)

---

## 🌟 What's Included

✅ Complete MERN Stack  
✅ 4 Beautiful Pages  
✅ 50+ Menu Items Ready  
✅ Customer Reviews Section  
✅ Contact Form  
✅ WhatsApp Integration  
✅ Click-to-Call  
✅ Mobile Responsive  
✅ Dark Theme  
✅ Tailwind Styling  
✅ API Ready  
✅ MongoDB Ready  
✅ Production Ready  

---

## 🎯 Next Steps

1. Read QUICKSTART.md
2. Run: `cd backend && npm run dev`
3. Run: `cd frontend && npm start`
4. Follow CHECKLIST.md to customize
5. Deploy using INSTALLATION.md

---

**Everything you need to launch a professional restaurant website! 🚀**
