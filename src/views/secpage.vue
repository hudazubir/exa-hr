<template>
  <h1>Element v-for</h1>
  <p>component created with v-for based on an array.</p>

  <li v-for="(item, index) in items" :key="index">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <ul>
    <li v-for="value in myObject" :key="value">
      {{ value }}
    </li>
  </ul>

  <li v-for="(value, key) in myObject" :key="key">
    {{ key }}: {{ value }}
  </li>

  <!-- v-for with a range -->
  <span v-for="n in 10" :key="n"> {{ n }}</span>
  <!-- note: n starts with an initial value of 1 instead of 0 -->

  <!-- v-for in <template> -->
  <ul>
    <template v-for="item in items" :key="item">
      <li>{{ item.msg }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>


  <div v-for="buah in buahs" :key="buah.id" class="v-for">
    <h1>Hello Sumud Nusantara - <span>{{ buah.nama }}</span></h1>
  </div>

  <br>
  <router-link to="/login">
    <button>Log Masuk</button>
  </router-link>
</template>


<script setup>
  import {reactive, ref} from 'vue'
  const parentMessage = ref('Parent')
  const items = ref([
    {message: 'Foo'},
    {message: 'Bar'},
    {message: 'Foo'},
    {message: 'Bar'}
  ])

  const buahs = ref ([
    { id:1, nama: 'Tembikai'},
    { id:2, nama: 'Orange'}
  ])

  const myObject = reactive ({
    title: 'Bebas Palestine',
    author: 'Sumud Nusantara',
    publishedAt: '08-08-2025'
  })
</script>

<style>
  .v-for {
    font-size: 12px;
  }
</style>
