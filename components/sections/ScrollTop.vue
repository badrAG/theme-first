<template>
  <!-- Scroll to top -->
  <div v-if="showButton" @click="scrollToTop" class="fixed z-40 inline-flex items-center justify-center text-white rounded-full cursor-pointer scoll-to-top bottom-28 right-14 h-11 w-11 box-shadow scale bg-primary hover:opacity-90">
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
      <path d="M15.3598 13.2682L9.35979 8.26824C8.33549 7.41466 9.61586 5.87822 10.6402 6.7318L16.6402 11.7318C17.6645 12.5854 16.3841 14.1218 15.3598 13.2682Z" fill="currentColor"/>
      <path d="M3.35979 11.7318L9.35979 6.7318C10.3841 5.87822 11.6645 7.41466 10.6402 8.26824L4.64016 13.2682C3.61586 14.1218 2.33549 12.5854 3.35979 11.7318Z" fill="currentColor"/>
    </svg>
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

<style scoped>
  [dir="rtl"] .scoll-to-top {
    left: 3.5rem;
    right: auto;
  }
</style>
  