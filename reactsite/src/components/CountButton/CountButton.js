import React, { useEffect, useState } from "react";

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  const buttonStyles = {
    background: props.buttonColor,
  };

  console.log("CountButton render");

  useEffect(() => {
    console.log("useEffect called");
  }, [currentCount]);

  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>
        +{props.incrementBy}
      </button>
      <div>{currentCount}</div>
    </div>
  );
};

export default CountButton;
