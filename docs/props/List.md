# List Component Documentation

## Overview
The List component demonstrates list rendering in React by displaying arrays of items with their properties in an ordered list format.

## Component Structure

### Props
- `items` (array): Array of objects containing item information
  - Default: `[]`
  - Each item object should have:
    - `id` (number): Unique identifier
    - `name` (string): Item name
    - `calories` (number): Caloric value
- `category` (string): Title for the list section
  - Default: `"Category"`

### Rendered Elements
The component renders:
1. Category heading (`h3`)
2. Ordered list (`ol`) containing:
   - List items (`li`) with name and calories

## Implementation Details

### Array Mapping
```jsx
const listItems = items.map(item => 
    <li key={item.id}>
        {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
)
```

The component uses the `map()` method to transform an array of data into an array of JSX elements.

## Usage Example
```jsx
const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 45}
];

<List items={fruits} category="Fruits"/>
```

## Styling
The component uses two CSS classes:
- `.list-category`: Styles for the category heading
- `.list-items`: Styles for the ordered list

## Props Validation
The component uses PropTypes for complex type checking:
```jsx
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
```

## Best Practices Demonstrated
1. Unique `key` prop for list items
2. Default prop values using parameter destructuring
3. Complex PropTypes validation for nested data structures
4. Clean array mapping implementation
5. Semantic class naming