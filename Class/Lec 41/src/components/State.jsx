import React, { useState } from "react";

const State = () => {
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={updateCount}>Increase count</button>
    </div>
  );
};

export default State;
