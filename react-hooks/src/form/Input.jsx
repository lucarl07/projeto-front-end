/* eslint-disable */
import React from "react";

const Input = ({label, id, setValue, ...props}) => {
  const parsedLabel = label.charAt(0).toUpperCase() + label.slice(1)

  return (
    <>
      <label htmlFor={id}>
        {parsedLabel}:
      </label> <br />
      <input
        id={id}
        name={id}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </>
  );
}

export default Input;