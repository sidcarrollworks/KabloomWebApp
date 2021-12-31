<template>
  <footer class="bg-bold-red py-8">
    <div class="container flex flex-col md:flex-row items-center">
      <div
        class="
          flex flex-1 flex-wrap
          items-center
          justify-center
          md:justify-start
          gap-12
        "
      >
        <LogoSVG class="w-40" />
        <ul class="flex text-white uppercase gap-12 text-sm font-bold">
          <li class="cursor-pointer">Our Team</li>
          <li class="cursor-pointer">Blog</li>
          <li class="cursor-pointer">Virtual Events</li>
        </ul>
      </div>
      <div class="flex gap-10 mt-12 md:mt-0"></div>
    </div>
  </footer>
</template>

<script>
import LogoSVG from '../assets/svg/kabloomLogo.svg'
export default {
  components: {
    LogoSVG,
  },
}
</script>

<style scoped>
</style>