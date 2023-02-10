<template>
    <div class="container my-6">
        <div>
            <div v-if="items.length > 0" class="flex flex-wrap lg:flex-nowrap justify-between">
                <!-- Products -->
                <div class="w-full lg:w-4/6 ">
                    <!-- Cart title -->
                    <h2 class="text-3xl md:text-4xl font-light guard-cairo-font px-4 mb-6">{{$settings.sections.cart.title}}</h2>
                    <!-- Cart title -->
    
                    <!-- Loader -->
                    <div v-if="loading.cart" class="flex justify-center items-center my-5">
                        <si-loader></si-loader>
                    </div>
                    <!-- Loader -->
    
                    <!-- cart -->
                    <div class="cart-items flex flex-col">
                        <si-cart-item v-for="(item,i) in items" @remove="remove" :item="item" :key="i" />
                    </div>
                    <!-- cart -->
                </div>
                <!-- Products -->
    
                <!-- Price -->
                <div class="w-full lg:w-2/6  mx-4 lg:mt-14 md:mb-6 mb-8">
                    <div v-if="!loading.cart && items.length > 0" class="flex flex-col box-shadow-x rounded-2xl p-2">
                        <!--  -->
                        <div class="bg-white p-2 flex justify-between">
                            <h2 class="text-base font-bold ">{{ $settings.sections.cart.total_text }}({{items.length}})</h2>
                            <h2 class="text-base font-bold products-price-text-bg">{{ $store.state.currency.symbol }} {{ total.toFixed(2) }}</h2>
                        </div>
                        <!--  -->
                        <div class="flex flex-col p-2">
                            <a href="/checkout2" class="flex items-center justify-center text-xl px-4 py-2 bg-primary text-white border-2 bg-primary-border rounded-full mb-4 scale hover:opacity-80">
                                <!-- <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 translate"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg> -->
                                <!-- <span>&ensp;</span> -->
                                <span class="whitespace-nowrap overflow-ellipsis overflow-hidden text-base font-bold">{{ $settings.sections.cart.buttons.checkout_text }}</span>
                            </a>
                            <nuxt-link to="/shop" class="flex items-center justify-center text-xl px-4 py-2 text-primary border-2 bg-primary-border  rounded-full scale hover:opacity-80">
                                <!-- <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 translate"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg> -->
                                <!-- <span>&ensp;</span> -->
                                <span class="whitespace-nowrap overflow-ellipsis overflow-hidden text-base font-bold">{{ $settings.sections.cart.buttons.back_to_shop_text }}</span>
                            </nuxt-link>
                        </div>
                        <!--  -->
                    </div>
                </div>
                <!-- Price -->
            </div>
 
            <!-- Upsell -->
            <div class="flex flex-col bg-white mt-6" v-if="!loading.cart && items.length > 0">
                <div class="mx-4 mb-1" v-if="upsells.length > 0">
                    <h2 class="text-2xl">{{ $settings.sections.cart.upsell.title }}</h2>
                </div>
                <div v-if="loading.upsells" class="flex justify-center items-center my-5">
                    <si-loader></si-loader>
                </div>
                <div class="flex flex-wrap" v-if="upsells.length > 0">
                    <template v-for="(upsell, i) in upsells">
                        <div v-for="(product, ii) in upsell.products" :key="ii+'_'+i" class="w-1/2 md:w-1/3 lg:w-1/5 p-2">
                            <si-product :item="product" :upsell="upsell"></si-product>
                        </div>
                    </template>
                </div>
            </div>
            <!-- Upsell -->
        </div>

        <!-- Empty Cart -->
        <div class="flex justify-center p-2">
            <div v-if="!loading.cart && items.length == 0" class="flex flex-col items-center">
                <h2 class="w-full text-center mb-3">{{ $settings.sections.cart.empty_text }}</h2>
                <nuxt-link to="/shop" class="flex items-center py-2 px-4 justify-center bg-primary text-white rounded-full hover:opacity-80">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 translate"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
                <span>&ensp;</span>
                    <span class="w-full">{{ $settings.sections.cart.buttons.back_to_shop_text }}</span>
                </nuxt-link>
            </div>
        </div>
        <!-- Empty Cart -->

    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: { cart: true, upsells: true },
            items: [],
            total: 0,
            upsells: []
        }
    },
    async fetch(){
        this.$store.state.seo.title = this.$settings.sections.cart.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.cart.description || this.$settings.store_description;
        await this.initCart();
        if(this.items.length > 0){
            await this.getUpsells();
        }
    },
    mounted() {
      this.$storeino.fbpx('PageView')
    },
    watch: {
        async "$store.state.cart.length"(){
            await this.initCart();
            await this.getUpsells();
        },
        items: {
            deep: true,
            handler(){
                this.calcTotal();
            }
        }
    },
    methods: {
        async getUpsells(){
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.upsells = true;
            if(ids.length > 0){
                try{
                    const response = await this.$storeino.upsells.search({ 'with': ['products'],'product._id-in': ids, limit: 1000 });
                    this.upsells = response.data.results;
                }catch(e){
                    console.log(e);
                }
            }
            this.loading.upsells = false;
        },
        async initCart(){
            console.log("Init");
            this.items = [];
            const ids = this.$store.state.cart.map(item => item._id);
            this.loading.cart = true;
            if(ids.length > 0){
                try{
                    const response = await this.$storeino.products.search({ '_id-in': ids, limit: 1000 });
                    const products = response.data.results;
                    for (const item of this.$store.state.cart) {
                        const cartItem = {};
                        const product = products.find(p => p._id === item._id);
                        cartItem._id = product._id;
                        cartItem.slug = product.slug;
                        cartItem.name = product.name;
                        cartItem.price = product.price.salePrice;
                        cartItem.quantity = product.quantity;
                        cartItem.quantity.value = item.quantity;
                        cartItem.image = product.images.length > 0 ? product.images[0].src : '';
                        if(item.variant && item.variant._id){
                            cartItem.variant = product.variants.find(variant => variant._id === item.variant._id);
                            cartItem.price = cartItem.variant.price.salePrice;
                        }
                        if(item.upsell){
                            cartItem.upsell = item.upsell;
                            const discount = cartItem.upsell.type == 'percentage' ? cartItem.price * (cartItem.upsell.value / 100) : cartItem.upsell.value
                            cartItem.price = cartItem.price - discount;
                        }
                        cartItem.total = cartItem.price * cartItem.quantity.value;
                        console.log("Push");
                        this.items.push(cartItem);
                    }
                    this.calcTotal();
                }catch(e){
                    console.log(e);
                }
            }
            this.loading.cart = false;
        },
        async remove(item){
            this.$tools.call('REMOVE_FROM_CART', item);
        },
        calcTotal(){
            this.total = this.items.reduce((total, item) => total + (item.price * item.quantity.value), 0);
        }
    },
}
</script>
