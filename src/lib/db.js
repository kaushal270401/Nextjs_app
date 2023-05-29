
import { Pool } from "pg";

let pool;

if (!pool) {
  pool = new Pool({
    user: "postgres",
    password: 'postgres',
    host: "localhost",
    port: 5432,
    database: 'bank',
  });
}

export default pool ;