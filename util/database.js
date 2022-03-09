const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// Localhost connection
const sequelize = new Sequelize({
  host: process.env.DB_HOST, // localhost
  username: process.env.DB_USER, // postgres
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB, // example
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

//Host ec2-44-195-191-252.compute-1.amazonaws.com
// Database d22obp5k24peir
// User hzwpwzqmbxcynu
// Password 61a8d1dab3d79859977a275534a69fbc4ee9337b31d3a64a4cc7c673ef1eb2d5
// URI postgres://hzwpwzqmbxcynu:61a8d1dab3d79859977a275534a69fbc4ee9337b31d3a64a4cc7c673ef1eb2d5@ec2-44-195-191-252.compute-1.amazonaws.com:5432/d22obp5k24peir
// Heroku CLI heroku pg:psql postgresql-adjacent-87985 --app sequelize-app-hrk

// Connect to Heroku cloud
// const sequelize = new Sequelize({
// 	host: 'heroku_host',
// 	username: 'heroku_user',
// 	password: 'heroku_password',
// 	port: 5432,
// 	database: 'heroku_database',
// 	dialect: 'postgres',
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,
// 		},
// 	},
// });

module.exports = { sequelize };
