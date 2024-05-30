import { useState } from "react";
// import World from "./World";

export default function Hello(props) {
    console.log(props)

    //let name = "Mike";
    const [name, setName] = useState();

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName)
        console.log(name)
    }

    return (
        <div>
            <h2>{name}({props.age})</h2>
            <p></p>
            <button onClick={changeName}>Change</button>
        </div>
    );
}