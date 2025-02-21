# UseRef Component Documentation 

## Purpose
A component demonstrating the use of useRef hook for direct DOM manipulation and maintaining references to input elements, with focus and styling functionality.

## Component Structure
```jsx
import React, {useState, useEffect, useRef} from 'react'

export default function UseRef(){
    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);
    // ...
}
```

## Key Features

### Ref Declarations
- Three useRef instances for three input elements
- Each ref maintains a reference to its corresponding input
- Initial value of 0 for each ref

### Event Handlers
1. `handleClick1`
   ```jsx
   function handleClick1(){
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "yellow";
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
   }
   ```
   - Focuses first input
   - Sets yellow background
   - Clears other backgrounds

2. `handleClick2` and `handleClick3`
   - Similar functionality for respective inputs
   - Maintains exclusive highlighting

### Effect Implementation
```jsx
useEffect(() =>{
    console.log("Component rendered")
})
```
- Tracks component renders
- Demonstrates render behavior with refs

### UI Elements
- Three button-input pairs
- Each button controls its corresponding input
- Interactive styling and focus management