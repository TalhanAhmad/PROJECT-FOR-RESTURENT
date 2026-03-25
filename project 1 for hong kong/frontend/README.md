# Frontend README

# Hong Kong Chinese Restaurant - Frontend

A modern, responsive React frontend for the Hong Kong Chinese Restaurant website.

## Features

- 🎨 Beautiful UI with Tailwind CSS
- 📱 Fully responsive design
- 🍲 Interactive menu with categories
- ⭐ Customer reviews section
- 📞 Click-to-call functionality
- 💬 WhatsApp integration
- 📧 Contact form
- 🗺️ Location information
- 🎯 SEO optimized

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file for any necessary API endpoints:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the App

Development mode:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- Axios
- React Icons

## Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── api/             # API calls
├── context/         # Context providers
└── App.js           # Main app component
```

## Key Pages

1. **Home Page** - Hero section, specials, reviews, quick info
2. **Menu Page** - Categorized menu with filter options
3. **About Page** - Restaurant story and why choose us
4. **Contact Page** - Contact form, hours, location

## Customization

### Update Restaurant Info

Edit the phone number and WhatsApp links in:
- `src/components/Navbar.js`
- `src/components/Footer.js`
- `src/pages/HomePage.js`
- `src/pages/ContactPage.js`

### Add Real Menu Items

Replace mock data in `src/pages/MenuPage.js` with API calls:

```javascript
useEffect(() => {
  fetch('/api/menu')
    .then(res => res.json())
    .then(data => setMenuItems(data));
}, []);
```

### Customize Colors

Edit `frontend/tailwind.config.js` to change the color scheme.

## Contact Info Placeholders

Replace these with actual details:
- Phone: `+92-XXX-XXXXXXX`
- Email: `info@hkrest.com`
- Location: `Peshawar, Pakistan`

## License

ISC
