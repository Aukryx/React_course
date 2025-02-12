## Learning Notes Template

### Date: 2025-02-12
#### What I Learned Today
- Basics componants structure
- How to use it
- Why it is useful

### Componants :
- To create a componant, you must first create a file with the .jsx entension (Javascript XML).
- Then you must create a function that takes no arguments (NTMS : See if its gonna change further in the course).
- You can use any Javascript features in the function
- It's gonna return a mix of JS and HTML
- Then, you need to export that componant by using :
```jsx
export default //name of your componant
```

Here's what it looks like :
```jsx
function Header(){
    //Add any js feature you need
    return (
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
    );
}

export default Header
```

## How to use it :
### Now that we have our componant that we can use anywhere in our code, we need to know how to use it.

As any JS export function, we'll need to import it where we want to use it. Let's take our componants that you can find in the /src directory.
```jsx
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
```
### ! Don't forget uppercase for the name of the componant !
I still don't know why it is important yet, but I've been told to do so but my guess is it is for syntax issues if you don't use uppercase.

### Implementation
Okay so now you have your beautiful componants ready and imported, now we want to use them : Since we're doing a app here we have our main file named App.jsx and the function that will display everything that we want.
```jsx
function App(){

}
```
We will use them as followed :
```jsx
function App() {
  return (
    <>
    <Header/>
    <Food></Food>
    <Footer/>
    </>
  ); 
}
```
2 important points to note :
- You can write the componant in 2 differants ways:
```jsx
<Food></Food>
```
```jsx
<Food/>
```
That is doing the same thing so don't panic if you ever encounter one of those that you didn't know about.

- You see that we have empty brackets embricking the componants : It's because you can't put multiples componants in the same return, so we use this trick in order to do it. Do not forget it.

## Why it is useful?
### Reusable
That the main thing with componant and React (for me yet), you can reuse your pieces of code anywhere very ergonomically. 
