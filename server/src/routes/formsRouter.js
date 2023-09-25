const { Router } = require("express");
const { sendForm, getForm, updateForm} = require("../handlers/formsHandlers");

const formsRouter = Router();

formsRouter.post('/send', sendForm);

formsRouter.get('/search/:id', getForm);

formsRouter.get('/search/', getForm);

formsRouter.post('/update/:id', updateForm);

module.exports = formsRouter;