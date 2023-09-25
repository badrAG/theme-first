<template>
    <div class="fixed inset-0 z-20 flex" v-if="show">
        <!-- sliderleft shadow -->
        <div v-if="$store.state.showHeaderMenu" :class="$store.state.showHeaderMenu? 'opacity-50' : 'opacity-0'" class="fixed inset-0 flex transition-all delay-500 bg-black" @click="$store.state.showHeaderMenu=false"></div>
        <!-- sliderleft shadow  -->
        <!-- Slide left  -->
        <transition name="slide-left">
                <div :class="$store.state.showHeaderMenu ? 'block':'hidden'" class="relative flex flex-col max-w-full transition-all delay-500 header-menu w-80 header-bg header-text-color">
                    <!-- close slider left botton -->
                    <div class="flex items-center justify-between w-full py-2"> 
                        <div class="px-4">
                            <router-link to="/">
                                <si-image width="70" height="50" property="height" class="object-contain w-full h-8" :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo"/>
                            </router-link>
                        </div>
                        <button @click="$store.state.showHeaderMenu=false" aria-label="Close button" class="p-3 m-1 transition-all ease-in-out delay-150 rounded-full item hover-bg">
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 translate"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                        </button>
                    </div>
                    <!-- close slider left botton -->
                    <!-- Header Menu -->
                    <div class="" v-if="menu">
                        <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col">
                            <li @click="activeId = activeId != item._id ? item._id : null" class="flex items-center justify-between">
                                <div class="px-4 py-2">
                                    <router-link class="text-base font-bold hover:underline" :to="item.url">{{ item.text }}</router-link>
                                </div>
                                <button class="px-3 mx-1 transition-all ease-in-out delay-150 rounded-full hover-bg" >
                                    <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"  v-if="item.childrens && item.childrens.length > 0" :class="[activeId==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : ''] ">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </li>
                            <transition name="slide">
                            <div v-if="item._id == activeId">
                                <div v-for="(item,i) in item.childrens" :key="i" class="py-2">
                                    <div class="flex items-center justify-between">
                                        <router-link class="px-4 text-base font-normal hover:underline" :to="item.url">
                                            {{item.text}}
                                        </router-link>
                                        <button class="px-3 mx-1 transition-all ease-linear delay-200 rounded-full hover-bg" @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                            <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" v-if="item.childrens && item.childrens.length > 0" :class="[subItems==item.collectionId ? 'rotate-180 transition-all delay-150 ease-linear' : '']">
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="slide">
                                        <div v-if="item.collectionId == subItems"> 
                                            <ul v-if="item.childrens && item.childrens.length > 0">
                                                <li class="px-4 pt-4" v-for="(child,ii) in item.childrens" :key="ii">
                                                    <nuxt-link  class="text-base font-normal hover:underline" :to="child.url">
                                                        {{ child.text }}
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                            </transition>
                        </ul>
                    </div>
                    <!-- Header Menu -->
                    <!-- courency and language dropdown  -->
                    <div>
                        <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                            <li @click="activeId = activeId != item._id ? item._id : null" class="flex items-center justify-between">
                                <div class="px-4 py-2">
                                    <a class="text-base font-bold cursor-pointer hover:underline" :href="item.url">{{ item.text }}</a>
                                </div>
                                <button class="px-3 mx-1 transition-all ease-in-out delay-150 rounded-full hover-bg">
                                    <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" v-if="item.childrens && item.childrens.length > 0" :class="[activeId==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : '']" >
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </li>
                            <transition name="slide">
                            <div v-if="item._id == activeId">
                                <div v-for="(item,i) in item.childrens" :key="i"  class="px-4 py-2 ">
                                    <a class="text-base font-normal hover:underline" :href="item.url">{{item.text}}</a>
                                    <ul  v-if="item.childrens && item.childrens.length > 0">
                                        <li class="px-3 pt-4" v-for="(child,ii) in item.childrens" :key="ii">
                                            <a class="text-base font-normal hover:underline" :href="child.url">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>
                                                {{ child.text }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </transition>
                        </ul>
                    </div>
                    <!-- courency and language dropdown  -->
                    <!-- About section  -->
                    <div class="px-4 py-2">
                        <!-- Store title -->
                        <div class="flex items-center justify-between" @click="showContent">
                            <h4 class="text-base font-bold md:text-3xl">{{ footer.copyright.store_name }}</h4>
                            <svg class="w-5 h-5 transform" :class="[isContentVisible ? 'rotate-180 transition-all delay-150 ease-linear' : '']"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <!-- Store title -->
                        <transition name="slide">
                            <div class="pt-4" :class="isContentVisible? 'block':'hidden'">
                                <!-- Footer About -->
                                <div class="mb-2 text-base font-normal" v-show="footer.about.length > 0">{{ footer.about }}</div>
                                <!-- Footer About -->
                                <!-- Contacts  -->
                                <div class="Contacts">
                                    <p class="flex items-center mb-3" v-show="footer.location.length > 0">
                                    <svg class="w-4 h-4 icon translate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Layer_1" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                        <path fill="currentColor" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24  C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24  C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                                    </svg>
                                    <span class="mx-3 text-base font-normal hover:underline">{{ footer.location }}</span>
                                    </p>
                                    <p class="flex items-center mb-3" v-show="footer.gmail.length > 0">
                                    <svg class="w-4 h-4 icon translate" xmlns="http://www.w3.org/2000/svg" fill="curr" width="20px" height="20px" viewBox="0 0 512 512">
                                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" fill="currentColor"/>
                                    </svg>
                                    <a class="mx-3 text-base font-normal hover:underline" :href="'mail:'+footer.gmail">{{ footer.gmail }}</a>
                                    </p>
                                    <p class="flex items-center" v-show="footer.number.length > 0">
                                    <svg class="w-5 h-5 icon translate"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="currentColor"/>
                                    </svg>
                                    <a class="mx-3 text-base font-normal hover:underline" :href="'tel:'+footer.number">{{ footer.number }}</a>
                                    </p>
                                </div>
                                <!-- Contacts  -->
                            </div>
                        </transition>
                        <!-- Contacts  -->
                    </div>
                    <!-- ِAbout section -->
                </div>
            <!-- </transition> -->
        </transition>
        <!-- Slide left  -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            subItems: null,
            show: false,
            activeId: null,
            isContentVisible: true,
            q: this.$route.query.search,
            menu: this.$settings.sections.header.menu,
            section: this.$settings.sections.header,
            footer: this.$settings.sections.footer,
            otherMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.header.icons.language,
                    childrens: this.$settings.store_languages.map(l => {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`
                        }
                    })
                },
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.header.icons.currency,
                    childrens: this.$settings.store_currencies.map(c => {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                }
            ].filter(item => item.active)
        }
    },
    watch: {
        "$route.params": {
            handler() {
                this.$store.state.showHeaderMenu = false
            },
            deep: true
        },
        "$store.state.showHeaderMenu"(val) {
            if (val) {
                this.show = val;
            } else {
                setTimeout(() => {
                    this.show = val;
                }, 500);
            }
        }
    },
    methods: {
        showContent() {
            this.isContentVisible = !this.isContentVisible;
        }
    }
}
</script>
