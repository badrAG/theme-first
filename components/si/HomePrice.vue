<template>
    <div>
        <!-- priceCurrency  -->
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <!-- priceCurrency  -->

        <!--  -->
        <div v-if="type=='simple'">
            <span class="products-price-text-bg text-md font-bold">{{ price.salePrice.toFixed(2) }} {{ $store.state.currency.symbol }} 
                <span class="w-"></span>
                <span v-if="price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-md font-normal">  {{ price.comparePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</del>
                </span>
            </span>

            <meta itemprop="price" :content="price.salePrice" />
        </div>
        <!--  -->

        <!-- v-else-if="minPrice != maxPrice" -->
        <div v-else-if="minPrice != maxPrice" > 
            <meta itemprop="price" :content="minPrice" />
            <span class="products-price-text-bg text-md font-bold">{{ minPrice.toFixed(2) }} {{ $store.state.currency.symbol }} 
                <span class="">~</span>
                <span class="products-price-text-bg text-md font-normal ">{{ maxPrice.toFixed(2) }} {{ $store.state.currency.symbol }} </span>
            </span>
        </div>
        <!-- v-else-if="minPrice != maxPrice" -->

        <!--  -->
        <div  v-else-if="variants.length > 0">
            <meta itemprop="price" :content="variants[0].price.salePrice" />
            <span class="products-price-text-bg text-md font-bold">{{ variants[0].price.salePrice.toFixed(2) }} {{ $store.state.currency.symbol }}
                <span class="w-1"></span>
                <span v-if="variants[0].price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-md font-normal">{{ variants[0].price.comparePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</del>
                </span>
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