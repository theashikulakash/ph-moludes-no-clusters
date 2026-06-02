# Vibe Trek Travel

Live Demo: https://vibe-trek-travel.vercel.app

## Project Overview

**Vibe Trek Travel** is a modern travel booking web application built with **Next.js** that enables authenticated users to browse destinations, manage bookings, and submit new travel listings. The application is designed with a responsive user interface, secure authentication, and seamless CRUD operations.

## Key Features

- User authentication with email/password and social login support.
- Destination browsing with rich listing cards and detail views.
- Add new travel destinations with a dedicated submission form.
- Personal booking management with cancel booking support.
- Admin-style destination editing and delete confirmation flows.
- Responsive layout optimized for desktop and mobile.

## Technologies Used

- Next.js (App Router)
- React
- JavaScript (ES2024)
- CSS modules / global styling
- BetterAuth for secure authentication
- Google OAuth integration
- RESTful API routes
- Vercel deployment

## Application Structure

- `app/` — main application routes and pages
- `app/api/auth/[...all]/route.js` — authentication API route
- `app/destinations/` — destination listing and detail pages
- `app/add-destination/page.jsx` — add destination form
- `app/my-bookings/page.jsx` — user booking dashboard
- `components/` — reusable UI components
- `lib/` — authentication helpers and client utilities
- `public/assets/destinations/` — destination images and static assets

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/vibe-trek-travel.git
cd m52-wanderlust-client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the required environment variables:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_SECRET=your_google_secret
NEXT_PUBLIC_SERVER_URL=your_api_base_url
```

4. Run the development server:

```bash
npm run dev
```

5. Open the app in your browser:

```bash
http://localhost:3000
```

## Deployment

This project is deployed on **Vercel**. The live application is available at:

- https://vibe-trek-travel.vercel.app

## Resume-Ready Highlights

- Built a production-ready travel booking system with **Next.js** and **React**.
- Implemented secure authentication and authorization flows.
- Created full **CRUD functionality** for destinations and bookings.
- Integrated external services including **Google OAuth** and **MongoDB**.
- Deployed to **Vercel** for fast, scalable hosting.

## Future Improvements

- Add role-based access control for admin and user roles.
- Enable real-time booking updates and notifications.
- Improve search and filtering for destinations.
- Add image upload support for destination listings.

## License

This project is released under the MIT License.
