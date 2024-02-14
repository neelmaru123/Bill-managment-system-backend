
const Bill = require("../model/Bill");

const getAllBills = async (req, res) => {
    console.log("getAllBills");
    const bills = await Bill.find();
    if (!bills) {
        return res.status(204).json({ message: "No Bill Found!" });
    }
    res.json(bills);
};

const createNewBill = async (req, res) => {
    if (!req?.body?.billNo || !req?.body?.companyName) {
        return res
            .status(400)
            .json({ message: "BillNo and companyName is required" });;
    }
    const newBill = {};
    if (req.body?.billNo) newBill.billNo = req.body.billNo;
    if (req.body?.companyName) newBill.companyName = req.body.companyName;
    if (req.body?.productDetails) newBill.productDetails = req.body.productDetails;
    if (req.body?.date) newBill.date = req.body.date;
    if (req.body?.totalAmount) newBill.totalAmount = req.body.totalAmount;
    if (req.body?.gst) newBill.gst = req.body.gst;
    if (req.body?.totalBillAmount) newBill.totalBillAmount = req.body.totalBillAmount;

    try {
        const result = await Bill.create(newBill);
        res.status(201).json({ success: true });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const updateBill = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const bill = await Bill.findOne({ _id: req.body.id }).exec();

    if (!bill) {
        return res
            .status(204)
            .json({ message: `ID: ${req.body.id} does not match` });
    }

    if (req.body?.billNo) bill.billNo = req.body.billNo;
    if (req.body?.companyName) bill.companyName = req.body.companyName;
    if (req.body?.productDetails) bill.productDetails = req.body.productDetails;
    if (req.body?.date) bill.date = req.body.date;
    if (req.body?.totalAmount) bill.totalAmount = req.body.totalAmount;
    if (req.body?.gst) bill.gst = req.body.gst;
    if (req.body?.totalBillAmount) bill.totalBillAmount = req.body.totalBillAmount;

    const result = await bill.save();
    res.json({ success: true, result: result });
};

const deleteBill = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const bill = await Bill.findOne({ _id: req.body.id }).exec();

    if (!bill) {
        return res
            .status(204)
            .json({ message: `ID: ${req.body.id} does not match` });
    }

    const result = await bill.remove();
    res.json({ success: true, result: result });
};

const getBillById = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const bill = await Bill.findOne({ _id: req.params.id }).exec();

    if (!bill) {
        return res
            .status(204)
            .json({ message: `ID: ${req.params.id} does not match` });
    }

    res.json(bill);
};

module.exports = {
    getAllBills,
    createNewBill,
    updateBill,
    deleteBill,
    getBillById,
  };
  