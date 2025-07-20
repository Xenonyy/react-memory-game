# Bene Studio | Memory Game

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Author](#author)

---

## Overview

This project is a classic memory card-matching game, designed as a coding challenge for Bene Studio. The game is built with React 19, TypeScript, Redux Toolkit, and TailwindCSS, and leverages modern best practices for using the React ecosystem, state management, styling, and accessibility.

## Features

- **Customizable Game Settings:** Adjust the number of card pairs, countdown timer, username, and difficulty.
- **Responsive UI:** Clean, modern interface with smooth animations using Framer Motion.
- **Game State Management:** Uses Redux Toolkit for robust state handling.
- **Victory, Defeat, and Time’s Up Modals:** Get feedback on your performance and game state.
- **Accessibility:** Keyboard navigation and ARIA attributes for better usability.
- **Persistent Settings:** Game settings are retained during a session.

## Technologies Used

- **React 19**
- **TypeScript 4**
- **Redux Toolkit**
- **TailwindCSS 4 (Vite Plugin)**
- **Framer Motion**
- **Vite**
- **ESLint & Prettier**

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Xenonyy/bene-studio
   cd bene-studio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Game Rules

- Flip two cards at a time to find matching pairs.
- The game ends in victory when all pairs are matched within the allowed time and mistake limit.
- The game ends in defeat if you exceed the allowed number of mistakes or if the timer runs out.
- You can adjust the number of pairs, timer, and difficulty in the settings modal (gear icon).
- Reset the game at any time using the reset button.

## Project Structure

```
src/
  components/      # React components
    - common/      # Reusable UI components (Box, Container, Modal etc.)
  enums/           # Project metadata
  hooks/           # Custom React hooks (e.g., useTimer)
  messages/        # UI messages and labels
  pages/           # Main page of the app
  store/           # Redux slices and store configuration
  types/           # TypeScript type definitions
  utils/           # Utility functions (e.g., shuffleCards)
  assets/          # Images, fonts, and SVGs
  index.css        # Global styles (TailwindCSS)
  App.tsx          # App entry point
  main.tsx         # React root rendering
```

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint
- `npm run format` – Format code with Prettier

## Author

**Gonda Armand**  
© 2025
