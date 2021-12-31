<template>
  <div class="">
    <Header />
    <Hero />
    <Features />
    <CardSection />
    <FAQ />
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import Features from '~/components/Features.vue'
export default {
  components: { Features },
  name: 'IndexPage',
}
</script>
