# Day 2: Props fundamentals
**Date**: 2025-02-13

## Core Concepts Learned

## Props in React

### What are Props?
Props (short for properties) are a way to pass data from a parent component to a child component. They work like parameters in regular JavaScript functions.

### How Props Work
1. **Defining Props**: In the child component, props are received as a parameter in the component function:
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
```

2. **Using Props**: Props are accessed using `props.propertyName` inside the component
- `props.name` gets the name value
- `props.age` gets the age value
- `props.isStudent` gets the boolean value

3. **Passing Props**: When using the component, props are passed like HTML attributes:
```jsx
<Student name="Spongebob" age={30} isStudent={true}/>
```

Note the syntax differences:
- Strings: Use quotes (`"Spongebob"`)
- Numbers and booleans: Use curly braces (`{30}`, `{true}`)

### Example Usage
You can reuse the same component with different props:
```jsx
<Student name="Spongebob" age={30} isStudent={true}/>
<Student name="Patrick" age={42} isStudent={false}/>
<Student name="Squiward" age={50} isStudent={false}/>
<Student name="Sandy" age={27} isStudent={true}/>
```

Each instance of `Student` displays different information based on the props it receives.
<br>
[Go here to get more information about prop types](../../docs/props/Student.md)
