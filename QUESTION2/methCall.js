const express = require("express");
const app = express();
const { addRecord, selectAllRecords } = require("./methods");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.get("/reference1", async (req, res) => {
  const list = await selectAllRecords();
  res.json(list);
});
app.post("/reference2", async (req, res) => {
  const obj = req.body;
  await addRecord(obj);
  console.log(req.body);
  res.json({ message: "User Added Successfully" });
});
app.listen(5000, () => {
  console.log("server started");
  console.log(`Example app listening at http://localhost:5000`);
});
