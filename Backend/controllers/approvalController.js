import Approval from "../models/Approval.js";

// CREATE
export const createApproval = async (req, res) => {
    const { noDuesId, department } = req.body;

    const data = await Approval.create({
        noDuesId,
        department,
        approvedBy: req.user.id,
    });

    res.json(data);
};

// UPDATE
export const updateApproval = async (req, res) => {
    const { status } = req.body;

    await Approval.update(
        { status },
        { where: { id: req.params.id } }
    );

    res.json({ msg: "Approval Updated" });
};

// GET
export const getApprovals = async (req, res) => {
    const data = await Approval.findAll();
    res.json(data);
};