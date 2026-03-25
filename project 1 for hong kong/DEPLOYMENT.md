# 🚀 DEPLOYMENT & SETUP GUIDE

## Pre-Deployment Checklist

### 1. Environment Configuration

#### Backend (.env file)
```bash
MONGODB_URI=mongodb://localhost:27017/hk-restaurant
PORT=5000
NODE_ENV=development

# Update these with actual values!
RESTAURANT_PHONE=+92-300-1234567
RESTAURANT_EMAIL=owner@hongkongrestaurant.com
RESTAURANT_ADDRESS=123 Main Street, Peshawar, Pakistan

# Email Setup (Optional but recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
```

**For Gmail:**
1. Go to Google Account Settings
2. Enable 2-Factor Authentication
3. Generate App Password for "Mail" application
4. Use that password in SMTP_PASS

#### Frontend (.env.local file)
```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_RESTAURANT_PHONE=+92-300-1234567
REACT_APP_RESTAURANT_WHATSAPP=+92-300-1234567
REACT_APP_RESTAURANT_EMAIL=owner@hongkongrestaurant.com
REACT_APP_GOOGLE_MAPS_KEY=YOUR_GOOGLE_MAPS_API_KEY
REACT_APP_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE
```

**For Google Maps Embed:**
1. Go to Google My Business
2. Find your restaurant location
3. Click "Share" → "Embed a map"
4. Copy the full iframe src URL
5. Paste in REACT_APP_GOOGLE_MAPS_EMBED

### 2. Database Setup

#### Option A: Local MongoDB
```bash
# Windows
mongod

# Or if installed as service
# It should run automatically
```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at mongodb.com
2. Create a free cluster
3. Replace MONGODB_URI with:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hk-restaurant
   ```

### 3. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Add Images

1. Create folder: `frontend/public/images/`
2. Add food photos:
   - `hero.jpg` - Main banner
   - `soup-hot-sour.jpg` - Special dishes
   - Other menu item photos
3. Keep images under 100KB (use TinyPNG.com)

### 5. Customize Restaurant Info

Update in multiple files:
- **Navbar.js** - Phone and WhatsApp buttons
- **Footer.js** - Contact information
- **ContactPage.js** - Address, hours, email
- **Backend contactController.js** - Email templates

## Local Testing

### Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Should run on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Should open http://localhost:3000 automatically
```

### Test Features

- [ ] Hero section loads properly
- [ ] Menu page fetches and displays items
- [ ] Categories filter works
- [ ] Contact form submits successfully
- [ ] WhatsApp buttons open WhatsApp
- [ ] Call buttons dial the phone
- [ ] Google Maps embed displays (if configured)
- [ ] Mobile responsive (test on phone)

## Production Deployment

### Frontend Deployment Options

#### Option 1: Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel login
vercel deploy
```

#### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Option 3: GitHub Pages
```bash
npm run build
# Upload 'build' folder contents to GitHub Pages
```

### Backend Deployment Options

#### Option 1: Heroku
```bash
# Install Heroku CLI
heroku login
heroku create your-app-name
git push heroku main
```

#### Option 2: AWS EC2
1. Create EC2 instance (Ubuntu)
2. Install Node.js and MongoDB
3. Clone repository
4. Set up PM2 for process management
5. Configure Nginx as reverse proxy

#### Option 3: Railway.app (Recommended - Easy)
1. Connect GitHub repository
2. Add environment variables
3. Deploy with one click

### Environment Variables for Production

Update these before deploying:

**Frontend:**
- Change API_URL to production backend URL
- Add Google Maps embed code
- Update contact information
- Enable analytics

**Backend:**
- Set NODE_ENV to "production"
- Use MongoDB Atlas instead of local
- Configure SMTP email credentials
- Use strong database passwords

## Security Checklist

- [ ] Remove console.log() statements from production code
- [ ] Use HTTPS for all connections
- [ ] Validate all user inputs on backend
- [ ] Don't expose API keys in frontend code
- [ ] Use environment variables for sensitive data
- [ ] Enable CORS only for trusted domains
- [ ] Rate limit contact form to prevent spam
- [ ] Use helmet.js middleware for security headers
- [ ] Keep dependencies updated

## Monitoring & Maintenance

### Analytics
```bash
# Add Google Analytics ID to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Error Tracking
- Consider Sentry.io for error tracking
- Monitor backend logs

### Performance
- Check Core Web Vitals on PageSpeed Insights
- Use Lighthouse for performance audit
- Monitor server response times

## Scaling for Higher Traffic

### Backend
- Implement caching (Redis)
- Use load balancer (Nginx/HAProxy)
- Optimize database queries
- Enable database indexing

### Frontend
- Implement code splitting
- Enable gzip compression
- Use CDN for static assets
- Implement service workers for offline support

## Support & Troubleshooting

### Common Issues

**API Connection Error**
- Check if backend server is running
- Verify REACT_APP_API_URL is correct
- Check browser console for CORS errors

**Email Not Sending**
- Verify SMTP credentials
- Check Gmail App Password (not regular password)
- Check spam folder for test emails

**Database Connection Error**
- Ensure MongoDB service is running
- Verify MONGODB_URI is correct
- Check database credentials

**Images Not Loading**
- Verify images are in `public/images/` folder
- Check image paths in component files
- Ensure images are optimized (under 100KB)

## Useful Commands

```bash
# Install new packages
npm install package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated

# Clean install
rm -rf node_modules package-lock.json
npm install

# View running processes
lsof -i :5000  # Backend
lsof -i :3000  # Frontend

# Kill process
kill -9 PID
```

## Backup & Data Recovery

- Regularly backup MongoDB database
- Keep version control updated on GitHub
- Store important configs securely
- Create database dumps periodically

---

**For More Help:**
- Check individual README.md files in /backend and /frontend
- Consult project documentation
- Contact technical support if needed
