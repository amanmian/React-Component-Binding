import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";
// import BookList from "./container/book-list";

const admin = {
  firstName: 'Aman',
  lastName: 'Mian'
}

function userAccount(user) {
  return admin.firstName + " " + admin.lastName
}

function Aman(props)        //props 
{
  return <h2> {props.name} is a professional game for wars.</h2>
}

class App2 extends Component {
  render() {
    return (
      <div>Aman</div>
    );
  }
}

class App extends Component {

  render() {
    var user = {
      name: "Rahul",
      hobby: ["cricket", "chess", "music", "bike riding"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <Header />
            <h1> Hello, {userAccount(admin)}! </h1>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <Home name={"Praveen"} age={22} user={user}>
                  <p>Children component</p>        {/* rendered by {this.component.children} */}
                </Home>
              </div>
              <div className="col-md-6">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </div>
          </div>
        </div>

        <hr/><hr/>

        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div class="wrapper">

                <nav id="sidebar">
                  <div class="sidebar-header">
                    <h3>Collapsible Sidebar</h3>
                  </div>

        <ul class="list-unstyled components">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>

                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                      <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                      </ul>

                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Contact</a></li>
        </ul>
    </nav>

</div>
              </div>
              <div className="col-md-5">
                <br />
                <Form />
              </div>
              <div className="col-md-5">
                <Aman name="Clash of Clans" />     {/*props name is defined here*/}
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eTt3_gTkWqgMq_rGKFpgQW58JeFd_EAG3bldVWx7Hk9Ah6V5" />
              </div>
            </div>
          </div>
        </div>
        );
  }
}



class Button extends React.Component {

          handleClick = () => {
            this.props.onClickFn(this.props.newValue);
          }

  render() {
    return (
      <button onClick={this.handleClick} >
          + {this.props.newValue}
        </button>
        )

  }
}

const Label = (props) => {
  return (
    <p>{props.Counter}</p>
        );
}

class App3 extends React.Component {
          state = { Count: 0 }

  incrementCount = (newValue) => {


          this.setState({
            Count: this.state.Count + newValue
          })
        }
        render() {
    return (
      <div className="container">
          <Label Counter={this.state.Count} />
          <br />
          <Button newValue={1} onClickFn={this.incrementCount} />
          <Button newValue={2} onClickFn={this.incrementCount} />
          <Button newValue={5} onClickFn={this.incrementCount} />
          <Button newValue={10} onClickFn={this.incrementCount} />
          <Button newValue={100} onClickFn={this.incrementCount} />
        </div>
        );

  }
}


class StateTest extends React.Component
{
          constructor(props)
  {
        super(props);
    this.state = {term : 'Starting State'};
  }
  render()
  {
    return(
      <div>
          <input className="form-control" style={{marginTop:"20px"}} value={this.state.term} placeholder="Search" onChange={event => this.setState({
            term: console.log("Present content of search bar:", event.target.value),
            term: event.target.value
          })} />
          <br />
          <strong> value of input : </strong> <br /> {this.state.term}
        </div>
        );
  }
}

class ContainerExample
{
  render()
  {
    return(
      <BookList />
    );
  }
}

export default ContainerExample;
