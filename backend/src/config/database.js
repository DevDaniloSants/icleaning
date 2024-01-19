import { Pool } from 'pg';

// Database configuration with singleton pattern  to avoid multiples pool
class Database {
  static _instance;

  static get instance() {
    if (Database._instance === null) {
      Database._instance = new Database();
    }
    return Database._instance;
  }

  connection() {
    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'caretaker-api',
      password: 'admin',
      port: 5432,
    });

    const query = (text, values) => {
      return new Promise((resolve, reject) => {
        pool
          .query(text, values)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    };

    return query;
  }
}

export default new Database().connection();
