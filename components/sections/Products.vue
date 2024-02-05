<template>
  <div class="container py-4">
    <!-- product title -->
    <div class="flex flex-col items-center px-4 mb-1 md:justify-between md:flex-row" v-show="( title.length > 0 && section.show_more_text.length > 0 ) || ( title.length > 0 || section.show_more_text.length > 0 )">
      <div v-show="title.length > 0">
        <h2 class="text-xl font-medium">{{ title }}</h2>
      </div>
      <div v-show="section.show_more_text.length > 0">
        <nuxt-link  :to="section.show_more_url">
          <span class="text-sm font-normal underline text-gr hover-text-bg">{{ section.show_more_text }}</span>
        </nuxt-link>
      </div>
    </div>
    <!-- product title -->
    <!-- Loader -->
    <div v-if="loading" class="flex items-center justify-center my-5">
      <si-loader></si-loader>
    </div>
    <!-- Loader -->
    <!-- Products -->
    <div class="flex flex-wrap px-2">
      <div v-for="(item, i) in items" :key="i" class="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
        <si-product :item="item" page="home"></si-product>
      </div>
    </div>
    <!-- Products -->
    <!-- Products not exists -->
    <div class="mx-2">
      <div v-if="!loading && items.length==0" class="flex flex-wrap items-center p-2 mx-2 bg-white border rounded-xl box-shadow">
        <div class="flex items-center justify-center w-full md:w-1/2 md:items-start md:justify-start ">
          <svg class="h-32 md:h-40 text-primary opacity-90 translate" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="Send_package" data-name="Send package"><path d="M61,44H54V43a1,1,0,0,0-1-1H45a1,1,0,0,0-1,1v1.719l-6.256-1.564a3.012,3.012,0,0,0-1.5.013L20.32,47.434a3.964,3.964,0,0,0-2.259,1.629l-9.753-5.63a4,4,0,0,0-4,6.933L22.035,60.6a3,3,0,0,0,1.5.4H40.528a3.014,3.014,0,0,0,1.341-.316L44,59.618V61a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V60h7a1,1,0,0,0,1-1V45A1,1,0,0,0,61,44ZM40.975,58.9a1.016,1.016,0,0,1-.447.1H23.536a1,1,0,0,1-.5-.134L5.312,48.635A2.007,2.007,0,0,1,4.588,45.9a2.034,2.034,0,0,1,2.722-.731l10.074,5.816a3.982,3.982,0,0,0,5.007,4.179l11.925-3.195a1,1,0,0,0-.517-1.932l-11.926,3.2a2,2,0,1,1-1.035-3.863L36.76,45.1a1,1,0,0,1,.5,0L44,46.781v10.6ZM52,60H46V44h6Zm8-2H54V46h6Z" fill="currentColor" data-original="#000000" style=""></path><path d="M41.9,10.553l-4-8A1,1,0,0,0,37,2H9a1,1,0,0,0-.895.553l-4,8A1.78,1.78,0,0,0,4,11V39a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V11A1.78,1.78,0,0,0,41.9,10.553ZM39.382,10H27.78l-1.5-6h10.1ZM20,12h6v9.382l-2.553-1.277a1,1,0,0,0-.894,0L20,21.382Zm4.219-8,1.5,6H20.281l1.5-6ZM9.618,4h10.1l-1.5,6H6.618ZM40,38H6V12H18V23a1,1,0,0,0,1.447.895L23,22.118,26.553,23.9A1,1,0,0,0,28,23V12H40Z" fill="currentColor" data-original="#000000" style=""></path></g></g></svg>
        </div>
        <div class="flex items-center justify-center w-full mt-4 md:w-1/2 align-center md:mt-0 md:items-start md:justify-start">
          <div>
            <h2 class="text-xl font-bold md:text-2xl">{{ 'You don\'t have any products' }}</h2>
            <p class="text-sm font-normal md:text-base">{{ 'Go to your store admin > products >' }} <a href="//business.storeino.com/stores/products" target="_blank" class="underline text-primary">{{ 'Add new' }}</a></p>
            <a href="https://palest.storeino.com" target="_blank" class="inline-block px-4 py-2 mt-1 text-sm font-bold text-white transition ease-linear delay-200 rounded-full md:text-base bg-primary scale">{{'View theme demo'}}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Products not exists -->
  </div>
</template>

<script>
export default {
  props: {
    section: { type: Object, required: true }
  },
  data() {
    return {
      title: this.section.title,
      tags: this.section.tags,
      collections: this.section.collections,
      items: [],
      loading: true
    };
  },
  async fetch(){
    const filter = { status: 'PUBLISH' };
    if(this.collections.length > 0) filter['collections._id-in'] = this.collections.map(c=>c._id);
    if(this.tags.length > 0) filter['tags._id-in'] = this.tags.split(',');
    await this.getProducts(filter);
  },
  methods: {
    async getProducts(filter){
      this.loading = true;
        try{
          if(this.section.items != null && this.section.items.length > 0){
            this.items = this.section.items;
          }else{
            const { data } = await this.$storeino.products.search(filter)
            this.items = data.results
          }
        }catch(err){
          this.$sentry.captureException(err)
        }
        this.loading = false;
    }
  },
};
</script>
