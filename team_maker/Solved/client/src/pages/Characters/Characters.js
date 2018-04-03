import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import CharBtn from "../../components/CharBtn"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Panel from "../../components/Panel"

class Characters extends Component {
    state = {
        heroes: []
    }
    componentDidMount() {
        this.loadHeroes();
      }
    
      loadHeroes = () => {
        axios.get("https://overwatch-api.net/api/v1/hero")
          .then(res =>
            this.setState({ heroes: res.data.data })
          )
          .catch(err => console.log(err))
          .then(res => console.log("this.state = ", this.state.heroes))
      };
    render() {
        return (
            <Container>
                {
                    this.state.heroes.map(data =>
                    <p> <CharBtn name={data.name} id={data.id}/> </p>
                    )
                }
                <Panel/>
            </Container>
        )
    }
}

export default Characters;