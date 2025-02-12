# Header Component

## Purpose
A navigation header component that displays the website title and main navigation menu. This component appears at the top of the website and includes:
- 2 constants for 2 types of food.
- An unordered list of 3 elements :
    - A brut text
    - The first const named "Orange"
    - The second const named "Banana" with a method

## Component Structure
```jsx
function Food(){
    const food1 = "Orange"
    const food2 = "Banana"
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
```

## Usage
```jsx
import Header from './Header'

function App() {
    return (
        <div>
            <Food />
            {/* rest of my app */}
        </div>
    )
}
```

