import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const jokes = [
  {
    id: 1,
    title: "Why dont programmers like nature?",
    joke: "It has too many bugs!",
  },
  {
    id: 2,
    title: "How do you comfort a JavaScript bug?",
    joke: "You console it!",
  },
  {
    id: 3,
    title: "Why do programmers prefer dark mode?",
    joke: "Because light attracts bugs!",
  },
  {
    id: 4,
    title: "Whats a programmers favorite hangout place?",
    joke: "The Foo Bar!",
  },
];

const App = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div>
      <h1>Jokes of the lecture-3 </h1>
      <p>Jokes: {jokes.length}</p>
      <div>
        {jokes.map((joke, index) => (
          <div key={joke.id}>
            <p>{joke.title}</p>
            <p>{joke.joke}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
