<template>
    <div class="bg-white">
      <div class="container md:mt-6 mb-6">
        <!--  -->
          <div v-if="loading" class="flex justify-center items-center ">
              <si-loader></si-loader>
          </div>
          <!--  -->
          <div class="flex flex-wrap justify-between " v-if="item">

            <!-- Product id -->
            <meta itemprop="productID" :content="item._id" />
            <!-- Product id -->

             <!-- Product images  -->
                <div class="image-part relative block md:inline-block w-3/5 overflow-hidden md:p-2" >

                  <!--  -->
                   <!-- product image collection -->
                    <div class="height-fix scroll hidden md:flex flex-col absolute overflow-y-auto" >
                        <div class="w-14 h-14 lg:w-16 lg:h-16"> 
                            <si-image  class="w-full h-full cursor-pointer object-cover rounded-md mb-2  " :class="visibleSlide == index ? 'opacity-100 border-2 border-black' : 'opacity-60'" v-for="(image, index) in item.images" @click="setImage(index)" :key="index" :src="image.src" :alt="`${item.name} - ${image.title}`"/>
                        </div>
                    </div>
                  <!-- product image collection -->

                  <!-- Slider -->
                    <div class="w-full">
                        <div class="flex relative justify-center items-center md:ml-16 lg:ml-20">

                            <div  class="height-fix" v-show="visibleSlide === index" v-for="(image, index) in item.images" :key="index" :index="index">   
                                <img class="w-full h-full object-cover md:rounded-xl" @click="$store.state.fullImage=image ? image.src : null" :src="image ? image.src : null " :alt="item.name">
                            </div>
                            
                            <button class="bg-white m-2 h-12 w-12 rounded-full absolute left-0 top-2/4 box-shadow-xs hover:bg-gray-100" @click="prev" >
                                <fa class="text-xl align-middle "  :icon="['fa', 'chevron-left']"></fa>
                            </button>
                            <button class="bg-white m-2 h-12 w-12 rounded-full absolute right-0 top-2/4 box-shadow-xs hover:bg-gray-100" @click="next" >
                                <fa class="text-xl align-middle"  :icon="['fa', 'chevron-right']"></fa>
                            </button>

                            <!-- wishlist icon -->
                            <div v-if="$settings.sections.products.add_to_wishlist.active">
                                <button v-if="$store.state.wishlist.find(i=>i._id==item._id)" @click="removeFromWishlist" title="Wishlist" class="bg-white rounded-full absolute z-10 top-0 right-0 m-2 p-3 box-shadow-xs hover:bg-gray-100">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs translate text-red-500 align-middle"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                    </button>
                                    <button v-else @click="addToWishlist" title="Wishlist" class="bg-white rounded-full absolute z-10 top-0 right-0 m-2 p-3 box-shadow-xs hover:bg-gray-100">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-xs translate align-middle"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
                                    </button>
                                </div>
                                <!-- wishlist icon -->
                            </div>
                        </div>
                    <!-- Slider -->

                </div>
            <!-- Product images -->

              <!-- Product content -->
              <div class="content-part w-2/5 p-2 md:pl-5 lg:pl-10">
                  <div class="">
                      <div class="bg-white ">

                        <!--  Product Name -->
                        <h4 class="text-lg md:text-xl lg:text-2xl guardian-font font-light">{{ item.name }}</h4>
                        <!--  Product Name -->

                        <!--  product name hidden-->
                        <meta itemprop="name" :content="item.name" />
                        <!--  product name hidden-->

                        <!-- Price  -->
                        <div class="flex justify-between items-center mt-1">
                            <!-- Price -->
                            <si-price class="flex items-center text-9xl" :type="'simple'" :price="price" :variants="[]"></si-price>
                            <!-- Price -->

                            <!-- Price -->
                            <!-- <si-product-price class="flex text-xl md:text-2xl " :type="item.type" :price="item.price" :variants="item.variants"></si-product-price> -->
                            <!-- Price -->

                            <!-- reviews -->
                            <div class="flex items-center justify-start mb-2" v-if="$settings.sections.product.reviews.active">
                                <div class="mb-1 flex">
                                    <span v-for="(star,i) in 5" :class="star <= item.review.rating ? 'text-yellow-500 ': 'text-black'" :key="i">
                                        <fa class="text-sm"  :icon="['fa', 'star']"></fa>
                                    </span>
                                </div>
                                <span class="text-sm" key="count">({{ item.review.reviews.length }})</span>
                            </div>
                            <!-- reviews -->
                        </div>
                        <!-- Price -->
                        
                        <!-- short description -->
                        <p class="text-base font-normal mt-1">{{ item.description }}</p>
                        <!-- short description -->

                        <!-- variant -->
                        <si-product-variants class="flex mt-3" v-if="item.type=='variable'" :options="item.options" :variants="item.variants" @selected="variantSelected"></si-product-variants>
                        <!-- variant -->

                        
                        <!-- product cart -->
                            <!-- product quantity -->
                            <div class="flex justify-center mt-3">
                                <si-product-quantity @selected="quantitySelected" :quantity="quantity"></si-product-quantity>
                            </div>
                            <!-- product quantity -->
                            
                            <si-app-loader placement="BEFORE_ADD_TO_CART"/>
                            <!-- add to cart -->
                            <button v-if="$settings.sections.product.add_to_cart.active" @click="addToCart" class="rounded-full my-5 text-lg w-full p-2.5 px-5 addtocart-bg addtocart-text-bg  click-effect hover:opacity-80">
                                <span>{{ $settings.sections.product.add_to_cart.text }}</span>
                            </button>
                            <!-- add to cart -->

                            <!-- buy now -->
                            <button v-if="$settings.sections.product.buy_now.active" v-show="!$store.state.apps.find(a=>a.placement.indexOf('REPLACE_BUYNOW') >= 0)" @click="buyNow" class="w-full flex ai-c justify-center buynow-bg  buynow-text-bg  rounded-full text-lg p-2.5 px-5 click-effect hover:opacity-80">
                                <!-- <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6 h-6 translate"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg> -->
                                <span>&ensp;</span>
                                <span class="w-full">{{ $settings.sections.product.buy_now.text }}</span>
                            </button>
                            <!-- buy now -->
                            <si-app-loader placement="REPLACE_BUYNOW"/>
                            <si-app-loader placement="AFTER_ADD_TO_CART"/>
                        <!-- product cart -->

                      </div>

                        <!-- share products icons -->
                        <div class="bg-white mt-4" v-if="$settings.sections.product.share_buttons">
                          <div class="flex items-center justify-center">
                              <h3 class="whitespace-nowrap text-lg font-bold px-4">{{ $settings.sections.product.share_buttons.title }}</h3>
                          </div>
                          <div class="flex justify-center">
                              <div v-for="item in socialMedia.filter(s=>$settings.sections.product.share_buttons[s.name])" :key="item.name" class="m-2 flex items-center justify-center">
                                  <a class="h-full flex hover:opacity-80" :href="item.url" target="_blank" rel="noopener noreferrer">
                                    <fa class="text-3xl mx-2" :icon="['fab', item.name]"></fa>
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
            <div class="my-4">
                <div class="flex justify-center items-center mb-4">
                    <div  class="text-base font-bold cursor-pointer mx-2 p-2 px-4 transition ease-in delay-150 rounded-full " :class="Description == true? 'bg-gray-100': 'hover:bg-gray-200'" @click="Description = true; Reviews = false">{{ $settings.sections.product.description.title }}</div>
                    <div  class="text-base font-bold cursor-pointer mx-2 p-2 px-4 transition ease-in delay-150 rounded-full" :class="Reviews == true? 'bg-gray-100': 'hover:bg-gray-200'" @click="Description = false; Reviews = true">{{ $settings.sections.product.reviews.title }}</div>
                </div>
                <!-- Description -->
                <div class="flex justify-center">
                    <div  v-if="item && Description" class=" bg-white description font-normal leading-7 text-base w-full md:w-4/5 p-2" id="description" v-html="item.html"></div>
                </div>
                <!-- Description -->            
                <si-app-loader placement="AFTER_DESCRIPTION"/>
                <!-- reviews -->
                <div v-if="item && $settings.sections.product.reviews.active && Reviews" class="reviews">
                    <sections-reviews :item="item"></sections-reviews>
                </div>
                <!-- reviews -->
            </div>  
            <!-- Desciption and Reviews -->


          <!--  -->
          <div class="flex flex-col mt-3">
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
  .height-auto {
    max-height: 600px;
    height: auto;
  }

  .height-fix {
    height: 600px;
  }


