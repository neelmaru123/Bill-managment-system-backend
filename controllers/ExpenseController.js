const Expense = require("../model/Expense");

const getAllExpenses = async (req, res) => {
    const expenses = await Expense.find();
    if (!expenses) {
        return res.status(204).json({ message: "No Bill Found!" });
    }
    res.json(expenses);
};

const createNewExpense = async (req, res) => {
    if (!req?.body?.ExpenseNo || !req?.body?.companyName) {
        return res
            .status(400)
            .json({ message: "ExpenseNo and companyName is required" });;
    }
    const newExpense = {};
    if (req.body?.ExpenseNo) newExpense.ExpenseNo = req.body.ExpenseNo;
    if (req.body?.companyName) newExpense.companyName = req.body.companyName;
    if (req.body?.productDetails) newExpense.productDetails = req.body.productDetails;
    if (req.body?.date) newExpense.date = req.body.date;
    if (req.body?.totalAmount) newExpense.totalAmount = req.body.totalAmount;
    if (req.body?.gst) newExpense.gst = req.body.gst;
    if (req.body?.totalBillAmount) newExpense.totalBillAmount = req.body.totalBillAmount;

    try {
        const result = await Expense.create(newExpense);
        res.status(201).json({ success: true });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const updateExpense = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const expense = await Expense.findOne({ _id: req.body.id }).exec();

    if (!expense) {
        return res
            .status(204)
            .json({ message: `ID: ${req.body.id} does not match` });
    }

    if (req.body?.ExpenseNo) expense.ExpenseNo = req.body.ExpenseNo;
    if (req.body?.companyName) expense.companyName = req.body.companyName;
    if (req.body?.productDetails) expense.productDetails = req.body.productDetails;
    if (req.body?.date) expense.date = req.body.date;
    if (req.body?.totalAmount) expense.totalAmount = req.body.totalAmount;
    if (req.body?.gst) expense.gst = req.body.gst;
    if (req.body?.totalBillAmount) expense.totalBillAmount = req.body.totalBillAmount;

    const result = await Expense.save();
    res.json({ success: true, result: result });
};

const deleteExpense = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const expense = await Expense.findOne({ _id: req.body.id }).exec();

    if (!expense) {
        return res
            .status(204)
            .json({ message: `ID: ${req.body.id} does not match` });
    }

    const result = await Expense.deleteOne({ _id: req.body.id });
    res.json({ success: true, result: result });
};

const getExpenseById = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const expense = await Expense.findOne({ _id: req.params.id }).exec();

    if (!expense) {
        return res
            .status(204)
            .json({ message: `ID: ${req.params.id} does not match` });
    }

    res.json(expense);
};

module.exports = {
    getAllExpenses,
    createNewExpense,
    updateExpense,
    deleteExpense,
    getExpenseById,
  };