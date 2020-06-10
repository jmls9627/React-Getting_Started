function Button(props) {
  //	const handleClick = () => setCounter(counter+1);
    return (
    <button onClick={props.onClickFunction}>
       {props.message} + 1 = {props.message + 1}
      </button>
    ); 
  }
  
  function Display(props){
    return (
      <div>{props.msg}</div>
    );
  }
  
  function App(){
   const [counter,setCounter]=useState(0);
   const IncrementCounter = () => setCounter(counter+1);   
    return(
     <div>
       <Display msg="la suma es"/> 
       <Button onClickFunction={IncrementCounter} message={counter}/>
           
     </div>
    )
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('mountNode'),
  );