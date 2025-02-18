# Counter Component Documentation

## Overview
The Counter component demonstrates a classic counter implementation using React's useState hook with increment, decrement, and reset functionality.

## Component Structure

### State Variable
- `count` (number): Current counter value
  - Initial value: 0

### State Update Functions
1. `increment`
   - Increases count by 1
   
2. `decrement`
   - Decreases count by 1
   
3. `reset`
   - Sets count back to 0

### Rendered Elements
A div with className "counter-container" containing:
- Display paragraph showing current count
- Three buttons for decrement, reset, and increment operations

## Implementation Details

### State Initialization
```jsx
const [count, setCount] = useState(0);
```

### State Update Functions
```jsx
const increment = () => {
    setCount(count + 1);
}

const decrement = () => {
    setCount(count - 1);
}

const reset = () => {
    setCount(0);
}
```

## Styling
The component uses several CSS classes:
- `.counter-container`: Container styling
- `.count-display`: Count text styling
- `.counter-button`: Button styling

## Usage Example
```jsx
<Counter />
```

## Best Practices Demonstrated
1. Single responsibility state variable
2. Clear, focused update functions
3. Semantic class naming
4. Logical button ordering
5. Clean component organization