<template>
    <div class="bg-white country-blocker-app">
        <!-- Pop-Up Placment -->
        <si-app-loader placement="PRODUCT_PAGE" />
        <!-- Pop-Up Placment -->
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
                            <button v-if="item.images.length > 1" class="absolute p-3 mx-2 transition-all ease-linear delay-150 transform -translate-y-1/2 bg-white rounded-full box-shadow-xs md:mx-3 top-1/2 -left-0 md:p-4 hover-bg" @click="prev">
                                <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path>
                                </svg>
                            </button>
                            <button v-if="item.images.length > 1" class="absolute p-3 mx-2 transition-all ease-linear delay-150 transform -translate-y-1/2 bg-white rounded-full box-shadow-xs md:mx-3 top-1/2 -right-0 md:p-4 hover-bg" @click="next">
                                <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path>
                                </svg>
                            </button>
                            <div v-if="$settings.sections.products.add_to_wishlist.active">
                                <button v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="absolute top-0 right-0 z-10 p-3 m-2 transition-all ease-linear delay-150 bg-white rounded-full box-shadow-xs md:m-3 md:p-4 hover-bg">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs align-middle translate text-red"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                </button>
                                <button v-else @click="addToWishlist" title="Wishlist" class="absolute top-0 right-0 z-10 p-3 m-2 transition-all ease-linear delay-150 bg-white rounded-full box-shadow-xs md:m-3 md:p-4 hover-bg">
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
                        <div class="items-center hidden gap-4 md:flex md:gap-6 flex-2">
                            <si-image class="object-cover rounded-sm cursor-pointer w-14 h-14" v-show="visibleSlide === index" v-for="(image, index) in item.images" :key="index" :index="index" @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name" />
                            <h4 class="text-xl tle-pr font-medium truncate guard-cairo-font">{{ item.name.length > 40 ? item.name.slice(0, 40) + '...' : item.name }}</h4>
                        </div>
                        <!--  Product Name -->
                        <!-- Price -->
                        <div class="hidden md:block flex-1">
                            <div class="flex items-center justify-center">
                                <si-product-price class="text-base" :type="'simple'" :price="price" :variants="[]"></si-product-price>
                            </div>
                        </div>
                        <!-- Price -->
                        <!-- product-quantity -->
                        <div class="flex-1 product-quantity" v-if="$settings.sections.product.quantity.active != null ? $settings.sections.product.quantity.active : true">
                            <si-product-quantity @selected="quantitySelected" :quantity="quantity" page="product"></si-product-quantity>
                        </div>
                        <!-- product-quantity -->
                        <!-- add to cart -->
                        <div class="flex-1" v-show="!outofstock">
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
                        <!-- Out Of Stock -->
                        <div class="flex-1" v-show="outofstock">
                            <button class="flex items-center justify-center w-full h-12 px-5 text-base font-bold rounded-full addtocart-bg addtocart-text-bg click-effect scale hover:opacity-90">
                                <span>{{ $settings.sections.product.out_of_stock ? $settings.sections.product.out_of_stock.text : 'Out Of Stock' }}</span>
                            </button>
                        </div>
                        <!-- Out Of Stock -->
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
                                <div class="flex gap-1 mb-1">
                                    <span v-for="(star,i) in 5" :class="star <= item.review.rating ? 'text-yellow-500 ': 'text-black'" :key="i">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" fill="currentColor"></path></svg>
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
                        <div v-show="!$settings.checkout_required_fields.show_variant_on_checkout">
                            <si-product-variants class="flex mx-2" v-if="item.type=='variable'" :options="item.options" :images="item.images" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                        </div>
                        <!-- variant -->
                        <!-- product cart -->
                        <!-- product quantity -->
                        <div class="product-quantity" v-show="!outofstock">
                            <div class="mx-2 mt-" v-if="$settings.sections.product.quantity.active != null ? $settings.sections.product.quantity.active : true ">
                                <div>
                                    <h2 class="mb-2 font-normal capitalize text-md">{{ $settings.sections.product.quantity.text }}</h2>
                                </div>
                                <si-product-quantity @selected="quantitySelected" :quantity="quantity" page="product"></si-product-quantity>
                            </div>
                        </div>
                        <!-- product quantity -->
                        <si-app-loader placement="BEFORE_ADD_TO_CART"/>
                        <!-- Out Of Stock -->
                        <div class="add-to-cart" v-show="outofstock">
                            <div class="mx-2 mt-6 mb-4">
                                <button  class="flex items-center justify-center w-full h-12 px-5 text-base font-bold rounded-full addtocart-bg addtocart-text-bg hover:opacity-90">
                                    <span>{{ $settings.sections.product.out_of_stock ? $settings.sections.product.out_of_stock.text : 'Out Of Stock' }}</span>
                                </button>
                            </div>
                        </div>
                        <!-- Out Of Stock -->
                        <!-- add to cart -->
                        <div class="add-to-cart" v-show="!outofstock">
                            <div class="mx-2 mt-6 mb-4" v-if="$settings.sections.product.add_to_cart.active">
                                <button @click="addToCart" class="flex items-center justify-center w-full h-12 px-5 text-base font-bold rounded-full addtocart-bg addtocart-text-bg click-effect scale hover:opacity-90">
                                    <span>{{ $settings.sections.product.add_to_cart.text }}</span>
                                </button>
                            </div>
                        </div>
                        <!-- add to cart -->
                        <si-app-loader placement="AFTER_ADD_TO_CART"/>
                        <si-app-loader placement="BEFORE_BUYNOW"/>
                        <!-- buy now -->
                        <div class="express-checkout" v-show="!outofstock">
                            <div id="chckout" class="mx-2 mt-6" v-if="$settings.sections.product.buy_now.active">
                                <button v-show="(!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_BUYNOW') >= 0))" @click="buyNow" class="flex justify-center w-full p-3 px-5 text-base font-bold rounded-full ai-c buynow-bg buynow-text-bg click-effect scale hover:opacity-90">
                                    <span>{{ $settings.sections.product.buy_now.text }}</span>
                                </button>
                                <si-app-loader placement="REPLACE_BUYNOW"/>
                            </div>
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
                                        <svg class="w-6 h-6 mx-2 lg:w-8 lg:h-8 hover:opacity-80" aria-label="social media icons" fill-rule="evenodd" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
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
                <!-- upsells  -->
                <div class="mt-10" v-if="$settings.sections.product.upsell.active">
                    <div class="upsells">
                        <sections-upsell :item="item.upsell"/>
                    </div>
                </div>
                <!-- upsells -->
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
                            <div class="text-sm font-normal description lg-description text-info" id="description" v-html="item.html"></div>
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
                <!-- Related Products -->
                <div class="mt-9" v-if="$settings.sections.product.related.active">
                    <div class="related">
                        <sections-related-products :item="item"/>
                    </div>
                </div>
                <!-- related Products  -->
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
            showVariantDiv: false,
            showVarianteModal: false,
            variant: null,
            price: { salePrice: 0, comparePrice: 0 },
            socialMedia: [
                {
                    name: "whatsapp",
                    url: "https://api.whatsapp.com/send?text={title}%20{url}",
                    image: 'M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z'
                },
                {
                    name: "facebook",
                    url: "https://www.facebook.com/sharer.php?u={url}",
                    image: 'M15.1742424,5.3203125 L17,5.3203125 L17,2.140625 C16.6856061,2.09765625 15.6022727,2 14.3409091,2 C11.7083333,2 9.90530303,3.65625 9.90530303,6.69921875 L9.90530303,9.5 L7,9.5 L7,13.0546875 L9.90530303,13.0546875 L9.90530303,22 L13.4659091,22 L13.4659091,13.0546875 L16.2537879,13.0546875 L16.6969697,9.5 L13.4659091,9.5 L13.4659091,7.05078125 C13.4659091,6.0234375 13.7424242,5.3203125 15.1742424,5.3203125 Z'
                },
                {
                    name: "twitter",
                    url: "https://twitter.com/intent/tweet?url={url}&text={title}",
                    image: 'M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z'
                },
                {
                    name: "linkedin",
                    url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
                    image: 'M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z'
                }
            ]
        }
    },
    async fetch() {
        // Get Product Slug From Route
        const { slug } = this.$route.params;
        try {
            // Get Product Data
            this.loading = true;
            const { data } = await this.$storeino.products.get({ slug })
            this.item = data;
            this.loading = false;
            this.quantity = this.item.quantity;

            // Set default image if exists
            if (this.item.images.length > 0) {
                this.setImage(0);
            } 

            // Set default variant if exists
            if (this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
            if (this.item.type == 'simple') {
                // Check outof stock
                if (!this.item.outStock.disabled && this.item.quantity.instock <= 0) {
                    this.outofstock = true;
                }
            }

            // Set default quantity
            this.quantitySelected(this.quantity.default);

            // Generate share urls
            const url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.name).replace(/\{url\}/gi, url);
            }

            // Pixels
            if (!process.server) {
                // All Events
                this.$tools.call('PAGE_VIEW', this.item);
                // Fb PageView
                this.$storeino.fbpx('PageView');
                // Fb ViewContent
                this.$storeino.fbpx('ViewContent', {
                    content_name: this.item.name ? this.item.name : '',
                    content_ids: [this.item._id],
                    content_type: "product",
                    value: this.item.price.salePrice,
                    currency: this.$store.state.currency.code
                });
            }
            
        } catch (err) {
            this.$sentry.captureException(err);
            this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
        }
    },
    mounted() {
        // All Pixels
        if (this.item) {
            // PageView Events
            this.$tools.call('PAGE_VIEW', this.item);
        }

        // Dispatch Event
        window.addEventListener("APP_LOADER", () => {
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

        // Facebook Pixel
        if (this.item) {
            // Fb PageView
            this.$storeino.fbpx('PageView');
            // Fb ViewContent
            this.$storeino.fbpx('ViewContent', {
                content_name: this.item.name ? this.item.name : '',
                content_ids: [this.item._id],
                content_type: "product",
                value: this.item.price.salePrice,
                currency: this.$store.state.currency.code
            })
        }

        // Create Iframe
        if (this.item) {
            const iframes = document.querySelectorAll('iframe')
            for (const ifram of iframes) {
                const parent = ifram.parentNode
                if (!parent.classList.contains('video-wrapper')) {
                    const div = document.createElement("div");
                    ifram.after(div)
                    div.classList.add('video-wrapper');
                    ifram.style.width = null;
                    ifram.style.height = null;
                    ifram.setAttribute('width', '');
                    ifram.setAttribute('height', '');
                    div.appendChild(ifram)
                }
            }
        }

        //show showStickyAddToCart
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
        // Return Images Length
        slidesLen() {
            return this.item.images.length
        }
    },
    methods: {
        seo() {
            if (!this.item) { return; }
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
                    { hid: "og:site_name", property: "og:site_name", content: this.$settings ? this.$settings.store_name : "Online Store" },
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
        ShowDescription() {
            this.desc = true; this.rev = false
        },
        ShowReviews() {
            this.desc = false; this.rev = true
        },
        foundApp(placement) {
            if (this.$store.state.apps.find(a => a.name === "PIN REVIEW")) {
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
        next() {
            if (this.visibleSlide >= this.slidesLen - 1) {
                this.image = this.$tools.copy(this.item.images[this.visibleSlide = 0]);
            } else {
                this.image = this.$tools.copy(this.item.images[this.visibleSlide = this.visibleSlide + 1]);
            }
        },
        prev() {
            if (this.visibleSlide <= 0) {
                this.image = this.$tools.copy(this.item.images[this.visibleSlide = this.slidesLen - 1]);
            } else {
                this.image = this.$tools.copy(this.item.images[this.visibleSlide = this.visibleSlide - 1]);
            }
        },
        t(key) {
            const langs = {
                price_title_products: {
                    EN: "Price:	",
                    FR: "Prix:	",
                    AR: "السعر: ",
                    ES: "Prezo: ",
                    PT: "Preço: "
                },
                check_choice: {
                    EN: "Please check your choice :",
                    FR: "Veuillez vérifier votre choix:	",
                    AR: "يرجى تأكيد الإختيار: ",
                    ES: "Por favor marque su elección: ",
                    PT: "Por favor, verifique a sua escolha: "
                },
                can_change_choice: {
                    EN: "You can change your choice :",
                    FR: "Vous pouvez modifier votre choix :	",
                    AR: "يمكنك تغيير اختيارك: ",
                    ES: "Puede cambiar su elección: ",
                    PT: "Você pode alterar sua escolha: "
                }
            }
            return langs[key] && langs[key][this.$store.state.language.code] || '';
        },
        addToCart() {
            // add to cart event
            this.$tools.call('ADD_TO_CART', {
                _id: this.item._id,
                quantity: this.quantity.value,
                price: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null
            });

            // Fbx Add to cart 
            this.$storeino.fbpx('AddToCart', {
                content_name: this.item.name,
                content_ids: [this.item._id],
                content_type: "product",
                value: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                currency: this.$store.state.currency && this.$store.state.currency.code ? this.$store.state.currency.code : "USD"
            })

            // Add to cart to checkout
            if (this.$settings.sections.products.add_to_cart_to_checkout) {
                setTimeout(() => {
                    window.location.href = '/checkout2';
                }, 500);
            }

            // Tost
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
        },
        addToWishlist() {
            this.$tools.call('ADD_TO_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
        },
        removeFromWishlist() {
            this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
        },
        buyNow() {
            // Add to cart and redirect to checkout
            if (this.$settings.checkout_required_fields.show_variante_reminder && this.item.type == 'variable' && !this.showVarianteModal) {
                this.showVarianteModal = true
                return;
            }
            this.addToCart();

            // Redirect To Checkout
            setTimeout(() => {
                window.location.href = '/checkout2';
            }, 500);
        },
        quantitySelected(quantity) {
            this.item.quantity.value = quantity;
            if (this.variant) {
                this.price.salePrice = this.variant.price.salePrice * quantity;
                this.price.comparePrice = this.variant.price.comparePrice * quantity;
            } else {
                this.price.salePrice = this.item.price.salePrice * quantity;
                this.price.comparePrice = this.item.price.comparePrice * quantity;
            }
            if (!process.server) {
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
            if (variant.imageId && this.item.images.length > 0) {
                let index = this.item.images.findIndex(i => i._id == variant.imageId);
                if (index == -1) index = 0;
                this.visibleSlide = index;
                this.image = this.item.images[index];
            } else if (this.item.images.length > 0) {
                this.visibleSlide = 0
                this.image = this.item.images[0];
            }
            // Check outof stock
            if (!this.item.outStock.disabled && this.variant.quantity.instock <= 0) {
                this.outofstock = true;
            } else {
                this.outofstock = false;
            }
            this.quantitySelected(this.item.quantity.value);
        },
        setImage(index) {
            this.visibleSlide = index
            this.image = this.$tools.copy(this.item.images[index]);
        }
    }
}
</script>

<style scoped>
.lg-description table td, th {
  border: 1px solid #dddddd;
}

.flex-2 {
    flex: 2;
}

.text-info {
    line-height: 36px;
    display: block;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.text-info> :first-child {
    white-space: break-spaces;
}

.description * {
    max-width: 100% !important;
}

.description pre {
    white-space: normal !important;
}

.description p {
    display: block !important;
}

[dir="rtl"] .dots {
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

[dir='rtl'] .galery {
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
