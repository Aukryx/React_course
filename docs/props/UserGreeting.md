# UserGreeting Component Documentation

## Overview
The UserGreeting component demonstrates conditional rendering in React by displaying different messages based on a user's login status.

## Component Structure

### Props
- `isLoggedIn` (boolean): Determines which message to display
  - Default: `false`
- `username` (string): The name to display in the welcome message
  - Default: `"Guest"`

### Rendered Elements
The component conditionally renders one of two possible messages:
1. Welcome message (`welcomeMessage`): Shown when user is logged in
2. Login prompt (`loginPrompt`): Shown when user is not logged in

## Implementation Details

```jsx
// Conditional rendering using ternary operator
return (isLoggedIn ? welcomeMessage : loginPrompt)
```

The component uses a ternary operator for conditional rendering, which is a concise way to choose between two JSX elements based on a condition.

## Usage Example
```jsx
// App.jsx
<UserGreeting isLoggedIn={true} username="Aukryx" />
```

## Styling
The component uses two CSS classes for styling:
- `.welcome-message`: Styles for the logged-in user message
- `.login-prompt`: Styles for the login prompt message

## Props Validation
The component uses PropTypes for type checking:
```jsx
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
```

## Best Practices Demonstrated
1. Default prop values using parameter destructuring
2. Proper PropTypes validation
3. Clean conditional rendering using ternary operator
4. Semantic class naming for styling