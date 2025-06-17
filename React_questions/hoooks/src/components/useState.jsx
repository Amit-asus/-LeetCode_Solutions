import React, { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("some");
  const [userState, setUserState] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  function increment() {
    setCount((prev) => prev + 1);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div>
      <h1>What is useState in react js </h1>
      <p>
        useState in the react js allow the functional component to manage state
        by declaring the state variable and providing the function to update
        them{" "}
      </p>
      <h2>count {count}</h2>
      <button onClick={() => increment()}>Increase</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userState);
        }}
      >
        <input type="text" name="firstName" onChange={(e) => handleChange(e)} />
        <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UseStateHook;
