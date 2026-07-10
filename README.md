# PinSphere 📌

A modern, fast, and fully functional Pinterest clone built with Next.js and Tailwind CSS. PinSphere allows users to explore, create, save, and share ideas through an intuitive and responsive masonry grid interface.

## 🚀 Live Demo
**[View Live Project Here](https://your-vercel-demo-link.vercel.app/)**

## ✨ Features

- **Fluid Masonry Layout:** Pure CSS-based, lightweight multi-column layout for rendering images seamlessly without heavy JavaScript calculations.
- **Dark & Light Mode:** Complete theme support with a manual toggle in the navigation bar, ensuring accessibility and a premium feel.
- **Robust State Management:** Built using React Context API to manage global states like 'Saved Pins', 'Created Pins', and 'Notifications' instantly across the app.
- **Interactive Pin Details:** Dynamic routing (`/pin/[id]`) featuring live simulated commenting and one-click URL sharing via the Clipboard API.
- **Pin Creation:** A user-friendly modal interface allowing users to add new visual ideas to the global feed instantly.
- **Profile Dashboard:** A personalized space with dedicated tabs to track and manage 'Created' and 'Saved' pins.
- **Event Delegation & Bubbling Fixes:** Optimized click handlers on nested components (like save buttons over image links) for flawless UX.
- **Fully Responsive:** Mobile-first approach ensuring the UI looks perfect on phones, tablets, and large desktop screens.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 
- **State Management:** React Context API & Hooks (`useState`, `useEffect`)
- **Deployment:** Vercel

## ⚙️ Getting Started (Local Development)

Follow these steps to set up the project locally on your machine.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/pinsphere.git](https://github.com/yourusername/pinsphere.git)
   cd pinsphere

   Install dependencies:

Bash
npm install
(or yarn install / pnpm install depending on your package manager)

Start the development server:

Bash
npm run dev
Open your browser:
Navigate to http://localhost:3000 to view the application in action.

📂 Project Structure
Plaintext
├── app/                  # Next.js App Router (Routes: /, /profile, /pin/[id], /settings)
├── components/           # Reusable UI elements (Navbar, PinCard, MasonryGrid, Modals)
├── context/              # AppContext for global application state
├── data/                 # Mock data for initial rendering (Pins, Categories, Boards)
└── globals.css           # Global stylesheets including custom masonry CSS
🚀 Future Enhancements
While this version operates with a robust mock state management system for frontend demonstration, future iterations will include:

Integration with a backend (Node.js/Express) and Database (MongoDB/PostgreSQL).

Real-time image uploads using Cloudinary or AWS S3.

User Authentication via NextAuth.js.

Infinite scrolling using the Intersection Observer API for performance optimization.

Designed and Developed for frontend technical assessment.


***

**Pro Tip:** Jo links `[https://your-vercel-demo-link.vercel.app/](https://your-verce