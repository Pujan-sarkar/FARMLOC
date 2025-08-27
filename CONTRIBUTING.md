# 🤝 Contributing to FARMLOC

Thank you for your interest in contributing to **FARMLOC** 🌾✨ — a platform designed to empower farmers by providing access to agricultural resources, smart inventory management, and nearby cold storage locations. This project thrives because of the amazing contributions from developers like you!

---

## 📌 How You Can Contribute

* 🐛 **Report Issues** – Found a bug or unexpected behavior? [Open an issue](https://github.com/Pujan-sarkar/FARMLOC/issues).
* 💡 **Suggest Features** – Propose new features, integrations, or performance improvements.
* 🎨 **UI/UX Enhancements** – Improve the design, accessibility, and responsiveness.
* ⚡ **Performance Optimization** – Optimize API performance, queries, and frontend responsiveness.
* 🧠 **Backend & Database Contributions** – Work on Express.js routes, MongoDB models, or API enhancements.
* 📖 **Documentation** – Improve guides, tutorials, and technical docs.

---

## 🛠️ Getting Started

### 1. Fork the Repository 🍴

```bash
git fork https://github.com/your-username/FARMLOC.git
```

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/FARMLOC.git
cd FARMLOC
```

### 3. Install Dependencies 📦

#### Frontend Setup
```bash
cd apps/frontend
pnpm install
pnpm dev
```

#### Backend Setup
```bash
cd apps/backend
pnpm install
pnpm dev
```

### 4. Setup Environment 🌍

Copy `.env.example` → `.env` and configure your environment variables:

```env
MONGO_URI=your_mongodb_connection
FIREBASE_API_KEY=your_firebase_key
```

### 5. Run Locally 🚀

Make sure both **frontend** and **backend** servers are running:

```bash
# Frontend
cd apps/frontend
pnpm dev

# Backend
cd apps/backend
pnpm dev
```

---

## 🌿 Branching Strategy

* **main** → Stable production-ready branch ✅
* **dev** → Active development branch 🔄
* **feature/*** → New features ✨
* **fix/*** → Bug fixes 🐞
* **docs/*** → Documentation changes 📝

---

## 📏 Code Guidelines

* ✅ Follow **JavaScript/React best practices**
* ✅ Use **functional components** and **React Hooks**
* ✅ Follow **TailwindCSS** and **Bootstrap** conventions for styling
* ✅ Maintain **clean, modular code**
* ✅ Use meaningful commit messages

Example commit:

```bash
git commit -m "feat(auth): add Firebase authentication for user login"
```

---

## 🧪 Testing

Before submitting a pull request, ensure your code is tested:

```bash
# Run backend tests
cd apps/backend
pnpm test

# Run frontend tests
cd apps/frontend
pnpm test
```

* ✅ Unit Tests: Components & API logic
* 🔄 Integration Tests: Frontend + Backend connectivity
* 📊 Performance Tests: Ensure optimized database queries

---

## 🔐 Security Best Practices

* ❌ Never commit sensitive keys or credentials
* ✅ Use `.env` files for secrets
* 🛡️ Sanitize and validate all inputs on backend APIs
* 🔒 Follow **OWASP** guidelines for security

---

## 🚀 Pull Request Workflow

1. Switch to the `dev` branch:
```bash
git checkout dev
```
2. Pull latest changes:
```bash
git pull origin dev
```
3. Create a new feature branch:
```bash
git checkout -b feature/your-feature-name
```
4. Make your changes & commit them.
5. Push your branch:
```bash
git push origin feature/your-feature-name
```
6. Create a Pull Request to the **dev** branch.

---

## 💬 Community Guidelines

* Be respectful, inclusive, and collaborative 🤝
* Provide constructive feedback 💡
* Help fellow contributors grow 🌱

---

## 📜 License

By contributing, you agree your contributions fall under the project’s **MIT License** (see [LICENSE](./LICENSE)).

---

### 🎉 Thank You for Contributing to FARMLOC! 🌾💚

Your contributions help farmers access better resources and manage their work more effectively. Let's grow together! 🚀
