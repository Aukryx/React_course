# Card Component

## Purpose
This is a clickable button using module CSS

## Component Structure
```jsx
import styles from "./Button.module.css"

function Button() {
    return (<button className={styles.button}>Click me</button>)
}

export default Button

```

## Usage
```jsx
import Button from "./Button/Button.jsx";

function App() {
  return (
    <>
    <Button></Button>
    {/* rest of my app */}
    </>
  ); 
}
export default App
```

## Notes

```jsx
    return (<button className={styles.button}>Click me</button>)
```
This notation allows you to initialize a class using a hash so you won't have any class conflicts
