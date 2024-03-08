import dotenv from "dotenv";
dotenv.config();

const key = dotenv.process.env.username;
console.log("hello");
console.log(key);