@media (min-width:1200px) and (max-width:1250px) { .height-fix {height: 580px;}}
@media (min-width:1150px) and (max-width:1200px) { .height-fix {height: 560px;}}
@media (min-width:1100px) and (max-width:1150px) { .height-fix {height: 540px;}}
@media (min-width:1050px) and (max-width:1100px) { .height-fix {height: 520px;}}
@media (min-width:1000px) and (max-width:1050px) { .height-fix {height: 500px;}}
@media (min-width:950px) and (max-width:1000px) { .height-fix {height: 480px;}}
@media (min-width:900px) and (max-width:950px) { .height-fix {height: 460px;}}
@media only screen and (max-width: 900px) {.image-part {width: 100%;}.content-part {width: 100%;}}
@media (min-width:850px) and (max-width:900px) { .height-fix {height: 580px;}}
@media (min-width:800px) and (max-width:850px) { .height-fix {height: 560px;}}
@media (min-width:750px) and (max-width:800px) { .height-fix {height: 540px;}}
@media (min-width:700px) and (max-width:750px) { .height-fix {height: 520px;}}
@media (min-width:650px) and (max-width:700px) { .height-fix {height: 500px;}}
@media (min-width:600px) and (max-width:650px) { .height-fix {height: 480px;}}
@media (min-width:550px) and (max-width:600px) { .height-fix {height: 460px;}}
@media (min-width:500px) and (max-width:550px) { .height-fix {height: 440px;}}
@media (min-width:450px) and (max-width:500px) { .height-fix {height: 420px;}}
@media (min-width:400px) and (max-width:450px) { .height-fix {height: 400px;}}
@media (min-width:350px) and (max-width:400px) { .height-fix {height: 380px;}}
@media (min-width:300px) and (max-width:350px) { .height-fix {height: 360px;}}
@media (min-width:250px) and (max-width:300px) { .height-fix {height: 340px;}}
@media (min-width:200px) and (max-width:250px) { .height-fix {height: 320px;}}
@media only screen and (max-width: 200px) {.height-fix {height: 300px;}}
  </style>
  