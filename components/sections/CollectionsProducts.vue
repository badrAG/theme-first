<template>
    <div class="container py-6">
      <div class="p-2 px-4 mb-6">
          <h3 class="align-center font-semibold text-lg md:text-xl lg:text-2xl">{{ $settings.sections.collections_products.title}}</h3>
      </div>

      <div v-if="loading.collections" class="flex justify-center items-center my-5">
        <si-loader></si-loader>
      </div>

      <div class="flex flex-wrap justify-between mx-2">
        <!--  -->
        <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
          <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.collections.length > 0">

            <nuxt-link :to="`/shop/${collections[0].slug}`" :title="collections[0].name" :aria-label="collections[0].name">
              <div class="icon-box flex items-center justify-between px-4 py-3">
                <div class="flex items-center" >
                  <h2 class="text-sm lg:text-base font-bold">{{ collections[0].name.length > 18? collections[0].name.slice(0, 18) + '...' : collections[0].name  }}</h2>
                  <span class="w-2"></span>
                  <fa class="icon text-sm lg:text-base text-primary translate"  :icon="['fa', 'arrow-right']"></fa>
                </div>
                <span class="text-md font-medium text-gr">{{ products_0.length }} {{ $settings.sections.collections_products.items_title }}</span>
              </div>
            </nuxt-link>

            <div v-if="loading.products" class="flex justify-center items-center my-5">
                  <si-loader></si-loader>
              </div>

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
            <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.collections.length > 1">

              <nuxt-link :to="`/shop/${collections[1].slug}`" :title="collections[1].name" :aria-label="collections[1].name">
                <div class="icon-box flex items-center justify-between px-4 py-3 ">
                  <div class="flex items-center" >
                    <h2 class="text-sm lg:text-base font-bold">{{ collections[1].name.length > 20? collections[1].name.slice(0, 20) + '...' : collections[1].name }}</h2>
                    <span class="w-2"></span>
                    <fa class="icon text-sm lg:text-base text-primary translate"  :icon="['fa', 'arrow-right']"></fa>
                  </div>
                  <span class="text-md font-medium text-gr">{{ products_1.length }} {{ $settings.sections.collections_products.items_title }}</span>
                </div>
              </nuxt-link>

              <div v-if="loading.products" class="flex justify-center items-center my-5">
                  <si-loader></si-loader>
              </div>
              
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
            <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.collections.length > 2">

              <nuxt-link :to="`/shop/${collections[2].slug}`" :title="collections[2].name" :aria-label="collections[2].name">
                <div class="icon-box flex items-center justify-between px-4 py-3">
                  <div class="flex items-center" >
                    <h2 class="text-sm lg:text-base font-bold">{{ collections[2].name.length > 20? collections[2].name.slice(0, 20) + '...' : collections[2].name }}</h2>
                    <span class="w-2"></span>
                    <fa class="icon text-sm lg:text-base text-primary translate"  :icon="['fa', 'arrow-right']"></fa>
                  </div>
                  <span class="text-md font-medium text-gr">{{ products_2.length }} {{ $settings.sections.collections_products.items_title }}</span>
                </div>
              </nuxt-link>

              <div v-if="loading.products" class="flex justify-center items-center my-5">
                  <si-loader></si-loader>
              </div>
              
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
            <div class="border border-gray-300 rounded-xl bg-white overflow-hidden" v-if="this.collections.length > 3">
              <nuxt-link :to="`/shop/${collections[3].slug}`" :title="collections[3].name" :aria-label="collections[3].name">
                <div class="icon-box flex items-center justify-between px-4 py-3">
                  <div class="flex items-center" >
                    <h2 class="text-sm lg:text-base font-bold">{{ collections[3].name.length > 20? collections[3].name.slice(0, 20) + '...' : collections[3].name }}</h2>
                    <span class="w-2"></span>
                    <fa class="icon text-sm lg:text-base text-primary translate"  :icon="['fa', 'arrow-right']"></fa>
                  </div>
                  <span class="text-md font-medium text-gr">{{ products_3.length }} {{ $settings.sections.collections_products.items_title }}</span>
                </div>
              </nuxt-link>

              <div v-if="loading.products" class="flex justify-center items-center my-5">
                  <si-loader></si-loader>
              </div>

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

      <!-- Collections not exists -->
      <div v-if="!loading.collections && collections.length==0" class="flex flex-wrap items-center  bg-white p-2 mx-4 border rounded-xl box-shadow">
        <div class="w-full md:w-1/2 flex items-center justify-center md:items-start md:justify-start ">
            <svg class="h-32 md:h-40 text-primary opacity-90 translate" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512.646 512.646" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="m292.958 195.921c6.565 0 11.907-5.342 11.907-11.908v-31.44c0-6.566-5.342-11.907-11.907-11.907h-73.27c-6.566 0-11.908 5.341-11.908 11.907v31.44c0 6.566 5.342 11.908 11.908 11.908zm-70.178-40.255h67.084v25.255h-67.084z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m328.432 358.159c-6.565 0-11.907 5.341-11.907 11.907v31.441c0 6.565 5.342 11.907 11.907 11.907h73.271c6.565 0 11.907-5.342 11.907-11.907v-31.441c0-6.566-5.342-11.907-11.907-11.907zm70.178 40.255h-67.085v-25.255h67.085z" fill="currentColor" data-original="#000000"></path><path d="m184.213 358.159h-73.27c-6.566 0-11.907 5.341-11.907 11.907v31.441c0 6.565 5.341 11.907 11.907 11.907h73.27c6.565 0 11.907-5.342 11.907-11.907v-31.441c0-6.566-5.342-11.907-11.907-11.907zm-3.093 40.255h-67.084v-25.255h67.084z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m501.353 434.987h-20.041v-29.074c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v29.07h-202.489v-202.489h67.78v50.254c0 4.24 2.16 8.091 5.777 10.302s8.031 2.375 11.804.442l15.884-8.142 15.883 8.142c1.749.896 3.634 1.341 5.514 1.341 2.178 0 4.349-.597 6.29-1.784 3.617-2.211 5.777-6.063 5.777-10.302v-50.254h67.584c.108 0 .196.088.196.197v139.151c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-139.151c0-8.379-6.817-15.197-15.196-15.197h-93.548v-202.303c0-8.376-6.814-15.19-15.19-15.19h-202.103c-8.379 0-15.197 6.817-15.197 15.197v37.602c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-37.602c0-.108.088-.197.197-.197h67.583v50.255c0 4.24 2.16 8.091 5.778 10.302 1.942 1.187 4.112 1.784 6.289 1.784 1.88 0 3.767-.446 5.515-1.342l15.883-8.142 15.882 8.141c3.774 1.934 8.187 1.771 11.804-.441 3.619-2.211 5.779-6.063 5.779-10.303v-50.254h67.59c.105 0 .19.085.19.19v202.3h-202.49v-130.62c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v130.624h-93.548c-8.379 0-15.197 6.817-15.197 15.197v202.296h-20.04c-6.171 0-11.191 5.02-11.191 11.191v21.775c0 6.171 5.02 11.191 11.191 11.191h17.64v20.16c0 7.356 5.985 13.342 13.341 13.342h21.819c7.356 0 13.342-5.985 13.342-13.342v-20.16h357.777v20.16c0 7.356 5.985 13.342 13.342 13.342h21.818c7.356 0 13.342-5.985 13.342-13.342v-20.16h17.64c6.17 0 11.19-5.02 11.19-11.191v-21.775c-.001-6.171-5.021-11.191-11.191-11.191zm-226.565-374.521-12.958-6.642c-3.449-1.767-7.565-1.767-11.015 0l-12.957 6.642v-45.466h36.93zm71.815 172.028h36.929v45.466l-12.956-6.642c-3.448-1.768-7.567-1.769-11.016 0l-12.957 6.642zm-217.49 0h36.929v45.466l-12.958-6.642c-3.448-1.768-7.566-1.768-11.015 0l-12.957 6.642v-45.466zm-82.78.196c0-.108.088-.197.197-.197h67.583v50.254c0 4.24 2.16 8.091 5.777 10.302 3.618 2.211 8.031 2.377 11.805.442l15.883-8.142 15.883 8.142c1.749.896 3.634 1.341 5.514 1.341 2.178 0 4.348-.597 6.29-1.784 3.618-2.211 5.778-6.063 5.778-10.302v-50.254h67.78v202.489h-202.49zm16.102 264.956h-18.502v-18.502h18.502zm406.278 0h-18.502v-18.502h18.502zm28.83-33.502h-482.441v-14.157h482.441z" fill="currentColor" data-original="#000000"></path></g></g></g></svg>
        </div>
        <div class="w-full md:w-1/2 align-center mt-4 md:mt-0 flex items-center justify-center md:items-start md:justify-start ">
            <div>
            <h2 class="text-xl md:text-2xl font-bold">{{ 'You don\'t have any collection' }}</h2>
            <p class="text-sm md:text-base font-normal">{{ 'Go to your store admin > products > collections >' }} <a href="//business.storeino.com/stores/collections" target="_blank" class="text-primary underline">{{ 'Add new' }}</a></p>
            <a href="https://palest.storeino.com" target="_blank" class="text-sm md:text-base font-bold bg-primary text-white px-4 py-2  rounded-full inline-block mt-1 transition delay-200 ease-linear scale">{{'View theme demo'}}</a>
            </div>
        </div>
      </div>
  <!-- Collections not exists -->
    </div>

