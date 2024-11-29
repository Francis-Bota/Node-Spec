const product= require("../models/productModel");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct =async (req, res, next) => {
  await product.save(req.body.title);
  res.redirect("/");
};

