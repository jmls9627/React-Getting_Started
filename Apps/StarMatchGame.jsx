// STAR MATCH - Starting Template
import { useState } from "react";

const PlayNumber=props=>(
    <button className="number" 
    onClick={()=>props.onClick( props.number, props.status)}
    style={{backgroundColor:colors[props.status]}}
    >
          {props.number}
        </button>
);
const StarDisplay = props => (
    <>
    {utils.range(1,props.count).map(starId =>
        <div key={starId} className="star"/>
        )}
    </>
);

const StarMatch = () => {
    //const stars=utils.random(1,9);
    const [stars,setStars]=useState(utils.random(1,9));
    const [availableNums, setAvailableNums]=useState(utils.range(1,9));//[1,2,3,4,5]
    const [candidatesNums, setCandidatesNums]=useState([]); //2,3

    const canditateAreWrong=utils.sum(candidatesNums) > stars;

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
      if (currentStatus=='used'){
        return;
      }
      
      const newCandidatesNums = 
      currentStatus==='available'
      ?candidatesNums.concat(number)
      :candidatesNums.filter(cn => cn !== number);
      
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



    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
           <StarDisplay count={stars}/>
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
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };
  
  // Color Theme
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  
  // Math science
  const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };
  
  ReactDOM.render(<StarMatch />, mountNode);
  