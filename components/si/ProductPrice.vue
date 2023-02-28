<template>
    <div>
        <!-- home  price -->
        <div v-if="page=='home-price'" class="home-prices">
            <!-- priceCurrency  -->
            <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
            <!-- priceCurrency  -->
            <!-- sale price -->
            <span class="home-price" v-if="type=='simple'">
                <span class="products-price-text-bg text-md font-bold">{{ $store.state.currency.symbol }} {{ price.salePrice.toFixed(2) }}</span>
                <span class="mx-0.5"></span>
                <span v-if="price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-md font-normal">{{ $store.state.currency.symbol }} {{ price.comparePrice.toFixed(2) }}</del>
                </span>
                <meta itemprop="price" :content="price.salePrice" />
            </span>
            <!-- sale price -->
            <!-- rugular price -->
            <span class="home-price" v-else-if="minPrice != maxPrice" > 
                <meta itemprop="price" :content="minPrice" />
                <span class="products-price-text-bg text-md font-bold">{{ $store.state.currency.symbol }} {{ minPrice.toFixed(2) }}</span>
                <span class="">~</span>
                <span class="products-price-text-bg text-md font-medium">{{ $store.state.currency.symbol }} {{ maxPrice.toFixed(2) }}</span>
            </span>
            <!-- rugular price -->
            <!-- buy price -->
            <span class="home-price" v-else-if="variants.length > 0">
                <meta itemprop="price" :content="variants[0].price.salePrice" />
                <span class="products-price-text-bg text-md font-bold">{{ $store.state.currency.symbol }} {{ variants[0].price.salePrice.toFixed(2) }}</span>
                <span class="mx-0.5"></span>
                <span class="relative" v-if="variants[0].price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-md font-normal">{{ $store.state.currency.symbol }} {{ variants[0].price.comparePrice.toFixed(2) }}</del>
                </span>
            </span>
            <!-- buy price -->
        </div>
        <!-- home price -->
        <!-- product price -->
        <div v-else-if="page=='product-price'">
            <!-- priceCurrency  -->
            <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
            <!-- priceCurrency  -->
            <!-- sale price -->
            <div class="flex items-center flex-wrap" v-if="type=='simple'">
                <span class="products-price-text-bg text-2xl font-bold">{{ price.salePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
                <span class="flex w-2"></span>
                <span class="flex items-center" v-if="price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-sm font-normal">{{ price.comparePrice.toFixed(2) }} {{ $store.state.currency.symbol }} </del>
                </span>
                <meta itemprop="price" :content="price.salePrice" />
            </div>
            <!-- sale price -->
            <!-- regular price -->
            <div class="flex items-center flex-wrap" v-else-if="minPrice != maxPrice" > 
                <meta itemprop="price" :content="minPrice" />
                <span class="products-price-text-bg text-2xl font-bold"> {{ minPrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
                <span class="flex items-center">~</span>
                <span class="products-price-text-bg text-2xl font-normal ">{{ maxPrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
            </div>
            <!-- regular price -->
            <!-- buy price -->
            <div class="flex items-center flex-wrap" v-else-if="variants.length > 0">
                <meta itemprop="price" :content="variants[0].price.salePrice" />
                <span class="products-price-text-bg text-2xl font-bold">{{ variants[0].price.salePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</span>
                <span class="flex w-2"></span>
                <span class="flex items-center" v-if="variants[0].price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-sm font-normal">{{ variants[0].price.comparePrice.toFixed(2) }} {{ $store.state.currency.symbol }}</del>
                </span>
            </div>
            <!-- buy price -->
        </div>
        <!-- product price -->
        <!-- else price -->
        <div v-else class="prices">
            <!-- priceCurrency  -->
            <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
            <!-- priceCurrency  -->
            <!-- sale price -->
            <span class="truncate" v-if="type=='simple'">
                <span class="products-price-text-bg text-sm font-bold">{{ $store.state.currency.symbol }} {{ price.salePrice.toFixed(2) }}</span>
                <span class="mx-0.5"></span>
                <span v-if="price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-sm font-normal">{{ $store.state.currency.symbol }} {{ price.comparePrice.toFixed(2) }}</del>
                </span>
                <meta itemprop="price" :content="price.salePrice" />
            </span>
            <!-- sale price -->
            <!-- regular price -->
            <span class="price" v-else-if="minPrice != maxPrice" > 
                <meta itemprop="price" :content="minPrice" />
                <span class="products-price-text-bg text-sm font-bold">{{ $store.state.currency.symbol }} {{ minPrice.toFixed(2) }}</span>
                <span class="">~</span>
                <span class="products-price-text-bg text-sm font-medium">{{ $store.state.currency.symbol }} {{ maxPrice.toFixed(2) }}</span>
            </span>
            <!-- regular price -->
            <!-- buy price -->
            <span class="price" v-else-if="variants.length > 0">
                <meta itemprop="price" :content="variants[0].price.salePrice" />
                <span class="products-price-text-bg text-sm font-bold">{{ $store.state.currency.symbol }} {{ variants[0].price.salePrice.toFixed(2) }}</span>
                <span class="mx-0.5"></span>
                <span class="relative" v-if="variants[0].price.comparePrice > 0">
                    <del class="products-delprice-text-bg text-sm font-normal">{{ $store.state.currency.symbol }} {{ variants[0].price.comparePrice.toFixed(2) }}</del>
                </span>
            </span>
            <!-- buy price -->
        </div>
        <!-- else price -->
    </div>
</template>

<script>
    export default {
        props: {
            type: String,
            price: Object,
            originalPrice: { type: Object, default: null },
            variants: { type: Array, default: [] },
            page: { type: String,required: false}
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
    .prices,.home-prices {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    z-index: 10;
    display: block;
    }

    .price, .home-price {
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

    .home-prices {
    margin-bottom: 6px;
    padding-right: 6px;
    padding-left: 6px;
    position: absolute;
    bottom: 0;
    }
    .home-price {
    border-radius: 15px;
    line-height: 1;
    font-size: 13px;
    padding-top: 6px;
    padding-left: 9px;
    padding-right: 9px;
    border: 1px solid rgba(34,34,34,.15);
    padding-bottom: 6px;
    background: #fff;
    font-weight: bold;
    }
</style>