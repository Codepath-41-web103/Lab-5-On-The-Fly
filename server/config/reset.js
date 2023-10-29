import { pool } from "./database.js";
import "./dotenv.js";
import { fileURLToPath } from "url";

const createChatsTable = async () => {
  const createChatsTableQuery = `
    CREATE TABLE IF NOT EXISTS chats (
      chat_id INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      recipient_id INTEGER NOT NULL,
      sender_id INTEGER NOT NULL
    );
  `;

  try {
    await pool.query(createChatsTableQuery);
    console.log("🎉 chat table created successfully");
  } catch (err) {
    console.error("⚠️ error creating trips table", err);
  }
};

const createUsersTable = async () => {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      avatar_url TEXT NOT NULL,
      bio TEXT NOT NULL
    );
  `;

  try {
    await pool.query(createUsersTableQuery);
    console.log("🎉 users table created successfully");
  } catch (err) {
    console.error("⚠️ error creating destinations table", err);
  }
};

createChatsTable();
createUsersTable();
