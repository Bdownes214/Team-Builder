const router = require("express").Router();
const teamRoutes = require("./team");

// Book routes
router.use("/user", teamRoutes);

module.exports = router;
