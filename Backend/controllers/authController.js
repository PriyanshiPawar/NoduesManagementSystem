import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

// REGISTER
export const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hash,
        role,
        branch,
        semester
    });

    res.json(user);
};

// LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.json({ msg: "User not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.json({ msg: "Wrong password" });

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET);

    res.json({ token, role: user.role });
};