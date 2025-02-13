# Card Component

## Purpose
This is a clickable button using inline CSS

## Component Structure
```jsx
function Button2() {

    const styles = {
            backgroundColor:" hsl(29, 100.00%, 44.70%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border:" none",
            cursor: "pointer",
    }
    return (<button style={styles}>Click me</button>)
}

export default Button2
```

## Usage
```jsx
import Button from "./Button2.jsx";

function App() {
  return (
    <>
    <Button2></Button2>
    {/* rest of my app */}
    </>
  ); 
}
export default App
```

## Notes

[More info about inline CSS here](https://github.com/Aukryx/React_course/blob/main/docs/learning/day1.md)
