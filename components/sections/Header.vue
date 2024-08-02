<template>
    <div>
        <si-app-loader placement="BEFORE_HEADER"/>
        <div class="border-b-2 header-bg header-text-color" :class="menu ? 'res-p' : 'py-2'">
            <header class="container flex items-center justify-between w-full" :class="!$settings.sections.header.icons.search && menu ? 'md:relative' : ''" v-if="section.logo || section.icons.cart || section.icons.wishlist || section.icons.account || section.icons.search || section.icons.language || section.icons.currency">
                <!-- left content -->
                <div class="mx-4 store-logo" :class="!$settings.sections.header.icons.search && menu ? 'md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2' : ''">
                    <!-- logo -->
                    <div class="logo">
                        <router-link to="/">
                            <si-image width="70" height="50" property="height" class="object-contain w-auto h-10 md:h-12" :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo"/>
                        </router-link>
                    </div>
                    <!-- logo -->
                </div>
                <!-- left content -->
                <!-- center content -->
                <div class="flex items-center " :class="$settings.sections.header.icons.search? 'w-full active-search':'unactive-search'">
                    <!-- show menu botton  -->
                    <div class="hidden p-3 mx-1 transition-all ease-in-out delay-150 rounded-full headermenu-button hover-bg">
                        <button @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu" aria-label="Search button" class="flex flex-col justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 translate svg-color "><g class="fa-group"><path fill="currentColor" d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z" class="fa-secondary"></path><path fill="currentColor" d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"></path></g></svg>
                        </button>
                    </div>
                    <!-- show menu botton  -->
                    <!-- search menu -->
                    <div v-if="$settings.sections.header.icons.search" class="w-full mr-4 search">
                        <form @submit.prevent="search" class="flex items-center bg-gray-100 border-2 rounded-full focus:bg-white header-bg-border" action="/shop?">
                            <input  v-model="q" class="flex items-center w-full px-4 py-2 text-base bg-transparent rounded-l-full outline-none b1 focus:bg-white" :placeholder="$settings.sections.header.search.text" type="search" name="q">
                            <button class="flex items-center px-4 py-3 transition-all ease-in-out delay-150 rounded-r-full b2" aria-label="Search button">
                                <svg class="w-6 h-6 icon header-text-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z" fill="currentColor"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z" fill="currentColor"></path></svg>
                            </button>
                        </form>
                    </div>
                    <!-- search menu -->
                </div>
                <!-- center content -->
                <!-- right content -->
                <!-- icons -->
                <div class="flex-shrink-0 mx-1 icons">
                    <div class="flex items-center content-between">
                    <!-- courency and language dropdown  -->
                    <div class="relative flex items-center justify-between lang">
                        <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col" @mouseover="activeId = activeId = item._id" @mouseleave="activeId = activeId = null">
                            <li class="flex items-center justify-between transition-all ease-in-out delay-150 rounded-full cursor-pointer hover-bg">
                                <a class="flex items-center p-2" :href="item.url">
                                    <div class="mx-1 text-sm font-bold">{{ item.text }}</div>
                                    <button>
                                        <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" v-if="item.childrens && item.childrens.length > 0" :class="[activeId==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : ''] ">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </a>
                            </li>
                            <transition name="slide">
                                <div class="absolute z-20 w-24 p-2 border shadow-lg top-full header-bg" :class="menu? 'top-10.5' : 'top-3'" v-if="item._id == activeId">
                                    <div class="pb-1" v-for="(item,i) in item.childrens" :key="i" >
                                        <a class="text-sm font-normal hover:underline" :href="item.url">{{item.text}}</a>
                                        <ul v-if="item.childrens && item.childrens.length > 0">
                                            <li class="px-2 pt-1" v-for="(child,ii) in item.childrens" :key="ii">
                                                <a class="text-sm font-normal hover:underline" :href="child.url">
                                                    > {{ child.text }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </transition>
                            </ul>
                        </div>
                        <!-- courency and language dropdown  -->
                        <div v-if="$settings.sections.header.icons.account" class="p-3 transition-all ease-in-out delay-150 rounded-full user hover-bg">
                            <router-link  to="/account/orders" title="Account" class="flex flex-col justify-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 svg-color"><path  d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                            </router-link>
                        </div>
                        <div v-if="$settings.sections.header.icons.wishlist" class="p-3 transition-all ease-in-out delay-150 rounded-full heart hover-bg">
                            <router-link  to="/wishlist" title="Wishlist" class="relative flex flex-col justify-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 svg-color"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>
                                <small v-if="$store.state.wishlist.length>0"  class="border-2 border-white -top-3 -right-2.5 rounded-full absolute w-5 h-5 p-1 bg-orange text-white flex justify-center items-center text-md font-normal">{{ $store.state.wishlist.length }}</small>
                            </router-link>
                        </div>
                        <div v-if="$settings.sections.header.icons.cart" class="p-3 transition-all ease-in-out delay-150 rounded-full cart hover-bg">
                            <router-link  to="/cart" title="Cart" id="cart-icon" class="relative flex flex-col justify-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 svg-color"><path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path></svg>
                                <small class="border-2 border-white -top-3 -right-2.5 rounded-full absolute w-5 h-5 bg-orange text-white flex justify-center items-center text-md font-normal">{{ $store.state.cart.length }}</small>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- icons -->
                <!-- right content -->
            </header>
            <!-- Nav Bar -->
            <nav v-if="menu" class="relative">
                <div class="flex items-center justify-center overflow-x-auto text-sm font-normal scroll-x">
                    <ul v-for="(item, i) in menu.items" :key="i" class="flex flex-col" @mouseover="activeId = activeId = item._id" @mouseleave="activeId = activeId = null">
                        <li class="flex items-center p-2 mx-2 transition-all ease-linear delay-150 border-b-2 border-transparent hover:border-black">
                            <router-link :to="item.url">
                                <span class="whitespace-nowrap">{{ item.text }}</span>
                            </router-link>
                            <button v-if="item.childrens.length > 0" class="ml-1 chivron"  @click="activeId = activeId != item._id ? item._id : null">
                                <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" v-if="item.childrens && item.childrens.length > 0" :class="[activeId==item._id ? 'rotate-180 transition-all delay-150 ease-linear' : ''] ">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </li>
                        <transition name="slide">
                            <div v-if="item._id == activeId && item.childrens.length > 0" class="absolute z-20 w-40 p-2 border shadow-lg top-full header-bg">
                                <div class="py-1" v-for="(item,i) in item.childrens" :key="i" @mouseover="subItems = subItems = item.collectionId" @mouseleave="subItems = subItems = null">
                                    <div class="flex items-center justify-between">
                                        <router-link class="text-sm font-normal hover:underline" :to="item.url">
                                            {{item.text}}
                                        </router-link>
                                        <button class="" @click="subItems = subItems != item.collectionId ? item.collectionId : null">
                                            <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" v-if="item.childrens && item.childrens.length > 0" :class="[subItems==item.collectionId ? 'rotate-180 transition-all delay-150 ease-linear' : ''] ">
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="slide">
                                        <div v-if="item.collectionId == subItems">
                                            <ul v-if="item.childrens && item.childrens.length > 0">
                                                <li class="pt-2" v-for="(child,ii) in item.childrens" :key="ii">
                                                    <nuxt-link  class="text-sm font-normal hover:underline" :to="child.url">
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
            subItems: null,
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
        showSearch(val) {
            if (val) {
                this.$nextTick(() => {
                    document.querySelector('form.search input').focus();
                })
            }
        }
    },
    methods: {
        search() {
            this.$store.state.search = this.q;
            this.$router.push({ path: '/shop', query: { search: this.q } });
            this.showSearch = false;
        }
    },
}
</script>

<style scoped>
input:focus {
    transition: all .3s ease;
}

input:focus+.b2 {
    background-color: var(--primary-color);
    transition: all .3s ease;
}

input:focus+.b2:hover {
    background-color: var(--hover-color-gb);
}

input:focus+.b2>.icon {
    color: white;
}

.top-10\.5 {
    top: 2.60rem;
}

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

[dir='rtl'] .search {
    margin-right: 0;
    margin-left: 1rem;
}

[dir='rtl'] .chivron {
    margin-right: 0.25rem;
    margin-left: 0;
}

.svg-color {
    fill: var(--header-text-col);
}

.res-p {
    padding-top: 0.5rem;
}

@media only screen and (min-width: 0) and (max-width: 899px) {
    .res-p {
        padding-bottom: 0.5rem;
    }

    .headermenu-button {
        display: block;
    }

    header {
        flex-wrap: wrap;
    }

    nav,
    .lang {
        display: none;
    }

    .active-search {
        order: 2;
    }

    .unactive-search {
        order: -1;
    }
}
</style>
