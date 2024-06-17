import { Sequelize, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve('database.sqlite') 
});

const ChartObj = sequelize.define('ChartObj', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4,
    },
    md5: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    }
}, {
    timestamps: false,
});

export { sequelize, ChartObj };
