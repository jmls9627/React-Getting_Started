function Button() {
  return <button>Test</button>;
  // return React.createElement('div',null,'Hello React');
 
}

ReactDOM.render(
  <Button/>,
  //React.createElement(hello, null),
  document.getElementById('mountNode'),
);