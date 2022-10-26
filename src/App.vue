<template>
  <div id="app">
    <div class="nav-bar"></div>
    <ProductsSocks
      :product="product"
      :image="image"
      :inStock="false"
      :details="productDetail"
      :variants="variant"
      :cart="cart"
      :addToCart="addToCart"
      :updateProduct="updateProduct"
    />
  </div>
</template>

<script>
import ProductsSocks from "@/components/Products/Products.vue";

export default {
  name: "App",
  components: {
    ProductsSocks,
  },
  data() {
    return {
      product: "Socks",
      image: "vmSocks-green.jpeg",
      productDetail: ["80% cotton", "20% polyster", "Gender-neutral"],
      variant: [
        {
          variantId: 1234,
          variantColor: "green",
          variantImage: "vmSocks-green.jpeg",
        },
        {
          variantId: 1235,
          variantColor: "blue",
          variantImage: "vmSocks-blue.jpeg",
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}
</style>
