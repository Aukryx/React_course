# Components A, B, C, and D Documentation

## Overview
A nested component structure demonstrating the use of React Context for state sharing across multiple levels of components without prop drilling.

## Component Structure
```
ComponentA
    └── ComponentB
        └── ComponentC
            └── ComponentD
```

## Individual Components

### ComponentA
```jsx
import React, {useState, useContext, createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext()

export default function ComponentA(){
    const [user, usetUser] = useState("Aukryx");

    return (
      <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
      </div>  
    );
}
```

Key Features:
- Creates UserContext using createContext()
- Manages user state with useState
- Wraps child components in UserContext.Provider
- Provides user value to context

### ComponentB
```jsx
import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB(){
    return (
      <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
      </div>  
    );
}
```

Key Features:
- Pure passthrough component
- Demonstrates context passing without consumption
- Acts as intermediate component

### ComponentC
```jsx
import React, {useContext} from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

export default function ComponentC(){
    const user = useContext(UserContext)
    return (
      <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD/>
      </div>  
    );
}
```

Key Features:
- Consumes UserContext using useContext
- Displays user value from context
- Passes context down to ComponentD

### ComponentD
```jsx
import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

export default function ComponentD(){
    const user = useContext(UserContext)
    return (
      <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
      </div>  
    );
}
```

Key Features:
- Deepest nested component
- Consumes UserContext directly
- Demonstrates context accessibility at any level

## Data Flow
1. UserContext created in ComponentA
2. User state initialized in ComponentA
3. Context value provided to component tree
4. ComponentB passes context implicitly
5. ComponentC consumes and displays context
6. ComponentD consumes and displays context