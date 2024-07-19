import express from 'express';
import Users from '../models/Users.js';

// Router instance
const router = express.Router();

// CRUD operations
router.get('/', async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.post('/', async (req, res) => {
    const user = new Users(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.json({message: 'User Deleted!'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

export default router;