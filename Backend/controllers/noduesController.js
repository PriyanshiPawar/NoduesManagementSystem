import NoDues from "../models/NoDues.js";

// APPLY
export const applyNoDues = async (req, res) => {
    const data = await NoDues.create({
        studentId: req.user.id,
    });

    res.json(data);
};

// MY DATA
export const getMyNoDues = async (req, res) => {
    const data = await NoDues.findAll({
        where: { studentId: req.user.id },
    });

    res.json(data);
};

// ALL DATA
export const getAllNoDues = async (req, res) => {
    const data = await NoDues.findAll();
    res.json(data);
};