import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function register(req, res) {
    const { name, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);
    await User.create ({name, email, password: hashed});

    res.status(201).json({ message: 'User created'});
};

export async function login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials'});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(401).json({ error: 'Invalid credentials'});

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });

    res.json({ token });
};