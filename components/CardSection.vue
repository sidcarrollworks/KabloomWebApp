<template>
  <section class="py-20 mt-20">
    <!-- Header -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-3xl text-center font-extrabold text-playful-red">
        Check This Out!
      </h1>
      <p class="text-center font-medium text-gray-500">
        Wow all this stuff is so crazy Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequuntur harum neque culpa deleniti eius minus
        sint enim maxime itaque mollitia, doloremque omnis id sed voluptate
        veritatis quia cumque et perferendis!
      </p>
    </div>
    <!-- Cards -->
    <div
      class="
        container
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-16
        max-w-screen-lg
        mt-16
      "
    >
      <!-- Card 1 -->
      <div
        class="
          transition
          duration-300
          delay-100
          flex flex-col
          rounded-xl
          shadow-md
          hover:shadow-xl
          lg:mb-16
        "
      >
        <div class="p-6 flex flex-col items-center">
          <img src="~assets/png/webperson1-4.png" class="" alt="" />
          <h3 class="mt-5 mb-2 text-playful-blue font-bold text-lg">
            Virtual Events
          </h3>
          <p class="font-light text-gray-500">
            This is an event but virtual, people still have fun.
          </p>
          <hr class="border-b my-5 border-gray-300 w-full" />
          <div class="flex w-full">
            <button class="flex-1 btn text-white bg-playful-blue">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="
          transition
          duration-300
          delay-100
          flex flex-col
          rounded-xl
          shadow-md
          hover:shadow-xl
          lg:my-8
        "
      >
        <div class="p-6 flex flex-col items-center">
          <img src="~assets/png/webperson1-4.png" alt="" />
          <h3 class="mt-5 mb-2 font-bold text-playful-blue text-lg">
            Quick Blooms
          </h3>
          <p class="font-light text-gray-500">
            Quick Blooms are short 30 minute activities
          </p>
          <hr class="border-b my-5 border-gray-300 w-full" />
          <div class="flex w-full">
            <button class="flex-1 btn text-white bg-playful-blue">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="
          transition
          duration-300
          delay-100
          flex flex-col
          rounded-xl
          shadow-md
          hover:shadow-xl
          lg:mt-16
        "
      >
        <div class="p-6 flex flex-col items-center">
          <img src="~assets/png/webperson1-4.png" alt="" />
          <h3 class="mt-5 mb-2 font-bold text-playful-blue text-lg">
            Party in a Box
          </h3>
          <p class="font-light mb-2 text-gray-500">
            Party big enough for any team size. Collection of events
          </p>
          <hr class="border-b my-5 border-gray-300 w-full" />
          <div class="flex w-full">
            <button class="flex-1 btn text-white bg-playful-blue">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
</style>