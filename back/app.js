const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
dotenv.config();

app.use(express.json());
mongoose.set("strictQuery", true);
app.use("/api/user", userRouter);
app.use("/api/product", productsRouter);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

app.listen(process.env.PORT, () => {
  connect();
  console.log(`server running by port ${process.env.PORT}`);
});
