const { Pool } = require('pg');

const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log('cant connect!', err);
  } else {
    console.log('connected!');
  }
});

module.exports = client;
