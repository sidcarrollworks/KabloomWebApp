<template>
  <div class="container flex justify-between items-center py-2 mt-4 md:mt-10">
    <!-- Kabloom Logo  -->
    <LogoSVG class="w-40" />

    <!-- Nav Links -->
    <nav class="hidden items-center space-x-10 md:flex">
      <a
        v-for="item in menu"
        v-bind:key="item"
        href="#"
        class="text-gray-700 font-bold hover:text-gray-900"
      >
        {{ item }}</a
      >
    </nav>
    <MenuIcon class="w-7 md:hidden" />
  </div>
</template>

<script>
import LogoSVG from '../assets/svg/kabloomLogo.svg'
import MenuIcon from '../assets/svg/icons/menu.svg'

export default {
  components: {
    LogoSVG,
    MenuIcon,
  },
  data() {
    return {
      menu: ['Home', 'About Us', 'Blog', 'Demo', 'Virtual Team Builders'],
    }
  },
}
</script>

<style scoped>
</style>