<template>
    <div class="footer-bg footer-text-bg">
      <si-app-loader placement="BEFORE_FOOTER"/>
      <!-- Start footer Section -->
      <footer class="footer container text-md text-center md:text-left px-4">
        <div class="flex flex-wrap justify-center md:justify-between pt-16">

          <!-- About section  -->
          <div class="footer-contact p-2 w-full md:w-1/5">
              <!-- Store title -->
              <nuxt-link to="/">
                  <h4 class="text-3xl font-bold mb-4">{{ title }}</h4>
              </nuxt-link>
              <!-- Store title -->
  
              <!-- Footer About -->
                  <div class="mb-4 text-md font-normal">{{ footer.about }}</div>
              <!-- Footer About -->
  
              <!-- Contacts  -->
              <div class="Contacts flex justify-center md:justify-start ">
                <div>
                  <p class="mb-5 flex items-center">
                    <fa class="text-xl font-normal mr-3" :icon="['fa', 'location-dot']"></fa>
                    <span>{{ footer.location }}</span>
                  </p>
                  <p class="mb-5 flex items-center">
                    <fa class="text-lg font-normal mr-2" :icon="['fa', 'envelope']"></fa>
                    <a :href="'mail:'+footer.gmail">{{ footer.gmail }}</a>
                  </p>
                  <p class="flex items-center"> 
                    <fa class="text-lg font-normal mr-2" :icon="['fa', 'phone']"></fa>
                    <a :href="'tel:'+footer.number">{{ footer.number }}</a>
                  </p>
              </div>
              </div>
              <!-- Contacts  -->
          </div> 
          <!-- ِAbout section -->

          <!-- menu1 --> 
          <div v-if="menus.menu1_active" class="categoty_menu p-2 mt-6 md:mt-0 w-full md:w-1/5">
            <h4 class="text-base font-bold mb-6">{{ menus.menu1_title }}</h4>
            <div v-if="menu1">
              <div  v-for="(item,i) in menu1.items" :key="i">
                    <div>
                        <h4 class="mb-4 text-md font-normal hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
            </div>
          </div>
          <!-- menu1  -->
  
  
          <!-- menu2 -->
          <div v-if="menus.menu2_active" class="Infomation_menu p-2 mt-6 md:mt-0 w-full md:w-1/5">
            <h4 class="text-base font-bold mb-6">{{ menus.menu2_title }}</h4>
              <div v-if="menu2">
                <div v-for="(item,i) in menu2.items" :key="i">
                    <div>
                        <h4 class="mb-4 text-md font-normal hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
              </div>
            </div>
          <!-- menu2 -->


          <!-- menu3 -->
          <div v-if="menus.menu3_active" class="Infomation_menu p-2 mt-6 md:mt-0 w-full md:w-1/5">
            <h4 class="text-base font-bold mb-6">{{ menus.menu3_title }}</h4>
              <div v-if="menu3">
                <div v-for="(item,i) in menu3.items" :key="i">
                    <div>
                        <h4 class="mb-4 text-md font-normal hover:underline">
                            <router-link :to="item.url">{{item.text}}</router-link>
                        </h4>
                    </div>
                </div>
              </div>
            </div>
          <!-- menu3 -->

          <!-- payment_methods  -->
          <!-- style="filter: brightness(0) invert(1); " -->
          <div class="payment_methods p-2 mt-6 md:mt-0 w-full md:w-1/5">
            <div>
              <h3 class="text-base font-bold mb-6">{{ footer.methods.title }}</h3>
              <div class="payment_images flex flex-wrap justify-center md:justify-start ">
                  <div v-for="item in methods.filter(m=>$settings.sections.footer.methods[m.name])" :key="item.name" class="w-15 h-8 mr-2 mb-4 flex ">
                      <si-image   width="60" height="20" :src="item.image" :alt="item.name" class="h-full object-contain"/>
                    </div>
              </div>
            </div>
          </div>
          <!-- payment_methods -->
        </div>


         <!--  Social Media -->
          <div class="Social_Media pb-14 mt-6">
            <h3 class="text-base font-bold mb-6 text-center">{{ footer.social_media.title }}</h3>
            <div class="flex items-center justify-center flex-wrap">
              <div v-for="item in socialMedia.filter(s=>footer.social_media[s.name])" :key="item.name" class="flex items-center justify-center p-2">
                  <a class="h-full flex" :href="footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                      <fa class="text-2xl mx-2  scale hover:opacity-90" :icon="['fab', item.name]"></fa>
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
                      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968299.png'
                  },
                  {
                      name: 'mastercard',
                      image: 'https://cdn-icons-png.flaticon.com/512/329/329865.png'
                  },
                  {
                      name: 'transfer',
                      image: 'https://cdn-icons-png.flaticon.com/512/3029/3029373.png'
                  },
                  {
                      name: 'cash',
                      image: 'https://cdn-icons-png.flaticon.com/512/4766/4766928.png'
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
              ]
      };
    },
  };
  </script>
  
  
<style scoped> 

</style>
  