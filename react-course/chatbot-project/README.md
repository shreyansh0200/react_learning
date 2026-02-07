# Chatbot Project

A modern interactive chatbot application built with React and Vite, featuring real-time message updates, auto-scrolling chat interface, and responsive design.

## Project Description

This chatbot project is a full-featured conversational interface that demonstrates core React concepts and component composition. The application allows users to send and receive messages in a chat-like interface with automatic viewport management and smooth user experience.

### Key Features

- **Real-time Chat Interface**: Send and receive messages with instant UI updates
- **Auto-scrolling Messages**: Automatically scrolls to the latest message when new content is added
- **Component-based Architecture**: Modular React components for scalability
- **Message Management**: Tracks messages with unique IDs, content, and sender identification
- **Responsive Design**: Clean and intuitive UI with CSS styling
- **Code Quality**: ESLint configuration for maintaining code standards

## Tech Stack

### Frontend Framework
- **React** (^19.1.0) - UI library for building interactive components
- **React DOM** (^19.1.0) - React rendering engine for the browser

### Build & Development Tools
- **Vite** (^6.3.5) - Next-generation frontend build tool with lightning-fast HMR
- **@vitejs/plugin-react** (^4.4.1) - React support plugin for Vite with Babel for Fast Refresh

### Linting & Code Quality
- **ESLint** (^9.25.0) - Code quality and style enforcement
- **@eslint/js** (^9.25.0) - JavaScript ESLint configuration
- **eslint-plugin-react-hooks** (^5.2.0) - Rules for React Hooks
- **eslint-plugin-react-refresh** (^0.4.19) - React Refresh support

### Development Dependencies
- **@types/react** (^19.1.2) - Type definitions for React
- **@types/react-dom** (^19.1.2) - Type definitions for React DOM
- **globals** (^16.0.0) - Global variables for different environments

## Project Structure

```
chatbot-project/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx      - Input field for user messages
│   │   ├── ChatMessage.jsx    - Individual message component
│   │   └── ChatMessages.jsx   - Messages container with auto-scroll
│   ├── App.jsx                 - Main application component
│   ├── App.css                 - Application styling
│   ├── main.jsx                - Entry point
│   └── index.css               - Global styles
├── public/                      - Static assets
├── index.html                   - HTML template
├── package.json                 - Project dependencies
├── vite.config.js              - Vite configuration
└── eslint.config.js            - ESLint configuration
```

## Component Architecture

### App.jsx
The root component that manages the chat state using React's `useState` hook. It maintains the message history and passes data to child components.

### ChatMessages.jsx
Displays all messages in a scrollable container. Uses `useRef` for DOM access and `useEffect` to automatically scroll to the latest message when new messages are added.

### ChatMessage.jsx
A presentational component that renders individual messages with sender information.

### ChatInput.jsx
Handles user input and allows users to send new messages to the chat.

## Getting Started

### Installation

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Built Application

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## React Hooks Used

- **useState** - Manages chat messages state
- **useRef** - References the chat container for scroll management
- **useEffect** - Handles side effects (auto-scrolling to latest messages)

## Learning Outcomes

This project demonstrates:
- Component composition and reusability
- State management with hooks
- DOM manipulation with Refs
- useEffect for side effects
- Props drilling and component communication
- CSS styling and responsive design
- Modern build tool setup with Vite

## Future Enhancements

- Integrate with a real chatbot API
- Add user authentication
- Store chat history in a database
- Add typing indicators
- Implement message timestamps
- Add emoji and file support
- Dark mode toggle
