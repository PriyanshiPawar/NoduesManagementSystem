import Fee from "../models/Fee.js";

// ADD
export const addFee = async (req, res) => {
    const { amount } = req.body;

    const data = await Fee.create({
        studentId: req.user.id,
        amount,
    });

    res.json(data);
};

// GET
export const getFees = async (req, res) => {
    const data = await Fee.findAll();
    res.json(data);
};

// UPDATE
export const updateFee = async (req, res) => {
    const { status } = req.body;

    await Fee.update(
        { status },
        { where: { id: req.params.id } }
    );

    res.json({ msg: "Fee Updated" });
};