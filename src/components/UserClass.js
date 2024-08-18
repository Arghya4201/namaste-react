import React from "react";

//class based component
class UserClass extends React.Component {
  //We accept props/arguments like this using constructor and super function
  constructor(props) {
    super(props);
    //console.log(props);

    //how we create state variable in class based component
    this.state = {
      count: 0,
      userInfo:{
        name: "Default Name",
        location: "Default",
        avatar_url: "Default"
      }
    };
  }

  async componentDidMount(){
    const data= await fetch("https://api.github.com/users/Arghya4201");
    const json = await data.json();
    //console.log(json);
    //userInfo state variable gets updated by the value in json
    this.setState({        
        userInfo: json,
    })
  }

  render() {
    //Now rest is what you return in a functional component
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src="avatar_url"></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 93928</h4>
      </div>
    );
  }
}
export default UserClass;
