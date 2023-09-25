const app = require("./src/app");
const { sequelize } = require("./src/db");

const { PORT } = process.env;

app.listen(3001, () => {
    sequelize.sync({ force:  true });
    console.log(`Listening on port ${PORT}`)
})