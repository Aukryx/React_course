# Student Component

## Purpose
A reusable component that displays student information including their name, age, and student status. This component demonstrates the use of props, PropTypes for type checking, and default values.

## Component Structure
```jsx
import PropTypes from "prop-types"

function Student({name = "Guest", age = 0, isStudent = false}){
    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student
```

## Props Explanation

### Basic Props
The component accepts three props:
- `name`: Student's name (string)
- `age`: Student's age (number)
- `isStudent`: Student status (boolean)

### Props Destructuring
Instead of using `props.name`, `props.age`, etc., the component uses destructuring:
```jsx
function Student({name, age, isStudent})
```
This provides cleaner syntax and direct access to prop values.

### Default Values
Default values are set using parameter defaults:
```jsx
{name = "Guest", age = 0, isStudent = false}
```
These values are used when props are not provided:
- If no name → "Guest"
- If no age → 0
- If no isStudent → false

### PropTypes
PropTypes provide runtime type checking:
```jsx
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
```
This helps catch bugs by validating:
- `name` should be a string
- `age` should be a number
- `isStudent` should be a boolean

## Usage Examples

### Basic Usage
```jsx
<Student 
    name="Spongebob" 
    age={30} 
    isStudent={true}
/>
```

### With Default Values
```jsx
<Student />  // Uses all defaults
<Student name="Patrick" />  // Only name provided, others default
```

### Common Patterns
```jsx
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squiward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
    </>
  ); 
}
```

## Important Notes
1. Always pass numbers in curly braces: `age={30}` not `age="30"`
2. Always pass booleans in curly braces: `isStudent={true}`
3. Strings can be passed with quotes: `name="Spongebob"`
4. Default values will be used for any missing props
5. PropTypes will help catch common mistakes during development

## Future Improvements
- [ ] Add validation for age range
- [ ] Add more student information (e.g., grade, major)
- [ ] Add styling for different student status
- [ ] Consider adding required prop validation