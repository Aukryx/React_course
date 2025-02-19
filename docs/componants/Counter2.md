# Counter2 Component

## Purpose
A counter component that demonstrates React's useState hook with updater functions, showing how to properly handle multiple state updates in the same function call. This component allows users to increment or decrement the count by 3 and reset it to 0.

## Component Structure
```jsx
import React, {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="counter-container">
            <p className="count-display">Count: {count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}
```

## State Management

### State Variable
- `count`: Tracks the current count value
  - Initial value: 0

### State Update Functions
1. `increment`
   - Increases count by 3 using three sequential updater functions
   - Uses the `c => c + 1` pattern to ensure reliable updates
   
2. `decrement`
   - Decreases count by 3 using three sequential updater functions
   - Uses the `c => c - 1` pattern to ensure reliable updates
   
3. `reset`
   - Sets count back to 0
   - Direct value update since it doesn't depend on previous state

## Key Features

### Updater Function Pattern
The component uses the updater function pattern (`c => c + 1`) instead of direct state updates for increment and decrement. This ensures:
- All updates are processed correctly
- No state updates are missed due to batching
- Reliable count changes even with multiple updates

### UI Elements
1. Count Display
   - Shows current count value
   - Updates immediately when state changes

2. Control Buttons
   - Decrement: Reduces count by 3
   - Reset: Returns count to 0
   - Increment: Increases count by 3

## Usage Example
```jsx
import Counter from "./Counter2";

function App() {
    return (
        <Counter />
    );
}
```

## CSS Classes
- `counter-container`: Main container for the component
- `count-display`: Styles for the count display element
- `counter-button`: Styles for all control buttons

## Important Notes
1. The component uses updater functions to handle multiple state updates correctly
2. Each click of increment/decrement changes the count by 3
3. Reset is implemented as a direct state update since it doesn't depend on previous state
4. The component follows a consistent layout pattern with the count display above the controls
5. All buttons are styled using the same CSS class for consistency