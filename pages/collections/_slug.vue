<template>
    <div class="container my-6">
        <nuxt-link :to="`/shop/${item.slug}`" :title="item.title" :aria-label="item.title">
            <div v-if="item" class="flex flex-wrap items-center bg-white border border-gray-200 rounded-xl transition-all ease-linear mx-4 box-shadow-xs-hover">
                <div class="w-full md:w-1/3">
                    <div class="pb-4/5 relative">
                            <si-image width="400" height="400" class="image-rounded h-full w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl absolute inset-0 object-cover" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                    </div>
                </div>
                <div class="w-full md:w-2/3 p-4">
                    <div class="flex flex-col justify-start items-start">
                        <h1 class="guard-cairo-font text-2xl md:text-3xl font-bold mb-4 ">{{ item.name }}</h1>
                        <p class="font-normal text-base leading-7 text-bl">{{ item.description }}</p>
                        
                    </div>
                </div>
            </div>
        </nuxt-link>
        <div class="mt-10 px-2">
            <div v-if="loading" class="flex justify-center items-center my-5">
                <si-loader></si-loader>
            </div>
            <ul class="flex flex-wrap">
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
                item: null,
                loading: true,
            }
        },
        async fetch(){
            this.items = [];
            this.loading = true;
            try{
                const { data } = await this.$storeino.collections.get({ slug: this.$route.params.slug});
                this.item = data;
                const { data : { results } } = await this.$storeino.collections.search({ parent: data._id });
                this.items = results;
            }catch(e){
                console.log({e});
            }
            this.loading = false;
        },
        mounted() {
        this.$storeino.fbpx('PageView')
        }
    }
</script>

<style scoped>
    @media (min-width: 768px) {
        [dir="rtl"] .image-rounded {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            border-top-right-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
        }
    }
</style>
