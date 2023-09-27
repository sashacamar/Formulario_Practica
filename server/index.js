const app = require("./src/app");
const { sequelize } = require("./src/db");

const { PORT } = process.env;

app.listen(PORT, () => {
    sequelize.sync({ alter:  true });
    console.log(`Listening on port ${PORT}`)
})