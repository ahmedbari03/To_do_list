import React from "react";

const App = () => {
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> To Do List </h1>
        <br />
        <input type="text" placeholder="Add a Items" />
        <button> + </button>
        <ol>
          <li> Buy cigratte </li>
        </ol>
      </div>
    </div>
  );
};
export default App;
