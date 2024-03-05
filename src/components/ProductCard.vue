<script>

export default {
    props: ["item"],
}

</script>

<template>
<div v-if="item" class="card w-96 bg-base-100 shadow-xl">
  <figure><img :src="item.image" alt="product image"></figure>
  <div class="card-body">
    <h3 class="card-title">{{ item.category }}</h3>
    <h2 class="card-title">{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <div class="card-actions justify-end">
      <h1>{{ item.price }}</h1>
      <button class="btn btn-primary">AJOUTER</button>
    </div>
  </div>
</div>
</template>
