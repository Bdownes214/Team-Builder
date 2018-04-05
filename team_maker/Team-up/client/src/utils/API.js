import axios from "axios";

export default {
  // Get user
  getUser: function() {
    return axios.get("/api/user");
  },
    // Saves a team to the database
    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    }
  // Gets a team with the given id
  // getTeam: function(id) {
  //   return axios.get("/api/teams/" + id);
  // },
  // // Deletes the team with the given id
  // deleteTeam: function(id) {
  //   return axios.delete("/api/teams/" + id);
  // }
};
