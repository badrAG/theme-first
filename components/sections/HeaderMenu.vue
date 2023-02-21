<template>
    <div class="flex fixed inset-0 z-20" v-if="show">
        <!-- sliderleft shadow -->
        <div v-if="$store.state.showHeaderMenu" :class="$store.state.showHeaderMenu? 'opacity-50' : 'opacity-0'" class="flex transition-all delay-500 fixed inset-0 bg-black" @click="$store.state.showHeaderMenu=false"></div>
        <!-- sliderleft shadow  -->
        <!-- <transition name="fade"> -->
            <div :class="$store.state.showHeaderMenu ? 'block':'hidden'" class="header-menu transition-all delay-500 max-w-full relative flex flex-col w-80 header-bg header-text-color">
                <!-- close slider left botton -->
                <div class="w-full flex items-center justify-between py-2"> 
                    <div class="px-4">
                        <router-link to="/">
                            <si-image width="70" height="50" property="height" class="h-8 w-full object-contain" :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo"/>
                        </router-link>
                    </div>
                    <button @click="$store.state.showHeaderMenu=false" aria-label="Close button" class="item p-3 rounded-full m-1 hover:bg-gray-200 transition-all ease-linear delay-200">
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 translate"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                    </button>
                </div>
                <!-- close slider left botton -->
                <!-- Header Menu -->
                <div class="" v-if="menu">
                    <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col">
                        <li @click="activeId = activeId != item._id ? item._id : null" class="flex items-center justify-between">
                            <div class="px-4 py-2">
                                <router-link class="text-base font-semibold hover:underline" :to="item.url">{{ item.text }}</router-link>
                            </div>
                            <button class="mx-1 px-3 hover:bg-gray-200 rounded-full transition-all ease-linear delay-200" >
                              <fa class="text-sm transform" v-if="item.childrens && item.childrens.length > 0"  :icon="['fa', 'angle-down']" :class="[activeId==item._id ? 'rotate-180' : ''] "></fa>
                            </button>
                        </li>
                        <transition name="slide">
                        <div v-if="item._id == activeId">
                            <div v-for="(item,i) in item.childrens" :key="i" class="py-2">
                                <div class="flex items-center justify-between">
                                    <router-link class="text-base font-normal hover:underline px-4" :to="item.url">
                                        {{item.text}}
                                    </router-link>
                                    <button class="mx-1 px-3 hover:bg-gray-200 rounded-full transition-all ease-linear delay-200" @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                        <fa class="text-sm transform" v-if="item.childrens && item.childrens.length > 0"  :icon="['fa', 'angle-down']" :class="[subItems==item.collectionId ? 'rotate-180' : ''] "></fa>
                                    </button>
                                </div>
                                <transition name="slide">
                                    <div v-if="item.collectionId == subItems"> 
                                        <ul v-if="item.childrens && item.childrens.length > 0">
                                            <li class="pt-4 px-4" v-for="(child,ii) in item.childrens" :key="ii">
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
                                <a class="text-base font-semibold hover:underline cursor-pointer" :href="item.url">{{ item.text }}</a>
                            </div>
                            <button class="mx-1 px-3 hover:bg-gray-200 rounded-full transition-all ease-linear delay-200">
                              <fa class="text-sm transform" v-if="item.childrens && item.childrens.length > 0"  :icon="['fa', 'angle-down']" :class="[activeId==item._id ? 'rotate-180' : ''] "></fa>
                            </button>
                        </li>
                        <transition name="slide">
                        <div v-if="item._id == activeId">
                            <div v-for="(item,i) in item.childrens" :key="i"  class=" px-4 py-2">
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
            </div>
        <!-- </transition> -->
    </div>
    </template>
    <script>
    export default {
        data() {
            return {
                subItems: null,
                show: false,
                activeId: null,
                q: this.$route.query.search,
                menu: this.$settings.sections.header.menu,
                section: this.$settings.sections.header,
                otherMenu: [
                    {
                        _id: "lang",
                        text: this.$store.state.language.code,
                        active: this.$settings.sections.header.icons.language,
                        childrens: this.$settings.store_languages.map(l=> {
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
                        childrens: this.$settings.store_currencies.map(c=> {
                            return {
                                _id: c.code,
                                text: c.name,
                                url: `?cur=${c.code}`
                            }
                        })
                    }
                ].filter(item=> item.active)
            }
        },
        watch: {
            "$route.params": {
                handler(params) {
                    this.$store.state.showHeaderMenu = false
                },
                deep: true
            },
            "$store.state.showHeaderMenu"(val){
                if(val){
                    this.show = val;
                }else{
                    setTimeout(() => {
                        this.show = val;
                    },500);
                }
            }
        },
    }
    </script>
<!-- <style>
.header-menu {
  transition: all 0.3s ease-in-out;
}
</style> -->
