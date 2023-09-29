import dotenv from "dotenv";
dotenv.config();

export const axiomtoken = process.env.AXIOM_TOKEN || "";
export const axiomorgid = process.env.AXIOM_ORG_ID || "";