<template>
  <div>
    <si-app-loader placement="BEFORE_FOOTER"/>
    <div class="footer-bg footer-text-bg">
      <!-- Start footer Section -->
      <footer class="container footer">
        <div class="flex flex-wrap justify-between pt-8"  >
          <!-- About section  -->
          <div class="w-full md:w-auto md:flex-1">
              <!-- Store title -->
              <div class="flex items-center justify-between px-3 py-2 mx-1 mb-4 transition-all ease-in-out delay-150 rounded-full cursor-pointer md:mb-2 hover-bg-footer md:cursor-auto" @click="showContent">
                  <h4 class="text-xl font-bold md:text-3xl">{{ title }}</h4>
                <div class="md:hidden">
                  <svg class="w-6 h-6 transform" :class="[isContentVisible ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <!-- Store title -->
              <transition name="slide">
                <div class="px-4 mb-4 md:block md:mb-0" :class="isContentVisible? 'block':'hidden'">
                  <!-- Footer About -->
                      <div class="mb-2 text-base font-normal text-md-responsive" v-show="footer.about.length > 0">{{ footer.about }}</div>
                  <!-- Footer About -->
                  <!-- Contacts  -->
                  <div class="Contacts">
                    <p class="flex items-center mb-3" v-show="footer.location.length > 0">
                      <svg class="w-5 h-5 icon translate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Layer_1" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                        <path fill="currentColor" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24  C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24  C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                      </svg>
                      <span class="mx-3 text-base font-normal text-md-responsive hover:underline">{{ footer.location }}</span>
                    </p>
                    <p class="flex items-center mb-3" v-show="footer.gmail.length > 0">
                      <svg class="w-5 h-5 icon translate" xmlns="http://www.w3.org/2000/svg" fill="curr" width="20px" height="20px" viewBox="0 0 512 512">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" fill="currentColor"/>
                      </svg>
                      <a class="mx-3 text-base font-normal text-md-responsive hover:underline" :href="'mail:'+footer.gmail">{{ footer.gmail }}</a>
                    </p>
                    <p class="flex items-center" v-show="footer.number.length > 0">
                      <svg class="w-6 h-6 icon translate"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="currentColor"/>
                      </svg>
                      <a class="mx-3 text-base font-normal text-md-responsive hover:underline" :href="'tel:'+footer.number">{{ footer.number }}</a>
                    </p>
                  </div>
                  <!-- Contacts  -->
                </div>
            </transition>
              <!-- Contacts  -->
          </div>
          <!-- ِAbout section -->
          <!-- menu1 -->
          <div class="w-full categoty_menu md:w-auto md:flex-1" v-show="menus.menu1_active">
            <div class="flex items-center justify-between px-3 py-2 mx-1 mb-4 transition-all ease-in-out delay-150 rounded-full cursor-pointer hover-bg-footer md:cursor-auto" @click="showMenu1">
              <h4 class="text-base font-bold">{{ menus.menu1_title }}</h4>
              <div class="md:hidden">
                <svg class="w-6 h-6 transform" :class="[isMenu1Visible ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="px-4 mb-4 md:block md:mb-0" :class="isMenu1Visible? 'block':'hidden'">
              <div v-if="menus.menu1">
                <div  v-for="(item,i) in menus.menu1.items" :key="i">
                  <div>
                      <h4 class="mb-2 text-base font-normal text-md-responsive hover:underline">
                          <router-link :to="item.url">{{item.text}}</router-link>
                      </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- menu1  -->
          <!-- menu2 -->
          <div class="w-full Infomation_menu md:w-auto md:flex-1" v-show="menus.menu2_active">
            <div class="flex items-center justify-between px-3 py-2 mx-1 mb-4 transition-all ease-in-out delay-150 rounded-full cursor-pointer hover-bg-footer md:cursor-auto" @click="showMenu2">
              <h4 class="text-base font-bold">{{ menus.menu2_title }}</h4>
              <div class="md:hidden">
                <svg class="w-6 h-6 transform" :class="[isMenu2Visible ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div v-if="menus.menu2">
              <div class="px-4 mb-4 md:block md:mb-0" :class="isMenu2Visible? 'block':'hidden'">
                <div v-for="(item,i) in menus.menu2.items" :key="i">
                    <div>
                        <h4 class="mb-2 text-base font-normal text-md-responsive hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!-- menu2 -->
          <!-- menu3 -->
          <div class="w-full Infomation_menu md:w-auto md:flex-1" v-show="menus.menu3_active">
            <div class="flex items-center justify-between px-3 py-2 mx-1 mb-4 transition-all ease-in-out delay-150 rounded-full cursor-pointer hover-bg-footer md:cursor-auto" @click="showMenu3">
              <h4 class="text-base font-bold">{{ menus.menu3_title }}</h4>
              <div class="md:hidden">
                <svg class="w-6 h-6 transform" :class="[isMenu3Visible ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="px-4 mb-4 md:block md:mb-0" :class="isMenu3Visible? 'block':'hidden'">
              <div v-if="menus.menu3">
                <div v-for="(item,i) in menus.menu3.items" :key="i">
                    <div>
                        <h4 class="mb-2 text-base font-normal text-md-responsive hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <!-- menu3 -->
          <!-- payment_methods  -->
          <div class="w-full payment_methods md:w-auto md:flex-1" v-if="methods.filter(m=>footer.methods[m.name]).length > 0">
            <div @click="showPaymentMethods" class="flex items-center justify-between px-3 py-2 mx-1 mb-4 transition-all ease-in-out delay-150 rounded-full cursor-pointer hover-bg-footer md:cursor-auto">
              <h4 class="text-base font-bold">{{ footer.methods.title }}</h4>
              <div class="md:hidden">
                <svg class="w-6 h-6 transform" :class="[isPaymentMethodsVisible ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="px-4 md:block" :class="isPaymentMethodsVisible? 'block':'hidden'">
              <div class="flex flex-wrap payment_images">
                  <div v-for="item in methods.filter(m=>footer.methods[m.name])" :key="item.name" class="flex h-8 mb-2 mr-2 rounded-sm payments-bg w-15">
                      <si-image  width="60" height="20" :src="item.image" :alt="item.name" class="object-contain h-full"/>
                  </div>
              </div>
            </div>
          </div>
          <!-- payment_methods -->
        </div>
        <!--  Social Media -->
        <div class="pb-8 mt-2 Social_Media md:mt-4">
          <h3 class="mb-4 text-base font-bold text-center">{{ footer.social_media.title }}</h3>
          <div class="flex flex-wrap items-center justify-center mx-2">
            <div v-for="item in socialMedia.filter(s=>footer.social_media[s.name])" :key="item.name" class="flex items-center justify-center p-2">
                <a class="flex h-full hover:opacity-60" :href="footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                    <svg aria-label="social media icons" class="w-7 h-7 sm:mx-1 md:mx-2" fill-rule="evenodd" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
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
        {
          name: 'facebook',
          image: 'M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z',
        },
        {
          name: 'twitter',
          image: 'M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z'
        },
        {
          name: 'instagram',
          image: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z'
        },
        {
          name: 'youtube',
          image: 'M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z',
        },
        {
          name: 'whatsapp',
          image: 'M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z'
        },
        {
          name: 'linkedin',
          image: 'M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z'
        },
        {
          name: 'snapchat',
          image: 'M12.166 3c.796 0 3.495.223 4.769 3.073.426.959.324 2.589.24 3.898l-.002.047c-.011.146-.018.278-.024.41a.62.62 0 0 0 .322.072c.241-.013.53-.096.831-.241a.81.81 0 0 1 .373-.084c.146 0 .289.023.409.072.361.12.59.385.59.674.013.361-.313.675-.975.939-.071.023-.169.061-.276.096-.363.109-.917.289-1.073.651-.072.181-.049.421.098.697l.012.013c.048.109 1.228 2.795 3.854 3.229a.401.401 0 0 1 .337.409c0 .06-.013.119-.036.181-.193.457-1.023.795-2.53 1.021-.047.073-.096.302-.132.459-.022.144-.06.289-.107.444-.061.218-.217.325-.446.325h-.024a2.45 2.45 0 0 1-.433-.059 4.799 4.799 0 0 0-1.024-.108c-.24 0-.48.012-.732.06-.483.084-.904.373-1.386.71-.687.481-1.469 1.036-2.649 1.036-.048 0-.096-.012-.146-.012h-.119c-1.181 0-1.951-.543-2.637-1.036-.481-.338-.89-.626-1.373-.711a5.507 5.507 0 0 0-.745-.06c-.435 0-.771.072-1.023.12-.17.035-.314.059-.435.059a.45.45 0 0 1-.47-.337c-.048-.154-.071-.313-.107-.456-.038-.146-.085-.396-.133-.458-1.543-.179-2.373-.517-2.565-.986a.473.473 0 0 1-.044-.181.398.398 0 0 1 .337-.409c2.625-.434 3.805-3.119 3.854-3.232l.013-.023c.145-.277.18-.52.096-.699-.156-.349-.711-.529-1.07-.65a1.759 1.759 0 0 1-.279-.096c-.89-.35-1.011-.748-.962-1.024.072-.384.541-.637.939-.637.117 0 .217.023.308.06.337.155.635.241.888.241a.742.742 0 0 0 .373-.085l-.041-.458c-.08-1.307-.182-2.935.247-3.889 1.236-2.836 3.929-3.054 4.724-3.054L12.117 3h.049z'
        },
        {
          name: 'tiktok',
          image: 'M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z'
        }
      ]
    }
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
  }
};
</script>

<style scoped>
.payement {
  background-color: var(--footer-text-col);
}

[dir="rtl"] .payement {
  margin-left: 0.5rem;
  margin-right: 0;
}

.slide-enter-active,
.slide-leave-active {
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
