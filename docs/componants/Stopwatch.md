# Stopwatch Component Documentation

## Purpose
A stopwatch component that demonstrates the combined usage of useState, useRef, and useEffect for time tracking, with precision up to milliseconds and controls for start, stop, and reset functionality.

## Component Structure
```jsx
import React, {useState, useEffect, useRef} from 'react'

export default function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapseTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    // ...
}
```

## State and Ref Management

### States
1. `isRunning`: Boolean
   - Controls stopwatch running state
   - Triggers effect for time updates

2. `elapsedTime`: Number
   - Stores elapsed milliseconds
   - Used for display formatting

### Refs
1. `intervalIdRef`
   - Stores setInterval ID
   - Used for cleanup
   - Prevents memory leaks

2. `startTimeRef`
   - Stores initial timestamp
   - Used for elapsed time calculation
   - Maintains timing accuracy

## Core Functions

### Time Management
```jsx
useEffect(() => {
    if (isRunning){
        intervalIdRef.current = setInterval(() => {
            setElapseTime(Date.now() - startTimeRef.current)
        }, 10)
    }

    return () => {
        clearInterval(intervalIdRef.current);
    }
}, [isRunning])
```

### Control Functions
1. Start
```jsx
function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
}
```

2. Stop
```jsx
function stop(){
    setIsRunning(false)
}
```

3. Reset
```jsx
function reset(){
    setElapseTime(0)
    setIsRunning(false)
}
```

### Time Formatting
```jsx
function formatTime(){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / (1000) % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 10)

    // Zero padding
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    return `${minutes}:${seconds}:${milliseconds}`
}
```

## UI Elements
- Time display showing mm:ss:ms
- Start button
- Stop button
- Reset button