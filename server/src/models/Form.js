const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Form",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            full_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            start_date: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            preferred_language: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            how_found: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            newsletter_subscription: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
        }
    )
}