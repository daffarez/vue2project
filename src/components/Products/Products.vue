<template>
  <div class="product">
    <div class="product-image">
      <img :src="require(`@/assets/${image}`)" />
    </div>
    <div class="product-information">
      <h1>{{ product }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>
      <div v-for="variant in variants" :key="variant.variantId">
        <p @mouseover="updateProduct(variant.variantImage)">
          {{ variant.variantColor }}
        </p>
      </div>
      <button @click="addToCart">Add to Cart</button>
      <div class="cart">
        <p>Cart ({{ cart }})</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsSocks",
  props: {
    product: String,
    image: String,
    inStock: Boolean,
    details: Array,
    variants: Array,
    cart: Number,
    addToCart: Function,
    updateProduct: Function,
  },
};
</script>

<style>
@import "./product_styles.css";
</style>
