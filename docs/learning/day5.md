# Day 5: React State Updater Functions
**Date**: 2025-02-19

## Core Concepts Learned

### 1. State Updater Functions
Updater functions provide a way to update state based on its previous value, ensuring reliable state updates when dealing with multiple state changes.

### 2. Why Use Updater Functions?

#### A. State Updates are Batched
React batches state updates for performance. When you call setState multiple times in the same function, React might combine them into a single update. This can lead to unexpected results when relying on the current state value.

```jsx
// Without updater function (might not work as expected)
setCount(count + 1);
setCount(count + 1);  // Still references the same 'count' value

// With updater function (guaranteed to work)
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);  // Correctly references the updated value
```

#### B. Race Conditions Prevention
Updater functions help prevent race conditions by ensuring you're always working with the most recent state value.

### 3. Syntax and Usage

#### A. Basic Syntax
```jsx
setState(prevState => newState)
```

Components:
- `prevState`: The current state value
- `newState`: The new state value to be set
- The arrow function ensures you're working with the latest state

#### B. Common Patterns

1. Simple Updates:
```jsx
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount - 1);
```

2. Complex Updates:
```jsx
setUser(prevUser => ({
    ...prevUser,
    age: prevUser.age + 1,
    visits: prevUser.visits + 1
}));
```

3. Conditional Updates:
```jsx
setScore(prevScore => 
    prevScore < maxScore ? prevScore + 1 : prevScore
);
```

### 4. Best Practices

1. Always use updater functions when:
   - The new state depends on the previous state
   - Multiple state updates occur in the same function
   - State updates happen in async operations

2. Keep updater functions pure:
   - No side effects
   - Only use the previous state to determine the new state
   - Return consistent results for the same input

3. Use meaningful names for the previous state parameter:
   - `prevState`, `prevCount`, `prevUser`, etc.
   - Avoid generic names like `state` or `s`