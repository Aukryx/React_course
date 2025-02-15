function ClickableButton(){

    const handClick =(e) => e.target.textContent = "Ouch 😢" 
return(
   <button onClick={(e) =>handClick(e)}>Click me 😇</button> 
)
}

export default ClickableButton