<template>
    <div class="">
        <div class="relative">
            <ul class="lg:w-4/5 mx-auto flex flex-wrap justify-center md:justify-between p-4">
                <li class="collection-box md:mb-0 flex items-center flex-col w-1/3 md:w-1/6" v-for="(item,i) in items.slice(0,6)" :key="i" > 
                    <nuxt-link class="my-3" :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                    <si-image class="img-zom rounded-full overflow-hidden h-24 w-24 lg:h-28 lg:w-28 object-cover relative" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                </nuxt-link>
                <nuxt-link class="line w-28" :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                    <div style="text-align: center;" class="collection-text relative font-medium lg:font-bold text-sm lg:text-base">{{ item.name }}</div>
                </nuxt-link>
                </li>
            </ul> 
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            items: [],
        }
    },
  async fetch(){
      try{
          const filter = {};
          if(this.$settings.sections.collections.items.length > 0){
            this.items = this.$settings.sections.collections.items;
          }else{
            const { data } = await this.$storeino.collections.search(filter)
            this.items = data.results;
          }
      }catch(e){
        console.log({e});
      }
  },
}
</script>

<style scoped>

ul li:nth-child(-n+3) {
    margin-bottom: 1.25rem;
}
.img-zom {
    transition:  .2s ease;
}

.collection-box:hover .img-zom{
    transform: scale(1.1);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.collection-box:hover .collection-text{
    text-decoration: underline;
    text-underline-offset: 5px;
}
</style>