import Level2 from "./Level2";

export default function Level1() {
  const value = "here 1";
  return (
    <div
      style={{
        backgroundColor: "tomato",
        margin: "1rem",
        padding: "0.2rem",
      }}
    >
      <h2>Level 1</h2>
      <p>The value of level 1 is: {value}</p>
      <Level2 />
    </div>
  );
}