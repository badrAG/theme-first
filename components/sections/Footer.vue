  <template>
    <div class="footer-bg footer-text-bg">
      <si-app-loader placement="BEFORE_FOOTER"/>
      <!-- Start footer Section -->
      <footer class="footer container">

        <div class="flex flex-wrap justify-between pt-8">

          <!-- About section  -->
          <div class="w-full" :class="[menus.menu1_active || menus.menu2_active || menus.menu3_active ? menus.menu1_active && menus.menu2_active && menus.menu3_active ? 'md:w-1/5' : menus.menu1_active && !menus.menu2_active && !menus.menu3_active? 'md:w-1/3': !menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/3': !menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/3': menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/4': menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/4':  !menus.menu1_active && menus.menu2_active && menus.menu3_active? 'md:w-1/4':'' :'md:w-1/2']">
              <!-- Store title -->
              <div @click="showContent" class="mb-4 md:mb-2 py-2 rounded-full flex items-center justify-between transition-all delay-00 ease-linear hover:bg-gray-500 px-3 mx-1 md:hover:bg-transparent" >
                  <h4 class="text-xl md:text-3xl font-bold">{{ title }}</h4>
                <div class="md:hidden">
                  <fa class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isContentVisible ? 'rotate-180' : ''] "></fa>
                </div>
              </div>
              <!-- Store title -->
              <transition name="slide">
                <div class="md:block px-4 mb-4 md:mb-0" :class="isContentVisible? 'block':'hidden'">
                  <!-- Footer About -->
                      <div class="mb-2 text-base text-md-responsive font-normal">{{ footer.about }}</div>
                  <!-- Footer About -->
      
                  <!-- Contacts  -->
                  <div class="Contacts flex ">
                    <div>
                      <p class="mb-3 flex items-center">
                        <fa class="text-xl font-normal" :icon="['fa', 'location-dot']"  ></fa>
                        <span class="mx-3 text-base text-md-responsive font-normal hover:underline">{{ footer.location }}</span>
                      </p>
                      <p class="mb-3 flex items-center">
                        <fa class="text-lg font-normal" :icon="['fa', 'envelope']"></fa>
                        <a class="mx-3 text-base text-md-responsive font-normal hover:underline" :href="'mail:'+footer.gmail">{{ footer.gmail }}</a>
                      </p>
                      <p class="flex items-center"> 
                        <fa class="text-lg font-normal" :icon="['fa', 'phone']"></fa>
                        <a class="mx-3 text-base text-md-responsive font-normal hover:underline" :href="'tel:'+footer.number">{{ footer.number }}</a>
                      </p>
                    </div>
                  </div>
                  <!-- Contacts  -->
                </div>
            </transition>
              <!-- Contacts  -->
          </div> 
          <!-- ِAbout section -->

          <!-- menu1 --> 
          <div v-if="menus.menu1_active" class="categoty_menu w-full" :class="menus.menu1_active && !menus.menu2_active && !menus.menu3_active ? 'md:w-1/3' : menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/4': menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/4':  !menus.menu1_active && menus.menu2_active && menus.menu3_active? 'md:w-1/4':'md:w-1/5'">

            <div @click="showMenu1" class="mb-4 py-2 rounded-full flex items-center justify-between transition-all delay-00 ease-linear hover:bg-gray-500 px-3 mx-1 md:hover:bg-transparent">
              <h4 class="text-base font-bold">{{ menus.menu1_title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isMenu1Visible ? 'rotate-180' : ''] "></fa>
              </div>
            </div> 

            <div class="md:block px-4 mb-4 md:mb-0" :class="isMenu1Visible? 'block':'hidden'">
              <div v-if="menu1">
                <div  v-for="(item,i) in menu1.items" :key="i">
                      <div>
                          <h4 class="mb-2 text-base text-md-responsive font-normal hover:underline">
                              <router-link :to="item.url">{{item.text}}</router-link>
                          </h4>
                      </div>
                  </div>
              </div>
            </div>

          </div>
          <!-- menu1  -->
  
  
          <!-- menu2 -->
          <div v-if="menus.menu2_active" class="Infomation_menu w-full" :class="!menus.menu1_active && menus.menu2_active && !menus.menu3_active ? 'md:w-1/3' : menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/4': menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/4':  !menus.menu1_active && menus.menu2_active && menus.menu3_active? 'md:w-1/4':'md:w-1/5'">

            <div @click="showMenu2" class="mb-4 py-2 rounded-full flex items-center justify-between transition-all delay-00 ease-linear hover:bg-gray-500 px-3 mx-1 md:hover:bg-transparent">
              <h4 class="text-base font-bold">{{ menus.menu2_title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isMenu2Visible ? 'rotate-180' : ''] " ></fa>
              </div>
            </div> 

            <div v-if="menu2">
              <div class="md:block px-4 mb-4 md:mb-0" :class="isMenu2Visible? 'block':'hidden'">
                <div v-for="(item,i) in menu2.items" :key="i">
                    <div>
                        <h4 class="mb-2 text-base text-md-responsive font-normal hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
              </div>
            </div>

          </div>
          <!-- menu2 -->


          <!-- menu3 -->
          <div v-if="menus.menu3_active" class="Infomation_menu w-full" :class="!menus.menu1_active && !menus.menu2_active && menus.menu3_active ? 'md:w-1/3' : menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/4': menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/4':  !menus.menu1_active && menus.menu2_active && menus.menu3_active? 'md:w-1/4':'md:w-1/5'">
            <div @click="showMenu3" class="mb-4 py-2 rounded-full flex items-center justify-between transition-all delay-00 ease-linear hover:bg-gray-500 px-3 mx-1 md:hover:bg-transparent">
              <h4 class="text-base font-bold">{{ menus.menu3_title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isMenu3Visible ? 'rotate-180' : ''] " ></fa>
              </div>
            </div> 
            <div class="md:block px-4 mb-4 md:mb-0" :class="isMenu3Visible? 'block':'hidden'">
              <div v-if="menu3">
                <div v-for="(item,i) in menu3.items" :key="i">
                    <div>
                        <h4 class="mb-2 text-base text-md-responsive font-normal hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!-- menu3 -->

          <!-- payment_methods  -->
          <!-- style="filter: brightness(0) invert(1); " -->
          <div class="payment_methods w-full" :class="[menus.menu1_active || menus.menu2_active || menus.menu3_active ? menus.menu1_active && menus.menu2_active && menus.menu3_active ? 'md:w-1/5' : menus.menu1_active && !menus.menu2_active && !menus.menu3_active? 'md:w-1/3': !menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/3': !menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/3': menus.menu1_active && menus.menu2_active && !menus.menu3_active? 'md:w-1/4': menus.menu1_active && !menus.menu2_active && menus.menu3_active? 'md:w-1/4':  !menus.menu1_active && menus.menu2_active && menus.menu3_active? 'md:w-1/4':'' :'md:w-1/2']">
            <div @click="showPaymentMethods" class="mb-4 py-2 rounded-full flex items-center justify-between transition-all delay-00 ease-linear hover:bg-gray-500 px-3 mx-1 md:hover:bg-transparent">
              <h4 class="text-base font-bold">{{ footer.methods.title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isPaymentMethodsVisible ? 'rotate-180' : ''] "></fa>
              </div>
            </div> 
            <div class="md:block px-4" :class="isPaymentMethodsVisible? 'block':'hidden'">
              <div class="payment_images flex flex-wrap">
                  <div v-for="item in methods.filter(m=>$settings.sections.footer.methods[m.name])" :key="item.name" class="payement w-15 h-8 mr-2 mb-2 flex rounded-sm">
                      <si-image  width="60" height="20" :src="item.image" :alt="item.name" class="h-full object-contain"/>
                  </div>
              </div>
            </div>
          </div>
          <!-- payment_methods -->
        </div>

         <!--  Social Media -->
          <div class="Social_Media pb-8 mt-4">
            <h3 class="text-base font-bold mb-4 text-center">{{ footer.social_media.title }}</h3>
            <div class="flex items-center justify-center flex-wrap">
              <div v-for="item in socialMedia.filter(s=>footer.social_media[s.name])" :key="item.name" class="flex items-center justify-center p-2">
                  <a class="h-full flex hover:opacity-60" :href="footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                      <fa class="text-2xl mx-2" :icon="['fab', item.name]"></fa>
                  </a>
              </div>
            </div>
          </div>
        <!--  Social Media  -->
      </footer>
      <!-- End fotter Section -->
      <si-app-loader placement="AFTER_FOOTER"/>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        isContentVisible: true,
        isMenu1Visible: false,
        isMenu2Visible: false,
        isMenu3Visible: false,
        isPaymentMethodsVisible: false,
        menus: this.$settings.sections.footer.menus,
        menu1: this.$settings.sections.footer.menus.menu1,
        menu2: this.$settings.sections.footer.menus.menu2,
        menu3: this.$settings.sections.footer.menus.menu3,
        footer: this.$settings.sections.footer,
        year: new Date().getFullYear(),
        title: this.$settings.sections.footer.copyright.store_name,
        description: this.$settings.sections.footer.copyright.text,
        methods: [
                  {
                      name: 'visa',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113606418.png'
                  },
                  {
                      name: 'mastercard',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113605894.png'
                  },
                  {
                      name: 'transfer',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113606123.png'
                  },
                  {
                      name: 'cash',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113606556.png'
                  },
                  {
                      name: 'paypal',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676114299159.png'
                  },
                  {
                      name: 'cashplus',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113606066.png'
                  },
                  {
                      name: 'tasshilat',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113606571.png'
                  },
                  {
                      name: 'amanty',
                      image: 'https://storeno.b-cdn.net/stores/2-2023/1676113605624.png'
                  }
              ],
        socialMedia: [
                  {name: 'facebook',},
                  {name: 'twitter',},
                  {name: 'instagram',},
                  {name: 'youtube',},
                  {name: 'whatsapp',},
                  {name: 'linkedin',},
                  {name: 'snapchat',},
                  {name: 'tiktok',}
              ],    
      };
    },
    methods: {
    showContent() {
      if (window.innerWidth <= 767) {
        this.isContentVisible = !this.isContentVisible;
      }
    },
    showMenu1() {
      if (window.innerWidth <= 767) {
        this.isMenu1Visible= !this.isMenu1Visible;
      }
    },
    showMenu2() {
      if (window.innerWidth <= 767) {
        this.isMenu2Visible= !this.isMenu2Visible;
      }
    },
    showMenu3() {
      if (window.innerWidth <= 767) {
        this.isMenu3Visible= !this.isMenu3Visible;
      }
    },
    showPaymentMethods() {
      if (window.innerWidth <= 767) {
        this.isPaymentMethodsVisible= !this.isPaymentMethodsVisible;
      }
    }
  }
  };
  </script>
  
  
<style scoped>
.payement {
  background-color: var(--footer-text-col);
}

[dir="rtl"] .payement{
  margin-left: 0.5rem;
  margin-right: 0;
}
  .slide-enter-active, .slide-leave-active {
    transition: display .5s;
  }
  .slide-enter {
    transform: translateY(-100%);
  }
  .slide-enter-to {
    transform: translateY(0);
  }
  .slide-leave {
    transform: translateY(0);
  }
  .slide-leave-to {
    transform: translateY(-100%);
  }

  @media (min-width: 768px) {
    .text-md-responsive {
      font-size: 13px;
    }
  }
</style>
  