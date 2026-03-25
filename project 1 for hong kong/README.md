# Hong Kong Chinese Restaurant - MERN Stack Website

A complete modern web application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. This website helps the restaurant increase online orders, build trust with customers, and showcase authentic Chinese cuisine.

## 🎯 Project Goals

✅ Get more customers  
✅ Increase online orders  
✅ Build trust with families  
✅ Show menu clearly  
✅ Beat nearby competitors  

## 🏗️ Project Structure

```
project1-for-hong-kong/
├── backend/
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── controllers/       # Business logic
│   ├── middleware/        # Custom middleware
│   ├── server.js         # Entry point
│   ├── .env              # Environment variables
│   └── package.json      # Backend dependencies
│
├── frontend/
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── api/          # API calls
│   │   ├── context/      # React Context
│   │   ├── App.js        # Main component
│   │   └── index.js      # Entry point
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json      # Frontend dependencies
│
└── README.md             # This file
```

## 🎨 Design Strategy

**Color Scheme:**
- 🔴 Red (#DC2626) - Primary color
- 🟡 Gold/Yellow (#FCD34D) - Secondary color
- ⚫ Dark Gray (#1F2937) - Text & headers
- White - Background & cards

**Style:** Modern Chinese cultural vibe with premium look

## ✨ Key Features

### 🏠 Home Page
- Large hero section with food image
- Tagline: "Authentic Chinese Taste in Peshawar Since Years"
- Quick action buttons: Call Now, Get Directions, Order Now, View Menu
- Featured special dishes
- Customer reviews section
- Trust indicators (1000+ happy customers)

### 📖 Menu Page
- Categorized menu (Soups, Rice, Chow Mein, Chicken, Beef, Seafood, Vegetables)
- Filter by category
- Dish details with prices
- Add to cart functionality
- High-quality food images

### 👥 About Us
- Restaurant story
- Family-friendly environment
- 1000+ happy customers testimonial
- Why choose us section
- Trust building content

### ⭐ Reviews Section
- Real Google reviews
- Star ratings
- Customer testimonials
- Average rating display

### 📍 Contact Page
- Contact form
- Map integration
- Phone number
- WhatsApp button
- Operating hours
- Address

### 🔥 Must-Have Features

1. **Click-to-Call Button** - One-click phone calling
2. **WhatsApp Integration** - Order directly on WhatsApp
3. **Google Maps** - Location discovery
4. **Mobile-Friendly Menu** - Optimized for phones
5. **Fast Loading** - Optimized performance

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM
- **CORS** - Cross-origin requests
- **Dotenv** - Environment variables

### Frontend
- **React 18** - UI library
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Icons** - Icon library

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
MONGODB_URI=mongodb://localhost:27017/hk-restaurant
PORT=5000
NODE_ENV=development

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm start
```

The frontend will open at `http://localhost:3000`  
The backend runs on `http://localhost:5000`

## 🔌 API Endpoints

### Menu Items
- `GET /api/menu` - Get all menu items
- `GET /api/menu/category/:category` - Get items by category
- `GET /api/menu/special` - Get special items
- `POST /api/menu` - Create new menu item

### Reviews
- `GET /api/reviews` - Get all approved reviews
- `GET /api/reviews/rating` - Get average rating
- `POST /api/reviews` - Create new review

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:orderId` - Get order status

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact/info` - Get restaurant info

## ⚙️ Configuration

### Update Contact Information

Replace placeholders in these files:
- `backend/.env` - Update MongoDB URI
- `frontend/src/components/Navbar.js` - Update phone/WhatsApp
- `frontend/src/components/Footer.js` - Update contact info
- `frontend/src/pages/ContactPage.js` - Update hours/location
- `backend/controllers/contactController.js` - Update restaurant info

### Customize Menu

Add real menu items to MongoDB or update mock data in `frontend/src/pages/MenuPage.js`

### Connect Database

Update MongoDB URI in `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hk-restaurant
```

## 📈 How This Boosts Sales

### 🔍 Google Visibility (SEO)
- Ranks for "Best Chinese in Peshawar"
- Local search optimization
- Metadata and structured data

### 🏆 Builds Trust
- Professional appearance
- Customer reviews
- Clear contact info
- Operating hours displayed

### 📱 Increases Orders
- WhatsApp integration
- Easy menu access
- Click-to-call buttons
- Mobile-first design

### 💪 Competitive Advantage
- Ranks better than Silver Dragon
- Better than Asian Wok Peshawar
- Stronger online presence

## 🎨 Extra Growth Ideas (Pro Level)

1. **Food Photography** - High-quality dish photos
2. **Google Ads** - Target "Chinese food near me"
3. **Instagram Integration** - Real food posts
4. **Discount Banners** - "10% off on online orders"
5. **Customer Reviews Syncing** - Auto-import from Google
6. **Delivery Integration** - Connect with delivery apps
7. **Online Booking** - Reserve tables online
8. **Email Marketing** - Newsletter signup

## 🛠️ Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy build/ folder
```

### Backend (Heroku/Railway)
```bash
cd backend
npm start
```

## 🔐 Security Notes

- Never commit `.env` files
- Use environment variables for sensitive data
- Validate all form inputs
- Use HTTPS in production
- Enable CORS properly

## 📚 Project Files

### Backend Files
- `server.js` - Express app setup
- `package.json` - Dependencies
- `models/MenuItem.js` - Menu schema
- `models/Review.js` - Review schema
- `models/Order.js` - Order schema
- `controllers/menuController.js` - Menu logic
- `controllers/reviewController.js` - Review logic
- `controllers/orderController.js` - Order logic
- `routes/menuRoutes.js` - Menu endpoints
- `routes/reviewRoutes.js` - Review endpoints
- `routes/orderRoutes.js` - Order endpoints

### Frontend Files
- `src/App.js` - Main component
- `src/index.js` - React entry point
- `src/index.css` - Global styles
- `src/components/Navbar.js` - Navigation bar
- `src/components/Footer.js` - Footer
- `src/components/MenuCard.js` - Menu item card
- `src/components/ReviewCard.js` - Review card
- `src/pages/HomePage.js` - Home page
- `src/pages/MenuPage.js` - Menu page
- `src/pages/AboutPage.js` - About page
- `src/pages/ContactPage.js` - Contact page
- `tailwind.config.js` - Tailwind config
- `package.json` - Dependencies

## 🎯 Selling Points for Client

"Right now people are searching for restaurants online. If you don't have a proper website, you're losing customers daily."

**What they get:**
✅ Professional website  
✅ Mobile-responsive design  
✅ Easy online ordering (WhatsApp)  
✅ Customer reviews section  
✅ Local search ranking  
✅ Trust build with families  
✅ 24/7 online presence  
✅ Competitive advantage  

## 📞 Support & Customization

To customize:
1. Replace phone/email in footer and navbar
2. Update MongoDB connection
3. Add real menu items
4. Add Google Maps embed
5. Set up email notifications
6. Configure payment gateway

## 📄 License

ISC License

---

**Built with ❤️ for Hong Kong Chinese Restaurant**  
*Making authentic Chinese cuisine accessible in Peshawar*
