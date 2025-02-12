# Footer Component

## Purpose
A navigation footer component that displays the &copy;, the year as of today and the name of the copyright. This component appears at the bottom of the website and includes:
- &copy;
- The current year 
- The name of the copyright

## Component Structure
```jsx
        <footer>
            <p>&copy; {new Date().getFullYear()} Aukryx</p>
        </footer>
```

## Usage
```jsx
import Footer from './Footer'

function App() {
    return (
        <div>
            <Food />
            {/* rest of my app */}
        </div>
    )
}
```

## Notes to Self
- Currently using basic HTML elements without styling

## Future Improvements
- [ ] Add CSS styling
- [ ] Make footer responsive for mobile devices
- [ ] Add active state for current page
- [ ] Consider adding a logo