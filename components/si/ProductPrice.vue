<template>
    <div class="product-price">
        <!-- priceCurrency  -->
        <meta itemprop="priceCurrency" :content="$store.state.currency.code" />
        <!-- priceCurrency  -->
        <!-- home  price -->
        <div class="home-prices" v-if="price && page=='home-price'">
            <!-- sale price -->
            <span class="home-price" v-if="type=='simple'">
                <!-- meta tag -->
                <meta itemprop="price" :content="price.salePrice" />
                <!-- meta tag -->
                <span class="font-bold products-price-text-bg text-md">{{ `${price.salePrice}${$store.state.currency.symbol}` }} </span>
                <span class="mx-0.5"></span>
                <span v-if="price.comparePrice > 0">
                    <del class="font-normal products-delprice-text-bg text-md"> {{ `${price.comparePrice}${$store.state.currency.symbol}` }} </del>
                </span>
            </span>
            <!-- sale price -->
            <!-- rugular price -->
            <span class="home-price" v-else-if="minPrice != maxPrice" > 
                <!-- meta tag -->
                <meta itemprop="price" :content="minPrice" />
                <!-- meta tag -->
                <span class="font-bold products-price-text-bg text-md"> {{ `${minPrice}${$store.state.currency.symbol}` }} </span>
                <span class="">~</span>
                <span class="font-medium products-price-text-bg text-md"> {{ `${maxPrice}${$store.state.currency.symbol}` }} </span>
            </span>
            <!-- rugular price -->
            <!-- buy price -->
            <span class="home-price" v-else-if="variants.length > 0">
                <!-- meta tag -->
                <meta itemprop="price" :content="variants[0].price.salePrice" />
                <!-- meta tag -->
                <span class="font-bold products-price-text-bg text-md"> {{ `${variants[0].price.salePrice}${$store.state.currency.symbol}`}} </span>
                <span class="mx-0.5"></span>
                <span class="relative" v-if="variants[0].price.comparePrice > 0">
                    <del class="font-normal products-delprice-text-bg text-md"> {{ `${variants[0].price.comparePrice}${$store.state.currency.symbol}` }} </del>
                </span>
            </span>
            <!-- buy price -->

        </div>
        <!-- home price -->
        <!-- else price -->
        <div class="prices" v-if="price && page !=='home-price'">
            <!-- sale price -->
            <span class="truncate price" v-if="type=='simple'">
                <!-- meta tag -->
                <meta itemprop="price" :content="price.salePrice" />
                <!-- meta tag -->
                <span class="font-bold products-price-text-bg">{{ `${price.salePrice}${$store.state.currency.symbol}`   }}</span>
                <span class="mx-0.5"></span>
                <span v-if="price.comparePrice > 0">
                    <del class="font-normal products-delprice-text-bg">{{ `${price.comparePrice}${$store.state.currency.symbol}` }}</del>
                </span>
            </span>
            <!-- sale price -->
            <!-- regular price -->
            <span class="price" v-else-if="minPrice != maxPrice" > 
                <!-- meta tag -->
                <meta itemprop="price" :content="minPrice" />
                <!-- meta tag -->
                <span class="font-bold products-price-text-bg"> {{ `${minPrice}${$store.state.currency.symbol}` }} </span>
                <span class="">~</span>
                <span class="font-medium products-price-text-bg"> {{ `${maxPrice}${$store.state.currency.symbol}` }} </span>
            </span>
            <!-- regular price -->
            <!-- buy price -->
            <span class="price" v-else-if="variants.length > 0">
                <!-- meta tag -->
                <meta itemprop="price" :content="variants[0].price.salePrice" />
                <!-- meta tag -->
                <span class="font-bold products-price-text-bg"> {{ `${variants[0].price.salePrice}${$store.state.currency.symbol}` }} </span>
                <span class="mx-0.5"></span>
                <span class="relative" v-if="variants[0].price.comparePrice > 0">
                    <del class="font-normal products-delprice-text-bg"> {{ `${variants[0].price.comparePrice}${$store.state.currency.symbol}` }} </del>
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
        variants: { type: Array, default:function () { return []; } },
        page: { type: String, required: false }
    },
    data() {
        return {
            minPrice: this.type == 'variable' ? Math.min(...this.variants.map(v => v.price.salePrice)) : 0,
            maxPrice: this.type == 'variable' ? Math.max(...this.variants.map(v => v.price.salePrice)) : 0,
        }
    },
}
</script>

<style scoped>
.home-prices {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    z-index: 10;
    display: block;
    margin-bottom: 6px;
    padding: 0 6px;
    position: absolute;
    bottom: 0;
}

.home-price {
    display: inline-block;
    word-break: break-word;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    border-radius: 15px;
    line-height: 1;
    font-size: 13px;
    padding: 6px 9px;
    border: 1px solid rgba(34, 34, 34, .15);
    background: #fff;
    font-weight: bold;
}
</style>