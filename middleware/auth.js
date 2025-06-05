import { verifyToken } from '../utils/jwt.js'

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ message: "No token provided." });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }

    req.user = decoded;
    next();
};

export default protect