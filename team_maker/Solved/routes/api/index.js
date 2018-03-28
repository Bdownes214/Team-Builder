const router = require("express").Router();
const teamRoutes = require("./teams");

// Book routes
router.use("/teams", teamRoutes);

module.exports = router;
