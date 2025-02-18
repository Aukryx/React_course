# MyComponent Documentation

## Overview
The MyComponent demonstrates React's useState hook by managing multiple state variables and their updates through user interactions.

## Component Structure

### State Variables
- `name` (string): User's name
  - Initial value: "Guest"
- `age` (number): User's age
  - Initial value: 0
- `isEmployed` (boolean): Employment status
  - Initial value: false

### State Update Functions
1. `updateName`
   - Sets name to "Spongebob"
   
2. `incrementAge`
   - Increases age by 1
   
3. `toggleEmployedStatus`
   - Toggles employment status between true/false

### Rendered Elements
A div containing:
- Three paragraphs displaying state values
- Three buttons to update respective states

## Implementation Details

### State Initialization
```jsx
const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);
```

### State Update Functions
```jsx
const updateName = () => {
    setName("Spongebob");
}

const incrementAge = () => {
    setAge(age + 1);
}

const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
}
```

## Usage Example
```jsx
<MyComponent />
```

## Best Practices Demonstrated
1. Separate state variables for different data types
2. Clear, descriptive state updater functions
3. Proper useState hook importation
4. Logical organization of state-related code
5. Consistent state update patterns