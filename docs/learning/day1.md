# Day 1: React Components Fundamentals
**Date**: 2025-02-12

## Core Concepts Learned

### 1. React Components Basics
React components are the building blocks of React applications. They are reusable pieces of UI that can contain both logic and presentation.

### 2. Component Creation
To create a component:
1. Create a new file with `.jsx` extension
2. Define a function (using PascalCase naming)
3. Return JSX (HTML-like syntax)
4. Export the component

```jsx
function Header() {
    return (
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
```

### 3. Component Usage
#### Importing Components
```jsx
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
```

#### Using Components
Components can be used in two equivalent ways:
```jsx
// Self-closing tag
<Food/>

// Regular tag
<Food></Food>
```

#### Multiple Components
When using multiple components, they must be wrapped in a parent element:
```jsx
function App() {
    return (
        <>
            <Header/>
            <Food/>
            <Footer/>
        </>
    );
}
```

### 4. Styling in React

React offers several approaches to styling components:

#### A. External CSS
Traditional CSS files imported into components. Simple but may cause naming conflicts in larger applications.

#### B. CSS Modules
```
📂 Button/
 ├── Button.jsx
 └── Button.module.css
```

**Button.module.css:**
```css
.button {
    background-color: hsl(200, 100%, 50%);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
```

**Button.jsx:**
```jsx
import styles from "./Button.module.css"

function Button() {
    return (
        <button className={styles.button}>
            Click me
        </button>
    );
}
```

## Important Notes
1. Component names must start with an uppercase letter (PascalCase)
2. Use `className` instead of `class` for CSS classes in JSX
3. Components must return a single parent element
4. CSS Modules help prevent styling conflicts

## Questions for Further Learning
- [ ] What are props and how do they work?
- [ ] How do components handle events?
- [ ] What are React Hooks?
- [ ] When should I split a component into smaller components?

## Resources Used Today
- React Documentation
- Course Materials (add specific sources)

## Next Steps
- Learn about component props
- Explore component state management
- Practice creating more complex components