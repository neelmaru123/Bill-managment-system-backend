require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const path = require("path");
// const handleNewUser = require("./controllers/signupController");
const handleLogin = require("./controllers/loginController");

const cors = require("cors");

const mongoose = require("mongoose");
const connectDB = require("./config/dbConnection");
const Bill = require("./model/Bill");

const PORT = process.env.PORT || 3500;

//connect to mongoDB
connectDB();

//cross-origin resource sharer
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());



app.use("/", express.static(path.join(__dirname, "public")));

// app.post("/signup", handleNewUser);

app.post("/login", handleLogin);



mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

billRoute = require("./routes/bill");
expenceRoute = require("./routes/expense");

app.use("/bill", billRoute);
app.use("/expense", expenceRoute);

// app.post("/bill", async (req, res) => {
//   // console.log(req.body.billNo, req.body.companyName);
//   console.log(req.body);
//   if (!req?.body?.billNo || !req?.body?.companyName) {
//     return res
//       .status(400)
//       .json({ message: "BillNo and companyName is required" });;
//   }

//   const newBill = {};
//   if (req.body?.billNo) newBill.billNo = req.body.billNo;
//   if (req.body?.companyName) newBill.companyName = req.body.companyName;
//   if (req.body?.productDetails) newBill.productDetails = req.body.productDetails;
//   if (req.body?.date) newBill.date = req.body.date;
//   if (req.body?.totalAmount) newBill.totalAmount = req.body.totalAmount;
//   if (req.body?.gst) newBill.gst = req.body.gst;
//   if (req.body?.totalBillAmount) newBill.totalBillAmount = req.body.totalBillAmount;

//   try {
//     const result = await Bill.create(newBill);
//     res.status(201).json({ success: true });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.get("/bill", async (req, res) => {
//   console.log("getAllBills");
//   const bills = await Bill.find();
//   if (!bills) {
//     return res.status(204).json({ message: "No Bill Found!" });
//   }
//   res.json(bills);
// });

// app.get("/bill/:id", async (req, res) => {
//   if (!req?.params?.id) {
//     return res.status(400).json({ message: "ID is required" });
//   }

//   const bill = await Bill.findOne({ _id: req.params.id }).exec();

//   if (!bill) {
//     return res
//       .status(204)
//       .json({ message: `ID: ${req.params.id} does not match` });
//   }

//   res.json(bill);
// });

// app.delete("/bill/:id", async (req, res) => {
//   if (!req?.params?.id) {
//     return res.status(400).json({ message: "ID is required" });
//   }

//   const bill = await Bill.findOne({ _id: req.params.id }).exec();

//   if (!bill) {
//     return res
//       .status(204)
//       .json({ message: `ID: ${req.params.id} does not match` });
//   }

//   const result = await bill.deleteOne();
//   res.json({ success: true, result: result });
// });


