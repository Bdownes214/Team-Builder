import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Teams extends Component {
  state = {
    teams: [],
    teamName: "",
    characters: "",
    maps: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadTeams = () => {
    API.getTeams()
      .then(res =>
        this.setState({ teams: res.data, teamName: "", characters: "", maps: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteTeam = id => {
    API.deleteTeam(id)
      .then(res => this.loadTeams())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.teamName && this.state.characters) {
      API.saveTeam({
        teamName: this.state.teamName,
        characters: this.state.characters,
        maps: this.state.maps,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadTeams())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>All Teams</h1>
            </Jumbotron>
            {this.state.teams.length ? (
              <List>
                {this.state.teams.map(team => (
                  <ListItem key={team._id}>
                    <Link to={"/teams/" + team._id}>
                      <strong>
                        {team.teamName} includes {team.characters}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteTeam(team._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Created Teams will display here</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Teams;
