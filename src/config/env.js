import { config } from "dotenv";

config();

export const { PORT, JWT_SECRET } = process.env;
