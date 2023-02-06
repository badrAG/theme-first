<!-- <template>
    <div class="">
      <div class="container py-4">
    

        <div class="px-2 mt-1">
            <ul class="flex flex-wrap justify-between items-center">
                <li class="w-1/2 md:w-1/3 lg:w-1/5 p-2" v-for="(item, i) in collections" :key="i" > 
                    {{  item.name }}
                    <si-collection :item="item"></si-collection>
                </li>
            </ul> 
        </div>
    
    
        <div v-if="loading" class="flex justify-center items-center  my-5">
          <si-loader></si-loader>
        </div>
    
        <div class="flex flex-wrap px-2">
          <div v-for="(item, i) in items" :key="i" class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
            {{ item }}
            <div v-for="(item, i) in item.collections" :key="i">
                {{ item.na }}
            </div>
          

            <si-product-home :item="item"></si-product-home>
          </div>
        </div>
    

        
      </div>
  
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        items: [],
        collections: [],
        loading: true
      };
    },
    async fetch(){

      let filter = { status: 'PUBLISH' };
      if(this.$settings.sections.collections.items.length > 0) filter['collections._id-in'] = this.$settings.sections.collections.items[0].map(c=>c._id);
      await this.getProducts(filter);
      await this.getCollections();
    },
    methods: {
      async getProducts(filter){
        this.loading = true;
        try{
          const { data } = await this.$storeino.products.search(filter)
          this.items = data.results
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
   -->