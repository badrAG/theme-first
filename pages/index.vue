<template>
  <div>
    <sections-top-collections v-if="$settings.sections.top_collections.active"></sections-top-collections>
    <sections-products :key="1" :data-key="1" v-if="$settings.sections[`products_${1}`].active" :section="$settings.sections[`products_${1}`]"></sections-products>
    <sections-center-collections v-if="$settings.sections.center_collections.active"></sections-center-collections>
    <template v-for="i in 4">
      <sections-products :key="i+1" :data-key="i+1" v-if="$settings.sections[`products_${i+1}`].active" :section="$settings.sections[`products_${i+1}`]"></sections-products>
    </template>
    <sections-collections-products v-if="$settings.sections.collections_products.active" ></sections-collections-products>
    <sections-bottom-collections v-if="$settings.sections.bottom_collections.active"></sections-bottom-collections>
    <sections-services v-if="$settings.sections.services.active"></sections-services>
    <div class="container">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div>
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
