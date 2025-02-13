# Card Component

## Purpose
A card displaying :
- A profile picture
- A title
- A text (description in that case)

## Component Structure
```jsx
import profilePic from './assets/profile_picture.png'

function Card(){
return(
    <div className="card">
        <img src={profilePic} alt="Profile picture"></img>
        <h2 className="card-title">Aukryx</h2>
        <p className="card-text">Full Stack Developer Student and life enjoyer</p>
    </div>
);
}

export default Card
```

## Usage
```jsx
import Card from "./Card.jsx";
function App() {
  return (
    <>
    <Card/>
    {/* rest of my app */}
    </>
  ); 
}

export default App
```

## Notes to Self
- Currently using basic HTML elements without styling much
- May need to add styling later for:
  - Navigation menu layout
  - Responsive design

## Future Improvements
- [ ] Add CSS styling
- [ ] Make navigation responsive for mobile devices
- [ ] Add active state for current page
- [ ] Consider adding a logo

## Notes

Cards like this are widely used on the web, this here is a basic component but you can adapt it as you need by adding descriptions, links, style effects when you hover or click it. But this is not a doc about style.