const express = require("express");
const router = express.Router();

const {
    getAllBills,
    createNewBill,
    updateBill,
    deleteBill,
    getBillById,
} = require("../controllers/billController");

router
  .route("/bill")
  .get(getAllBills)
  .post(createNewBill)
  .put(updateBill)
  .delete(deleteBill);

router.route("/bill/:id").get(getBillById);

module.exports = router;
