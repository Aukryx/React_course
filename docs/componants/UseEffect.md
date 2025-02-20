# UseEffect Component

## Purpose
A demonstration component showcasing React's useEffect hook for handling side effects, state updates, and DOM manipulation through a simple counter with color changes.

## Component Structure
```jsx
import React, {useState, useEffect} from "react";

export default function UseEffect(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    // useEffect hook...
    // Handler functions...
    // JSX return...
}
```

## State Management

### Multiple States
1. `count`: Number for counter value
   - Initial value: `0`
   - Updated through increment/decrement

2. `color`: String for text color
   - Initial value: `"green"`
   - Toggles between "green" and "red"

### Effect Hook
```jsx
useEffect(() => {
    document.title = `Count: ${count} ${color}`;
}, [count, color])
```

### State Update Functions

1. `addCount`
   - Increments counter using functional update
   ```jsx
   function addCount(){
       setCount(c => c + 1);
   }
   ```

2. `subtractCount`
   - Decrements counter using functional update
   ```jsx
   function subtractCount(){
       setCount(c => c - 1);
   }
   ```

3. `changeColor`
   - Toggles between green and red
   ```jsx
   function changeColor(){
       setColor(c => c === "green" ? "red" : "green");
   }
   ```

## Key Features

### Counter Management
- Increment functionality
- Decrement functionality
- Dynamic updates

### Color Management
- Color toggle functionality
- Dynamic text color updates
- Visual feedback

### Side Effects
1. Document Title Updates
   - Reflects current count
   - Reflects current color
   - Updates on any state change

### UI Elements
- Counter display with dynamic color
- Increment button
- Decrement button
- Color toggle button

## Best Practices Demonstrated
1. Effect Management:
   - Proper dependency array usage
   - Side effect handling
   - DOM updates

2. State Management:
   - Functional updates
   - Multiple state handling
   - Clean state transitions

3. Component Organization:
   - Clear function separation
   - Logical state grouping
   - Consistent naming

## Potential Improvements
1. Add counter limits
2. Add more color options
3. Add animation transitions
4. Add counter reset functionality
5. Add custom color input
6. Add count history
7. Add undo/redo functionality
8. Add keyboard shortcuts