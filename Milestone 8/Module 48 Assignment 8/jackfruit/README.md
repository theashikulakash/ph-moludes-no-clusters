
Your `README.md` is looking solid! Since you are building a modern e-commerce platform, adding a visual touch and a few more details about your specific tech stack choices will make it stand out to recruiters or other developers.

Here is a polished, copy-paste ready version of your **README.md** with improved formatting, clear instructions, and a professional layout.

---

# ☀️ PeakSummer E-Commerce

**PeakSummer** is a high-performance, aesthetically pleasing e-commerce platform designed for the summer season. Built with the latest web technologies, it offers a seamless shopping experience with secure authentication and a highly responsive interface.

🔗 **Live Demo:** [https://peak-summer.vercel.app/](https://peak-summer.vercel.app/)

---

## ✨ Key Features

*   **🔒 Hybrid Authentication:** Secure sign-in via Email/Password or one-click **Google OAuth** integration, powered by **Better Auth**.
*   **💅 Premium UI/UX:** A sleek, modern interface built with **HeroUI** (formerly NextUI) and **Tailwind CSS**.
*   **⚡ Real-time Feedback:** Instant user notifications using **React Toastify**.
*   **📂 Profile Management:** Users can update their display names and profile pictures directly.
*   **📱 Fully Responsive:** Optimized for a flawless experience across mobile, tablet, and desktop devices.
*   **🚀 Modern Stack:** Leveraging **Next.js 15** Server Components for SEO and speed.

---

## 🛠️ Tech Stack & Packages

### Core Frameworks
*   **Next.js 15:** The React framework for production.
*   **Better Auth:** A comprehensive authentication library for Next.js.
*   **MongoDB:** NoSQL database for scalable data storage.

### UI & Styling
*   **HeroUI (@heroui/react):** Modern UI components.
*   **Tailwind CSS:** For rapid, utility-first styling.
*   **Animate.css / React Spring:** For smooth transitions and animations.

### Utilities
*   **React Toastify:** For elegant, non-blocking notifications.
*   **Gravity UI Icons:** A clean, professional icon set.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/theashikulakash/summer-products-e-commerce.git
cd summer-products-e-commerce
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
AUTH_DB_URI=your_mongodb_connection_string

# Better Auth Configuration
BETTER_AUTH_SECRET=your_32_character_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the App
```bash
npm run dev
```
Visit `http://localhost:3000` to see the app in action.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/            # App Router (Pages, Layouts, and API)
│   ├── components/     # Reusable UI components
│   ├── lib/            # Better Auth & DB initialization
│   └── styles/         # Tailwind and Global CSS
├── public/             # Static assets and Lottie animations
└── .env                # Secret environment variables
```

---

## 🛡️ Authentication Flow

PeakSummer implements a dual-layer authentication strategy:

1.  **Email & Password:** Requires a minimum of 8 characters, including at least one uppercase letter and one number for enhanced security.
2.  **Social Login:** Seamless integration with Google Cloud Console for instant account creation and login.

---

## 👤 Author

**Md Ashikul Islam**

*   **GitHub:** [@theashikulakash](https://github.com/theashikulakash)
*   **LinkedIn:** [Md Ashikul Islam](https://www.linkedin.com/in/theashikulakash)

---

















