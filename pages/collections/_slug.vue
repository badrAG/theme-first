<template>
    <div class="container my-6">
        <nuxt-link :to="`/shop/${item.slug}`" :title="item.title" :aria-label="item.title">
            <div v-if="item" class="flex flex-wrap items-center mx-4 transition-all ease-linear bg-white border border-gray-200 rounded-xl box-shadow-xs-hover">
                <div class="w-full md:w-1/3">
                    <div class="relative pb-4/5">
                            <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full image-rounded rounded-t-xl md:rounded-t-none md:rounded-l-xl" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
                    </div>
                </div>
                <div class="w-full p-4 md:w-2/3">
                    <div class="flex flex-col items-start justify-start">
                        <h1 class="mb-4 text-2xl font-bold guard-cairo-font md:text-3xl ">{{ item.name }}</h1>
                        <p class="text-base font-normal leading-7 text-bl">{{ item.description }}</p>
                        
                    </div>
                </div>
            </div>
        </nuxt-link>
        <div class="px-2 mt-10">
            <div v-if="loading" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>
            <ul class="flex flex-wrap">
                <li class="w-1/2 p-2 md:w-1/3 lg:w-1/5" v-for="(item,i) in items.slice(0,6)" :key="i" > 
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
    async fetch() {
        this.items = [];
        this.loading = true;
        try {
            const { data } = await this.$storeino.collections.get({ slug: this.$route.params.slug });
            this.item = data;
            const { data: { results } } = await this.$storeino.collections.search({ parent: data._id });
            this.items = results;
        } catch (err) {
            this.$sentry.captureException(err);
        }
        this.loading = false;
    },
    mounted() {
        // All Pixels
        this.$tools.call('PAGE_VIEW');
        // Facebook Pixel
        this.$storeino.fbpx('PageView');
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
