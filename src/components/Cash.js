import React from "react";

const Cash = (props) => {
  const value = (props.value / props.item.ratio).toFixed(2);
  return (
    <p>
      {value != 0 ? `${props.item.title}:  ${value}${props.item.prefix}` : null}
    </p>
  );
};

export default Cash;
