import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

const auth = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) return res.json({ msg: "No token provided" });

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded; // contains id + role
        next();
    } catch (err) {
        res.json({ msg: "Invalid token" });
    }
};

export default auth;