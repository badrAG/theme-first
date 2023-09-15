<template>
    <div>
        <div class="mb-8 md:mb-6">
            <!-- content  -->
            <div class="flex flex-wrap px-4">
                <!-- image -->
                <div class="w-2/6 md:w-1/5">
                    <div class="relative rounded-lg pb-2/3 box-shadow-xs-hover">
                        <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                            <si-image  width="400" height="400" class="absolute inset-0 object-cover w-full h-full rounded-lg "  :src="item.image" :alt="item.name"/>
                        </nuxt-link>
                    </div>
                </div>
                <!-- image -->
                <div class="w-4/6 md:w-4/5">
                    <div class="flex flex-wrap justify-between">
                        <!-- product title -->
                        <div class="w-full md:w-2/4">
                            <div class="flex flex-col">
                                <div class="flex flex-col pl-4 product-content md:pr-4">
                                    <nuxt-link class="text-base font-normal text-black hover:underline" :to="`/products/${item.slug}`">{{ item.name }}</nuxt-link>
                                    <nuxt-link style="font-size: 13px;" class="mt-1 font-normal" :to="`/products/${item.slug}`"><b v-if="item.variant">{{ item.variant.name }}</b></nuxt-link>
                                </div>
                            </div>
                        </div>
                        <!-- procuct title -->
                        <!-- products quantity -->
                        <div class="flex flex-col items-start justify-start w-1/2 px-4 my-2 overflow-hidden md:items-end md:w-1/4 md:mt-0">
                            <si-ProductQuantity @selected="quantitySelected" :quantity="item.quantity"/>
                        </div>
                        <!-- products quantity  -->
                        <!--  Price -->
                        <div class="flex flex-col items-end justify-start w-1/2 mt-2 md:w-1/4 md:mt-0">
                            <div class="">
                                <b class="text-xs font-bold md:text-sm products-price-text-bg ">{{ item.quantity.value + "x" }} </b>
                                <b class="text-sm font-bold md:text-base products-price-text-bg ">{{ item.price.toFixed(2) }} {{ $store.state.currency.symbol }}</b>
                            </div>
                            <span class="flex items-center">
                                <del class="text-xs md:text-sm products-delprice-text-bg">{{ item.total.toFixed(2) }} {{ $store.state.currency.symbol }}</del>
                            </span>
                            <div v-if="item.upsell">
                                <b class="inline-block mt-2 text-base font-normal text-green-700">-{{ item.upsell.value }} {{ item.upsell.type == 'percentage' ? '%' : $store.state.currency.symbol }}</b>
                            </div>
                        </div>
                        <!-- Price -->  
                    </div>
                    <!--  Remove products -->
                    <div class="mx-2">
                        <button style="font-size: 13px;" class="px-2 py-1 font-bold transition-all ease-linear delay-200 rounded-full hover-bg" @click="remove">{{this.$settings.sections.cart.buttons.remove_button_text }}</button>
                    </div>
                    <!-- Remove products -->
                </div>
            </div>
            <!-- image -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object, required: true },
        quantity: { type: Number, default: 1 }
    },
    mounted() {
        this.quantitySelected(this.item.quantity.value);
    },
    methods: {
        remove() {
            this.$emit("remove", this.item);
        },
        quantitySelected(quantity) {
            this.item.quantity.value = quantity;
            this.item.total = this.item.price * quantity;
            let item = null;
            if (this.item.variant) item = this.$store.state.cart.find(i => i._id == this.item._id && this.item && i.variant._id == this.item.variant._id);
            else item = this.$store.state.cart.find(i => i._id == this.item._id && this.item && !i.variant);
            this.$tools.call('ADD_TO_CART', { ...item, quantity: quantity });
        }
    },
}
</script>

<style scoped>
[dir="rtl"] .product-content {
    padding-left: 0rem;
    padding-right: 1rem;
}

@media (min-width: 768px) {
    [dir="rtl"] .product-content {
        padding-left: 1rem;
    }
}
</style>