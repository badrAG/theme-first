<template>
    <div v-if="item && item.review.reviews.length > 0" class="container">
        <!-- loader -->
        <div v-if="loading" class="flex items-center justify-center">
        <si-loader></si-loader>
        </div>
        <!-- loader -->
        <!-- content -->
        <div v-if="!loading" class="rounded-md reviews" id="reviews">
            <div class="flex flex-wrap">
                <div v-for="(review,index) in reviews.results" :key="index" class="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
                    <div class="flex flex-col justify-between h-full p-2 border border-gray-300 rounded-lg">
                        <div class="flex flex-col">
                            <div class="flex">
                                <div class="flex">
                                    <si-avatar :name="`${review.customer.firstname} ${review.customer.lastname}`"></si-avatar>
                                    <span class="m-1"></span>
                                    <div>
                                        <b class="capitalize">{{ `${review.customer.firstname} ${review.customer.lastname}` }}</b>
                                        <div class="flex gap-1">
                                            <span v-for="(star,i) in 5" :class="star <= review.rating ? ' text-yellow-500 ': 'text-black'" :key="i">
                                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 text-sm font-normal">{{ review.content }}</div>
                        </div>
                        <div class="w-full overflow-auto scroll">
                            <div class="flex">
                                <si-image width="100" height="100" class="mt-2 mr-2 bg-white rounded-md shadow cursor-pointer w-14 h-14 lg:w-16 lg:h-16" v-for="(image, index) in review.images" :key="index" :src="image" @click="$store.state.fullImage=image" :alt="`${review.rating} stars - ${review.content}`"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- content -->
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object, default: null }
    },
    data() {
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            loading: true
        }
    },
    async fetch() {
        this.loading = true;
        const { data } = await this.$storeino.reviews.search({
            "product._id": this.item._id,
            page: this.reviews.paginate.page + 1
        })
        this.reviews = data;
        this.loading = false;
    },
}
</script>

<style scoped>
.scroll::-webkit-scrollbar {
    display: none;
}
</style>
