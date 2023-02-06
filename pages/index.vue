<template>
  <div class="bg-white">
    <!-- <sections-collections01 v-if="$settings.sections.collections.active"></sections-collections01>  -->
    <!-- <sections-products :key="1" :data-key="1" v-if="$settings.sections[`products_${1}`].active" :section="$settings.sections[`products_${1}`]"></sections-products>  -->
    <!--  <sections-collections02 v-if="$settings.sections.collections1.active"></sections-collections02>  -->
    <template v-for="i in 4">
      <sections-products :key="i+1" :data-key="i+1" v-if="$settings.sections[`products_${i+1}`].active" :section="$settings.sections[`products_${i+1}`]"></sections-products>
    </template>
    <!-- <sections-sub-collections ></sections-sub-collections> -->
    <!-- <sections-collections03 v-if="$settings.sections.collections2.active"></sections-collections03> -->
    <!--<sections-testimonial v-if="$settings.sections.testimonial.active" ></sections-testimonial> -->
  </div>
</template>
<script>
export default {

  async fetch(){
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>
