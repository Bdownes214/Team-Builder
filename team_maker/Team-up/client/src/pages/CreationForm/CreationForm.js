import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class CreationForm extends Component {
    state = {
        teams: [],
        teamName: "",
        characters: "",
        maps: "",
        synopsis: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(name, value)
        console.log(this.state)
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
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.teamName}
                                onChange={this.handleInputChange}
                                name="teamName"
                                placeholder="Team Name (required)"
                            />
                            <Input
                                value={this.state.characters}
                                onChange={this.handleInputChange}
                                name="characters"
                                placeholder="characters (required)"
                            />
                            <Input
                                value={this.state.maps}
                                onChange={this.handleInputChange}
                                name="maps"
                                placeholder="Add maps that are good with this team"
                            />
                            <TextArea
                                value={this.state.synopsis}
                                onChange={this.handleInputChange}
                                name="synopsis"
                                placeholder="Synopsis (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.characters && this.state.teamName)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Team
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default CreationForm;