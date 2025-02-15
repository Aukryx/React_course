# ClickableButton Component Documentation

## Overview
The ClickableButton component demonstrates basic event handling in React by updating button text when clicked.

## Component Structure

### Event Handler
- `handClick`: Function that updates button text when triggered
  - Takes event object (`e`) as parameter
  - Uses `e.target.textContent` to modify button content

### Rendered Element
A single button element with:
- onClick event handler
- Initial text "Click me 😇"
- Changes to "Ouch 😢" when clicked

## Implementation Details

### Event Handler Definition
```jsx
const handClick = (e) => e.target.textContent = "Ouch 😢"
```

### Event Binding
```jsx
<button onClick={(e) => handClick(e)}>Click me 😇</button>
```

## Usage Example
```jsx
<ClickableButton />
```

## Best Practices Demonstrated
1. Arrow function syntax for event handlers
2. Event object usage
3. Direct DOM manipulation through event target
4. Inline event binding with arrow function