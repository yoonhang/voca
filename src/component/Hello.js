import React from "react";

export default function Hello(props) {
  console.log(props)  
  let name = "Mike";

  function changeName() {
    name = name === "Mike" ? "Jane" : "Mike";
    console.log(name);
    document.getElementById("name").innerText = name;
  }

  function showName() {
    console.log("Mike");
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          console.log(30);
        }}
      >
        Show age
      </button>

      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
}
