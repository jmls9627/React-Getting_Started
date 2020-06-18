import React,{useState, useEffect} from "react";
import utils from "../math-utils";

import StarsDisplay from "./StarsDisplay";
import PlayNumber from "./PlayNumber";
import PlayAgain from "./PlayAgain";


//Custom Hook
const useGameState=()=>{
    //const stars=utils.random(1,9);
    const [stars,setStars]=useState(utils.random(1,9));
    const [availableNums, setAvailableNums]=useState(utils.range(1,9));//[1,2,3,4,5]
    const [candidatesNums, setCandidatesNums]=useState([]); //2,3
    const [secondLeft, setSecondLeft]=useState(10);
    
    React.useEffect(()=> {
      if(secondLeft > 0 && availableNums.length > 0){
      const timerId = setTimeout(() => {
          setSecondLeft(secondLeft-1);
          },1000);
         // return ()=> clearTimeout(timerId);
        }
      });
 
      const setGameState = (newCandidatesNums) =>{
      if(utils.sum(newCandidatesNums)!== stars){
       setCandidatesNums(newCandidatesNums);
     } else {
       const newAvailableNums=availableNums.filter(
         n=> !newCandidatesNums.includes(n)
       );
       setStars(utils.randomSumIn(newAvailableNums,9))
       setAvailableNums(newAvailableNums);
       setCandidatesNums([]);
 
     }
   }
 return { stars, availableNums,candidatesNums,secondLeft, setGameState}
 };
 
 const Game = (props) => {
    const {
     stars,
     availableNums,
     candidatesNums,
     secondLeft,
     setGameState
    } = useGameState();
 
     const canditateAreWrong=utils.sum(candidatesNums) > stars;
     const gameStatus=availableNums.length===0
     ? 'won'
     : secondLeft===0 ? 'lost' : 'active'
  
     const numberStatus =(number) => {
       if(!availableNums.includes(number)){
         return 'used';
       }
       if(candidatesNums.includes(number)){
         return canditateAreWrong ? 'wrong' : 'candidate';
       }
         return'available';
     };
      
     const onNumberClick =(number,currentStatus)=>{
       if (gameStatus !=='active'|| currentStatus=='used'){
         return;
       }
       
       const newCandidatesNums = 
       currentStatus==='available'
       ?candidatesNums.concat(number)
       :candidatesNums.filter(cn => cn !== number);
       
     setGameState(newCandidatesNums);
     };
     return (
       <div className="game">
         <div className="help">
           Pick 1 or more numbers that sum to the number of stars
         </div>
         <div className="body">
           <div className="left">
            {gameStatus !=='active' ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
            ):(
             <StarDisplay count={stars}/>
            )}
           
           </div>
           <div className="right">
           {utils.range(1,9).map(number=>
           <PlayNumber
            key={number} number={number}
            status={numberStatus(number)}
            onClick={onNumberClick}
            />
          )}
           </div>
         </div>
           <div className="timer">Time Remaining: {secondLeft}</div>
       </div>
     );
   };
   
   

 export default Game;