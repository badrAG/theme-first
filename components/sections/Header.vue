<template>
<div>
    <si-app-loader placement="BEFORE_HEADER"/>
    <div class="header-bg header-text-color py-2 border-b-2">
        <header class="container flex items-center justify-between w-full ">
            <!-- left content -->
            <div class="mx-4">
                <!-- logo -->
                <div class="logo">
                    <router-link to="/">
                        <si-image width="70" height="50" property="height" class="h-10 sm:h-12 md:h-14 w-full object-contain" :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo"/>
                    </router-link>
                </div>
                <!-- logo -->
            </div>
            <!-- left content -->

            <!-- center content -->
            <div class="flex items-center w-full search">
                <!-- show menu botton  -->
                <div class="headermenu-button mx-1 p-3 rounded-full hidden transition-all ease-linear delay-200 hover:bg-gray-200">
                    <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu" aria-label="Search button" class="flex flex-col justify-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 translate"><g class="fa-group"><path fill="currentColor" d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z" class="fa-secondary"></path><path fill="currentColor" d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"></path></g></svg>
                    </button>
                </div>
                <!-- show menu botton  -->
                <div v-if="$settings.sections.header.icons.search" class="search w-full mr-4">
                    <form @submit.prevent="search" class="flex items-center bg-gray-100 focus:bg-white rounded-full border-2 bg-primary-border" action="/shop?">
                        <input  v-model="q" class="b1 flex items-center rounded-l-full bg-transparent outline-none w-full py-2 px-4 text-base focus:bg-white" :placeholder="$settings.sections.header.search.text" type="search" name="q">
                        <button class="b2 ease-linear delay-200 flex items-center py-3 px-4 rounded-r-full hover:bg-gray-200" aria-label="Search button">
                            <fa class="text-lg text-primary"  :icon="['fa', 'magnifying-glass']"></fa>
                        </button>
                    </form>
                </div>
            </div>
            <!-- center content -->

            <!-- right content -->

            <!-- icons -->
            <div class="icons flex-shrink-0 mx-1">
                <div class="flex items-center content-between">
                <!-- courency and language dropdown  -->
                <div class="lang flex items-center justify-between">
                    <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                        <li @click="activeId = activeId != item._id ? item._id : null" class="cursor-pointer transition-all ease-linear delay-200 hover:bg-gray-200 rounded-full flex items-center justify-between">
                            <a class="p-2 flex items-center" :href="item.url">
                                <div class="text-sm font-semibold mx-1">{{ item.text }}</div>
                                <button>
                                    <fa class="text-xs mx-1 transform" v-if="item.childrens && item.childrens.length > 0"  :icon="['fa', 'angle-down']" :class="[activeId==item._id ? 'rotate-180' : ''] "></fa>
                                </button>
                            </a>
                        </li>

                        <transition name="slide">
                            <div class="relative" >
                                <div v-if="item._id == activeId" class="absolute header-bg shadow-lg z-20 border p-4" :class="menu? 'top-11' : 'top-4'" >
                                    <div class="py-1" v-for="(item,i) in item.childrens" :key="i" >
                                        <a class="text-sm links-hover" :href="item.url">{{item.text}}</a>
                                        <ul v-if="item.childrens && item.childrens.length > 0">
                                            <li class="px-2 pt-2" v-for="(child,ii) in item.childrens" :key="ii">
                                                <a class="text-sm links-hover" :href="child.url">
                                                    > {{ child.text }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        </ul>
                    </div>
                    <!-- courency and language dropdown  -->

                    <div v-if="$settings.sections.header.icons.account" class="user p-3 rounded-full transition-all ease-linear delay-200 hover:bg-gray-200">
                        <router-link  to="/account/orders" title="Account" class="flex flex-col justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 translate"><path  d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                        </router-link>
                        
                    </div>
                    <div v-if="$settings.sections.header.icons.wishlist" class="heart p-3 rounded-full transition-all ease-linear delay-200 hover:bg-gray-200">
                        <router-link  to="/wishlist" title="Wishlist" class="flex flex-col justify-center relative">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 translate"><path  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
                            <small v-if="$store.state.wishlist.length>0"  class="border-2 border-white -top-3 -right-2.5 rounded-full absolute w-5 h-5 p-1 bg-orange text-white flex justify-center items-center text-md font-normal">{{ $store.state.wishlist.length }}</small>
                        </router-link>
                    </div>
                    <div v-if="$settings.sections.header.icons.cart" class="cart p-3 rounded-full transition-all ease-linear delay-200 hover:bg-gray-200">
                        <router-link  to="/cart" title="Cart" id="cart-icon" class="flex flex-col justify-center relative">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 translate"><path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" class=""></path></svg>
                            <small v-if="$store.state.cart.length>0" class="border-2 border-white -top-3 -right-2.5 rounded-full absolute w-5 h-5 bg-orange text-white flex justify-center items-center text-md font-normal">{{ $store.state.cart.length }}</small>
                        </router-link>
                    </div>

                </div>
            </div>
            <!-- icons -->


            <!-- right content --> 
        </header>
        <!-- Nav Bar -->
        <nav v-if="menu" class="flex items-center justify-center  font-normal text-sm">
            <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col">
                <li class="flex items-center justify-between pt-2 px-3">
                    <router-link class="flex" :to="item.url">
                        <div class="links-hover px-1">{{ item.text }}</div>
                    </router-link>
                    <button  @click="activeId = activeId != item._id ? item._id : null">
                        <fa class="text-xs transform" v-if="item.childrens && item.childrens.length > 0"  :icon="['fa', 'angle-down']" :class="[activeId==item._id ? 'rotate-180' : ''] "></fa>
                    </button>
                </li>
                
                <transition name="slide">
                    <div class="relative">
                        <div v-if="item._id == activeId" class="w-40 top-2 absolute shadow-lg z-20 border header-bg p-4">
                            <div class="py-1" v-for="(item,i) in item.childrens" :key="i">
                                <div class="flex items-center justify-between">
                                    <router-link class="text-sm font-normal links-hover" :to="item.url">
                                        {{item.text}}
                                    </router-link>
                                    <fa @click="showSubItems" class="text-xs  mx-1 transform" :class="[(item.childrens && item.childrens.length > 0 ? 'block' : 'hidden'),(SubItems ? 'rotate-180' : '')]"  :icon="['fa', 'angle-down']" ></fa>
                                </div>
                                <ul v-if="item.childrens && item.childrens.length > 0 && SubItems">
                                    <li class="px-2 pt-2" v-for="(child,ii) in item.childrens" :key="ii">
                                        <nuxt-link  class="links-hover text-sm" :to="child.url">
                                        {{ child.text }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </transition>
            </ul>
        </nav> 
        <!-- Nav Bar -->
    </div>
    <si-app-loader placement="AFTER_HEADER"/>
</div>
</template>
<script>
export default {
    data() {
        return {
            SubItems:false,
            activeId: null,
            showSearch: false,
            iconMenu: null,
            q: this.$route.query.search,
            section: this.$settings.sections.header,
            menu: this.$settings.sections.header.menu,
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
        showSearch(val) {
            if (val) {
                this.$nextTick(()=>{
                    document.querySelector('form.search input').focus();
                })
            }
        }
    },
    methods: {
        search(){
            this.$store.state.search = this.q;
            this.$router.push({ path: '/shop', query: { search: this.q }});
            this.showSearch = false;
        },
        showSubItems() {
            this.SubItems = !this.SubItems
        }
    },
}
</script>

<style scoped>
[dir='rtl'] .b1 {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-top-left-radius: 90px;
    border-bottom-left-radius: 0px;
}
[dir='rtl'] .b2 {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
[dir='rtl'] .search{
    margin-right: 0;
    margin-left: 0.5rem;
}

svg {
    fill: var(--header-text-col);
}

@media only screen and (min-width: 0) and (max-width: 899px){
    .headermenu-button {
        display: block;
    }

    header {
        flex-wrap: wrap;
    }

    nav,.lang {
        display: none;
    }

    .search {
        order: 2;
    }
}
</style>