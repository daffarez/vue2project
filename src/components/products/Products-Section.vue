<template>
  <div>
    <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart ({{ cart }})</p>
    </div>
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
        <div
          v-for="variant in variants"
          :key="variant.variantId"
          @mouseover="updateProduct(variant.variantImage)"
          class="color-circle"
          :style="{ backgroundColor: variant.variantColor }"
        ></div>
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsSection",
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
