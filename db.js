import mysql from "mysql";

export function log(timestamp, method) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "me",
    password: "secret",
    database: "my_db",
  });

  connection.connect();

  connection.query(
    `INSERT INTO log (timestamp, method) VALUES (${timestamp}, ${method};`,
    (error) => {
      if (error) throw error;

      console.log(`Logged ${timestamp} ${method}`);
    }
  );

  connection.end();
}
