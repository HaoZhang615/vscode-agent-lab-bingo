# 🎯 Soc Ops

### *Break the ice. Make connections. Have fun.*

A modern, interactive social bingo game designed for in-person mixers, networking events, and team gatherings. Find people who match the prompts on your board and race to get **5 in a row** to win!

---

## ✨ Features

🎲 **Dynamic Board Generation** — Every game creates a unique 5×5 grid with randomized prompts  
🎯 **Classic Bingo Mechanics** — Mark squares and win with rows, columns, or diagonals  
💾 **Progress Persistence** — Your game state auto-saves, so you can pick up where you left off  
🎨 **Beautiful Modern UI** — Built with React 19, TypeScript, and Tailwind CSS v4  
📱 **Mobile-Friendly** — Play seamlessly on any device  
⚡ **Lightning Fast** — Powered by Vite for instant hot-reload during development

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

**Requirements:** [Node.js 22+](https://nodejs.org/)

---

## 🎮 How to Play

1. **Start a new game** — Generate your unique bingo board with 24 random prompts
2. **Mingle and match** — Talk to people at your event and find matches for each square
3. **Mark your squares** — Tap any square when you find someone who matches
4. **Win the game** — First to complete 5 in a row (horizontal, vertical, or diagonal) wins!

The center square is a **free space** to give everyone a head start!

---

## 🛠️ Tech Stack

Built with modern web technologies:

- ⚛️ **React 19** with TypeScript for type-safe components
- 🎨 **Tailwind CSS v4** for beautiful, utility-first styling  
- ⚡ **Vite** for blazing-fast builds and hot module replacement
- 🧪 **Vitest** for comprehensive unit testing
- 📦 **localStorage API** for game state persistence
- 🚀 **GitHub Pages** for automatic deployment

---

## 🎓 Workshop Context

This project is part of the **VS Code Agent Lab** workshop series, teaching developers how to:

- 🤖 Onboard AI agents to your codebase with context engineering
- 🔧 Build agentic workflows with custom agents and prompts
- 🎨 Leverage AI for rapid frontend design iteration
- 📚 Scale exploration and learning with cloud agents

👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for complete workshop instructions and learning objectives.

---

## 🎨 Customize Your Game

Want to make it your own? Easy!

- **Update prompts:** Edit `src/data/questions.ts` to customize the bingo questions
- **Change styling:** Modify Tailwind classes or add custom CSS themes
- **Add features:** The codebase is well-structured for extensions (see [architecture docs](.github/copilot-instructions.md))

Try themes like: *Skill Bingo*, *Tech Life Bingo*, *Travel Bingo*, *Office Humor Bingo*, and more!

---

## 📦 Deployment

Every push to `main` automatically deploys to **GitHub Pages**.

Your game will be live at: `https://<your-username>.github.io/<repo-name>`

Make sure to enable GitHub Pages in your repository settings: **Settings → Pages → Source: GitHub Actions**

---

## 📄 License

MIT © Harald Kirschner

---

**Made with ❤️ for building connections, one bingo square at a time.**
