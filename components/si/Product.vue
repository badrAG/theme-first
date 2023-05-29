<template>
    <div>
        <!-- home page -->
        <div v-if="page == 'home'" >
            <div class="wishlist-box pb-full relative rounded-lg md:rounded-xl box-shadow-xs-hover">
                <!-- wishlist icon -->
                <div v-if="$settings.sections.products.add_to_wishlist.active">
                    <button  v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="bg-white hover-bg rounded-full absolute z-10 top-0 right-0 m-2 p-2">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 translate text-red"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                    </button>
                    <button v-else @click="addToWishlist" title="Wishlist" class="wishlist opacity-0 bg-white hover-bg rounded-full absolute z-10 top-0 right-0 m-2 p-2">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 translate"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
                    </button>
                </div>
                <!-- wishlist icon -->
                <!--  products image -->
                <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                    <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover rounded-xl" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                </nuxt-link>
                <!--  products image -->
                <!-- product-price -->
                <div class="hidden md:block">
                    <si-product-price page="home-price" :type="item.type" :price="item.price" :variants="item.variants"></si-product-price>
                </div>
                <!-- product-price -->
            </div>
            <!-- <div class="my-2 md:hidden">
                <si-product-price class="text-sm" :type="item.type" :price="item.price" :variants="item.variants"></si-product-price>
            </div> -->
        </div>
        <!-- home page -->
        <!-- else pages -->
        <div v-else class="wishlist-box flex flex-col relative p-2 mb-5 rounded-xl box-shadow-xs-hover">
          <!-- wishlist icon -->
          <div class="wishlist opacity-0" v-if="$settings.sections.products.add_to_wishlist.active">
                <button v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="bg-white hover-bg rounded-full absolute z-10 top-0 right-0 m-4 p-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 translate text-red"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                </button>
                <button v-else @click="addToWishlist" title="Wishlist" class="bg-white  hover-bg rounded-full absolute z-10 top-0 right-0 m-4 p-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 translate"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
                </button>
            </div>
            <!-- wishlist icon -->
            <!-- Product discount -->
            <div v-if="discount" class="text-sm m-2 p-1 h-8 rounded-tl-lg rounded-br-lg flex items-center justify-center bg-primary text-white absolute top-0 left-0 z-10">
                <b>-{{discount.value}} {{ discount.type == 'percentage' ? '%' : this.$store.state.currency.symbol }}</b>
            </div>
            <!-- Product discount -->
            <!-- Products details -->
            <div class="h-full flex relative ">
                <div class="w-full flex flex-col h-full">
                    <!-- product image -->
                    <div class="image_box pb-4/5 relative zoom overflow-hidden">
                        <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                            <si-image  width="400" height="400" class="image_zoom h-full w-full absolute inset-0 object-cover" :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name"/>
                        </nuxt-link>
                    </div>
                    <!-- product image -->
                    <!-- product name -->
                    <div class="mt-3">
                        <nuxt-link :to="`/products/${item.slug}`">
                            <h3 class="text-sm font-normal truncate">{{item.name}}</h3>
                        </nuxt-link>
                    </div>
                    <!-- product name -->
                    <!-- product price -->
                    <!-- <div class="mt-1">
                        <si-product-price class="text-sm" :type="item.type" :price="item.price" :variants="item.variants"></si-product-price>
                    </div> -->
                    <!--  product price -->
                </div>
            </div>
        </div>
        <!-- else pages -->
    </div>
</template>

<script>
    export default {
        props: {
            upsell: { type: Object, default: null },
            item: Object,
            page: { type: String,required: false}
        },
        async fetch(){
            if(this.discount){
                if(this.item.type == 'simple'){
                    this.item.originalPrice = this.$tools.copy(this.item.price);
                    if(this.discount.type == 'percentage'){
                            this.item.price.salePrice = this.item.price.salePrice - (this.item.price.salePrice * this.discount.value / 100)
                            this.item.price.comparePrice = this.item.price.comparePrice - (this.item.price.comparePrice * this.discount.value / 100)
                    }else{
                        this.item.price.salePrice = this.item.price.salePrice - this.discount.value
                        this.item.price.comparePrice = this.item.price.comparePrice - this.discount.value
                    }
                }else{
                    this.item.variants.forEach(variant => {
                        variant.originalPrice = this.$tools.copy(variant.price)
                        if(this.discount.type == 'percentage'){
                            variant.price.salePrice = variant.price.salePrice - (variant.price.salePrice * this.discount.value / 100)
                            variant.price.comparePrice = variant.price.comparePrice - (variant.price.comparePrice * this.discount.value / 100)
                        }else{
                            variant.price.salePrice = variant.price.salePrice - this.discount.value
                            variant.price.comparePrice = variant.price.comparePrice - this.discount.value
                        }
                    });
                }
            }
        },
        data() {
            return {
                filpped: false,
                added: false,
                variant: this.item.type == 'variant' ? this.item.variants[0] : null,
                quantity: this.item.quantity,
                price: { salePrice: 0, comparePrice: 0 },
                discount: this.upsell ? this.upsell.discount : null
            }
        },
        methods: {
            addToCart(ev) {
                // Call add to cart event
                let item = {
                    _id: this.item._id,
                    quantity: this.quantity.value ? this.quantity.value : this.item.quantity.default,
                    price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                    variant: this.variant ? { _id: this.variant._id } : null,
                    upsell: this.upsell
                };
                this.$tools.call('ADD_TO_CART', item);
                this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
                this.added = true;
                if(this.$settings.sections.products.add_to_cart_to_checkout){
                    setTimeout(() => {
                            window.location.href = '/checkout2';
                    }, 500);
                }
                setTimeout(() => {
                    this.added = false;
                }, 2000);
                this.$storeino.fbpx('AddToCart',{
                content_name: this.item.name,
                content_ids: [this.item._id],
                content_type: "product",
                value: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                currency: this.$store.state.currency && this.$store.state.currency.code ? this.$store.state.currency.code : "USD"
                })
            },
            variantSelected(variant){
                this.variant = variant;
                this.quantitySelected(this.item.quantity.value);
            },
            quantitySelected(quantity){
                this.item.quantity.value = quantity;
                if(this.variant){
                    this.price.salePrice = this.variant.price.salePrice * quantity;
                    this.price.comparePrice = this.variant.price.comparePrice * quantity;
                }else{
                    this.price.salePrice = this.item.price.salePrice * quantity;
                    this.price.comparePrice = this.item.price.comparePrice * quantity;
                }
            },
            addToWishlist(){
                this.$tools.call('ADD_TO_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
            },
            removeFromWishlist(){
                this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
            },
        },
    }
</script>

<style scoped>
    .wishlist-box { 
        transition: all 0.5s ease-in-out;
    }
    
    .wishlist {
        transition: all 0.5s ease-in-out;
    }

    .wishlist-box:hover .wishlist {
        opacity: 1;
    }
</style>
    