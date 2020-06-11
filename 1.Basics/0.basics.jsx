function Button(props) {
    const handleClick = () => props.onClickFunction(props.incre);
  return (
  <button onClick={handleClick}>   
     +{props.incre} 
    </button>
  ); 
}

function Display(props){
  return (
    <div>{props.message}</div>
  );
}

function App(){
 const [counter,setCounter]=useState(0);
 const IncrementCounter = (increVal) => setCounter(counter+increVal);

  return(
   <div>
      <Button onClickFunction={IncrementCounter} incre={1}/>
      <Button onClickFunction={IncrementCounter} incre={5}/>
      <Button onClickFunction={IncrementCounter} incre={10}/>
      <Button onClickFunction={IncrementCounter} incre={100}/>
      <Display  message={counter}/>

   </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
); 