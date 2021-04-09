const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log('Success!');
	}
	catch (error) {
		console.error('Unable to connect:', error);
	}
};

testConnection();


module.exports = sequelize;