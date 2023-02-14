<template>
  <div class="container mt-10" v-if="items.length > 0">
    <div class="flex items-center justify-between mb-4">
      <div class="">
        <h2 class="text-lg md:text-xl font-medium px-2">{{ $settings.sections.post.related.title }}</h2>
      </div>
      <div class="scale py-1 px-4 mx-2 transition-all ease-linear delay-200 box-shadow border-2 bg-primary-border rounded-full " v-if="$settings.sections.posts.show_more_text">
        <nuxt-link class="text-sm md:text-base font-medium text-center" to="/blog">
          <span class="">{{ $settings.sections.posts.show_more_text }}</span>
        </nuxt-link>
      </div>
    </div>
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-full sm:w-1/2 md:w-1/3 p-2">
        <si-post :item="item"></si-post>
      </div>
    </div>
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
          const ids = this.item.categories.map(c=>c._id);
          const { data } = await this.$storeino.pages.search({
              "_id-ne": this.item._id,
              "categories._id-in": ids
            })
          this.items = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
  }
};
</script>

<style scoped>
  .post_title {
    font-size: 18px;
    font-weight: 700;
  }

  .btn_link:hover {
  border-color: var(--primary);
  background-color: var(--primary);
  color: #fff;
}

.btn_link:hover>span {
  color: #fff;
}
</style>
