import axios from "axios";

export default {
  // Gets all teams
  getTeams: function() {
    return axios.get("/api/teams");
  },
  // Gets a team with the given id
  getTeam: function(id) {
    return axios.get("/api/teams/" + id);
  },
  // Deletes the team with the given id
  deleteTeam: function(id) {
    return axios.delete("/api/teams/" + id);
  },
  // Saves a team to the database
  saveTeam: function(teamData) {
    return axios.post("/api/teams", teamData);
  }
};
