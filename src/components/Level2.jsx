import Level3 from "./Level3";
import { useSelector } from "react-redux";
export default function Level2() {
  const value = useSelector((state) => state.getValue.value);
  return (
    <div
      style={{
        backgroundColor: "gray",
        margin: "1rem",
        padding: "1.2rem",
      }}
    >
      <h2>Level 2</h2>
      <p>The value of level 2 is: {value}</p>
      <Level3 />
    </div>
  );
}
