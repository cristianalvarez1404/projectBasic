const Product = require("../models/products");

const createProduct = async (req, res, next) => {
  try {
    const { productName, price, description, category, images } = req.body;

    const product = await Product.findOne({ productName });
    console.log(product);

    if (product)
      return res
        .status(404)
        .json({ success: true, message: "Product already exist" });

    const newProduct = await Product.create({ ...req.body });
    res.status(200).json({
      success: true,
      newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id });

    if (!product)
      return res
        .status(404)
        .json({ success: true, message: "Product does not exist" });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    if (!products)
      return res
        .status(404)
        .json({ success: true, message: "Products does not exist" });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });

    console.log(product);
    if (!product)
      return res
        .status(404)
        .json({ success: true, message: "Product does not exist" });

    const newProduct = await Product.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );

    res.status(200).json({
      success: true,
      newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });

    console.log(product);
    if (!product)
      return res
        .status(404)
        .json({ success: true, message: "Product does not exist" });

    const newProduct = await Product.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: "Product deleted succefully!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
