import { useState } from "react";

function App() {
  const [shuffled, setShuffled] = useState([]);
  const characters = ["A", "B", "C", "D", "E", "F", "G"];
  const [difficulty, setDifficulty] = useState("");

  const difficulyChange = (diff) => {
    setDifficulty(diff);
    if (difficulty == "Easy") {
      let listChars = [];
      if (diff === "Easy") {
        listChars = characters.slice(0, 3); // Get first 3 characters
        console.debug(listChars);
      } else if (diff === "Medium") {
        listChars = characters.slice(0, 5); // Get first 5 characters
        console.debug(listChars);
      } else if (diff === "Hard") {
        listChars = characters.slice(0, 7); // Get all characters
        console.debug(listChars);
      }
      setShuffled(listChars);
    }
  };

  return (
    <>
      <select
        value={difficulty}
        onChange={(p) => difficulyChange(p.target.value)}
        className="text-white"
      >
        <option disabled={true} value=""></option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <p className="text-white">{shuffled}</p>
    </>
  );
}

export default App;
