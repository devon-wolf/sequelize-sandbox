const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Handle extends Model {};

Handle.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	bio: {
		type: DataTypes.STRING,
	}
}, 
{ sequelize: db });

module.exports = Handle;