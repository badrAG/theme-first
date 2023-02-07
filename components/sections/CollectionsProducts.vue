<template>
  <div class="">
    <div class="container pb-6 pt-4">
      <div class="p-2 px-4 mb-6">
          <h3 class="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">{{ $settings.sections.collections_products.title}}</h3>
      </div>

      <div v-if="loading" class="flex justify-center items-center my-5">
        <si-loader></si-loader>
      </div>

      <div class="flex flex-wrap justify-between mx-2">
        <!--  -->
        <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
          <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.$settings.sections.collections.items.length > 0">

            <nuxt-link :to="`/shop/${collections[0].slug}`" :title="collections[0].name" :aria-label="collections[0].name">
              <div class="icon-box flex items-center justify-between px-4 py-3">
                <div class="flex items-center" >
                  <h2 class="text-sm md:text-base font-bold">{{ collections[0].name.length > 20? collections[0].name.slice(0, 20) + '...' : collections[0].name  }}</h2>
                  <span class="w-2"></span>
                  <fa class="icon text-sm md:text-base text-primary"  :icon="['fa', 'arrow-right']"></fa>
                </div>
                <span class="text-md font-medium text-gr">{{ products_0.length }} items</span>
              </div>
            </nuxt-link>

              <div class="flex flex-wrap image-box">
              <div v-for="(item, i) in products_0.slice(0,4)" :key="i" class="w-2/4 image">
                <div class="pb-4/5 relative zoom overflow-hidden hover:opacity-80">
                      <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                          <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover box-shadow-hover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                      </nuxt-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
          <!--  -->
          
          <!--  -->
          <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
            <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.$settings.sections.collections.items.length > 1">

              <nuxt-link :to="`/shop/${collections[1].slug}`" :title="collections[1].name" :aria-label="collections[1].name">
                <div class="icon-box flex items-center justify-between px-4 py-3 ">
                  <div class="flex items-center" >
                    <h2 class="text-sm md:text-base font-bold">{{ collections[1].name.length > 20? collections[1].name.slice(0, 20) + '...' : collections[1].name }}</h2>
                    <span class="w-2"></span>
                    <fa class="icon text-sm md:text-base text-primary"  :icon="['fa', 'arrow-right']"></fa>
                  </div>
                  <span class="text-md font-medium text-gr">{{ products_1.length }} items</span>
                </div>
              </nuxt-link>
              
              <div class="card flex flex-wrap image-box">
                <div v-for="(item, i) in products_1.slice(0,4)" :key="i" class="w-2/4 image">
                  <div class="pb-4/5 relative zoom overflow-hidden hover:opacity-80">
                        <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                            <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover box-shadow-hover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                        </nuxt-link>
                    </div>
                </div>
              </div>

            </div>
        </div>
          <!--  -->

          <!--  -->
          <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
            <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.$settings.sections.collections.items.length > 2">

              <nuxt-link :to="`/shop/${collections[2].slug}`" :title="collections[2].name" :aria-label="collections[2].name">
                <div class="icon-box flex items-center justify-between px-4 py-3">
                  <div class="flex items-center" >
                    <h2 class="text-sm md:text-base font-bold">{{ collections[2].name.length > 20? collections[2].name.slice(0, 20) + '...' : collections[2].name }}</h2>
                    <span class="w-2"></span>
                    <fa class="icon text-sm md:text-base text-primary"  :icon="['fa', 'arrow-right']"></fa>
                  </div>
                  <span class="text-md font-medium text-gr">{{ products_2.length }} items</span>
                </div>
              </nuxt-link>
              
              <div class="flex flex-wrap image-box">
                <div v-for="(item, i) in products_2.slice(0,4)" :key="i" class="w-2/4 image">
                  <div class="pb-4/5 relative zoom overflow-hidden hover:opacity-80">
                        <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                            <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover box-shadow-hover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                        </nuxt-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->

          <!--  -->
          <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0 block md:hidden lg:block">
            <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.$settings.sections.collections.items.length > 3">
              <nuxt-link :to="`/shop/${collections[3].slug}`" :title="collections[3].name" :aria-label="collections[3].name">
                <div class="icon-box flex items-center justify-between px-4 py-3">
                  <div class="flex items-center" >
                    <h2 class="text-sm md:text-base font-bold">{{ collections[3].name.length > 20? collections[3].name.slice(0, 20) + '...' : collections[3].name }}</h2>
                    <span class="w-2"></span>
                    <fa class="icon text-sm md:text-base text-primary"  :icon="['fa', 'arrow-right']"></fa>
                  </div>
                  <span class="text-md font-medium text-gr">{{ products_3.length }} items</span>
                </div>
              </nuxt-link>

              <div class="flex flex-wrap image-box">
                <div v-for="(item, i) in products_3.slice(0,4)" :key="i" class="w-2/4 image">
                  <div class="pb-4/5 relative zoom overflow-hidden hover:opacity-80">
                        <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                            <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover box-shadow-hover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                        </nuxt-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
      </div> 
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading:true,
      products_0: [],
      products_1: [],
      products_2: [],
      products_3: [],
      collections: [],
    };
  },

  async fetch(){

    await this.getCollections();

    if(this.collections.length > 0) {
      let params_0 = { "collections.slug-in[]": [this.collections[0].slug] }; 
      await this.getProducts_0(params_0); 
    }

    if(this.collections.length > 1) {
      let params_1 = { "collections.slug-in[]": [this.collections[1].slug] }; 
      await this.getProducts_1(params_1); 
    }

    if(this.collections.length > 2) {
      let params_2 = { "collections.slug-in[]": [this.collections[2].slug] }; 
      await this.getProducts_2(params_2); 
    }

    if(this.collections.length > 3) {
      let params_3 = { "collections.slug-in[]": [this.collections[3].slug] }; 
      await this.getProducts_3(params_3); 
    }
    



  },
  methods: {

    async getProducts_0(params){
      this.products_0 = [];
      this.loading= true;
      try{
        const { data } = await this.$storeino.products.search(params);
        this.products_0 = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },
    async getProducts_1(params){
      this.products_1 = [];
      this.loading= true;
      try{
        const { data } = await this.$storeino.products.search(params);
        this.products_1 = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },
    async getProducts_2(params){
      this.products_2 = [];
      this.loading= true;
      try{
        const { data } = await this.$storeino.products.search(params);
        this.products_2 = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },
    async getProducts_3(params){
      this.products_3 = [];
      this.loading= true;
      try{
        const { data } = await this.$storeino.products.search(params);
        this.products_3 = data.results
      }catch(e){
        console.log({e});
      }
      this.loading = false;
    },





    async getCollections(){
          this.collections = [];
          this.loading = true;
          try{
              const { data } = await this.$storeino.collections.search({});
              this.collections = data.results;
          }catch(e){
              console.log({e});
          }
          this.loading = false;
      },
  },
};
</script>

<style scoped>

.image-box .image:nth-child(4n-3),
.image-box .image:nth-child(4n-2) {
padding-bottom:2px;
}

.image-box .image:nth-child(4n-3) ,
.image-box .image:nth-child(4n-1) {
padding-right:2px;
}
.image-box .image:nth-child(4n-2) ,
.image-box .image:nth-child(4n-0) {
padding-left:2px;
}

.image-box .image:nth-child(4n-1) ,
.image-box .image:nth-child(4n-0) {
padding-top:2px;
}


/* .image-box .image:nth-child(1),
.image-box .image:nth-child(2) {
padding-right:4px;
}
.image-box .image:nth-child(2),
.image-box .image:nth-child(4) {
padding-left:4px;
} */



 .icon {
 transition: margin-left .5s;
 }
 .icon-box:hover .icon {
  margin-left: 6px;
}
</style>