<template>
<div v-if="item && item.review.reviews.length > 0" class="container">
    <div v-if="loading" class="flex justify-center items-center">
      <si-loader></si-loader>
    </div>
    <!--  -->
    <div class="rounded-md reviews" id="reviews">
        <div class="flex flex-wrap">
            <div v-for="(review,index) in reviews.results" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
                <div class="flex justify-between flex-col p-2 h-full border border-gray-300 rounded-lg">
                    <div class="flex flex-col">
                        <div class="flex">
                            <div class="flex">
                                <si-avatar :name="`${review.customer.firstname} ${review.customer.lastname}`"></si-avatar>
                                <span class="m-1"></span>
                                <div>
                                    <b class="capitalize">{{ `${review.customer.firstname} ${review.customer.lastname}` }}</b>
                                    <div class="flex">
                                        <span v-for="(star,i) in 5" :class="star <= review.rating ? ' text-yellow-500 ': 'text-black'" :key="i">
                                            <fa class="text-xs"  :icon="['fa', 'star']"></fa>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm font-normal mt-3">{{ review.content }}</div>
                    </div>
                    <div class="overflow-auto w-full scroll">
                        <div class="flex">
                            <si-image width="100" height="100" class="mt-2 w-14 h-14 lg:w-16 lg:h-16 mr-2 bg-white rounded-md shadow cursor-pointer" v-for="(image, index) in review.images" :key="index" :src="image" @click="$store.state.fullImage=image" :alt="`${review.rating} stars - ${review.content}`"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
</div>
</template>
<script>
export default {
    props:{
        item: { type: Object, default: null }
    },
    data(){
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            loading: true
        }
    },
    async fetch(){
        const { data } = await this.$storeino.reviews.search({
            "product._id": this.item._id,
            page: this.reviews.paginate.page+1
        })
        this.reviews = data;
        this.loading = false;
    }
}
</script>

<style scoped>
  .scroll::-webkit-scrollbar {
    display: none;
  }
</style>
