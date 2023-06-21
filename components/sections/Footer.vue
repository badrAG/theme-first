<template>
  <div>
    <si-app-loader placement="BEFORE_FOOTER"/>
    <div class="footer-bg footer-text-bg">
      <!-- Start footer Section -->
      <footer class="footer container">
        <div class="flex flex-wrap justify-between pt-8"  >
          <!-- About section  -->
          <div class="w-full md:w-auto md:flex-1">
              <!-- Store title -->
              <div class="mb-4 md:mb-2 py-2 rounded-full flex items-center justify-between transition-all ease-in-out delay-150 hover-bg-footer px-3 mx-1 cursor-pointer md:cursor-auto" @click="showContent">
                  <h4 class="text-xl md:text-3xl font-bold">{{ title }}</h4>
                <div class="md:hidden">
                  <fa class="text-base transform" :icon="['fa', 'chevron-down']" :class="[isContentVisible ? 'rotate-180 transition-all delay-150 ease-linear' : ''] "></fa>
                </div>
              </div>
              <!-- Store title -->
              <transition name="slide">
                <div class="md:block px-4 mb-4 md:mb-0" :class="isContentVisible? 'block':'hidden'">
                  <!-- Footer About -->
                      <div class="mb-2 text-base text-md-responsive font-normal" v-show="footer.about.length > 0">{{ footer.about }}</div>
                  <!-- Footer About -->
                  <!-- Contacts  -->
                  <div class="Contacts">
                    <p class="mb-3 flex items-center" v-show="footer.location.length > 0">
                      <fa class="text-xl font-normal icon translate" :icon="['fa', 'location-dot']"  ></fa>
                      <span class="mx-3 text-base text-md-responsive font-normal hover:underline">{{ footer.location }}</span>
                    </p>
                    <p class="mb-3 flex items-center" v-show="footer.gmail.length > 0">
                      <fa class="text-lg font-normal icon translate" :icon="['fa', 'envelope']"></fa>
                      <a class="mx-3 text-base text-md-responsive font-normal hover:underline" :href="'mail:'+footer.gmail">{{ footer.gmail }}</a>
                    </p>
                    <p class="flex items-center" v-show="footer.number.length > 0">
                      <fa class="text-lg font-normal icon translate" :icon="['fa', 'phone']"></fa>
                      <a class="mx-3 text-base text-md-responsive font-normal hover:underline" :href="'tel:'+footer.number">{{ footer.number }}</a>
                    </p>
                  </div>
                  <!-- Contacts  -->
                </div>
            </transition>
              <!-- Contacts  -->
          </div>
          <!-- ِAbout section -->
          <!-- menu1 -->
          <div class="categoty_menu w-full md:w-auto md:flex-1" v-show="menus.menu1_active">
            <div class="mb-4 py-2 rounded-full flex items-center justify-between transition-all ease-in-out delay-150 hover-bg-footer px-3 mx-1  cursor-pointer md:cursor-auto" @click="showMenu1">
              <h4 class="text-base font-bold">{{ menus.menu1_title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isMenu1Visible ? 'rotate-180 transition-all delay-150 ease-linear' : ''] "></fa>
              </div>
            </div>
            <div class="md:block px-4 mb-4 md:mb-0" :class="isMenu1Visible? 'block':'hidden'">
              <div v-if="menus.menu1">
                <div  v-for="(item,i) in menus.menu1.items" :key="i">
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
          <div class="Infomation_menu w-full md:w-auto md:flex-1" v-show="menus.menu2_active">
            <div class="mb-4 py-2 rounded-full flex items-center justify-between transition-all ease-in-out delay-150 hover-bg-footer px-3 mx-1  cursor-pointer md:cursor-auto" @click="showMenu2">
              <h4 class="text-base font-bold">{{ menus.menu2_title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isMenu2Visible ? 'rotate-180 transition-all delay-150 ease-linear' : ''] " ></fa>
              </div>
            </div>
            <div v-if="menus.menu2">
              <div class="md:block px-4 mb-4 md:mb-0" :class="isMenu2Visible? 'block':'hidden'">
                <div v-for="(item,i) in menus.menu2.items" :key="i">
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
          <div class="Infomation_menu w-full md:w-auto md:flex-1" v-show="menus.menu3_active">
            <div class="mb-4 py-2 rounded-full flex items-center justify-between transition-all ease-in-out delay-150 hover-bg-footer px-3 mx-1  cursor-pointer md:cursor-auto" @click="showMenu3">
              <h4 class="text-base font-bold">{{ menus.menu3_title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isMenu3Visible ? 'rotate-180 transition-all delay-150 ease-linear' : ''] " ></fa>
              </div>
            </div>
            <div class="md:block px-4 mb-4 md:mb-0" :class="isMenu3Visible? 'block':'hidden'">
              <div v-if="menus.menu3">
                <div v-for="(item,i) in menus.menu3.items" :key="i">
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
          <div class="payment_methods w-full md:w-auto md:flex-1">
            <div @click="showPaymentMethods" class="mb-4 py-2 rounded-full flex items-center justify-between transition-all ease-in-out delay-150 hover-bg-footer px-3 mx-1 cursor-pointer md:cursor-auto">
              <h4 class="text-base font-bold">{{ footer.methods.title }}</h4>
              <div class="md:hidden">
                  <fa  class="text-base transform"  :icon="['fa', 'chevron-down']" :class="[isPaymentMethodsVisible ? 'rotate-180 transition-all delay-150 ease-linear' : ''] "></fa>
              </div>
            </div>
            <div class="md:block px-4" :class="isPaymentMethodsVisible? 'block':'hidden'">
              <div class="payment_images flex flex-wrap">
                  <div v-for="item in methods.filter(m=>footer.methods[m.name])" :key="item.name" class="payments-bg w-15 h-8 mr-2 mb-2 flex rounded-sm">
                      <si-image  width="60" height="20" :src="item.image" :alt="item.name" class="h-full object-contain"/>
                  </div>
              </div>
            </div>
          </div>
          <!-- payment_methods -->
        </div>
        <!--  Social Media -->
        <div class="Social_Media pb-8 mt-2 md:mt-4">
          <h3 class="text-base font-bold mb-4 text-center">{{ footer.social_media.title }}</h3>
          <div class="flex items-center justify-center flex-wrap mx-2">
            <div v-for="item in socialMedia.filter(s=>footer.social_media[s.name])" :key="item.name" class="flex items-center justify-center p-2">
                <a class="h-full flex hover:opacity-60" :href="footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                    <fa class="text-2xl sm:mx-1 md:mx-2" :icon="['fab', item.name]"></fa>
                </a>
            </div>
          </div>
        </div>
        <!--  Social Media  -->
      </footer>
      <!-- End fotter Section -->
    </div>
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
        footer: this.$settings.sections.footer,
        menus: this.$settings.sections.footer.menus,
        year: new Date().getFullYear(),
        title: this.$settings.sections.footer.copyright.store_name,
        description: this.$settings.sections.footer.copyright.text,
        methods: [
                  {
                      name: 'visa',
                      image: 'https://storeino.b-cdn.net/site/Bazartheme/Bazar-Visa.png'
                  },
                  {
                      name: 'mastercard',
                      image: 'https://storeino.b-cdn.net/site/Bazartheme/Bazar-MasterCard.png'
                  },
                  {
                      name: 'transfer',
                      image: 'https://storeino.b-cdn.net/site/Bazartheme/Bazar-BankTransfer.png'
                  },
                  {
                      name: 'cash',
                      image: 'https://storeino.b-cdn.net/site/Bazartheme/Bazar-CashOnDelivery.png'
                  },
                  {
                      name: 'paypal',
                      image: 'https://storeino.b-cdn.net/site/Bazartheme/Bazar-PayPal.png'
                  },
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
      toggleVisibility(prop) {
        if (window.innerWidth <= 767) {
          this[prop] = !this[prop];
        }
      },
      showContent() {
        this.toggleVisibility('isContentVisible');
      },
      showMenu1() {
        this.toggleVisibility('isMenu1Visible');
      },
      showMenu2() {
        this.toggleVisibility('isMenu2Visible');
      },
      showMenu3() {
        this.toggleVisibility('isMenu3Visible');
      },
      showPaymentMethods() {
        this.toggleVisibility('isPaymentMethodsVisible');
      }
    },
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
