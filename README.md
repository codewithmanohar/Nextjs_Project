# 🍳 Cookify – AI Recipe Generator

Cookify is an **AI-powered recipe generator** that helps users create delicious recipes based on ingredients, preferences, and dietary choices. Built with **Next.js** and **Google GenAI**, Cookify delivers fast, personalized, and interactive cooking ideas.

---

## 🚀 Features

* 🤖 AI-generated recipes using Google GenAI
* 🥕 Ingredient-based recipe suggestions
* 🌱 Veg / Non‑Veg preference toggle
* 🔐 Authentication with NextAuth
* ⭐ Save & manage favorite recipes
* 🎨 Modern, responsive UI with Tailwind CSS & Radix UI
* ⚡ Fast performance with Next.js

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Radix UI
* Zustand (state management)

### Backend

* Next.js API Routes
* Google GenAI (`@google/genai`)
* MongoDB with Mongoose

### Authentication

* NextAuth.js

### Utilities

* Axios
* React Toastify
* Lucide React / React Icons

---

## 📦 Dependencies (Main)

```json
next
react
@google/genai
mongoose
next-auth
zustand
tailwindcss
axios
```

---

## 📂 Project Structure

```bash
app/
 ├─ api/        # API routes (AI, auth, database)
 ├─ components/ # Reusable UI components
 ├─ lib/        # AI, DB, auth configs
 ├─ store/      # Zustand stores
 └─ page.jsx    # Main pages
```

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
GOOGLE_API_KEY=your_google_genai_key
MONGODB_URI=your_mongodb_connection
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🧠 How It Works

1. User selects ingredients & preferences
2. Prompt is sent to Google GenAI
3. AI generates a custom recipe
4. Recipe is displayed & can be saved



## 👨‍💻 Author

**Manohar Kumar**
Web Developer | MERN Stack | Next.js

* 🌐 Portfolio: [https://tech-manohar.vercel.app/](https://tech-manohar.vercel.app/)
* 🐙 GitHub: [https://github.com/codewithmanohar](https://github.com/codewithmanohar)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

