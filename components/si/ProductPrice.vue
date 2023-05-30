<template>
    <div>
        <!-- priceCurrency  -->
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <!-- priceCurrency  -->
        <!-- home  price -->
        <div v-if="page=='home-price'">
            <div class="home-prices" v-if="price && price.salePrice && price.comparePrice">
                <!-- sale price -->
                <span class="home-price" v-if="type=='simple'">
                    <!-- meta tag -->
                    <meta itemprop="price" :content="price.salePrice" />
                    <!-- meta tag -->
                    <span class="products-price-text-bg text-md font-bold">{{ price.salePrice }} {{ $store.state.currency.symbol }}</span>
                    <span class="mx-0.5"></span>
                    <span v-if="price.comparePrice > 0">
                        <del class="products-delprice-text-bg text-md font-normal">{{ price.comparePrice }} {{ $store.state.currency.symbol }}</del>
                    </span>
                </span>
                <!-- sale price -->
                <!-- rugular price -->
                <span class="home-price" v-else-if="minPrice != maxPrice" > 
                    <!-- meta tag -->
                    <meta itemprop="price" :content="minPrice" />
                    <!-- meta tag -->
                    <span class="products-price-text-bg text-md font-bold">{{ minPrice }} {{ $store.state.currency.symbol }}</span>
                    <span class="">~</span>
                    <span class="products-price-text-bg text-md font-medium">{{ maxPrice }} {{ $store.state.currency.symbol }}</span>
                </span>
                <!-- rugular price -->
                <!-- buy price -->
                <span class="home-price" v-else-if="variants.length > 0">
                    <!-- meta tag -->
                    <meta itemprop="price" :content="variants[0].price.salePrice" />
                    <!-- meta tag -->
                    <span class="products-price-text-bg text-md font-bold">{{ variants[0].price.salePrice }} {{ $store.state.currency.symbol }}</span>
                    <span class="mx-0.5"></span>
                    <span class="relative" v-if="variants[0].price.comparePrice > 0">
                        <del class="products-delprice-text-bg text-md font-normal">{{ variants[0].price.comparePrice }} {{ $store.state.currency.symbol }}</del>
                    </span>
                </span>
                <!-- buy price -->

            </div>
        </div>
        <!-- home price -->
        <!-- else price -->
        <div v-else>
            <div class="prices" v-if="price && price.salePrice && price.comparePrice">
                <!-- sale price -->
                <span class="truncate" v-if="type=='simple'">
                    <!-- meta tag -->
                    <meta itemprop="price" :content="price.salePrice" />
                    <!-- meta tag -->
                    <span class="products-price-text-bg font-bold">{{ price.salePrice }} {{ $store.state.currency.symbol }}</span>
                    <span class="mx-0.5"></span>
                    <span v-if="price.comparePrice > 0">
                        <del class="products-delprice-text-bg font-normal">{{ price.comparePrice }} {{ $store.state.currency.symbol }}</del>
                    </span>
                </span>
                <!-- sale price -->
                <!-- regular price -->
                <span class="price" v-else-if="minPrice != maxPrice" > 
                    <!-- meta tag -->
                    <meta itemprop="price" :content="minPrice" />
                    <!-- meta tag -->
                    <span class="products-price-text-bg font-bold">{{ minPrice }} {{ $store.state.currency.symbol }}</span>
                    <span class="">~</span>
                    <span class="products-price-text-bg font-medium">{{ maxPrice }} {{ $store.state.currency.symbol }}</span>
                </span>
                <!-- regular price -->
                <!-- buy price -->
                <span class="price" v-else-if="variants.length > 0">
                    <!-- meta tag -->
                    <meta itemprop="price" :content="variants[0].price.salePrice" />
                    <!-- meta tag -->
                    <span class="products-price-text-bg font-bold">{{ variants[0].price.salePrice }} {{ $store.state.currency.symbol }}</span>
                    <span class="mx-0.5"></span>
                    <span class="relative" v-if="variants[0].price.comparePrice > 0">
                        <del class="products-delprice-text-bg font-normal">{{ variants[0].price.comparePrice }} {{ $store.state.currency.symbol }}</del>
                    </span>
                </span>
                <!-- buy price -->

            </div>
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