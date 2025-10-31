import { useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleTextInputFromChild = (updatedText: string) => {
    setText(updatedText);
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };


  return (
    <div className="min-w-100 min-h-100 p-4 shadow-lg bg-sky-100">
      <h1 className="text-lg">Character Counter App</h1>
      <label>
        <input type="checkbox" className="m-3" checked={isChecked} onChange={handleChange} />
        Show Reading Time
      </label>
      <TextInput onTextChange={handleTextInputFromChild} />
      <CharacterCounter text={text} showReadingTime={isChecked}/>
    </div>
  );
}

export default App;
