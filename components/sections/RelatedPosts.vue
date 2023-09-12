<template>
  <div class="container mt-10" v-if="items.length > 0">
    <div class="flex items-center justify-between mb-4">
      <div class="">
        <h2 class="px-2 text-xl font-medium">{{ $settings.sections.post.related.title }}</h2>
      </div>
      <div class="px-4 py-1 mx-2 transition-all ease-linear delay-200 border-2 rounded-full scale box-shadow bg-primary-border" v-if="$settings.sections.posts.show_more_text">
        <nuxt-link class="font-bold text-center text-md" to="/blog">
          <span class="">{{ $settings.sections.posts.show_more_text}}</span>
        </nuxt-link>
      </div>
    </div>
    <div v-if="loading" class="flex items-center justify-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" class="w-full p-2 sm:w-1/2 md:w-1/3">
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
        }catch(err){
          this.$sentry.captureException(err);
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
