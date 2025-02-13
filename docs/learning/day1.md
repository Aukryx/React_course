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
Traditional CSS files imported into components.

```css
/* styles.css */
.button {
    background-color: hsl(200, 100%, 50%);
    color: white;
    padding: 10px 20px;
}
```

```jsx
import './styles.css';

function Button() {
    return <button className="button">Click me</button>;
}
```

**Pros:**
- Familiar workflow for developers coming from traditional web development
- Easy to implement global styles
- Good for small projects or quick prototypes
- Works well with existing CSS frameworks
- Easier to implement responsive designs

**Cons:**
- Potential naming conflicts in larger applications
- No built-in scoping, styles can leak
- Hard to track which styles are used where
- Can become difficult to maintain in large applications

#### B. CSS Modules
```
📂 Button/
 ├── Button.jsx
 └── Button.module.css
```

```css
/* Button.module.css */
.button {
    background-color: hsl(200, 100%, 50%);
    color: white;
    padding: 10px 20px;
}
```

```jsx
import styles from "./Button.module.css"

function Button() {
    return <button className={styles.button}>Click me</button>;
}
```

**Pros:**
- Local scoping prevents style conflicts
- Clear connection between component and its styles
- Better organization with component-based architecture
- TypeScript support for CSS class names
- Good for team development

**Cons:**
- Requires additional setup
- Makes global styles more complicated to implement
- Learning curve for developers new to modules
- Can lead to duplicate CSS if not managed properly
- Extra boilerplate code needed

#### C. Inline Styling
```jsx
function Button() {
    return (
        <button style={{
            backgroundColor: 'hsl(200, 100%, 50%)',
            color: 'white',
            padding: '10px 20px'
        }}>
            Click me
        </button>
    );
}
```

**Pros:**
- Easy to understand
- No class name conflicts possible
- Great for isolated elements with minimal styling
- Dynamic styles are easier to implement
- No additional files needed

**Cons:**
- Gets messy in larger applications
- Reduces component readability with complex styles
- Not suitable for responsive design
- No CSS reuse across components
- Cannot use media queries or pseudo-selectors

### Recommended Usage:
- **External CSS**: Use for:
  - Global styles (reset, typography, themes)
  - Small projects
  - When working with CSS frameworks
  
- **CSS Modules**: Best for:
  - Component-specific styles
  - Large applications
  - Team projects
  - When style isolation is important
  
- **Inline Styles**: Suitable for:
  - Simple, one-off styling needs
  - Dynamic styles based on props/state
  - Quick prototypes
  - Small components with minimal styling

Remember: These are guidelines rather than strict rules. Choose the approach that best fits your project's needs and team preferences.

## Important Notes
1. Component names must start with an uppercase letter (PascalCase)
2. Use `className` instead of `class` for CSS classes in JSX
3. Components must return a single parent element
4. CSS Modules help prevent styling conflicts but it requires additionnal setup and make the use of globals harder

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