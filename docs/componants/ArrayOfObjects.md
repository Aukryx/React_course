# ArrayOfObjects Component

## Purpose
A car list management component that demonstrates React's useState hook with multiple state variables, including an array of objects. Shows how to properly manage form state, add/remove objects from an array, and handle multiple controlled inputs.

## Component Structure
```jsx
import React, {useState} from "react"; 

export default function ArrayOfObjects(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value)
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }
    // JSX return...
}
```

## State Management

### Multiple State Variables
1. Array State:
   - `cars`: Array of car objects
   - Initial value: `[]`

2. Form States:
   - `carYear`: Current year by default
   - `carMake`: Empty string
   - `carModel`: Empty string

### State Update Functions
1. `handleAddCar`
   - Creates new car object
   - Adds car to array using spread operator
   - Resets form fields
   
2. `handleRemoveCar`
   - Removes car at specified index using filter
   - Uses updater function pattern

3. Form Update Handlers:
   - `handleYearChange`: Updates year state
   - `handleMakeChange`: Updates make state
   - `handleModelChange`: Updates model state

## Key Features

### Form Management
- Controlled inputs for all fields
- Automatic form reset after submission
- Current year as default year value

### Array Operations
1. Addition
   - Creates new object from form states
   - Uses spread operator for immutable updates
   - Resets form after adding

2. Removal
   - Removes by index using filter
   - Creates new array without mutation
   - Triggered by clicking list item

## Usage Example
```jsx
import ArrayOfObjects from "./ArrayOfObjects";

function App() {
    return (
        <ArrayOfObjects />
    );
}
```

## Important Notes
1. Multiple state variables for form management
2. Controlled inputs for all form fields
3. Immutable array updates using spread operator
4. Form reset after successful addition
5. Click handlers for item removal
6. Current year as default value for year input
7. Placeholder text for make and model inputs

## Best Practices Demonstrated
1. Separate concerns:
   - Array state management
   - Form state management
   - Event handling

2. Immutability:
   - New array references
   - New object creation
   - No direct state mutation

3. Form handling:
   - Controlled inputs
   - Form reset
   - Default values

## Potential Improvements
1. Add input validation
2. Add error handling
3. Use unique IDs instead of array indices
4. Add confirmation for deletions
5. Add edit functionality
6. Add data persistence
7. Add sorting/filtering options