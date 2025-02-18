# Change Component Documentation

## Overview
The Change component demonstrates form handling in React using useState for multiple form inputs including text, number, textarea, select, and radio inputs.

## Component Structure

### State Variables
- `name` (string): User input text
  - Initial value: ""
- `quantity` (number): Numeric input
  - Initial value: 1
- `comment` (string): Textarea content
  - Initial value: ""
- `payment` (string): Selected payment method
  - Initial value: ""
- `shipping` (string): Selected shipping method
  - Initial value: "Delivery"

### Event Handlers
1. `handleNameChange`: Updates name state
2. `handleQuantityChange`: Updates quantity state
3. `handleCommentChange`: Updates comment state
4. `handlePaymentChange`: Updates payment selection
5. `handleShippingChange`: Updates shipping method

### Form Elements
1. Text input for name
2. Number input for quantity
3. Textarea for delivery instructions
4. Select dropdown for payment method
5. Radio buttons for shipping options

## Implementation Details

### State Initialization
```jsx
const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [comment, setComment] = useState("");
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState("Delivery");
```

### Event Handler Pattern
```jsx
function handleNameChange(event) {
    setName(event.target.value);
}
```

### Input Types Demonstrated
```jsx
// Text input
<input value={name} onChange={handleNameChange} />

// Number input
<input value={quantity} onChange={handleQuantityChange} type="number" />

// Textarea
<textarea value={comment} onChange={handleCommentChange} />

// Select dropdown
<select value={payment} onChange={handlePaymentChange}>
    <option value="">Select an option</option>
    ...
</select>

// Radio buttons
<input type="radio" value="Pick Up" 
       checked={shipping === "Pick Up"}
       onChange={handleShippingChange} />
```

## Best Practices Demonstrated
1. Controlled components pattern
2. Separate handler for each input
3. Appropriate input types for different data
4. Default values for all form elements
5. Clear state-input binding