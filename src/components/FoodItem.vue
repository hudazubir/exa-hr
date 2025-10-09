<template>
  <div v-on:click="countClicks">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
    <p id="red">You have clicked me {{ clicks }} times.</p>
  </div>



  <h2>{{ foodName }}</h2>
  <p>{{ foodDesc }}</p>
  <img src="/images/flag.jpg" v-show="isFavourite" class="palestine-img">
</template>


<script>
  export default {
    data() {
      return {
        name: 'Gaza',
        message: 'Free Free Palestine',
        clicks: 0
      }
    },
    methods: {
      countClicks() {
        this.clicks++;
      }
    },

    //data yang nak terima dari parent
    props: [
      'foodName',
      'foodDesc',
      'isFavourite'
    ]
  }
</script>


<style scope>
  #red {
    font-weight: bold;
    color: rgb(85, 2, 89);
  }
  p {
    color: black;
  }
  .palestine-img {
    width: 350px;
    height: auto;
    border-radius: 10px;
    display: block;
    margin: 10px auto;
  }
</style>
