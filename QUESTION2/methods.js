const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project",
};
async function addRecord(obj) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("CONNECTION SUCCESS!!!");
  let sql = `INSERT INTO reactDB (col1, col2) values(?,?)`;
  await connection.queryAsync(sql, [obj.col1, obj.col2]);
  await connection.endAsync();
  console.log("Record Added!!!");
}
async function selectAllRecords() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("CONNECTION SUCCESS!!!");
  let sql = `SELECT * FROM reactDB`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log("The table contents are :", list);
  return list;
}
module.exports = { addRecord, selectAllRecords };
