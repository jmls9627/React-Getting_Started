

function Button() {
  const[counter,setCounter]=useState(0); //hook
  return <button onClick={()=>setCounter(counter+1)}>{counter}</button>;   //function PlusOne() {setCounter(counter+1);}
  
}

ReactDOM.render(
  <Button/>,
  document.getElementById('mountNode'),
);