# ToDoList Component

## Purpose
An interactive to-do list component that combines multiple React state management patterns learned. It demonstrates controlled inputs, array state management, and complex array operations like reordering items.

## Component Structure
```jsx
import React, {useState} from "react";

export default function ToDoList(){
    const [tasks, setTacks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTasks] = useState("")
    
    // Handler functions...
    // JSX return...
}
```

## State Management

### Multiple States
1. `tasks`: Array of task strings
   - Initial value: `["Eat Breakfast", "Take a shower", "Walk the dog"]`
   - Manages the list of tasks

2. `newTask`: String for input field
   - Initial value: `""`
   - Manages the input field state

### State Update Functions

1. `handleInputChange`
   - Updates newTask state with input value
   - Controlled input pattern
   ```jsx
   function handleInputChange(event){
       setNewTasks(event.target.value)
   }
   ```

2. `addTask`
   - Validates input (non-empty after trim)
   - Adds new task to array
   - Resets input field
   ```jsx
   function addTask(){
       if(newTask.trim() !== ""){
           setTacks(t => [...t, newTask])
           setNewTasks("")  
       }
   }
   ```

3. `deleteTask`
   - Removes task at specified index
   - Uses filter method for immutable update
   ```jsx
   function deleteTask(index){
       const updatedTasks = tasks.filter((_, i) => i !== index)
       setTacks(updatedTasks);
   }
   ```

4. Task Reordering Functions
   - `moveTaskUp`: Swaps task with previous task
   - `moveTaskDown`: Swaps task with next task
   - Both use array destructuring for swapping

## Key Features

### Input Management
- Controlled input component
- Input validation
- Automatic clearing after addition

### Task Operations
1. Add Task
   - Input validation
   - Immutable array update
   - Form reset

2. Delete Task
   - Remove by index
   - Immutable array update

3. Reorder Tasks
   - Move up/down functionality
   - Boundary checking
   - Array element swapping

### UI Elements
- Input field with placeholder
- Add button
- Ordered list of tasks
- Delete button for each task
- Up/down arrows for reordering

## Usage Example
```jsx
import ToDoList from "./ToDoList";

function App() {
    return (
        <ToDoList />
    );
}
```

## Important Notes
1. Combines multiple state management patterns:
   - Array state management
   - Form state management
   - Complex array operations

2. Implements immutable updates throughout:
   - Spread operator for additions
   - Filter for deletions
   - Array copying for reordering

3. Input validation:
   - Prevents empty tasks
   - Trims whitespace

4. Boundary checking:
   - Prevents moving first item up
   - Prevents moving last item down

## Best Practices Demonstrated
1. State Management:
   - Separate states for list and input
   - Immutable updates
   - Controlled inputs

2. User Experience:
   - Clear feedback
   - Intuitive controls
   - Responsive updates

3. Code Organization:
   - Separate functions for different operations
   - Clear naming conventions
   - Logical grouping of functionality

## Potential Improvements
1. Add task editing functionality
2. Implement drag-and-drop reordering
3. Add task completion status
4. Add local storage persistence
5. Add task categories or priorities
6. Add undo/redo functionality
7. Add keyboard shortcuts
8. Add task filtering/sorting options