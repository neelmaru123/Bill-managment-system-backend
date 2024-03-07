const express = require("express");
const router = express.Router();

const {
    getAllExpenses,
    createNewExpense,
    updateExpense,
    deleteExpense,
    getExpenseById,
} = require("../controllers/ExpenseController");

router
  .route("/")
  .get(getAllExpenses)
  .post(createNewExpense)
  .put(updateExpense)
  .delete(deleteExpense);

router.route("/:id").get(getExpenseById);

module.exports = router;
