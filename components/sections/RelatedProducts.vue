<template>
  <div class="container my-5" v-if="items.length > 0">
    <!-- title  -->
    <div class="flex items-center justify-between mx-4 mb-2">
      <div class="">
        <h2 class="text-xl font-medium">{{ this.$settings.sections.product.related.title}}</h2>
      </div>
      <div class="px-4 py-1 mx-2 transition-all ease-linear delay-200 border-2 rounded-full scale box-shadow bg-primary-border" v-if="$settings.sections.products_1.show_more_text">
        <nuxt-link class="font-bold text-center text-md" to="/shop">
          <span class="">{{ $settings.sections.products_1.show_more_text }}</span>
        </nuxt-link>
      </div>
    </div>
    <!-- title -->
    <!-- loader -->
    <div v-if="loading" class="flex items-center justify-center my-5">
      <si-loader></si-loader>
    </div>
    <!-- loader -->
    <!-- products -->
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6">
        <si-product :item="item"></si-product>
      </div>
    </div>
    <!-- products -->
  </div>
</template>

<script>
  export default {
    props:{
        item: Object
    },
    data() {
      return {
        loading: true,
        items: [],
      };
    },
    async fetch(){
        try{
            const ids = this.item.collections.map(c=>c._id);
            const { data } = await this.$storeino.products.search({
                "_id-ne": this.item._id,
                "collections._id-in": ids
              })
            this.items = data.results
        }catch(err){
          this.$sentry.captureException(err);
        }
        this.loading = false;
    }
  };
</script>


