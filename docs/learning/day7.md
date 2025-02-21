# Day 7: Understanding React Context and useContext Hook

## What is Context?
Context provides a way to pass data through the component tree without having to pass props manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

## The Problem Context Solves

### Prop Drilling
Without context, sharing data across components requires passing props through intermediate components:
```jsx
function App() {
    const user = "John";
    return <ComponentA user={user} />
}

function ComponentA({ user }) {
    return <ComponentB user={user} />
}

function ComponentB({ user }) {
    return <ComponentC user={user} />
}

function ComponentC({ user }) {
    return <h1>{user}</h1>
}
```

Problems with prop drilling:
- Cumbersome code maintenance
- Intermediate components must forward props they don't use
- Difficult to track data flow
- Makes components less reusable
- Increases chance of errors in prop passing

## Using Context

### 1. Creating Context
```jsx
const UserContext = createContext();
```

### 2. Providing Context
```jsx
function App() {
    const [user, setUser] = useState("John");
    return (
        <UserContext.Provider value={user}>
            {/* child components */}
        </UserContext.Provider>
    );
}
```

### 3. Consuming Context
```jsx
function ChildComponent() {
    const user = useContext(UserContext);
    return <h1>{user}</h1>;
}
```

## Why Use Context Instead of Props?

### 1. Simplifies Component Tree
- Eliminates need for intermediate prop passing
- Makes component relationships clearer
- Reduces component coupling

### 2. Better Performance
- Avoids unnecessary re-renders from prop changes in intermediate components
- Reduces the number of props being passed and tracked
- More efficient for deeply nested components

### 3. Better Maintenance
- Easier to modify data flow
- Clearer data source
- Simpler debugging
- More maintainable codebase

### 4. Component Reusability
- Components don't need to know about data passing
- More flexible component placement
- Easier to move components around

## When to Use Context

### Good Use Cases
1. Theme data
2. User authentication
3. Language preferences
4. UI state that affects multiple components
5. Application-level settings

### When to Avoid Context
1. Small component trees
2. Shallow prop passing (1-2 levels)
3. When prop drilling isn't causing problems
4. When components need high degree of independence

## Common Patterns

### 1. Multiple Contexts
```jsx
<ThemeContext.Provider value={theme}>
    <UserContext.Provider value={user}>
        <App />
    </UserContext.Provider>
</ThemeContext.Provider>
```

### 2. Context with State
```jsx
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
```

### 3. Default Values
```jsx
const UserContext = createContext({
    user: null,
    setUser: () => {}
});
```

## Best Practices

### 1. Context Organization
- Keep contexts focused and specific
- Combine related contexts when appropriate
- Consider context boundaries carefully

### 2. Performance Considerations
- Don't overuse context
- Keep context values stable when possible
- Split contexts when different parts of the tree need different update frequencies

### 3. Error Handling
- Provide meaningful default values
- Handle missing providers
- Consider error boundaries for context consumers

# Understanding useRef Hook

## What is useRef?
useRef is a React Hook that provides a way to create a mutable reference that persists across renders. It returns a mutable ref object with a .current property that can be initialized to any value and modified without causing re-renders.

## Key Characteristics of useRef

### 1. Persistence Across Renders
- The ref value persists between re-renders
- Changing ref values doesn't trigger re-renders
- Perfect for storing values that shouldn't affect visual output

### 2. Common Use Cases
```jsx
// DOM reference
const inputRef = useRef(null);
// Value persistence
const countRef = useRef(0);
```

## useState vs useRef

### State (useState)
```jsx
const [count, setCount] = useState(0);
```
1. Characteristics:
   - Triggers re-renders when updated
   - Updates are asynchronous
   - Used for reactive data that affects rendering
   - Values are immutable

2. Best for:
   - UI elements that need to update on value changes
   - Data that should trigger component updates
   - Values that need to be displayed
   - Form input values that need reactivity

### Ref (useRef)
```jsx
const countRef = useRef(0);
```
1. Characteristics:
   - No re-renders on updates
   - Updates are synchronous
   - Used for values that don't affect rendering
   - Values are mutable

2. Best for:
   - DOM element references
   - Storing previous values
   - Instance variables
   - Values that shouldn't trigger renders

## When to Use Each

### Use useState When:
1. The value needs to be displayed in the UI
```jsx
const [text, setText] = useState("");
return <div>{text}</div>;
```

2. The value should trigger re-renders
```jsx
const [count, setCount] = useState(0);
return <button onClick={() => setCount(count + 1)}>{count}</button>;
```

### Use useRef When:
1. Accessing DOM elements
```jsx
const inputRef = useRef(null);
return <input ref={inputRef} />;
```

2. Storing values without renders
```jsx
const intervalRef = useRef();
useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
}, []);
```

## Common Patterns

### 1. DOM Manipulation
```jsx
function FocusInput() {
    const inputRef = useRef(null);
    
    function focus() {
        inputRef.current.focus();
    }
    
    return (
        <>
            <input ref={inputRef} />
            <button onClick={focus}>Focus Input</button>
        </>
    );
}
```

### 2. Previous Value Storage
```jsx
function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();
    
    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);
    
    return <div>Now: {count}, Before: {prevCountRef.current}</div>;
}
```

### 3. Instance Variables
```jsx
function Timer() {
    const intervalRef = useRef();
    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            // ...
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);
}
```

## Best Practices

### 1. DOM References
- Use refs for imperative DOM operations
- Avoid overusing DOM manipulation
- Clean up refs in useEffect cleanup functions

### 2. Value Storage
- Use refs for values that don't need reactivity
- Avoid storing derived state in refs
- Consider whether the value really needs to persist

### 3. Performance Optimization
- Use refs to avoid unnecessary re-renders
- Don't rely on refs for rendering logic
- Combine with useCallback when needed