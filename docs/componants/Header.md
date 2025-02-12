# Header Component

## Purpose
A navigation header component that displays the website title and main navigation menu. This component appears at the top of the website and includes:
- Website title ("My website")
- Navigation menu with 4 main links
- Horizontal line separator

## Component Structure
```jsx
<header>
    <h1>My website</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <hr />
</header>
```

## Usage
```jsx
import Header from './Header'

function App() {
    return (
        <div>
            <Header />
            {/* rest of my app */}
        </div>
    )
}
```

## Notes to Self
- Currently using basic HTML elements without styling
- Navigation links are using placeholder '#' hrefs
- May need to add styling later for:
  - Navigation menu layout
  - Responsive design
  - Active link states

## Future Improvements
- [ ] Add CSS styling
- [ ] Make navigation responsive for mobile devices
- [ ] Add active state for current page
- [ ] Consider adding a logo
- [ ] Add proper routing instead of '#' links