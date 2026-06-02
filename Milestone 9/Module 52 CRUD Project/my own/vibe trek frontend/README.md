# Vibe Trek - Your Ultimate Travel Companion

**Vibe Trek** is a comprehensive Tours and Travel booking platform designed to provide users with a seamless experience in discovering and booking their next adventure. Whether you're looking for a weekend getaway or a long-distance journey, Vibe Trek ensures your travel planning is as "vibing" and comfortable as the trip itself.

**Live Link:** [https://vibe-trek-frontend.vercel.app/](https://www.google.com/search?q=https://vibe-trek-frontend.vercel.app/) *(Replace with your actual production URL)*

---

## 🎯 Purpose of the App

The primary goal of Vibe Trek is to simplify the travel booking lifecycle. It serves as a bridge between travel enthusiasts and destination providers by offering:

* **Discovery:** A visually rich gallery of destinations with real-time pricing and duration details.
* **Seamless Booking:** An integrated authentication system to manage personal travel itineraries.
* **User Management:** Secure sign-up and login functionality to keep track of bookings and user profiles.
* **Responsive Experience:** A mobile-first design ensuring users can book trips from any device.

---

## 🛠 Tech Stack

Vibe Trek is built using a modern, scalable stack to ensure performance and maintainability:

* **Framework:** [Next.js]() (App Router)
* **Authentication:** [Better-Auth]()
* **Database:** [MongoDB]()
* **Styling:** [Tailwind CSS]()
* **UI Components:** [HeroUI]() (formerly NextUI)
* **Icons:** [React Icons]() / Lucide React

---

## 📂 Folder Structure Explanation

Based on the project architecture, here is a breakdown of the key directories:

```text
vibe-trek-frontend/
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, APIs)
│   │   ├── api/            # Backend API routes (Auth handlers)
│   │   ├── destinations/   # Dynamic routes for trip details
│   │   ├── signup/         # User registration page logic
│   │   ├── layout.js       # Root layout & Metadata (Favicon, SEO)
│   │   └── page.jsx        # Landing page with Destination Cards
│   ├── components/         # Reusable UI parts (Navbar, Cards, Footer)
│   └── lib/                # Shared logic and configurations
│       ├── auth.js         # Server-side Better-Auth setup
│       └── auth-client.js  # Client-side auth utilities
├── public/                 # Static assets (fevicon.svg, images)
├── .env                    # Environment variables (Private)
└── tailwind.config.js      # Custom theme and styling rules

```

---

## 🚀 Installation & Setup

Follow these steps to get a local copy up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/theashikulakash/vibe-trek-travel.git
cd vibe-trek-travel

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Setup

Create a `.env` file in the root directory and add your credentials:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret_key
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

```

### 4. Run the Development Server

```bash
npm run dev

```

Open [http://localhost:3000]() with your browser to see the result.

---

## ✨ Features

* **Dynamic Destination Cards:** Cards automatically adjust to content length while maintaining a uniform height for a clean grid layout.
* **Secure Authentication:** Powered by Better-Auth with specialized client and server-side logic.
* **Metadata Optimized:** Custom SEO titles and descriptions with a dedicated SVG favicon.
* **High Performance:** Optimized images using Next.js `Image` component for faster loading and better user experience.
