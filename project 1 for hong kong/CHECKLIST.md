# ✅ Development Checklist - Hong Kong Restaurant Website

## 🚀 Getting Started (First Time)

### 1. Install Dependencies
- [ ] Open terminal in project root
- [ ] Run: `cd backend && npm install`
- [ ] Run: `cd ../frontend && npm install`
- [ ] Verify Node modules folders exist

### 2. Start the Application
- [ ] Open 2 terminals
- [ ] Terminal 1: `cd backend && npm run dev`
- [ ] Terminal 2: `cd frontend && npm start`
- [ ] Visit http://localhost:3000 in browser
- [ ] Verify website loads without errors

### 3. Test Basic Functionality
- [ ] Home page loads with hero image and buttons
- [ ] Menu page shows 50+ dishes
- [ ] About page displays properly
- [ ] Contact page form works
- [ ] Navigation works on mobile (hamburger menu)
- [ ] All buttons are clickable

---

## 🎨 Customization (Must Do)

### Business Information
- [ ] Replace `+92-XXX-XXXXXXX` with actual phone number
  - [ ] In `frontend/src/components/Navbar.js`
  - [ ] In `frontend/src/components/Footer.js`
  - [ ] In `frontend/src/pages/HomePage.js`
  - [ ] In `frontend/src/pages/ContactPage.js`
  - [ ] In `backend/controllers/contactController.js`

- [ ] Update email address
  - [ ] `frontend/src/components/Footer.js`
  - [ ] `frontend/src/pages/ContactPage.js`
  - [ ] `backend/controllers/contactController.js`

- [ ] Update restaurant location
  - [ ] All pages that mention "Peshawar, Pakistan"
  - [ ] Contact page address
  - [ ] Footer location

- [ ] Update hours of operation
  - [ ] `frontend/src/pages/ContactPage.js`
  - [ ] `frontend/src/components/Footer.js`

### Website Colors & Theme
- [ ] Review color scheme (Red, Gold, Dark Gray)
- [ ] Customize colors in `frontend/tailwind.config.js` if needed
- [ ] Test colors on different devices

---

## 🍲 Menu Items

### Add Real Menu Data
- [ ] Create MongoDB database entry for each dish
- [ ] Or update `frontend/src/pages/MenuPage.js` mock data
- [ ] Include:
  - [ ] Dish name
  - [ ] Description
  - [ ] Category (Soups, Rice, Chow Mein, etc.)
  - [ ] Price in Pakistani Rupees
  - [ ] Special flag for featured dishes

### Categories to Fill
- [ ] Soups (at least 3 dishes)
- [ ] Rice (at least 4 dishes)
- [ ] Chow Mein (at least 3 dishes)
- [ ] Chicken (at least 3 dishes)
- [ ] Beef (at least 2 dishes)
- [ ] Seafood (at least 2 dishes)
- [ ] Vegetables (at least 2 dishes)

---

## 📸 Media & Images

### Add Photos
- [ ] Create `frontend/public/images/` folder
- [ ] Add hero.jpg (banner image)
- [ ] Add dish photos for grid
- [ ] Update image paths in components
- [ ] Optimize images for web (compress)

### Food Photography Tips
- [ ] Use high-quality food photos
- [ ] Consistent lighting
- [ ] Clean plates and presentation
- [ ] Appetizing food styling
- [ ] Consistent image borders/frames

---

## ⭐ Reviews & Social Proof

### Add Real Customer Reviews
- [ ] Collect reviews from Google
- [ ] Collect from Facebook
- [ ] Add to `frontend/src/pages/HomePage.js`
- [ ] Include customer names and ratings
- [ ] Update average rating display

### Trust Indicators
- [ ] Update "1000+ happy customers" number
- [ ] Update years in business
- [ ] Add actual testimonials
- [ ] Display on home page

---

## 🔗 Integrations

### WhatsApp Integration
- [ ] Test WhatsApp link works
- [ ] Verify phone number format includes country code
- [ ] Test on desktop and mobile
- [ ] Add WhatsApp business account (optional)

### Click-to-Call
- [ ] Test on mobile devices
- [ ] Verify phone number format
- [ ] Include international format (+92)

### Google Maps
- [ ] Get your Google Maps embed code
- [ ] Replace map placeholder in Contact page
- [ ] Verify location is correct
- [ ] Test on mobile

### Google My Business
- [ ] Create/claim Google My Business listing
- [ ] Add complete information
- [ ] Add business logo
- [ ] Add hours and services

---

## 🗄️ Database Setup

### MongoDB Configuration
- [ ] Choose: Local or Cloud (MongoDB Atlas)
- [ ] If Local:
  - [ ] Install MongoDB
  - [ ] Verify running on port 27017
  - [ ] Update `.env` MONGODB_URI
- [ ] If Atlas:
  - [ ] Create free account
  - [ ] Create cluster
  - [ ] Get connection string
  - [ ] Update `.env` with credentials

### Database Collections
- [ ] Menu Items collection created
- [ ] Reviews collection created
- [ ] Orders collection created
- [ ] Add initial menu items
- [ ] Add sample reviews

---

## 📞 Contact & Communication

### Email Notifications (Optional)
- [ ] Set up SMTP in `.env` (Gmail/custom)
- [ ] Test sending contact form emails
- [ ] Create welcome email template
- [ ] Add order confirmation emails

