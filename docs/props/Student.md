# Header Component

## Purpose
A navigation header component that displays the website title and main navigation menu. This component appears at the top of the website and includes:
- Website title ("My website")
- Navigation menu with 4 main links
- Horizontal line separator

## Component Structure
```jsx
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student
```

## Usage
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

export default App
```

## Notes

[More info about props here](https://github.com/Aukryx/React_course/blob/main/docs/learning/day2.md)
