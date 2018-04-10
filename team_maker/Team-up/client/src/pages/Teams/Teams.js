import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import CharBtn from "../../components/CharBtn"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Panel from "../../components/Panel"

class User extends Component {


  state = {
    userName: "",
    password: ""
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }




  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      userName: event.target.name,
      password: event.target.value
    })
    console.log(this.state)
    API.saveUser(this.state)
      .then(res => res = res.data)
      .then(res => console.log(res))
      .catch(err => console.log(err));

  }


  findUser = event => {
    event.preventDefault();
    API.getUser
    console.log(this.state)
  }


  render() {
    return (

      <Container>
        <h1>Sign In</h1>
        <Input
          value={this.state.teamName}
          onChange={this.handleInputChange}
          name="userName"
          placeholder="Username (required)"></Input>
        <Input
          value={this.state.characters}
          onChange={this.handleInputChange}
          name="password"
          placeholder="password (required)"
        ></Input>
        <button onClick={this.findUser}> submit </button>

        <br></br>
        <br></br>
        <h1>Create an Account</h1>


        <Input
          value={this.state.teamName}
          onChange={this.handleInputChange}
          name="userName"
          placeholder="Username (required)"></Input>
        <Input
          value={this.state.characters}
          onChange={this.handleInputChange}
          name="password"
          placeholder="password (required)"
        ></Input>
        <button onClick={this.handleSubmit}> submit </button>


      </Container>

    )
  }
};
export default User;
