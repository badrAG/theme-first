<template>
    <div class="bg-white">
      <div class="container md:mt-6 mb-6">
        <!-- Loader -->
        <div v-if="loading" class="flex justify-center items-center ">
            <si-loader></si-loader>
        </div>
        <!-- Loader -->
        
          <!--  -->
          <div v-if="!loading && item" class="flex flex-wrap justify-between">

            <!-- Product id -->
            <meta itemprop="productID" :content="item._id" />
            <!-- Product id -->

                <!--  -->
                <div style="height: fit-content;"   class="w-full lg:w-2/3 lg:sticky lg:top-6">

                    <div class="flex flex-wrap">
                        
                        <div class="w-full slider md:mx-4">
                            <div v-show="visibleSlide === index" v-for="(image, index) in item.images" :key="index" :index="index" class="pb-4/5 relative overflow-hidden">
                                    <si-image width="400" height="400" class="product-image h-full w-full absolute inset-0  object-cover md:rounded-xl" @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name" />
                               
                                <button class="mx-2 absolute top-1/2 -left-0 transform -translate-y-1/2 p-3 md:p-3.5 bg-white transition-all ease-linear delay-150  rounded-full  hover:bg-gray-200" @click="prev">
                                    <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path>
                                    </svg>
                                </button>
                                <button class="mx-2 absolute top-1/2 -right-0 transform -translate-y-1/2 p-3 md:p-3.5 bg-white transition-all ease-linear delay-150 rounded-full hover:bg-gray-200" @click="next">
                                    <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path>
                                    </svg>
                                </button>

                                <div v-if="$settings.sections.products.add_to_wishlist.active">
                                    <button v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="bg-white rounded-full absolute z-10 top-0 right-0 m-2 p-3 md:p-3.5 transition-all ease-linear delay-150  hover:bg-gray-200">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs translate text-red align-middle"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                    </button>
                                    <button v-else @click="addToWishlist" title="Wishlist" class="bg-white rounded-full absolute z-10 top-0 right-0 m-2 p-3 md:p-3.5 transition-all ease-linear delay-150 hover:bg-gray-200">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs translate align-middle"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="galery relative md:w-14 lg:w-16 ml-4 overflow-hidden order-first">
                            <div class="absolute inset-0  scroll overflow-y-scroll">
                                <si-image  class="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer object-cover rounded-md mb-2" :class="visibleSlide == index ? 'opacity-100 border-2 border-black' : 'opacity-60'" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                            </div>
                        </div>
                    </div>

                    <div class="block md:hidden">
                        <div class="dots flex items-center  justify-center mx-3 mt-3 ">
                            <div class="mx-1" v-for="(image, index) in item.images" :key="index" >
                                <div class="h-2.5 w-2.5 rounded-full cursor-pointer" :class="visibleSlide == index ? 'bg-primary' : 'bg-gray-300'" @click="setImage(index)"></div>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                    <!--  -->

              <!-- Product content -->
              <div class="content-part w-full lg:w-1/3 px-2">
                  <div class="">
                      <div class="bg-white ">

                        <!--  Product Name -->
                        <h4 class="text-lg md:text-xl lg:text-2xl guard-cairo-font font-light mb-4 mx-2 mt-4 lg:mt-0">{{ item.name }}</h4>
                        <!--  Product Name -->

                        <!--  product name hidden-->
                        <meta itemprop="name" :content="item.name" />
                        <!--  product name hidden-->

                        <!-- Price  -->
                        <div class="flex justify-between items-center mb-4 mx-2">
                            <!-- Price -->
                            <si-product-price page="product-price" class="flex items-center" :type="'simple'" :price="price" :variants="[]"></si-product-price>
                            <!-- Price -->

                            <!-- Price -->
                            <!-- <si-product-price class="flex text-xl md:text-2xl " :type="item.type" :price="item.price" :variants="item.variants"></si-product-price> -->
                            <!-- Price -->

                            <!-- reviews -->
                            <div class="flex items-center justify-start" v-if="$settings.sections.product.reviews.active">
                                <div class="mb-1 flex">
                                    <span v-for="(star,i) in 5" :class="star <= item.review.rating ? 'text-yellow-500 ': 'text-black'" :key="i">
                                        <fa class="text-sm"  :icon="['fa', 'star']"></fa>
                                    </span>
                                </div>
                                <span class="text-md font-normal" key="count">({{ item.review.reviews.length }})</span>
                            </div>
                            <!-- reviews -->
                        </div>
                        <!-- Price -->
                        
                        <!-- short description -->
                        <p class="text-sm text-gr font-normal mb-2 mx-2">{{ item.description }}</p>
                        <!-- short description -->

                        <!-- variant -->
                        <si-product-variants class="flex mx-2" v-if="item.type=='variable'" :options="item.options" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                        <!-- variant -->

                        
                        <!-- product cart -->

                        <!-- product quantity -->
                        <div class="mx-2 mt-4">
                            <div>
                                <h2 class="capitalize text-md font-normal mb-2">{{ $settings.sections.product.quantity.text }}</h2>
                            </div>
                            <si-product-quantity @selected="quantitySelected" :quantity="quantity" page="product"></si-product-quantity>
                        </div>
                        <!-- product quantity -->

                        
                        <si-app-loader placement="BEFORE_ADD_TO_CART"/>
                        <!-- add to cart -->
                        <div class="mx-2 mt-6 mb-4">
                            <button v-if="$settings.sections.product.add_to_cart.active" @click="addToCart" class="text-base font-bold w-full flex ai-c justify-center addtocart-bg addtocart-text-bg   rounded-full p-3 px-5 click-effect scale hover:opacity-90">
                                <span>{{ $settings.sections.product.add_to_cart.text }}</span>
                            </button>
                        </div>
                        <!-- add to cart -->
                        <si-app-loader placement="AFTER_ADD_TO_CART"/>
                            

                        <si-app-loader placement="REPLACE_BUYNOW"/>
                        <!-- buy now -->
                        <div class="mx-2">
                            <button v-if="$settings.sections.product.buy_now.active" v-show="!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_BUYNOW') >= 0)" @click="buyNow" class="text-base font-bold w-full flex ai-c justify-center buynow-bg  buynow-text-bg  rounded-full p-3 px-5 click-effect scale hover:opacity-90">
                                <span>{{ $settings.sections.product.buy_now.text }}</span>
                            </button>
                        </div>
                        <!-- buy now -->

                      </div>

                        <!-- share products icons -->
                        <div class="mx-2" v-if="$settings.sections.product.share_buttons">
                          <div>
                              <h3 class="align-center whitespace-nowrap text-lg font-bold px-4 mb-3 mt-4">{{ $settings.sections.product.share_buttons.title }}</h3>
                          </div>
                          <div class="flex justify-center md:justify-start">
                              <div v-for="item in socialMedia.filter(s=>$settings.sections.product.share_buttons[s.name])" :key="item.name" class="m-2  flex items-center justify-center">
                                  <a class="h-full flex " :href="item.url" target="_blank" rel="noopener noreferrer">
                                    <fa class="text-3xl mx-2 hover:opacity-80" :icon="['fab', item.name]"></fa>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <!-- share products icons -->
                  </div>
              </div>
          </div>
          <!--  -->

            <!-- Desciption and Reviews -->
            <div v-if="!loading && item" class="mb-6 mt-10">
                <div class="flex justify-center items-center mb-4 mx-4">
                    <div   class="text-sm md:text-base font-bold cursor-pointer mx-2 py-1 px-4 transition ease-in delay-150 rounded-full " :class="Description == true? 'bg-primary text-white': 'hover:bg-gray-200'" @click="Description = true; Reviews = false">{{ $settings.sections.product.description.title }}</div>
                    <div v-if="$settings.sections.product.reviews.active"  class="text-sm md:text-base font-bold cursor-pointer mx-2 py-1 px-4 transition ease-in delay-150 rounded-full" :class="Reviews == true? 'bg-primary text-white': 'hover:bg-gray-200'" @click="Description = false; Reviews = true">{{ $settings.sections.product.reviews.title }}</div>
                </div>
                <!-- Description -->
                <div class="flex justify-center mx-4">
                    <div v-if="Description">
                        <div class="bg-white description font-normal leading-7 text-base w-full" id="description" v-html="item.html"></div>
                        <h2 v-if="item.html.length == 0" class="text-base font-normal" >{{ $settings.sections.product.description.title_empty }}</h2>
                    </div>
                </div>
                <!-- Description -->            
                <si-app-loader placement="AFTER_DESCRIPTION"/>
                <!-- reviews -->
                <div v-if="Reviews" class="reviews mx-2">
                    <div v-if="$settings.sections.product.reviews.active">
                        <sections-reviews :item="item"></sections-reviews>
                    </div>
                    <h2 v-if="item.review.reviews.length == 0" class="text-base font-normal flex justify-center mx-2" >{{ $settings.sections.product.reviews.empty_title }}</h2>
                </div>
                <!-- reviews -->
            </div>  
            <!-- Desciption and Reviews -->


          <!--  -->
          <div v-if="!loading && item" class="flex flex-col mt-3">
            <!-- upsells  -->
            <div v-if="item && $settings.sections.product.upsell.active" class="upsells">
                <sections-upsell :item="item.upsell"/>
            </div>
            <!-- upsells -->
            
            <!-- related Products  -->
            <div v-if="item && $settings.sections.product.related.active" class="related">
                <sections-related-products :item="item"/>
            </div>
            <!-- related Products  -->
          </div>
          <!--  -->
      </div>
    </div>
  </template>
  <script>
  export default {
      data() {
          return {
            Description: true,
            Reviews: false,
              visibleSlide: 0,
              direction:'',
              loading: true,
              item: null,
              image: null,
              tab: 'description',
              quantity: {},
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
              const { data } = await this.$storeino.products.get({ slug })
              this.item = data;
  
              this.$store.state.seo.title = (this.item.seo.title || this.item.name) + ' - ' + this.$settings.store_name;
              this.$store.state.seo.description = this.item.seo.description || this.item.description || this.$settings.store_description;
              this.$store.state.seo.keywords = this.item.seo.keywords.length > 0 ? this.item.seo.keywords || [] : this.$settings.store_keywords || [];
              if(this.item.images.length > 0){ this.$store.state.seo.image = this.item.images[0].src; }
              // New meta tags
              [ { hid: "product:price:amount", property: "product:price:amount", content: this.price.salePrice },
              { hid: "productID", itemprop: "productID", content: this.product && this.product ? this.product._id : 'productID' }
              ].forEach(meta=>{
                  const index = this.$store.state.seo.metaTags.findIndex(m=>m.hid === meta.hid);
                  if(index > -1){ this.$store.state.seo.metaTags.splice(index, 1, meta); }
                  this.$store.state.seo.metaTags.push(meta);
              });
              this.loading = false;
              this.quantity = this.item.quantity;
              // Set default image if exists
              if(this.item.images.length > 0) this.setImage(0);
              // Set default variant if exists
              if(this.item.type == 'variable' && this.item.variants.length > 0) this.variantSelected(this.item.variants[0]);
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
            })
                this.$tools.call('PAGE_VIEW', this.item);
              }
  
          }catch(e){
              // Redirect to error page if product not exists
              this.$nuxt.error({ statusCode: 404, message: 'product_not_found' })
          }
      },
      mounted() {
          console.log('item=====>',this.item);
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
      },
      computed: {
        slidesLen() {
            return this.item.images.length
        }
      }
      ,
      methods: {
          next(){
            if(this.visibleSlide >= this.slidesLen - 1 ){
                this.visibleSlide = 0
            }else {
                this.visibleSlide ++
            }
            this.direction = 'left'
          },
          prev() {
            if(this.visibleSlide <= 0 ){
                this.visibleSlide = this.slidesLen - 1
            }else {
                this.visibleSlide --
            }
            this.direction = 'right'
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
          },
          variantSelected(variant) {
              this.variant = variant;
              if(variant.imageId && this.item.images.length > 0){
                  let index = this.item.images.findIndex(i=>i._id == variant.imageId);
                  if(index == -1) index = 0;
                  this.image = this.item.images[index];
              }else if(this.item.images.length > 0){
                  this.image = this.item.images[0];
              }
              this.quantitySelected(this.item.quantity.value);
          },
          setImage(index){
            this.visibleSlide = index
            //   this.image = this.$tools.copy(this.item.images[index]);

          },
          setTab(tab){
              this.tab = tab;
              if(tab == 'reviews' && this.reviews.results.length == 0) this.getReviews();
          }
      },
  }
  </script>
  <style>
  .product-image {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><circle cx='15' cy='15' r='10' fill='white' stroke='black' stroke-width='2'/><line x1='15' y1='10' x2='15' y2='20' stroke='black' stroke-width='2'/><line x1='10' y1='15' x2='20' y2='15' stroke='black' stroke-width='2'/></svg>"), auto;
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
  