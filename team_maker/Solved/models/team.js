const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: { type: String, required: true },
  characters: { type: String, required: true },
  maps: { type: String, required: true },
  synopsis: { type: String }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;