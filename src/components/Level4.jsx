import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { provideValueAction } from "../redux/reducers/getValueReducer";

export default function Level4() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("to be updated...");
  const inputRef = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    setValue(inputRef.current.value);
    dispatch(
      provideValueAction({
        updatedValue: inputRef.current.value,
      })
    );
  };

  return (
    <div
      style={{
        backgroundColor: "lightyellow",
        margin: "1rem",
        padding: "1.2rem",
      }}
    >
      <h2>Level 3</h2>
      <p>The value of level 4 is: {value}</p>
      <input ref={inputRef} type="text" placeholder="Enter any value here" />
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}
