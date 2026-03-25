// Contact controller for handling contact form submissions
const nodemailer = require('nodemailer');

// Configure email transporter
let transporter = null;

if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Send email notification (optional - will work even without email config)
const sendEmailNotification = async (name, email, phone, message) => {
  if (!transporter) {
    console.log('Email not configured. Skipping email notification.');
    return;
  }

  try {
    // Email to restaurant owner
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RESTAURANT_EMAIL || 'owner@example.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><small>This is an automated email from your restaurant website.</small></p>
      `,
    });

    // Auto-reply email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your message - Hong Kong Chinese Restaurant',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Call us: ${process.env.RESTAURANT_PHONE || '+92-XXX-XXXXXXX'}</li>
          <li>WhatsApp us: ${process.env.RESTAURANT_PHONE || '+92-XXX-XXXXXXX'}</li>
          <li>Visit us: ${process.env.RESTAURANT_ADDRESS || 'Peshawar, Pakistan'}</li>
        </ul>
        <p>Best regards,<br />Hong Kong Chinese Restaurant</p>
      `,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - email is optional
  }
};

exports.sendContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'Name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid email format' 
      });
    }

    console.log('Contact message received:', { name, email, phone, message });

    // Send email notification (async, don't wait for it)
    await sendEmailNotification(name, email, phone, message);

    res.json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error in sendContactMessage:', error);
    res.status(500).json({ 
      success: false,
      message: 'An error occurred while processing your request. Please try again or call us.' 
    });
  }
};

exports.getRestaurantInfo = async (req, res) => {
  try {
    const info = {
      name: 'Hong Kong Chinese Restaurant',
      phone: process.env.RESTAURANT_PHONE || '+92-XXX-XXXXXXX',
      whatsapp: process.env.RESTAURANT_PHONE || '+92-XXX-XXXXXXX',
      email: process.env.RESTAURANT_EMAIL || 'info@hkrestaurant.com',
      address: process.env.RESTAURANT_ADDRESS || 'Peshawar, Pakistan',
      hours: {
        open: '11:00 AM - 3:00 PM',
        reopen: '6:30 PM - 11:00 PM',
        closed: 'Monday'
      },
      description: 'Serving Peshawar with authentic Chinese taste for years...',
      happyCustomers: 1000,
      coordinates: {
        lat: 34.0151,
        lng: 71.5249
      }
    };
    res.json(info);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};
