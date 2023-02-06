<template>
    <div class="container my-14">
        <div class="p-2 px-4">
            <h3 class="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">{{ $settings.sections.collections2.title }}</h3>
        </div>
        <div class="px-2 mt-1">
            <ul class="flex flex-wrap justify-between items-center">
                <li class="w-1/2 md:w-1/3 lg:w-1/5 p-2" v-for="(item,i) in items.slice(0,6)" :key="i" > 
                    <si-collection :item="item"></si-collection>
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

@media (min-width: 1024px) { 
    ul li:last-child {
        display: none;
    }
}

/* .img-zom {
    transition:  .2s ease;
}

.collection-box:hover .img-zom{
    transform: scale(1.1);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.collection-box:hover .collection-text{
    text-decoration: underline;
    text-underline-offset: 5px;
} */


</style>
