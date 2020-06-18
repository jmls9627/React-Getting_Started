//import * as React from 'react';
// STAR MATCH - Starting Template
import React,{ useState} from "react";
import Game from "./Game";

const StarMatch =() =>{
  const [gameId, setGameId]=useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId+1)}/>;
}
/*
export default function App() {
  return <StarMatch />;
}*/
export default StarMatch;



//https://github.com/jmls9627/React-Getting_Started/commits/master