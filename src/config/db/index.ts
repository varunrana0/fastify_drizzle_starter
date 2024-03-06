import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "../env";

const pool = new Pool({
	connectionString: env.DB_URL,
	ssl: false,
});

export const db = drizzle(pool);
