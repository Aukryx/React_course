# Object Component

## Purpose
A form component that demonstrates React's useState hook with object state management, showing how to properly update individual properties of an object state using updater functions and the spread operator.

## Component Structure
```jsx
import React, {useState} from "react";

export default function Object(){
    const [car, setCar] = useState({year: 2021,
                                    make: "Lotus",
                                    model: "Elise"})
                                    
    function handleYearChange(event){
        setCar(c => ({...car, year: event.target.value}))
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}))
    }
    
    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}))
    }

    return (<div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange}/><br />
                <input type="text" value={car.make} onChange={handleMakeChange}/><br />
                <input type="text" value={car.model} onChange={handleModelChange}/><br />
            </div>);
}
```

## State Management

### Object State
- `car`: An object containing car details
  - Properties:
    - `year`: numeric value for car year
    - `make`: string for car manufacturer
    - `model`: string for car model
  - Initial value: `{year: 2021, make: "Lotus", model: "Elise"}`

### State Update Functions
1. `handleYearChange`
   - Updates the year property using spread operator
   - Preserves other car properties
   - Uses updater function pattern
   
2. `handleMakeChange`
   - Updates the make property using spread operator
   - Preserves other car properties
   - Uses updater function pattern
   
3. `handleModelChange`
   - Updates the model property using spread operator
   - Preserves other car properties
   - Uses updater function pattern

## Key Features

### Object State Updates
The component demonstrates proper object state management:
- Uses spread operator to maintain immutability
- Updates individual properties while preserving others
- Uses updater functions for reliable state updates

### Controlled Inputs
- Each input is controlled by the corresponding state property
- Values are synchronized with state
- Changes are handled through specific update functions

## Usage Example
```jsx
import Object from "./Object";

function App() {
    return (
        <Object />
    );
}
```

## Important Notes
1. The spread operator (`...car`) is essential for maintaining object immutability
2. Each property has its own dedicated update function for clear separation of concerns
3. Input values are directly tied to state properties
4. The component uses controlled inputs for form management
5. Each update function follows the same pattern for consistency
6. Event handlers use the updater function pattern for reliability