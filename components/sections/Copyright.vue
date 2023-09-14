<template>
  <div class="text-white copyright-bg copyright-text-bg">
    <div class="container p-2 px-4">
      <!-- Start copyright Section -->
      <div class="flex items-center py-4 copyright items-centerpy-5" :class="copyright_menu == null? 'justify-center' : 'justify-between'">
          <div
            class="text-sm font-bold" 
            v-html="description.replace(/__YEAR__/gi, year)"
          ></div>
          <!-- Menu -->
          <div v-if="copyright_menu">
            <div class="inline-block mt-2 lg:mt-0 " v-for="(item,i) in copyright_menu.items" :key="i">
                <div class="flex flex-row items-center">
                    <h4>
                        <router-link class="mx-3 font-normal underline text-md" :to="item.url">{{item.text}}</router-link>
                    </h4>
                </div>
            </div>
          </div>
          <!-- Menu -->
      </div>
      <!-- End fotter Section -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright_menu: this.$settings.sections.footer.copyright.menu,
      year: new Date().getFullYear(),
      description: this.$settings.sections.footer.copyright.text,
    };
  },
};
</script>
  
<style scoped>
.copyright {
  color: var(--text-color);
}

@media screen and (max-width: 1025px) {
  .copyright {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

}
</style>
  