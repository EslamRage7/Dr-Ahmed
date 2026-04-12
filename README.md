# SmileCare Clinic - Modern Dental Website

A modern, professional, and responsive dental clinic website built with React + Vite. Designed with a medical, trustworthy aesthetic using soft colors (white, blue, light gray).

## 🌟 Features

### ✨ Core Sections

- **Header Navigation** - Sticky header with smooth scrolling
- **Hero Section** - Eye-catching headline "Your Smile, Our Priority" with call-to-action
- **About Doctor** - Doctor profile with certifications and professional bio
- **Services** - 6 dental services displayed in attractive cards with pricing
- **Before & After Gallery** - Filterable patient case gallery
- **Testimonials** - Patient reviews carousel with ratings
- **Booking Form** - Complete appointment booking system with WhatsApp integration
- **Special Offers** - Promotional packages and discounts
- **Blog** - Dental tips and educational articles
- **Contact** - Address, phone, hours, and Google Maps embed
- **Footer** - Links, social media, and contact info
- **WhatsApp Button** - Sticky floating button for direct messaging

### 🎨 Design Features

- Responsive mobile-friendly design
- Smooth animations and transitions
- Professional color scheme (soft blues and grays)
- Modern fonts and icons
- Clean and intuitive UI/UX
- Fast loading performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd test

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── BeforeAfter.jsx
│   ├── Testimonials.jsx
│   ├── Booking.jsx
│   ├── Contact.jsx
│   ├── Blog.jsx
│   ├── Offers.jsx
│   ├── WhatsAppButton.jsx
│   └── Footer.jsx
├── styles/             # Component-specific CSS files
│   ├── variables.css   # Global colors, spacing, and animations
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Services.css
│   ├── BeforeAfter.css
│   ├── Testimonials.css
│   ├── Booking.css
│   ├── Contact.css
│   ├── Blog.css
│   ├── Offers.css
│   ├── WhatsAppButton.css
│   └── Footer.css
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Customization

### Update Clinic Information

#### In `components/Header.jsx`:

```javascript
// Update clinic name
<span className="logo-text">Your Clinic Name</span>
```

#### In `components/About.jsx`:

```javascript
// Update doctor name and qualifications
<h3 className="doctor-name">Dr. Your Name</h3>
<p className="doctor-specialty">Your Specializations</p>
```

#### In `components/Contact.jsx`:

```javascript
// Update contact details
<p><a href="tel:+yourphone">+Your Phone Number</a></p>
<p><a href="mailto:youremail@example.com">your@email.com</a></p>
<p>Your Address, City, State ZIP</p>
```

#### In `components/WhatsAppButton.jsx`:

```javascript
// Update WhatsApp number
const whatsappNumber = "+yourwhatsappnumber";
```

### Customize Colors

Edit `src/styles/variables.css`:

```css
:root {
  --primary-blue: #2563eb; /* Main brand color */
  --secondary-blue: #0ea5e9; /* Secondary color */
  --accent-blue: #06b6d4; /* Accent */
  --white: #ffffff;
  --light-gray: #f8fafc;
  --dark-gray: #64748b;
  /* ... update other colors */
}
```

### Add Your Services

Edit `components/Services.jsx`:

```javascript
const services = [
  {
    id: 1,
    icon: "🧼",
    title: "Your Service Name",
    description: "Service description",
    price: "Price",
  },
  // Add more services...
];
```

### Update Testimonials

Edit `components/Testimonials.jsx`:

```javascript
const testimonials = [
  {
    id: 1,
    name: "Patient Name",
    service: "Service Name",
    rating: 5,
    text: "Their testimonial text...",
    avatar: "👩", // Use emoji
  },
  // Add more testimonials...
];
```

### Add Blog Articles

Edit `components/Blog.jsx`:

```javascript
const articles = [
  {
    id: 1,
    title: "Article Title",
    excerpt: "Brief excerpt",
    date: "Date",
    author: "Author Name",
    category: "Category",
    image: "📝",
  },
  // Add more articles...
];
```

### Customize Offers

Edit `components/Offers.jsx`:

```javascript
const offers = [
  {
    id: 1,
    title: "Offer Title",
    discount: "30%",
    description: "Offer description",
    services: "• Service 1\n• Service 2",
    code: "OFFERCODE",
    validity: "Valid till Date",
    color: "primary",
  },
  // Add more offers...
];
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🎨 Icons

Icons are from `react-icons` library. Common icon packages included:

- `FaArrowRight`, `FaCheckCircle`, etc. from FA icons
- `IoMenu`, `IoClose` from Ionicons
- `FaPhone`, `FaMapLocationDot`, etc. for contact

## 📊 Performance

- Optimized images and lazy loading
- Minified CSS and JavaScript
- Fast initial load time
- Smooth animations using CSS transitions
- SEO-friendly HTML structure

## 🔒 Security

- No sensitive data hardcoded
- HTTPS ready for deployment
- Protection against common vulnerabilities

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For customization support or issues, please refer to the component files and their inline comments.

## 🚀 Deployment

### Deploy to Netlify

```bash
# Build the project
npm run build

# The `dist` folder is ready to deploy
```

Then connect your GitHub repository to Netlify for automatic deployments.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📧 Contact Information

For any questions about implementing or customizing this dental clinic website, please refer to the inline comments in the component files.

---

**Built with ❤️ using React + Vite**
