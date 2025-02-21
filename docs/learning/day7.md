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