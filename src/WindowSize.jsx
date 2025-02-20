import React, {useState, useEffect, use} from "react";

export default function WindowSize(){
    const [width, setwidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event Added")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Removed")
        }
    }, [])

    useEffect(() =>{
        document.title = `Size: ${width} x ${height}`;
        console.log("Title Changed")
    }, [width, height])

    function handleResize(){
        setwidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
        <p>Window width: ${width}px</p>
        <p>Window height: ${height}px</p>
        </>
    );
}