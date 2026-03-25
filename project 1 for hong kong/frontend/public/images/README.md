# Restaurant Images Guide

This folder should contain all food and restaurant images displayed on the website.

## Required Images

### Hero Images
- `hero.jpg` - Main hero banner image (recommended: 1920x600px)
  - Show appetizing Chinese food dishes
  - High quality, professional food photography

### Menu Item Images
- `soup-hot-sour.jpg` - Hot & Sour Soup
- `rice-egg.jpg` - Egg Fried Rice
- `noodles-special.jpg` - Chow Mein Special
- And so on for other menu items...

### Restaurant Images
- `restaurant-interior.jpg` - Inside dining area
- `restaurant-exterior.jpg` - Outside view
- `chef-cooking.jpg` - Chef in action

## Image Requirements

1. **Size**: Optimize for web (compress to under 100KB per image)
2. **Format**: Use JPG or PNG format
3. **Aspect Ratio**: 
   - Menu items: 400x300px (4:3 ratio)
   - Hero: 1920x600px (16:5 ratio)
   - General: 800x600px (4:3 ratio)

## Optimization Tools

- Use TinyPNG.com to compress images
- Use ImageMagick for batch resizing
- Use Photoshop or GIMP for professional editing

## Adding Images to HTML

```html
<img src="/images/hero.jpg" alt="Description" />
```

## SEO Tips

- Use descriptive file names: `hot-sour-soup.jpg` instead of `image1.jpg`
- Add alt text to all images for accessibility
- Keep file sizes small for faster loading

---

**How to Add Images:**
1. Save high-quality food/restaurant photos
2. Compress them to web-friendly sizes
3. Place in this folder
4. Update component files to reference the new images
5. Test on different devices to ensure proper display
