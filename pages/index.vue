<template>
  <div class="home-page">
    <div class="after-home-header">
      <si-app-loader placement="AFTER_HOME_HEADER"/>
    </div>
    <sections-top-collections class="home-top-collections" v-if="$settings.sections.top_collections.active"></sections-top-collections>
    <sections-products :class="`home-products-${1}`" :key="1" :data-key="1" v-if="$settings.sections[`products_${1}`].active" :section="$settings.sections[`products_${1}`]"></sections-products>
    <sections-center-collections class="home-center-collections" v-if="$settings.sections.center_collections.active"></sections-center-collections>
    <template v-for="i in 4">
      <sections-products :class="`home-products-${i+1}`" :key="i+1" :data-key="i+1" v-if="$settings.sections[`products_${i+1}`].active" :section="$settings.sections[`products_${i+1}`]"></sections-products>
    </template>
    <sections-collections-products class="home-home-collections-products" v-if="$settings.sections.collections_products.active" ></sections-collections-products>
    <sections-bottom-collections class="home-bottom-collections" v-if="$settings.sections.bottom_collections.active"></sections-bottom-collections>
    <sections-services class="home-services" v-if="$settings.sections.services.active"></sections-services>
    <div class="container">
      <si-app-loader placement="BEFORE_HOME_FOOTER"/>
    </div>
    <sections-testimonial class="home-testimonial" v-if="$settings.sections.testimonial.active" ></sections-testimonial>
  </div>
</template>

<script>
export default {
  mounted() {
    // Seo
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
    // All Pixels
    this.$tools.call('PAGE_VIEW');
    // Facebook Pixel
    this.$storeino.fbpx('PageView');
  },
}
</script>
