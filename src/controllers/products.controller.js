import Product from "../models/Product";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  if (!name || !category || !price|| !imgURL) res.status(404).json({ mesagge: "missing data" });

  const newProduct = new Product({ name, category, price, imgURL });
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

//Actualiza, si se manda solo una propidad, actualiza solo esa.
export const updateProductById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (!id || !body) res.status(404).json({ mesagge: "Id or body is invalid" });

  const product = await Product.findById(id, body, {
    new: true,
  });
  res.status(200).json(product);
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.json(deletedProduct);
};
