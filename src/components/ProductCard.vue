<script>

export default {
    props: ["item"],
    methods: {
        onProductClick() {
            /*alert("You've chosen this product")*/
        }
    }
}

</script>

<template>
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/src/assets/images/coffee.png" alt="Coffee" @click="onProductClick" /></figure>
  <div class="card-body">
    <h3 class="card-title">{{ item.brand }}</h3>
    <h2 class="card-title">{{ item.productTitle }}</h2>
    <p>{{ item.pricePerMesure }} {{ item.mesure }}</p>
    <p> {{ item.priceBeforeDiscount }}</p>
    <p> {{  item.discount }}</p>
    <p>{{ item.priceAfterDiscount}}</p>
    <div class="card-actions justify-end">
        <h1> {{ item.priceAfterDiscount }}</h1>
      <button class="btn btn-primary">AJOUTER</button>
    </div>
  </div>
</div>

</template>