### Contact Form
- [ ] Test form submission
- [ ] Verify validation works
- [ ] Check success message displays
- [ ] Verify data is saved to database

---

## 🧪 Testing

### Desktop Testing
- [ ] Home page loads correctly
- [ ] All links work
- [ ] Buttons are clickable
- [ ] Images load
- [ ] Contact form works
- [ ] No console errors

### Mobile Testing
- [ ] Responsive design works
- [ ] Hamburger menu works
- [ ] Buttons are touch-friendly
- [ ] Images scale correctly
- [ ] No horizontal scrolling
- [ ] WhatsApp links work
- [ ] Call buttons work

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if Mac)
- [ ] Edge (latest)
- [ ] Mobile browsers

### API Testing
- [ ] GET /api/menu returns menu items
- [ ] GET /api/reviews returns reviews
- [ ] POST /api/contact submits form
- [ ] Endpoints return correct data

---

## 📈 Performance Optimization

### Frontend
- [ ] Images are optimized (compressed)
- [ ] Lazy loading implemented
- [ ] CSS is minified
- [ ] JavaScript is minified
- [ ] No unused dependencies
- [ ] Page load time < 3 seconds

### Backend
- [ ] API responses are fast (< 200ms)
- [ ] Database indexes created
- [ ] Error handling implemented
- [ ] Logging configured
- [ ] CORS properly configured

---

## 🔐 Security

### Before Deployment
- [ ] Change all placeholder values
- [ ] Verify `.env` is in `.gitignore`
- [ ] Remove test data
- [ ] Enable HTTPS
- [ ] Update CORS settings
- [ ] Remove admin credentials
- [ ] SQL/NoSQL injection prevention
- [ ] Input validation on all forms
- [ ] Rate limiting on API

---

## 🚀 Deployment Preparation

### Frontend (Vercel)
- [ ] Run `npm run build` in frontend
- [ ] Test build works: `npm start` in build folder
- [ ] Create GitHub repository
- [ ] Connect to Vercel
- [ ] Set environment variables
- [ ] Test deployed version

### Backend (Railway/Heroku)
- [ ] Set up production MongoDB
- [ ] Create production `.env`
- [ ] Deploy to hosting
- [ ] Test API endpoints
- [ ] Set environment variables
- [ ] Configure database backups

### Domain & DNS
- [ ] Register domain name
- [ ] Set DNS records
- [ ] Test domain access
- [ ] Set up SSL certificate
- [ ] Verify HTTPS works

---

## 📊 Post-Launch Tasks

### Analytics & Monitoring
- [ ] Set up Google Analytics
- [ ] Monitor API performance
- [ ] Track conversion rates
- [ ] Set up error logging
- [ ] Monitor database usage

### Marketing
- [ ] Create Google My Business ads
- [ ] Post on Facebook
- [ ] Share on Instagram
- [ ] Send WhatsApp broadcasts
- [ ] Email marketing setup

### Maintenance
- [ ] Regular backups scheduled
- [ ] Monitor server health
- [ ] Update dependencies monthly
- [ ] Check security vulnerabilities
- [ ] Respond to reviews

---

## 🎯 Success Metrics

Track these to measure success:
- [ ] Website monthly visits
- [ ] Online order percentage
- [ ] Average order value
- [ ] Customer reviews/ratings
- [ ] Website bounce rate
- [ ] Mobile vs desktop traffic
- [ ] Top viewed menu items
- [ ] Peak ordering times

---

## 📝 Additional Notes

### What Works Out of the Box
✅ Beautiful responsive design  
✅ 4 complete pages  
✅ Menu with 7 categories  
✅ Contact form  
✅ WhatsApp integration  
✅ Click-to-call buttons  
✅ Customer reviews  
✅ API ready  
✅ MongoDB connected  
✅ Tailwind styling  

### What You Need to Add
- [ ] Real restaurant phone number
- [ ] Real email address
- [ ] Real address
- [ ] Real menu items
- [ ] Restaurant photos
- [ ] Actual customer reviews
- [ ] Google Maps embed
- [ ] Google My Business setup
- [ ] Payment gateway (optional)
- [ ] Delivery integration (optional)

---

## 🎓 Learning Resources

- React Hooks: https://react.dev/reference/react
- Tailwind CSS: https://tailwindcss.com/docs
- Express.js: https://expressjs.com/api.html
- MongoDB: https://docs.mongodb.com
- Deployment: https://vercel.com/docs

---

## ⚡ Quick Commands

```bash
# Start backend
cd backend && npm run dev

# Start frontend
cd frontend && npm start

# Build frontend for production
cd frontend && npm run build

# Test API
curl http://localhost:5000/api/menu

# Check database
# (in MongoDB Compass)
mongodb://localhost:27017/hk-restaurant

# Deploy to Vercel
vercel --prod
```

---

**Remember: Quick wins first, then optimize and scale!**

Priority: Phone → Colors → Menu → Photos → Deploy

---

## 📞 Need Help?

1. Check error messages in console
2. Review README.md and QUICKSTART.md
3. Check browser developer tools (F12)
4. Verify `.env` files exist
5. Ensure MongoDB is running
6. Check if ports 3000 and 5000 are available
