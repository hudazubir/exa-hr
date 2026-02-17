<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar
      :is-open="sidebarOpen"
      @close="sidebarOpen = false"
      @menu-click="handleMenuClick"
    />

    <!-- Main Content - Tambah padding & margin -->
    <div class="flex-1 lg:ml-64 p-6">
      <!-- Button untuk toggle sidebar (mobile) -->
      <button
        @click="sidebarOpen = !sidebarOpen"
        class="lg:hidden mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Menu
      </button>

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
      </div>

      <router-link to="/secpage">
        <button>Pergi ke sec page</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'HomePage',
  components: {
    Sidebar
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    handleMenuClick(menuId) {
      console.log('Menu clicked:', menuId)
    }
  }
}
</script>

<style scoped>
  /* CSS lama kau - ubah selector supaya tak affect sidebar */
  .flex-1 > h1 {
    /* styling untuk h1 */
  }

  #wrapper > div {
    background-color: lightcoral;
    padding: 10px;
    border: dashed red 2px;
    display: inline-block;
    margin: 10px;
  }

  #container > div {
    border: dashed red 2px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    color: black;
  }

  #container > div:hover {
    cursor: pointer;
  }
</style>
