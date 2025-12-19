# Full Stack Portfolio Application

A modern full-stack application built with React, TypeScript, Tailwind CSS, and Firebase. Features a beautiful landing page and a comprehensive admin panel for managing content.

## Features

### Landing Page
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Our Projects**: Display all projects fetched from the database with images, names, and descriptions
- **Happy Clients**: Showcase client testimonials with photos, names, designations, and feedback
- **Contact Form**: Fully functional form for visitors to submit their contact information
- **Newsletter Subscription**: Allow visitors to subscribe to your newsletter
- **Responsive Design**: Beautiful, mobile-friendly design with smooth animations

### Admin Panel
Access the admin panel at `/admin` to manage your content:

- **Project Management**: Add, edit, and delete projects with images, names, and descriptions
- **Client Management**: Add, edit, and delete client testimonials
- **Contact Form Submissions**: View all contact form submissions with complete details
- **Newsletter Subscribers**: View all newsletter subscriptions and export to CSV

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Lucide React for beautiful icons
- **Database**: Firebase Firestore (NoSQL cloud database)
- **Build Tool**: Vite for fast development and optimized production builds

## Getting Started

The application is ready to use. Simply navigate to:
- `/` - Landing page
- `/admin` - Admin panel

## Database Structure

The application uses four main Firestore collections:

1. **projects**: Stores project information (name, description, image_url, created_at, updated_at)
2. **clients**: Stores client testimonials (name, designation, description, image_url, created_at, updated_at)
3. **contact_forms**: Stores contact form submissions (full_name, email, mobile_number, city, created_at)
4. **newsletter_subscriptions**: Stores newsletter subscriber emails (email, created_at)

## Firebase Setup

To use this application with your own Firebase project:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Firestore Database in your project
4. Update the Firebase configuration in `src/lib/firebase.ts` with your project credentials
5. Set up Firestore security rules as needed for your use case

## Admin Panel Features

### Project Management
- Add new projects with image URLs (Pexels images work great)
- Edit existing projects
- Delete projects
- View all projects in an organized list

### Client Management
- Add client testimonials with profile images
- Include client name, designation, and testimonial
- Edit and delete clients
- Display client feedback prominently

### Contact Form Submissions
- View all form submissions
- See contact details (name, email, phone, city)
- Delete processed submissions
- Track submission dates

### Newsletter Subscribers
- View all newsletter subscriptions
- Export subscriber list to CSV
- Delete unsubscribed users
- Track subscription dates

## Design Highlights

- Professional blue gradient theme
- Clean, modern card-based layouts
- Smooth hover effects and transitions
- Mobile-responsive navigation
- Accessible form inputs with icons
- Clear visual hierarchy
- Proper spacing and typography

## Security

- Firebase Firestore security rules should be configured based on your needs
- Current implementation allows read/write operations from the client
- For production use, implement proper Firestore security rules
- Consider adding Firebase Authentication for admin panel access
- Secure image URL storage

## Next Steps

You can now:
1. Add your own projects and clients through the admin panel
2. Customize the hero section text and styling
3. Adjust colors and branding to match your needs
4. Deploy the application to your preferred hosting platform
5. Set up email notifications for contact form submissions

Enjoy your new portfolio application!
