<template>
  <section class="bg-white py-20">
    <!-- Heading -->
    <div class="container">
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center font-extrabold text-playful-red">
          FAQ
        </h1>
        <p class="text-center font-medium text-gray-500">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <!-- FAQ ITEMS -->
      <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
        <!-- Dynamically filling FAQ -->
        <div class="w-full" v-for="item in questions" v-bind:key="item.id">
          <div class="flex items-center border-b py-4">
            <span class="flex-1">{{ item.q }}</span>
            <ChevronDown class="w-5" />
          </div>
          <div class="max-h-0 overflow-hidden">
            <div class="py-4">{{ item.a }}</div>
          </div>
        </div>

        <button class="flex self-center btn text-white bg-playful-blue mt-12">
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ChevronDown from '../assets/svg/icons/chevron-down.svg'

export default {
  components: {
    ChevronDown,
  },
  data() {
    return {
      questions: {
        0: {
          q: 'How does this work?',
          a: 'The magical powers of tailwind and js',
        },
        1: {
          q: 'Is this a real website?',
          a: 'Yes this is a real website. Very cool.',
        },
        2: {
          q: 'What does this allow you to do?',
          a: 'You can create any custom component with ease.',
        },
        3: {
          q: 'Is this hard to maintain?',
          a: 'Not really',
        },
      },
      selected: 0,
    }
  },
}
</script>

<style scoped>
</style>