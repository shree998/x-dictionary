import React, {useState} from 'react';
import './App.css';

function App() {
  const [dictionary, setDictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  return (
    <div className="App">
      <header className="App-header">
      <h1>Dictionary App</h1>
      <input type="text" placeholder="Enter a word" onChange={(e) => {
        const word = e.target.value;
        setWord(word);
       
      }
      } />
      <button onClick={() => {
        const entry = dictionary.find(entry => entry.word.toLowerCase() === word.toLowerCase());
        if (entry) {
          setWord(entry.word);
          setDefinition(entry.meaning);
        } else {
          setWord("");
          setDefinition("Word not found in the dictionary.");
        }
      }
      }>Search</button>
      <h3>Definition:</h3> 
     { definition.length>0 && <p>{definition}</p>} 
      </header>
    </div>
  );
}

export default App;
