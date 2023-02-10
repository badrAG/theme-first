<template>
    <div>
        <!-- priceCurrency  -->
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <!-- priceCurrency  -->

        <!--  -->
        <div class="price flex items-center flex-wrap" v-if="type=='simple'">
            <span class="products-price-text-bg text-2xl font-bold">{{ price.salePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
            <span class="flex w-2"></span>
            <span class="flex items-center" v-if="price.comparePrice > 0">
                <del class="products-delprice-text-bg text-sm font-normal">{{ price.comparePrice.toFixed(2) }} {{ $store.state.currency.symbol }} </del>
            </span>
            <meta itemprop="price" :content="price.salePrice" />
        </div>
        <!--  -->

        <!-- v-else-if="minPrice != maxPrice" -->
        <div class="price flex items-center flex-wrap" v-else-if="minPrice != maxPrice" > 
            <meta itemprop="price" :content="minPrice" />
            <span class="products-price-text-bg text-2xl font-bold"> {{ minPrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
            <span class="flex items-center">~</span>
            <span class="products-price-text-bg text-2xl font-normal ">{{ maxPrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
        </div>
        <!-- v-else-if="minPrice != maxPrice" -->

        <!--  -->
        <div class="price flex items-center flex-wrap" v-else-if="variants.length > 0">
            <meta itemprop="price" :content="variants[0].price.salePrice" />
            <span class="products-price-text-bg text-2xl font-bold">{{ variants[0].price.salePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
            <span class="flex w-2"></span>
            <span class="flex items-center" v-if="variants[0].price.comparePrice > 0">
                <del class="products-delprice-text-bg text-sm font-normal">{{ variants[0].price.comparePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</del>
            </span>
        </div>
        <!--  -->
    </div>
</template>
<script>
export default {
    props: {
        type: String,
        price: Object,
        originalPrice: { type: Object, default: null },
        variants: { type: Array, default: [] }
    },
    data() {
        return {
            minPrice : this.type == 'variable' ? Math.min(...this.variants.map(v=>v.price.salePrice)) : 0,
            maxPrice : this.type == 'variable' ? Math.max(...this.variants.map(v=>v.price.salePrice)) : 0,
        }
    },
}
</script>
<style scoped>

</style>