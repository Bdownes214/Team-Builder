import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import CharBtn from "../../components/CharBtn"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Panel from "../../components/Panel"

class Characters extends Component {
    state = {
        heroes: [],
        hero:[],
        userName: "",
        password: ""
    }
    componentDidMount() {
        console.log("loading");
        this.loadHeroes();
    }

    loadHeroes = () => {
        axios.get("https://overwatch-api.net/api/v1/hero")
            .then(res =>
                this.setState({ heroes: res.data.data })
            )
            .catch(err => console.log(err))
            .then(res => console.log("this.state.heroes = ", this.state.heroes))
    };

    showHero = (id) => {
        axios.get("https://overwatch-api.net/api/v1/hero/" + id)
            .then(res => this.setState({hero: res.data}))
            .catch(err => console.log(err))
            .then(() => console.log("show hero data data =", this.state.hero))

        }

    render() {
        return (
            <Container>


                <Panel key={this.state.hero.id} hero={this.showHero} name={this.state.hero.name}> 
                <h1>{this.state.hero.name}</h1>
                <h1>{this.state.hero.real_name}</h1>
                <p>{this.state.hero.age}</p>
                <p>{this.state.hero.health}</p>
                <p>{this.state.hero.description}</p>
                
                
                
                </Panel>
                
                {    this.state.heroes.map(data =>
                        <p> <CharBtn key={data.id} name={data.name} id={data.id} hero={this.showHero} /> </p>
                    
                )}
            </Container>
        )   
    }
}
export default Characters;