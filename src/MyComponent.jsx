import React, {useState} from "react";

export default function MyComponent(){
    
    let [name, setName] = useState();

    const updateName = () => {
        name = "Spongebob";
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>)
}