</template>

<script>
export default {
  data() {
    return {
      loading:{
        collections: true,
        products: true,
      },
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
      let params_0 = { "collections.slug-in": [this.collections[0].slug] }; 
      await this.getProducts_0(params_0); 
    }

    if(this.collections.length > 1) {
      let params_1 = { "collections.slug-in": [this.collections[1].slug] }; 
      await this.getProducts_1(params_1); 
    }

    if(this.collections.length > 2) {
      let params_2 = { "collections.slug-in": [this.collections[2].slug] }; 
      await this.getProducts_2(params_2); 
    }

    if(this.collections.length > 3) {
      let params_3 = { "collections.slug-in": [this.collections[3].slug] }; 
      await this.getProducts_3(params_3); 
    }
    
  },
  methods: {

    async getProducts_0(params){
      this.products_0 = [];
      this.loading.products= true;
      try{
        const { data } = await this.$storeino.products.search(params);
        this.products_0 = data.results
      }catch(e){
        console.log({e});
      }
      this.loading.products = false;
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
          this.loading.collections = true;

          try{
          const filter = {};
          if(this.$settings.sections.collections_products.items.length > 0){
              this.collections = this.$settings.sections.collections_products.items;
          }else{
            const { data } = await this.$storeino.collections.search(filter)
            this.collections = data.results;
          }
          }catch(e){
            console.log({e});
          }
          this.loading.collections = false;
      },
  },
};
</script>

<style scoped>
.image-box .image:nth-child(4n-3) ,
.image-box .image:nth-child(4n-1) {
padding-right:2px;
}

[dir="rtl"] .image-box .image:nth-child(4n-3) ,
[dir="rtl"] .image-box .image:nth-child(4n-1) {
padding-right:0px;
padding-left:2px;
}

.image-box .image:nth-child(4n-2) ,
.image-box .image:nth-child(4n-0) {
padding-left:2px;
}

[dir="rtl"] .image-box .image:nth-child(4n-2) ,
[dir="rtl"] .image-box .image:nth-child(4n-0) {
padding-left:0px;
padding-right:2px;
}
.image-box .image:nth-child(4n-1) ,
.image-box .image:nth-child(4n-0) {
padding-top:4px;
}

 .icon {
 transition: margin  .5s;
 }
 .icon-box:hover .icon {
  margin-left: 6px;
}

[dir="rtl"] .icon-box:hover .icon {
  margin-left: 0px;
  margin-right: 6px;
}
</style>