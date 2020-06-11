class Card extends React.Component{
    render(){
      return (
      <div className="github-profile">
       <img src="https://placehold.it/75"/>
          <div className="info">
            <div className="name">Name Here...</div>
            <div className="Company">Company Here...</div>
          </div> 
      </div>
      )
    }
  }
  
  class App extends React.Component{
    render(){
      return (
      <div>
        <div className="header">{this.props.title}</div>
          <Card/>
      </div>
      )
    }
  }
  /*const App = ({title}) => (
    <div className="header">{title}</div>
  );*/
  
  
  ReactDOM.render(
      <App title="The GitHub Cards App" />,
    mountNode,
  );