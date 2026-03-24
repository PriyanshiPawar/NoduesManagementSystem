import Assignment from "../models/Assignment.js";

// CREATE
export const createAssignment = async (req, res) => {
    const { subject } = req.body;

    const data = await Assignment.create({
        studentId: req.user.id,
        subject,
    });

    res.json(data);
};

// GET
export const getAssignments = async (req, res) => {
    const data = await Assignment.findAll();
    res.json(data);
};

// UPDATE
export const updateAssignment = async (req, res) => {
    const { status } = req.body;

    await Assignment.update(
        { status },
        { where: { id: req.params.id } }
    );

    res.json({ msg: "Assignment Updated" });
};