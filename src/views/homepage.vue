<template>
  <h1>Palestine Will Be Free</h1>

  <div id="wrapper">
    <food-item
      food-name="Tembikai"
      food-desc="Palestine Akan Bebas"
    />
  </div>

  <div id="container">
      <food-item
        food-name="Tembikai"
        food-desc="Kita mungkin tak mampu menghentikan bom, tapi kita masih mampu berdoa, bersuara, dan tidak membiarkan hati kita menjadi beku."
        v-bind:is-favourite="true"
      />
      <!--v-bind::if true, akan display, kalau false tak display -->
  </div>

  <router-link to="/secpage">
    <button>Pergi ke sec page</button>
  </router-link>

</template>


<script>
</script>

<style scoped>
  #app > div {
    border: dashed red 2px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    color: black;
  }

  #app > div:hover {
    cursor: pointer;
  }

  #wrapper > div {
    background-color: lightcoral;
    padding: 10px;
  }

</style>
