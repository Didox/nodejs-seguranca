const mysql = require('mysql');
const util = require('util');
const connectionString = 'mysql://root:root@localhost/seguranca';
const db = {};
db.exec = async (sql) => {
  const conn = mysql.createConnection(connectionString);
  const query = util.promisify(conn.query).bind(conn);
  try {
    const rows = await query(sql);
    return rows;
  }
  catch(e){
    console.log(e)
    return []
  } finally {
    conn.end();
  }
};

module.exports = db