const { Router } = require("express");
const formsRouter = require('./formsRouter');

const mainRouter = Router();

mainRouter.use("/form", formsRouter);

module.exports = mainRouter;