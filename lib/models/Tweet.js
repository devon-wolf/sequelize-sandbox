const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Tweet extends Model {};

Tweet.init({
	text: {
		type: DataTypes.STRING(240),
		allowNull: false
	}
},
{ sequelize: db });

module.exports = Tweet;