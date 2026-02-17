<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <!-- Logo -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">M</div>
          <span class="font-bold text-gray-800">METRONIC</span>
        </div>
        <button @click="toggleSidebar" class="lg:hidden">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Menu Items -->
      <nav class="p-4 space-y-1">
        <div v-for="item in menuItems" :key="item.id">
          <button
            @click="selectMenu(item)"
            class="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="activeMenu === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'"
          >
            <div class="flex items-center gap-3">
              <component :is="item.icon" class="w-5 h-5"/>
              <span class="font-medium">{{ item.label }}</span>
            </div>
            <svg
              v-if="item.hasSubmenu"
              :class="['w-4 h-4 transition-transform', expandedItems[item.id] ? 'rotate-180' : '']"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Submenu -->
          <transition name="slide">
            <div v-if="item.hasSubmenu && expandedItems[item.id]" class="ml-8 mt-1 space-y-1">
              <div class="px-4 py-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer rounded">View {{ item.label }}</div>
              <div class="px-4 py-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer rounded">Manage {{ item.label }}</div>
            </div>
          </transition>
        </div>
      </nav>

      <!-- Admin Area -->
      <div class="absolute bottom-4 left-4 right-4 border-t border-gray-200 pt-4">
        <div class="px-4 py-2 text-sm text-gray-500">Admin Area</div>
      </div>
    </aside>

    <!-- Mobile overlay -->
    <div
      v-if="isOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
    ></div>

    <!-- Main Content -->
    <div class="flex-1 lg:ml-64 p-6">
      <button @click="toggleSidebar" class="lg:hidden mb-4 p-2 bg-blue-500 text-white rounded">☰ Menu</button>
      <h1 class="text-2xl font-bold text-gray-800">Homepage</h1>
      <p class="mt-4 text-gray-600">Selamat datang ke dashboard!</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

// contoh icon component (boleh tukar ikut icon sebenar)
const LayoutDashboard = { template: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v18H3z"/></svg>' }
const User = { template: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5z"/></svg>' }

export default {
  name: 'Sidebar',
  components: { LayoutDashboard, User },
  setup() {
    const isOpen = ref(false)
    const activeMenu = ref('dashboard')
    const expandedItems = reactive({})
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', hasSubmenu: false },
      { id: 'profile', label: 'Profile', icon: 'User', hasSubmenu: false },
      { id: 'payroll', label: 'Payroll', icon: 'User', hasSubmenu: true },
    ]

    function toggleSidebar() {
      isOpen.value = !isOpen.value
    }

    function selectMenu(item) {
      activeMenu.value = item.id
      if (item.hasSubmenu) expandedItems[item.id] = !expandedItems[item.id]
    }

    return { isOpen, toggleSidebar, activeMenu, selectMenu, expandedItems, menuItems }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
