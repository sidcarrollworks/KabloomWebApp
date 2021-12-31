<template>
  <section class="relative">
    <div
      class="
        container
        flex flex-col-reverse
        lg:flex-row
        items-center
        gap-12
        mt-14
        lg:mt-28
      "
    >
      <!-- Hero Section Left Side -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h1
          class="
            text-playful-blue text-3xl
            md:text-5xl
            lg:text-7xl
            text-center
            lg:text-left
            mb-6
            font-extrabold
          "
        >
          Fresh Virtual Events
        </h1>
        <p
          class="
            text-gray-500
            font-medium
            text-lg text-center
            lg:text-left
            mb-6
          "
        >
          The truth is, your team misses seeing and laughing with their
          coworkers (even if they did get to relocate to a cheaper city).
        </p>

        <!-- View Events Button -->
        <div class="flex justify-center flex-wrap gap-6">
          <button class="btn text-white bg-playful-red">Let's Party</button>
          <!-- Learn More Button -->
          <button
            class="
              flex
              items-center
              transition
              ease-in-out
              duration-300
              delay-100
              hover:-translate-y-1
              group
            "
          >
            <PlayButton
              class="
                transition
                ease-in-out
                duration-300
                delay-100
                drop-shadow-lg
                w-12
                group-hover:drop-shadow-xl
              "
            />
            <span
              class="
                transition
                ease-in-out
                duration-300
                delay-100
                pl-4
                font-bold
                tracking-wide
                text-playful-blue
                group-hover:drop-shadow-xl
              "
              >Learn More</span
            >
          </button>
        </div>
      </div>

      <!-- Hero Section Right Side  -->
      <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img
          class="mx-w-lg md:max-w-xl drop-shadow-lg"
          src="~assets/png/webperson1-4.png"
          alt="3d Dude"
        />
      </div>
    </div>

    <!-- Background Graphic -->
    <div
      class="
        hidden
        md:block
        overflow-hidden
        bg-playful-indigo
        rounded-l-full
        absolute
        h-80
        w-2/4
        top-32
        right-0
      "
    ></div>
  </section>
</template>

<script>
import PlayButton from '../assets/svg/play-button.svg'

export default {
  components: {
    PlayButton,
  },
}
</script>

<style scoped>
</style>