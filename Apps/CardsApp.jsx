     const CardList= (props) => (
    // <Card {...testData[0]}/>
    //<Card {...testData[1]}/>
     <div>
      {props.profile.map(profile => <Card key={profile.id} {...profile}/>)}
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
  handleSubmit = async (event) => { 
    event.preventDefault();
   const resp=await axios.get(`https://api.github.com/users/${this.state.username}`)
    console.log(this.state.username);
    this.props.onSubmit(resp.data);
    this.setState({username:''})
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
    state={
    profiles:[],
  };
  addNewProfile=(profileData)=>{
     this.setState(prevState =>({
       profiles: [...prevState.profiles,  profileData],
     }));
    console.log('App', profileData)
  }
    render(){
      return (
      <div>
        <div className="header">{this.props.title}</div>
          <Form onSubmit={this.addNewProfile}/> 
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