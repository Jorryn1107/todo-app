import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";
import { JWT_SECRET } from "../config/env.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    const insertUser = db.prepare(
      `INSERT INTO users (email, password) VALUES(?, ?)`
    );
    const result = insertUser.run(email, hashedPassword);

    const defaultTodo = `Hello, add your first todo!`;
    const insertTodo = db.prepare(
      `INSERT INTO todos(user_id, task) VALUES(?, ?)`
    );
    insertTodo.run(result.lastInsertRowid, defaultTodo);

    const token = jwt.sign({ id: result.lastInsertRowid }, JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.sendStatus(503);
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  try{
    const getUser = db.prepare(`SELECT * FROM users where email = ?`);
    const user = getUser.get(email);
    
    if(!user){
        return res.status(404).send({ message: "User not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if(!passwordIsValid){
        return res.status(401).send({ message: "Invalid Password" });
    }
    console.log(user);
    const token = jwt.sign({id:user.id}, JWT_SECRET, { expiresIn: "24h" });
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(503);
  }
  
  
});

router.post("/login", (req, res) => {});

export default router;
