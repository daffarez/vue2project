const appMethods = {
  addToCart() {
    this.cart += 1;
  },
  updateProduct(variantImage) {
    this.image = variantImage;
  },
};

export default appMethods
