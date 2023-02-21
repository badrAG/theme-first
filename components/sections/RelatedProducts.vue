<template>
  <div class="container my-5" v-if="items.length > 0">
    <!-- title  -->
    <div class="flex items-center justify-between mb-2 mx-4">
      <div class="">
        <h2 class="text-lg md:text-xl font-medium">{{ this.$settings.sections.product.related.title}}</h2>
      </div>
      <div class="scale py-1 px-4 mx-2 transition-all ease-linear delay-200 box-shadow border-2 bg-primary-border rounded-full" v-if="$settings.sections.products_1.show_more_text">
        <nuxt-link class="text-md font-bold text-center" to="/shop">
          <span class="">{{ $settings.sections.products_1.show_more_text }}</span>
        </nuxt-link>
      </div>
    </div>
    <!-- title -->
    <!--  -->
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <!--  -->
    <!--  -->
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
        <si-product :item="item"></si-product>
      </div>
    </div>
    <!--  -->
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
      }catch(e){
        console.log({e});
      }
      this.loading = false;
  }
};
</script>


