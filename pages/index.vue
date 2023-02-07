<template>
  <div class="bg-white">
    <sections-top-collections v-if="$settings.sections.collections.active"></sections-top-collections>
    <sections-products :key="1" :data-key="1" v-if="$settings.sections[`products_${1}`].active" :section="$settings.sections[`products_${1}`]"></sections-products>
    <sections-center-collections v-if="$settings.sections.collections1.active"></sections-center-collections>
    <template v-for="i in 4">
      <sections-products :key="i+1" :data-key="i+1" v-if="$settings.sections[`products_${i+1}`].active" :section="$settings.sections[`products_${i+1}`]"></sections-products>
    </template>
    <sections-collections-products v-if="$settings.sections.collections_products.active" ></sections-collections-products>
    <sections-bottom-collections v-if="$settings.sections.collections2.active"></sections-bottom-collections>
    <sections-testimonial v-if="$settings.sections.testimonial.active" ></sections-testimonial>
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
