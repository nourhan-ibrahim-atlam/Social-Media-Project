# 🌐 M&N Media — Social Media Platform

![M&N Media](https://img.shields.io/badge/M%26N-Media-blueviolet?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-1.10-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages](#-pages)
- [API Reference](#-api-reference)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧠 About

**M&N Media** is a modern, responsive social media web application that allows users to create accounts, share posts with images, interact through comments, and explore other users' profiles — all powered by a RESTful API.

> Built as a frontend-only project using vanilla JavaScript and Bootstrap 5, connected to the [Tarmeez Academy API](https://tarmeezacademy.com).

---

## ✨ Features

- 🔐 **Authentication** — Register & Login with JWT token support
- 📝 **Posts** — Create, Edit, and Delete your own posts
- 🖼️ **Image Upload** — Attach images to posts and profile pictures
- 💬 **Comments** — Add and view comments on any post
- 👤 **User Profiles** — View profile details and user-specific posts
- 📜 **Infinite Scroll** — Auto-load more posts as you scroll
- 🏷️ **Tags** — Posts support colorful tag badges
- 📱 **Responsive Design** — Fully responsive across all devices

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Markup & page structure |
| **CSS3** | Custom styling |
| **JavaScript (ES6+)** | Core application logic |
| **Bootstrap 5.3** | UI components & responsive grid |
| **Bootstrap Icons** | Icon library |
| **Axios** | HTTP client for API requests |
| **LocalStorage** | Client-side session management |

---

## 📁 Project Structure

```
M&N-Media/
│
├── 📄 index.html              # Home page — displays all posts
├── 📄 post-details.html       # Single post with comments
├── 📄 Profile.html            # User profile page
│
├── 📂 CSS/
│   ├── general.css            # Global styles & resets
│   └── home.css               # Posts, cards, and layout styles
│
├── 📂 JS/
│   ├── generalDOM.js          # Shared navbar, modals, and utilities
│   ├── home.js                # Home feed with infinite scroll
│   ├── login.js               # Auth logic (login, register, logout)
│   ├── addPost.js             # Create & edit post logic
│   ├── postDetails.js         # Post detail view & comments
│   └── profile.js             # User profile & their posts
│
├── 📂 Images/
│   └── logo.jpg               # App logo / favicon
│
├── 📂 node_modules/           # NPM dependencies (not tracked in git)
├── package.json
├── package-lock.json
├── .gitignore
├── robots.txt
└── sitemap.xml
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Node.js](https://nodejs.org/) (only needed to install dependencies)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/nourhan-ibrahim-atlam/Social-Media-Project

# 2. Navigate into the project
cd mn-media

# 3. Install dependencies (Bootstrap, Axios, etc.)
npm install

# 4. Open in browser
# Simply open index.html in your browser
# Or use a local server like Live Server (VS Code extension)
```

> ⚠️ **Note:** The project requires a local/static server in some browsers due to JS module loading. Use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or any HTTP server.

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| **Home** | `index.html` | Browse all posts with infinite scroll |
| **Post Details** | `post-details.html` | View a post's full content + comments |
| **Profile** | `Profile.html` | View user info and their posts |

---

## 🔌 API Reference

This project uses the Tarmeez Academy REST API.

Base URL: https://tarmeezacademy.com/api/v1

### 🔐 Auth

| Endpoint | Method | Description |
|---|---|---|
| /register | POST | Create a new user account |
| /login | POST | Authenticate and receive JWT token |
| /logout | POST | Invalidate the current session |
| /profile | PUT | Update the authenticated user's profile |

### 👤 User

| Endpoint | Method | Description |
|---|---|---|
| /users | GET | Fetch all users |
| /users/:id | GET | Get a specific user's profile |
| /users/:id/posts | GET | Get posts by a specific user |

### 📝 Posts

| Endpoint | Method | Description |
|---|---|---|
| /posts | GET | Fetch all posts (paginated) |
| /posts/:id | GET | Fetch a single post with comments |
| /posts | POST | Create a new post (auth required) |
| /posts/:id | PUT | Update a post (auth required) |
| /posts/:id | DELETE | Delete a post (auth required) |

### 💬 Comments

| Endpoint | Method | Description |
|---|---|---|
| /posts/:id/comments | POST | Add a comment to a post (auth required) |

### 🏷 Tags

| Endpoint | Method | Description |
|---|---|---|
| /tags | GET | Fetch all tags |
| /tags/:id/posts | GET | Fetch posts associated with a specific tag |

> Authentication: All protected endpoints require a Bearer token in the Authorization header.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add some amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

Please make sure your code follows the existing style and is well-commented.

---

## 📃 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Built with ❤️ by the **M&N** team.

> Feel free to ⭐ the repo if you found it helpful!