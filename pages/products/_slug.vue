<template>
    <div class="bg-white">
        <div class="container mb-6 md:mt-6">
            <!-- Loader -->
            <div v-if="loading" class="flex items-center justify-center mt-6 md:mt-0">
                <si-loader></si-loader>
            </div>
            <!-- Loader -->
            <!--  -->
            <div v-if="!loading && item" class="flex flex-wrap justify-between lg:gap-10 lg:flex-nowrap">
                <!-- Product id -->
                <meta itemprop="productID" :content="item._id" />
                <!-- Product id -->
                <!--  -->
                <div style="height: fit-content;" class="w-full lg:w-2/3 lg:sticky lg:top-6">
                    <div class="flex flex-wrap">
                        <div class="relative w-full slider md:mx-4">
                            <!-- image -->
                            <div class="relative overflow-hidden pb-full">
                                <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full cursor-pointer md:rounded-lg" @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name" />
                            </div>
                            <!-- image -->
                            <button v-if="item.images.length > 1" class="box-shadow-xs mx-2 md:mx-3 absolute top-1/2 -left-0 transform -translate-y-1/2 p-3 md:p-3.5 bg-white transition-all ease-linear delay-150  rounded-full  hover-bg" @click="prev">
                                <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path>
                                </svg>
                            </button>
                            <button v-if="item.images.length > 1" class="box-shadow-xs mx-2 md:mx-3 absolute top-1/2 -right-0 transform -translate-y-1/2 p-3 md:p-3.5 bg-white transition-all ease-linear delay-150 rounded-full hover-bg" @click="next">
                                <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path>
                                </svg>
                            </button>
                            <div v-if="$settings.sections.products.add_to_wishlist.active">
                                <button v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="box-shadow-xs bg-white rounded-full absolute z-10 top-0 right-0 m-2 md:m-3 p-3 md:p-3.5 transition-all ease-linear delay-150  hover-bg">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs align-middle translate text-red"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                </button>
                                <button v-else @click="addToWishlist" title="Wishlist" class="box-shadow-xs bg-white rounded-full absolute z-10 top-0 right-0 m-2 md:m-3 p-3 md:p-3.5 transition-all ease-linear delay-150 hover-bg">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs align-middle translate"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
                                </button>
                            </div>
                        </div>
                        <div class="relative order-first ml-4 overflow-hidden galery md:w-14 lg:w-16">
                            <div class="absolute inset-0 overflow-y-scroll scroll">
                                <si-image  class="object-cover mb-2 rounded-lg cursor-pointer w-14 h-14 lg:w-16 lg:h-16" :class="visibleSlide == index ? 'opacity-100 border-2 border-black' : 'opacity-60'" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                            </div>
                        </div>
                    </div>
                    <div class="block md:hidden">
                        <div class="flex items-center justify-center mx-3 mt-3 dots ">
                            <div class="mx-1" v-for="(image, index) in item.images" :key="index" >
                                <div class="h-2.5 w-2.5 rounded-full cursor-pointer" :class="visibleSlide == index ? 'bg-primary' : 'bg-gray-300'" @click="setImage(index)"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
                <!-- Product content -->
                <!-- sticky add to cart -->
                <div class="fixed inset-0 top-auto z-30 p-4 bg-white border-t bg-primary-border" v-if="showStickyAddToCart">
                    <div class="container flex items-center gap-4 md:gap-6">
                        <!--  Product Name -->
                        <div class="items-center hidden gap-4 md:flex md:gap-6 md:w-5/12">
                            <si-image class="object-cover rounded-sm cursor-pointer w-14 h-14" v-show="visibleSlide === index" v-for="(image, index) in item.images" :key="index" :index="index" @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name" />
                            <h4 class="text-xl font-medium truncate guard-cairo-font">{{ item.name }}</h4>
                        </div>
                        <!--  Product Name -->
                        <!-- Price -->
                        <div class="hidden md:block md:w-1/12 lg:w-2/12">
                            <si-product-price class="text-base" :type="'simple'" :price="price" :variants="[]"></si-product-price>
                        </div>
                        <!-- Price -->
                        <!-- product-quantity -->
                        <div class="w-2/5 md:w-3/12 lg:w-2/12">
                            <div v-if="$settings.sections.product.quantity.active != null ? $settings.sections.product.quantity.active : true">
                                <si-product-quantity @selected="quantitySelected" :quantity="quantity" page="product"></si-product-quantity>
                            </div>
                        </div>
                        <!-- product-quantity -->
                        <!-- add to cart -->
                        <div class="w-3/5 md:w-3/12">
                            <button class="flex items-center justify-center w-full h-12 px-5 text-base font-bold rounded-full addtocart-bg addtocart-text-bg click-effect scale hover:opacity-90" v-if="$settings.sections.product.add_to_cart.active" @click="addToCart">
                                <span>{{ $settings.sections.product.add_to_cart.text }}</span>
                            </button>
                            <div v-else>
                                <button v-if="!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_BUYNOW') >= 0)" class="flex justify-center w-full p-3 px-5 text-base font-bold rounded-full ai-c buynow-bg buynow-text-bg click-effect scale hover:opacity-90"  @click="buyNow">
                                    <span>{{ $settings.sections.product.buy_now.text }}</span>
                                </button>
                                <a href="#chckout" v-else class="flex justify-center w-full p-3 px-5 text-base font-bold rounded-full ai-c buynow-bg buynow-text-bg click-effect scale hover:opacity-90">
                                    <span>{{ $settings.sections.product.buy_now.text }}</span>
                                </a>
                            </div>
                        </div>
                        <!-- add to cart -->
                    </div>
                </div>
                <!-- sticky add to cart -->
                <div class="w-full px-2 content-part lg:w-1/3">
                    <div class="">
                        <div class="bg-white ">
                        <!--  Product Name -->
                        <h4 class="mx-2 mt-4 mb-4 text-lg font-medium md:text-lh lg:text-xl guard-cairo-font lg:mt-0">{{ item.name }}</h4>
                        <!--  Product Name -->
                        <!--  product name hidden-->
                        <meta itemprop="name" :content="item.name" />
                        <!--  product name hidden-->
                        <!-- Price  -->
                        <div class="flex flex-wrap items-center justify-between mx-2 mb-4">
                            <!-- Price -->
                            <si-product-price class="text-xl" :type="'simple'" :price="price" :variants="[]"></si-product-price>
                            <!-- Price -->
                            <!-- reviews -->
                            <div class="flex items-center justify-start" v-if="$settings.sections.product.reviews.active">
                                <div class="flex mb-1">
                                    <span v-for="(star,i) in 5" :class="star <= item.review.rating ? 'text-yellow-500 ': 'text-black'" :key="i">
                                        <fa class="text-sm"  :icon="['fa', 'star']"></fa>
                                    </span>
                                </div>
                                <span class="font-normal text-md" key="count"> ({{ item.review.reviews.length }})</span>
                            </div>
                            <!-- reviews -->
                        </div>
                        <!-- Price -->
                        <!-- short description -->
                        <p class="mx-2 mb-2 text-sm font-normal text-gr">{{ item.description }}</p>
                        <!-- short description -->
                        <!-- variant -->
                        <si-product-variants class="flex mx-2" v-if="item.type=='variable'" :options="item.options" :images="item.images" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                        <!-- variant -->
                        <!-- product cart -->
                        <!-- product quantity -->
                        <div class="mx-2 mt-4 product-quantity" v-if="$settings.sections.product.quantity.active != null ? $settings.sections.product.quantity.active : true ">
                            <div>
                                <h2 class="mb-2 font-normal capitalize text-md">{{ $settings.sections.product.quantity.text }}</h2>
                            </div>
                            <si-product-quantity @selected="quantitySelected" :quantity="quantity" page="product"></si-product-quantity>
                        </div>
                        <!-- product quantity -->
                        <si-app-loader placement="BEFORE_ADD_TO_CART"/>
                        <!-- add to cart -->
                        <div class="mx-2 mt-6 mb-4" v-if="$settings.sections.product.add_to_cart.active">
                            <button @click="addToCart" class="flex items-center justify-center w-full h-12 px-5 text-base font-bold rounded-full addtocart-bg addtocart-text-bg click-effect scale hover:opacity-90">
                                <span>{{ $settings.sections.product.add_to_cart.text }}</span>
                            </button>
                        </div>
                        <!-- add to cart -->
                        <si-app-loader placement="AFTER_ADD_TO_CART"/>
                        <si-app-loader placement="BEFORE_BUYNOW"/>
                        <!-- buy now -->
                        <div id="chckout" class="mx-2 mt-6" v-if="$settings.sections.product.buy_now.active">
                            <button v-show="(!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_BUYNOW') >= 0))" @click="buyNow" class="flex justify-center w-full p-3 px-5 text-base font-bold rounded-full ai-c buynow-bg buynow-text-bg click-effect scale hover:opacity-90">
                                <span>{{ $settings.sections.product.buy_now.text }}</span>
                            </button>
                            <si-app-loader placement="REPLACE_BUYNOW"/>
                        </div>
                        <si-app-loader placement="AFTER_BUYNOW"/>
                        <!-- buy now -->
                        </div>
                        <!-- share products icons -->
                        <div class="mx-2" v-if="$settings.sections.product.share_buttons">
                            <div>
                                <h3 class="px-4 mt-4 mb-3 text-lg font-bold align-center whitespace-nowrap">{{ $settings.sections.product.share_buttons.title }}</h3>
                            </div>
                            <div class="flex justify-center md:justify-start">
                                <div v-for="item in socialMedia.filter(s=>$settings.sections.product.share_buttons[s.name])" :key="item.name" class="flex items-center justify-center m-2">
                                    <a class="flex h-full " :href="item.url" target="_blank" rel="noopener noreferrer">
                                    <fa class="mx-2 text-3xl hover:opacity-80" :icon="['fab', item.name]"></fa>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- share products icons -->
                    </div>
                </div>
                <!-- Product content -->
            </div>
            <!--  -->
            <div v-if="!loading && item">
                <si-app-loader placement="BEFORE_DESCRIPTION"/>
                <!-- replace Desciption and Reviews -->
                <div class="mt-10 mb-6">
                    <div class="flex items-center justify-center px-4 mb-4">
                        <div class="px-4 py-1 mx-2 text-sm font-bold transition ease-in delay-150 rounded-full cursor-pointer md:text-base " :class="desc == true? 'bg-primary text-white': 'hover-bg'" @click="ShowDescription">{{ $settings.sections.product.description.title }}</div>
                        <div v-if="$settings.sections.product.reviews.active" class="px-4 py-1 mx-2 text-sm font-bold transition ease-in delay-150 rounded-full cursor-pointer md:text-base" :class="[foundApp('REPLACE_REVIEWS'),(rev == true? 'bg-primary text-white': 'hover-bg')]" @click="ShowReviews">{{ $settings.sections.product.reviews.title }}</div>
                    </div>
                    <!-- Description -->
                    <div class="flex justify-center px-4">
                        <div v-if="desc">
                            <div class="text-base font-normal description text-info" id="description" v-html="item.html"></div>
                            <h2 v-if="item.html.length == 0" class="text-base font-normal">{{ $settings.sections.product.description.title_empty }}</h2>
                        </div>
                    </div>
                    <!-- Description -->
                    <!-- reviews -->
                    <div v-if="rev" class="mx-2 overflow-hidden rounded-lg">
                        <div v-if="$settings.sections.product.reviews.active" class="reviews">
                            <sections-reviews v-show="!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_REVIEWS') >= 0)" :item="item"></sections-reviews>
                        </div>
                        <si-app-loader placement="REPLACE_REVIEWS"/>
                        <h2 v-if="item.review.reviews.length == 0" class="flex justify-center mx-2 text-base font-normal" >{{ $settings.sections.product.reviews.empty_title }}</h2>
                    </div>
                    <!-- reviews -->
                </div>
                <!-- replace Desciption and Reviews -->
                <!-- after Description and Reviews -->
                <div class="px-4 overflow-hidden">
                    <!-- reviews after description -->
                    <div class="items-center justify-center" :class="foundApp('AFTER_DESCRIPTION')" v-if="$settings.sections.product.reviews.active && this.$store.state.apps.find(a=>a.name === 'PIN REVIEW')">
                        <div class="px-4 py-1 text-white rounded-full cursor-pointer bg-primary">
                        <span class="text-sm font-bold md:text-base">{{ $settings.sections.product.reviews.title }}</span>
                        </div>
                    </div>
                    <si-app-loader placement="AFTER_DESCRIPTION"/>
                    <!-- reviews after description -->
                </div>
                <!-- after Description and Reviews -->
                <!-- upsells && related Products -->
                <div class="flex flex-col mt-3">
                    <!-- upsells  -->
                    <div v-if="$settings.sections.product.upsell.active" class="upsells">
                        <sections-upsell :item="item.upsell"/>
                    </div>
                    <!-- upsells -->
                    <!-- related Products  -->
                    <div v-if="$settings.sections.product.related.active" class="related">
                        <sections-related-products :item="item"/>
                    </div>
                    <!-- related Products  -->
                </div>
                <!-- upsells && related Products -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return this.seo();
        },
        data() {
            return {
                desc: true,
                rev: false,
                showStickyAddToCart: false,
                visibleSlide: 0,
                loading: true,
                item: null,
                image: null,
                tab: 'description',
                outofstock: false,
                quantity: {},
                showVariantDiv:false,
                showVarianteModal:false,
                variant: null,
                price: { salePrice: 0, comparePrice: 0 },
                socialMedia: [
                    {
                        name: 'whatsapp',
                        url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                        image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                    },
                    {
                        name: 'facebook',
                        image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                        url: 'https://www.facebook.com/sharer.php?u={url}'
                    },
                    {
                        name: 'twitter',
                        url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                        image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                    },
                    {
                        name: 'linkedin',
                        url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                        image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                    }
                ]
            }
        },
        async fetch() {
            const { slug } = this.$route.params;
            try{
                this.loading = true;
                const { data } = await this.$storeino.products.get({ slug })
                this.item = data;
                //old meta tag
                // this.$store.state.seo.title = (this.item.seo.title || this.item.name) + ' - ' + this.$settings.store_name;
                // this.$store.state.seo.description = this.item.seo.description || this.item.description || this.$settings.store_description;
                // this.$store.state.seo.keywords = this.item.seo.keywords.length > 0 ? this.item.seo.keywords || [] : this.$settings.store_keywords || [];
                // if(this.item.images.length > 0){ this.$store.state.seo.image = this.item.images[0].src; }
                // New meta tags
                // [ { hid: "product:price:amount", property: "product:price:amount", content: this.price.salePrice },
                // { hid: "productID", itemprop: "productID", content: this.item && this.item ? this.item._id : 'productID' }
                // ].forEach(meta=>{
                //     const index = this.$store.state.seo.metaTags.findIndex(m=>m.hid === meta.hid);
                //     if(index > -1){ this.$store.state.seo.metaTags.splice(index, 1, meta); }
                //     this.$store.state.seo.metaTags.push(meta);
                // });
                this.loading = false;
                this.quantity = this.item.quantity;
                // Set default image if exists
                if(this.item.images.length > 0) this.setImage(0);
                // Set default variant if exists
                if(this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
                if(this.item.type == 'simple'){
                    // Check outof stock
                    if(!this.item.outStock.disabled && this.item.quantity.instock <= 0){
                        this.outofstock = true;
                    }
                }
                // Set default quantity
                this.quantitySelected(this.quantity.default);
                // Generate share urls
                let url = `https://${this.$store.state.domain}/posts/${slug}`;
                for (const button of this.socialMedia) {
                    button.url = button.url.replace(/\{title\}/gi, this.item.name).replace(/\{url\}/gi, url);
                }
                if(!process.server){
                    this.$storeino.fbpx('PageView')
                    this.$storeino.fbpx('ViewContent',{
                        content_name: this.item.name?this.item.name:'',
                        content_ids: [this.item._id],
                        content_type: "product",
                        value: this.item.price.salePrice,
                        currency: this.$store.state.currency.code
                    });
                    this.$tools.call('PAGE_VIEW', this.item);
                }

            }catch(err){
                console.log({err});
                this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
            }
        },
        mounted() {
            if(this.item) this.$tools.call('PAGE_VIEW', this.item);
            window.addEventListener("APP_LOADER", e => {
                window.dispatchEvent(new CustomEvent('CURRENT_PRODUCT', {
                    detail: {
                        product_id: this.item._id,
                        product_quantity: this.quantity.value,
                        product_variant: this.variant ? this.variant._id : undefined,
                        product_currency: this.$store.state.currency.code,
                        product_price: this.price
                    }
                }));
            });
            if(this.item){
            this.$storeino.fbpx('PageView')
            this.$storeino.fbpx('ViewContent',{
                content_name: this.item.name?this.item.name:'',
                content_ids: [this.item._id],
                content_type: "product",
                value: this.item.price.salePrice,
                currency: this.$store.state.currency.code
                })
            }
            if(this.item){
                const iframes=document.querySelectorAll('iframe')
                for(const ifram of iframes){
                const width = ifram.getAttribute('width')
                const height = ifram.getAttribute('height')
                const parent = ifram.parentNode
                    if (!parent.classList.contains('video-wrapper')) {
                        const div = document.createElement("div");
                        ifram.after(div)
                        div.classList.add('video-wrapper');
                        ifram.style.width=null;
                        ifram.style.height=null;
                        ifram.setAttribute('width','');
                        ifram.setAttribute('height','');
                        div.appendChild(ifram)
                    }
                }
            }
            //show showStickyAddToCart
            window.addEventListener('scroll', this.handleScroll);
        },
        computed: {
            slidesLen() {
                return this.item.images.length
            }
        },
        methods: {
            seo() {
                if (!this.item) {  return; }
                return {
                    title: (this.item.seo.title || this.item.name) + ' - ' + this.$settings.store_name,
                    meta: [
                        { hid: "product:price:amount", property: "product:price:amount", content: this.item ? this.item.price.salePrice : 0 },
                        { hid: "productID", itemprop: "productID", content: this.item._id || 'productID' },
                        { hid: "description", name: "description", content: this.item.seo.description || this.item.description || this.$settings.store_description },
                        { hid: 'keywords', name: 'keywords', content: (this.item.seo.keywords.length > 0 ? this.item.seo.keywords || [] : this.$settings.store_keywords || []).join(',') },
                        { hid: "og:image", property: "og:image", content: this.item && this.item.images && this.item.images.length > 0 ? this.item.images[0].src : this.$store.state.defaults.image },
                        { hid: "name", itemprop: "name", content: this.item ? this.item.name : 'article' },
                        { hid: "priceCurrency", itemprop: "priceCurrency", content: this.$store.state.currency.code },
                        { hid: "url", itemprop: "url", content: this.$store.state.seo.url },
                        { hid: "price", itemprop: "price", content: this.item && this.item ? this.item.price.salePrice : 0 },
                        { hid: "robots", name: "robots", content: (this.$settings && this.$settings.store_indexing) || (this.item && this.item.seo && !this.item.seo.hide) ? "index" : "noindex" },
                        { hid: "og:site_name", property: "og:site_name", content: this.$settings ? this.$settings.store_name  : "Online Store" },
                        { hid: "og:title", property: "og:title", content: this.item && this.item.seo && this.item.seo.title ? this.item.seo.title : this.item && this.item ? this.item.name : 'Online Store' },
                        { hid: "og:type", property: "og:type", content: "article" },
                        { hid: "og:url", property: "og:url", content: this.$store.state.seo.url },
                        { hid: "og:description", property: "og:description", content: this.item && this.item.seo ? this.item.seo.description : "description" },
                        { hid: "apple-mobile-web-app-status-bar-style", property: "apple-mobile-web-app-status-bar-style", content: "black" },
                        { hid: "apple-mobile-web-app-capable", property: "apple-mobile-web-app-capable", content: "yes" },
                        { hid: "product:plural_title", property: "product:plural_title", content: this.item && this.item ? this.item.name : 'article' },
                        { hid: "product:price:currency", property: "product:price:currency", content: this.$store.state.currency.code },
                        { hid: "theme-color", property: "theme-color", content: this.$settings ? this.$settings.style.primary.color : "#ffffff" },
                        { hid: "twitter:card", property: "twitter:card", content: "summary" },
                        { hid: "twitter:site", property: "twitter:site", content: this.$settings ? this.$settings.store_name : "Online Store" },
                        { hid: "twitter:title", property: "twitter:title", content: this.item && this.item.seo && this.item.seo.title ? this.item.seo.title : this.item && this.item ? this.item.name : 'Online Store' },
                        { hid: "twitter:description", property: "twitter:description", content: this.item && this.item.seo ? this.item.seo.description : "description" },
                        { hid: "twitter:image", property: "twitter:image", content: this.item && this.item.images && this.item.images.length > 0 ? this.item.images[0].src : this.$store.state.defaults.image },
                        { hid: "twitter:url", property: "twitter:url", content: this.$store.state.seo.url },
                    ]
                };
            },
            ShowDescription(){
                this.desc = true; this.rev = false
            },
            ShowReviews(){
                this.desc = false; this.rev = true
            },
            foundApp(placement) {
                if(this.$store.state.apps.find(a=>a.name === "PIN REVIEW")) {
                    const foundApp = this.$store.state.apps.find((app) => {
                        return app.config?.placements?.includes(placement);
                    });
                    if (foundApp) {
                        return 'flex'
                    } else {
                        return 'hidden'
                    }
                }
            },
            handleScroll() {
                if (window.pageYOffset > 400) {
                    this.showStickyAddToCart = true;
                } else {
                    this.showStickyAddToCart = false;
                }
            },
            next(){
                if(this.visibleSlide >= this.slidesLen - 1 ){
                    this.image = this.$tools.copy(this.item.images[this.visibleSlide = 0]);
                }else {
                    this.image = this.$tools.copy(this.item.images[this.visibleSlide = this.visibleSlide + 1]);
                }
            },
            prev() {
                if(this.visibleSlide <= 0 ){
                    this.image = this.$tools.copy(this.item.images[this.visibleSlide = this.slidesLen - 1]);
                }else {
                    this.image = this.$tools.copy(this.item.images[this.visibleSlide = this.visibleSlide - 1]);
                }
            },
            t(key){
            const langs = {
                    price_title_products: {
                        EN: "Price:	",
                        FR: "Prix:	",
                        AR: "السعر: ",
                        ES: "Prezo: ",
                        PT: "Preço: "
                    },
                    check_choice:{
                        EN: "Please check your choice :",
                        FR: "Veuillez vérifier votre choix:	",
                        AR: "يرجى تأكيد الإختيار: ",
                        ES: "Por favor marque su elección: ",
                        PT :"Por favor, verifique a sua escolha: "
                    },
                    can_change_choice:{
                        EN: "You can change your choice :",
                        FR: "Vous pouvez modifier votre choix :	",
                        AR: "يمكنك تغيير اختيارك: ",
                        ES: "Puede cambiar su elección: ",
                        PT:"Você pode alterar sua escolha: "
                    }
                }
                return langs[key] && langs[key][this.$store.state.language.code] || '';
            },
            addToCart() {
                // Call add to cart event
                this.$tools.call('ADD_TO_CART', {
                    _id: this.item._id,
                    quantity: this.quantity.value,
                    price: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                    variant: this.variant ? { _id: this.variant._id } : null
                });
                if(this.$settings.sections.products.add_to_cart_to_checkout){
                    setTimeout(() => {
                            window.location.href = '/checkout2';
                    }, 500);
                }
                this.$storeino.fbpx('AddToCart',{
                    content_name: this.item.name,
                    content_ids: [this.item._id],
                    content_type: "product",
                    value: this.variant?this.variant.price.salePrice : this.item.price.salePrice,
                    currency: this.$store.state.currency && this.$store.state.currency.code ? this.$store.state.currency.code : "USD"
                })
                this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
            },
            addToWishlist(){
                this.$tools.call('ADD_TO_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
            },
            removeFromWishlist(){
                this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
                this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
            },
            buyNow() {
                // Add to cart and redirect to checkout
                if (this.$settings.checkout_required_fields.show_variante_reminder && this.item.type =='variable' && !this.showVarianteModal) {
                    this.showVarianteModal = true
                    return;
                }
                this.addToCart();
                setTimeout(() => {
                    window.location.href = '/checkout2';
                }, 500);
            },
            quantitySelected(quantity) {
                this.item.quantity.value = quantity;
                if(this.variant){
                    this.price.salePrice = this.variant.price.salePrice * quantity;
                    this.price.comparePrice = this.variant.price.comparePrice * quantity;
                }else{
                    this.price.salePrice = this.item.price.salePrice * quantity;
                    this.price.comparePrice = this.item.price.comparePrice * quantity;
                }
                if(!process.server){
                    window.dispatchEvent(new CustomEvent('CURRENT_PRODUCT', {
                        detail: {
                            product_id: this.item._id,
                            product_quantity: this.quantity.value,
                            product_variant: this.variant ? this.variant._id : undefined,
                            product_currency: this.$store.state.currency.code,
                            product_price: this.price
                        }
                    }));
                }
            },
            variantSelected(variant) {
                this.variant = variant;
                if(variant.imageId && this.item.images.length > 0){
                    let index = this.item.images.findIndex(i=>i._id == variant.imageId);
                    if(index == -1) index = 0;
                    this.visibleSlide = index;
                    this.image = this.item.images[index];
                }else if(this.item.images.length > 0){
                    this.visibleSlide = 0
                    this.image = this.item.images[0];
                }
                // Check outof stock
                if(!this.item.outStock.disabled && this.variant.quantity.instock <= 0){
                    this.outofstock = true;
                }else{
                    this.outofstock = false;
                }
                this.quantitySelected(this.item.quantity.value);
            },
            setImage(index){
                this.visibleSlide = index
                this.image = this.$tools.copy(this.item.images[index]);
            },
            setTab(tab){
                this.tab = tab;
                if(tab == 'reviews' && this.reviews.results.length == 0) this.getReviews();
            }
        },
    }
</script>

<style scoped>
  .description {
    white-space: normal !important;
  }

  .description {
    display: block !important;
  }

  .text-info {
    line-height: 26px;
    display: block;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .text-info > :first-child {
    white-space: break-spaces;
  }

  [dir = "rtl"] .dots{
      flex-direction: row-reverse;
  }

  .video-wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-top: 56.25%;
  }

  .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
  }

  .scroll::-webkit-scrollbar {
      display: none;
  }

  [dir = 'rtl'] .galery {
      margin-right: 1rem;
      margin-left: 0;
  }

  @media (min-width: 768px) {
      .slider {
          flex: 1 0 0%;
      }

      .galery {
          flex: 0 0 auto;
      }
  }
</style>
