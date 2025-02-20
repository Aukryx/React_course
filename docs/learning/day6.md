# Day 6: The useEffect Hook
**Date**: 2025-02-20

## Core Concepts Learned

### 1. What is useEffect?
The useEffect hook allows you to perform side effects in function components. Side effects are operations that can affect other components and can't be done during rendering, such as:
- Fetching data
- Directly updating the DOM
- Setting up subscriptions
- Timers
- Event listeners

### 2. Basic Syntax
```jsx
useEffect(() => {
    // Side effect code
}, [dependencies])
```

Components:
- First argument: Function containing the effect code
- Second argument: Array of dependencies (optional)

### 3. When Does useEffect Run?

#### A. Component Lifecycle
1. After First Render (Mount)
   - Effect runs after component appears on screen
   - Perfect for initial setup

2. After Re-renders (Update)
   - Effect runs when dependencies change
   - Skipped if dependencies are the same

3. Before Removal (Unmount)
   - Cleanup function runs before component disappears
   - Used for cleaning up subscriptions, listeners, etc.

#### B. Dependency Array Behaviors
1. No Dependency Array:
```jsx
useEffect(() => {
    // Runs after EVERY render
});
```

2. Empty Dependency Array:
```jsx
useEffect(() => {
    // Runs only on MOUNT
}, []);
```

3. With Dependencies:
```jsx
useEffect(() => {
    // Runs on MOUNT and when dependencies change
}, [value1, value2]);
```

### 4. Cleanup Function

#### A. What is Cleanup?
A function returned by the effect that runs before:
- Component unmounts
- Effect re-runs due to dependency changes

```jsx
useEffect(() => {
    // Effect code
    return () => {
        // Cleanup code
    };
}, [dependencies]);
```

#### B. Common Cleanup Use Cases
- Removing event listeners
- Canceling subscriptions
- Clearing timers
- Aborting fetch requests

Example:
```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log('Timer tick');
    }, 1000);

    return () => clearInterval(timer); // Cleanup
}, []);
```

### 5. Common Patterns

#### A. Data Fetching
```jsx
useEffect(() => {
    let ignore = false;

    async function fetchData() {
        const result = await fetch(url);
        const data = await result.json();
        if (!ignore) {
            setData(data);
        }
    }

    fetchData();
    return () => {
        ignore = true; // Prevent setting state if component unmounts
    };
}, [url]);
```

#### B. Event Listeners
```jsx
useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
```

### 6. Best Practices

#### A. Rules
1. Always define dependencies correctly
2. Keep effects focused on one concern
3. Don't call hooks inside loops or conditions
4. Include all values from component scope in dependencies

#### B. Optimization
1. Split effects by concern
```jsx
// Instead of one effect doing multiple things
useEffect(() => {
    document.title = title;
    fetchData();
}, [title]);

// Split into focused effects
useEffect(() => {
    document.title = title;
}, [title]);

useEffect(() => {
    fetchData();
}, []);
```

2. Avoid unnecessary dependencies
```jsx
// Move static values outside component
const TIMER_DELAY = 1000;

function Component() {
    useEffect(() => {
        const timer = setInterval(callback, TIMER_DELAY);
        return () => clearInterval(timer);
    }, []); // No need for TIMER_DELAY in deps
}
```

### 7. Common Mistakes to Avoid

1. Missing Dependencies
```jsx
// Wrong
useEffect(() => {
    setCount(count + 1);
}, []); // Missing 'count' dependency

// Right
useEffect(() => {
    setCount(c => c + 1);
}, []); // Using updater function instead
```

2. Infinite Effect Loops
```jsx
// Wrong
useEffect(() => {
    setData(newData);
}, [data]); // Effect updates dependency, causing re-run

// Right
useEffect(() => {
    setData(newData);
}, []); // Run once if newData doesn't depend on data
```

3. Forgetting Cleanup
```jsx
// Wrong
useEffect(() => {
    const subscription = subscribe();
}); // Memory leak!

// Right
useEffect(() => {
    const subscription = subscribe();
    return () => unsubscribe(subscription);
});
```