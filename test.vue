

<template>
<div class="flex flex-wrap justify-between mx-2">
  <!-- first colelction procucts card -->
  <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
    <div class="border border-gray-200 rounded-xl bg-white overflow-hidden box-shadow-xs-hover" v-if="this.collections.length > 0">
      <nuxt-link :to="`/shop/${collections[0].slug}`" :title="collections[0].name" :aria-label="collections[0].name">
        <div class="icon-box flex items-center justify-between px-4 py-3">
          <div class="flex items-center" >
            <h2 class="products-collections-name text-sm lg:text-base font-bold">{{ collections[0].name.length > 18? collections[0].name.slice(0, 18) + '...' : collections[0].name  }}</h2>
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
      <div v-for="(item, i) in products_0.slice(0,4)" :key="i" class="w-2/4 image ">
        <div class="pb-4/5 relative zoom overflow-hidden hover:opacity-80">
              <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                  <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
              </nuxt-link>
          </div>
      </div>
      </div>
    </div>
  </div>
  <!-- first colelction procucts card -->
  <!-- secend colelction procucts card -->
  <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
    <div class="border border-gray-200 rounded-xl bg-white overflow-hidden box-shadow-xs-hover" v-if="this.collections.length > 1">
      <nuxt-link :to="`/shop/${collections[1].slug}`" :title="collections[1].name" :aria-label="collections[1].name">
        <div class="icon-box flex items-center justify-between px-4 py-3 ">
          <div class="flex items-center" >
            <h2 class="products-collections-name text-sm lg:text-base font-bold">{{ collections[1].name.length > 20? collections[1].name.slice(0, 20) + '...' : collections[1].name }}</h2>
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
                    <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                </nuxt-link>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- secend colelction procucts card -->
  <!-- third colelction procucts card -->
  <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0">
    <div class="border border-gray-200 rounded-xl bg-white overflow-hidden box-shadow-xs-hover" v-if="this.collections.length > 2">
      <nuxt-link :to="`/shop/${collections[2].slug}`" :title="collections[2].name" :aria-label="collections[2].name">
        <div class="icon-box flex items-center justify-between px-4 py-3">
          <div class="flex items-center" >
            <h2 class="products-collections-name text-sm lg:text-base font-bold">{{ collections[2].name.length > 20? collections[2].name.slice(0, 20) + '...' : collections[2].name }}</h2>
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
                    <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                </nuxt-link>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- third colelction procucts card -->
  <!-- forht colelction procucts card -->
  <div class="w-full sm:w-2/4 md:w-1/3 lg:w-1/4 px-2 mb-4 md:mb-0 block md:hidden lg:block">
    <div class="border border-gray-200 rounded-xl bg-white overflow-hidden box-shadow-xs-hover" v-if="this.collections.length > 3">
      <nuxt-link :to="`/shop/${collections[3].slug}`" :title="collections[3].name" :aria-label="collections[3].name">
        <div class="icon-box flex items-center justify-between px-4 py-3">
          <div class="flex items-center" >
            <h2 class="products-collections-name text-sm lg:text-base font-bold">{{ collections[3].name.length > 20? collections[3].name.slice(0, 20) + '...' : collections[3].name }}</h2>
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
                    <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                </nuxt-link>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- forht colelction procucts card -->
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
