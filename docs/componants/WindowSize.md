# WindowSize Component

## Purpose
A responsive component that demonstrates React's window resize handling using useEffect for event listeners and dynamic updates of window dimensions.

## Component Structure
```jsx
import React, {useState, useEffect} from "react";

export default function WindowSize(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    // useEffect hooks...
    // Handler functions...
    // JSX return...
}
```

## State Management

### Multiple States
1. `width`: Number representing window width
   - Initial value: `window.innerWidth`
   - Updates on window resize

2. `height`: Number representing window height
   - Initial value: `window.innerHeight`
   - Updates on window resize

### Effect Hooks

1. `Resize Event Handler`
   - Sets up and cleans up resize event listener
   - Runs once on mount
   ```jsx
   useEffect(() => {
       window.addEventListener("resize", handleResize);
       return () => {
           window.removeEventListener("resize", handleResize);
       }
   }, [])
   ```

2. `Title Update Effect`
   - Updates document title with current dimensions
   - Runs when width or height changes
   ```jsx
   useEffect(() => {
       document.title = `Size: ${width} x ${height}`;
   }, [width, height])
   ```

### Event Handler Function
```jsx
function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
```

## Key Features

### Window Event Handling
- Proper event listener cleanup
- Efficient resize handling
- Real-time dimension updates

### Dynamic Updates
1. Window Dimensions
   - Live updates on resize
   - Accurate pixel measurements

2. Document Title
   - Synchronized with window size
   - Format: "Size: width x height"

### UI Elements
- Display of current window width
- Display of current window height
- Responsive updates

## Best Practices Demonstrated
1. Effect Management:
   - Proper cleanup in useEffect
   - Dependency array optimization
   - Event listener handling

2. State Management:
   - Separate states for dimensions
   - Clean state updates
   - Performance optimization

3. Component Lifecycle:
   - Proper setup on mount
   - Cleanup on unmount
   - Resource management

## Potential Improvements
1. Add throttling/debouncing for resize events
2. Add breakpoint detection
3. Add orientation detection
4. Add minimum/maximum size alerts
5. Add size history tracking
6. Add custom size presets
7. Add dimension copying functionality
8. Add responsive layout switches