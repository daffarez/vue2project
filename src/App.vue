<template>
  <div id="app">
    <ProductsSection
      :product="product"
      :image="image"
      :inStock="true"
      :details="productDetail"
      :variants="variant"
      :cart="cart"
      :addToCart="addToCart"
      :updateProduct="updateProduct"
    />
  </div>
</template>

<script>
import ProductsSection from "@/components/products/Products-Section.vue";
import appData from "./data";
import appMethods from "./appMethods";

export default {
  name: "App",
  components: {
    ProductsSection,
  },
  data() {
    return appData;
  },
  methods: appMethods,
};
</script>
