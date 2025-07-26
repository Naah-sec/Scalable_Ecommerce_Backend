
# Scalable Ecommerce Frontend
---first of all i don't know anything about this frontend shit it's copilot work i just needed it to see some results,it's ni scalable ni walo,just an interface to observe the backend resutls after chwi 9ol9a of using swagger,postman,curl...---
This is a modern, beautiful frontend for the Django REST ecommerce backend, built with React, Vite, TypeScript, and Material-UI.

## Features
- User registration and login (token-based)
- Product listing
- Order creation and viewing user orders
- Responsive, clean Material-UI design

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## API Configuration
- The frontend expects the Django backend to be running and accessible at `/api/` (same host or via proxy).
- Update API URLs in the code if your backend is hosted elsewhere.

## Project Structure
- `src/pages/` — Main pages (Home, Login, Register, Products, Orders)
- `src/App.tsx` — App layout and routing

## Customization
- Update theme, branding, and endpoints as needed for your project.

---

Built with ❤️ using React, Vite, and Material-UI.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
