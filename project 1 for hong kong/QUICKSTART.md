# 🚀 Quick Start Guide - Hong Kong Chinese Restaurant Website

## 5-Minute Setup

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 3: Start MongoDB
Make sure MongoDB is running on your machine:
```bash
# Windows: MongoDB should be running as a service
# Or run: mongod
```

### Step 4: Start Backend (in one terminal)
```bash
cd backend
npm run dev
```
✅ Backend running on `http://localhost:5000`

### Step 5: Start Frontend (in another terminal)
```bash
cd frontend
npm start
```
✅ Frontend opens automatically at `http://localhost:3000`

---

## 📱 Website Features Ready to Use

### ✅ Home Page
- Hero section with call-to-action buttons
- Featured special dishes (Hot & Sour Soup, Egg Fried Soup, Chow Mein)
- Customer testimonials section
- Quick restaurant info
- WhatsApp and Call buttons

### ✅ Menu Page
- 50+ menu items across 7 categories
- Category filter buttons
- Beautiful dish cards with prices
- Quick order CTA

### ✅ About Page
- Restaurant story
- Why choose us section
- Impressive stats display
- Key features highlighted

### ✅ Contact Page
- Professional contact form
- Business hours display
- WhatsApp, Call, Email options
- Map placeholder (ready for Google Maps embed)
- Quick order section

### ✅ Navigation
- Sticky navbar with logo
- Mobile responsive hamburger menu
- Call Now and WhatsApp buttons on navbar
- Footer with complete contact info

---

## 🎨 Customization (First Things to Do)

### 1. Update Phone Number
Replace `+92-XXX-XXXXXXX` in:
- `frontend/src/components/Navbar.js`
- `frontend/src/components/Footer.js`
- `frontend/src/pages/HomePage.js`
- `frontend/src/pages/ContactPage.js`

### 2. Update Restaurant Info
Edit `backend/controllers/contactController.js`:
```javascript
name: 'Hong Kong Chinese Restaurant',
phone: 'YOUR_ACTUAL_PHONE',
whatsapp: 'YOUR_WHATSAPP_NUMBER',
email: 'YOUR_EMAIL',
address: 'YOUR_ADDRESS',
```

### 3. Add Real Menu Items
Database will auto-populate with mock data. Add your real items via:
- MongoDB Compass GUI
- API POST request
- Admin panel (to be built)

### 4. Connect Google Maps (Optional)
In `frontend/src/pages/ContactPage.js`, replace the map placeholder with:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style="border:0;"
  allowFullScreen=""
  loading="lazy"
></iframe>
```

### 5. Update Colors (Optional)
Edit `frontend/tailwind.config.js` to change theme colors

---

## 🔌 API Endpoints Available

All endpoints are ready to use!

### Get Menu Items
```bash
curl http://localhost:5000/api/menu
```

### Get Reviews
```bash
curl http://localhost:5000/api/reviews
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Customer Name",
    "email": "customer@email.com",
    "phone": "03001234567",
    "message": "Your message here"
  }'
```

---

## 🎯 Next Steps

1. ✅ Run the app locally
2. 🎨 Customize contact info
3. 📸 Add real menu items
4. 🗺️ Add Google Maps embed
5. 🚀 Deploy to production

---

## 📦 Deployment Ready

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
# Upload build/ folder to Vercel or Netlify
```

### Backend Deployment (Heroku/Railway)
```bash
cd backend
npm start
```

---

## ✅ What Works Out of the Box

✅ Beautiful, mobile-responsive UI  
✅ Clean navigation with mobile menu  
✅ WhatsApp integration links  
✅ Click-to-call buttons  
✅ Menu with 7 categories  
✅ Customer reviews section  
✅ Contact form  
✅ About page with trust indicators  
✅ Responsive design on all devices  
✅ Tailwind CSS styling  
✅ API routes ready  
✅ MongoDB models defined  

---

## 🐛 Troubleshooting

**Backend won't start?**
- Check if MongoDB is running
- Check if port 5000 is available
- Check `.env` file exists and MONGODB_URI is correct

**Frontend won't start?**
- Check if Node modules are installed: `npm install`
- Check if port 3000 is available
- Clear cache: `npm cache clean --force`

**Can't connect to API?**
- Check backend is running on port 5000
- Check CORS is enabled in `backend/server.js`
- Check proxy in `frontend/package.json`

---

## 💡 Pro Tips

1. **Use React DevTools** - Install browser extension for debugging
2. **Use MongoDB Compass** - Visual DB management
3. **Use Postman** - Test API endpoints
4. **Use VS Code Extensions** - ES7, Tailwind CSS IntelliSense
5. **Enable Hot Reload** - Changes update automatically

---

## 📞 Support Contact Info

When deploying, remember to update:
- Phone number format for WhatsApp links
- SMTP settings for email notifications
- MongoDB Atlas credentials
- Google Maps API key

---

**You're ready to go! 🎉**

Visit `http://localhost:3000` to see your restaurant website live!
