<template>
    <div class="prices">
        <!-- priceCurrency  -->
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <!-- priceCurrency  -->

        <!--  -->
        <span class="truncate" v-if="type=='simple'">
            <span class="products-price-text-bg text-sm font-bold">{{ $store.state.currency.symbol }} {{ price.salePrice.toFixed(2) }}</span>
            <span class="mx-0.5"></span>
            <span v-if="price.comparePrice > 0">
                <del class="products-delprice-text-bg text-sm font-normal">{{ $store.state.currency.symbol }} {{ price.comparePrice.toFixed(2) }}</del>
            </span>
            <meta itemprop="price" :content="price.salePrice" />
        </span>
        <!--  -->

        <!-- v-else-if="minPrice != maxPrice" -->
        <span class="price" v-else-if="minPrice != maxPrice" > 
            <meta itemprop="price" :content="minPrice" />
            <span class="products-price-text-bg text-sm font-bold">{{ $store.state.currency.symbol }} {{ minPrice.toFixed(2) }}</span>
            <span class="">~</span>
            <span class="products-price-text-bg text-sm font-medium">{{ $store.state.currency.symbol }} {{ maxPrice.toFixed(2) }}</span>
        </span>
        <!-- v-else-if="minPrice != maxPrice" -->

        <!--  -->
        <span class="price" v-else-if="variants.length > 0">
            <meta itemprop="price" :content="variants[0].price.salePrice" />
            <span class="products-price-text-bg text-sm font-bold">{{ $store.state.currency.symbol }} {{ variants[0].price.salePrice.toFixed(2) }}</span>
            <span class="mx-0.5"></span>
            <span class="relative" v-if="variants[0].price.comparePrice > 0">
                <del class="products-delprice-text-bg text-sm font-normal">{{ $store.state.currency.symbol }} {{ variants[0].price.comparePrice.toFixed(2) }}</del>
            </span>
        </span>
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
.prices {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    z-index: 10;
    display: block;
}
    .price {
    direction: ltr;
    color: inherit;
    display: inline-block;
    word-break: break-word;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    }
</style>