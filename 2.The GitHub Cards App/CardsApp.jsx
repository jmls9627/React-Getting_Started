const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
        ];
     
const CardList= (props) => (
    // <Card {...testData[0]}/>
    //<Card {...testData[1]}/>
     <div>
      {props.profile.map(profile => <Card {...profile}/>)}
    </div>
    )

class Card extends React.Component{
    render(){
        const profile=this.props; 
      return (
      <div className="github-profile">
       <img src={profile.avatar_url}/>
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="Company">{profile.company}</div>
          </div> 
      </div>
      )
    }
  }
  
class Form extends React.Component{
  //userNameIn = React.createRef(); ref={this.userNameIn}
  state = {username:''};
  handleSubmit = (event) => { 
    event.preventDefault();
    console.log(this.state.username);
  };
  render(){
    return(
     <form  onSubmit={this.handleSubmit}>
      <input type="text" placeholder="GitHub username"
      value={this.state.username}  onChange={event => this.setState({username:event.target.value}) }   
      required/>
      <button>Add Card</button>
    </form>
    );  
  }
}
  
  class App extends React.Component{
     /* constructor(props){
        super(props);
        this.state={
      profiles:testData,
    };
  }*/state={
    profiles:testData,
  };
    render(){
      return (
      <div>
        <div className="header">{this.props.title}</div>
          <Form/> 
         <CardList profile={this.state.profiles}/>
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