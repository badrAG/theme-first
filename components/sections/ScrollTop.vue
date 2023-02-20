<template>
    <!-- Scroll to top -->
    <div v-if="showButton" @click="scrollToTop" class="text-white inline-flex items-center justify-center fixed bottom-20 right-10 md:bottom-28 md:right-16 h-11 w-11 z-50 rounded-full box-shadow scale cursor-pointer bg-primary  hover:opacity-90">
        <fa :icon="['fa', 'angle-up']" ></fa>
    </div>
    <!-- Scroll to top -->
</template>
  
<script>
  export default {
    data() {
      return {
        showButton: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (window.pageYOffset > 100) {
          this.showButton = true;
        } else {
          this.showButton = false;
        }
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
</script>
  