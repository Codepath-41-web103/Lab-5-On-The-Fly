import pg from "pg";
import "./dotenv.js";
const config = {
  user: "postgres",
  password: "bWp2BkLWyiSks23PdG6y",
  host: "containers-us-west-170.railway.app",
  port: 6389,
  database: "railway",
};

export const pool = new pg.Pool(config);
