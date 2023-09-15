<template>
    <div>
        <si-app-loader placement="BEFORE_SHOP_SIDEBAR"/>
        <div class="container">
            <div class="relative flex my-6">
                <!-- Slider left -->
                <transition name="slide-left">
                    <div :class="showSideBar ? 'show':'hide'" class="fixed top-0 bottom-0 left-0 z-50 hidden h-full overflow-y-auto bg-white filters w-80">
                        <!-- show slider left -->
                        <div class="fixed inset-0 block bg-black bg-opacity-50" @click="showSideBar=false"></div>
                        <!-- show slider left  -->
                        <!--  -->
                        <div class="relative flex flex-col h-full bg-white ">
                            <!-- close slider left -->
                            <div class="flex justify-end w-full"> 
                                <button @click="showSideBar=false" aria-label="Search button" class="p-3 m-1 transition-all ease-in-out delay-150 rounded-full item hover-bg">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 translate"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                                </button>
                            </div>
                            <!-- close slider left -->
                            <!-- Collection title  -->
                            <h2 v-if="$settings.sections.shop.sidebar.collections.active" class="px-4 mb-2 text-base font-bold">{{ $settings.sections.shop.sidebar.collections.title }}</h2>
                            <!-- Collection title -->
                            <!-- Collections type -->
                            <div v-if="$settings.sections.shop.sidebar.collections.active" class="flex flex-col mb-2">
                                <div v-if="loading.collections" class="flex items-center justify-center my-5">
                                    <si-loader></si-loader>
                                </div>
                                <div v-for="(item, i) in collections" :key="i" class="flex items-center px-4 mb-2 text-sm font-normal">
                                    <label class="relative flex items-center cursor-pointer">
                                        <input type="checkbox" class="absolute top-0 left-0 form-checkbox" style="z-index: -1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0" :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)">
                                        <div class="flex items-center justify-center w-4 h-4 bg-white border border-gray-400">
                                            <svg class="fill-current hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                        </div>
                                        <div class="mx-3 capitalize" :for="item.slug">{{ item.name }}</div>
                                    </label>
                                </div>
                            </div>
                            <h2 v-if="$settings.sections.shop.sidebar.prices.active" class="px-4 mb-2 text-base font-bold">{{ $settings.sections.shop.sidebar.prices.title }}</h2>
                            <div v-if="loading.filters" class="flex items-center justify-center my-5">
                                <si-loader></si-loader>
                            </div>
                            <div v-if="$settings.sections.shop.sidebar.prices.active && filters" class="flex flex-col mb-2" dir="ltr">
                                <si-price-range @change="setParams" :min="filters.prices.min" :max="filters.prices.max" />
                            </div>
                            <h2 class="px-4 mb-2 text-base font-bold" v-if="$settings.sections.shop.sidebar.sizes.active">{{ $settings.sections.shop.sidebar.sizes.title }}</h2>
                            <div v-if="$settings.sections.shop.sidebar.sizes.active && loading.filters" class="flex items-center justify-center my-5">
                                <si-loader></si-loader>
                            </div>
                            <div v-if="$settings.sections.shop.sidebar.sizes.active && filters" class="flex flex-wrap mx-4 mb-2 text-sm font-normal">
                                <div v-for="(item, i) in filters.sizes" :key="i" class="flex items-center m-0.5 rounded-md box-shadow box-shadow-xs-hover" :class="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0 ? 'bg-primary text-white' : 'bg-white' ">
                                    <input hidden :id="item.value1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" @change="setParams($event, 'options.values.value1', item.value1)" type="checkbox"/>
                                    <label class="px-2 cursor-pointer" :for="item.value1">{{ item.value1 }}</label>
                                </div>
                            </div>
                            <h2 class="px-4 my-2 text-base font-bold" v-if="$settings.sections.shop.sidebar.colors.active">{{ $settings.sections.shop.sidebar.colors.title }}</h2>
                            <div v-if="$settings.sections.shop.sidebar.colors.active && loading.filters" class="flex items-center justify-center my-5">
                                <si-loader></si-loader>
                            </div>
                            <div v-if="$settings.sections.shop.sidebar.colors.active && filters" class="flex flex-wrap mx-4 mb-2 text-sm font-normal">
                                <div v-for="(item, i) in filters.colors" :key="i" class="flex items-center my-0.5 color-option" :class="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0 ? 'active' : '' ">
                                    <input hidden :id="item.value1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" @change="setParams($event, 'options.values.value1', item.value1)" type="checkbox"/>
                                    <label class="rounded-full cursor-pointer box-shadow box-shadow-xs-hover" :style="`background-color:${item.value2}`" :for="item.value1" :aria-label="item.value1"></label>
                                </div>
                            </div>
                            <h2 class="px-4 my-2 text-base font-bold" v-if="$settings.sections.shop.sidebar.tags.active">{{ $settings.sections.shop.sidebar.tags.title }}</h2>
                            <div v-if="$settings.sections.shop.sidebar.tags.active && filters" class="flex flex-col mb-2">
                                <div v-if="$settings.sections.shop.sidebar.tags.active && loading.filters" class="flex items-center justify-center my-5">
                                    <si-loader></si-loader>
                                </div>
                                <div v-for="(tag, i) in filters.tags" :key="i" class="flex items-center px-4 mb-2 text-sm font-normal">
                                    <label class="relative flex items-center cursor-pointer">
                                        <input type="checkbox" class="absolute top-0 left-0 form-checkbox" style="z-index: -1" :checked="params['tags-in'] && params['tags-in'].indexOf(tag) >= 0" :id="`tag_${tag}`" @change="setParams($event, 'tags-in', tag)">
                                        <div class="flex items-center justify-center w-4 h-4 bg-white border border-gray-400">
                                            <svg class="fill-current hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                        </div>
                                        <div class="mx-3 capitalize" :for="`tag_${tag}`">{{ tag }}</div>
                                    </label>
                                </div>
                            </div>
                            <h2 class="px-4 my-2 text-base font-bold" v-if="$settings.sections.shop.sidebar.brands.active">{{ $settings.sections.shop.sidebar.brands.title }}</h2>
                            <div v-if="$settings.sections.shop.sidebar.collections.active" class="flex flex-col mb-2 bg-white">
                                <div v-if="$settings.sections.shop.sidebar.brands.active && loading.brands" class="flex items-center justify-center my-5">
                                    <si-loader></si-loader>
                                </div>
                                <div v-for="(item, i) in brands" :key="i" class="flex items-center px-4 mb-2 text-sm font-normal">
                                    <label class="relative flex items-center cursor-pointer">
                                        <input type="checkbox" class="absolute top-0 left-0 form-checkbox" style="z-index: -1" :id="item.slug" :checked="params['brand.slug-in'] && params['brand.slug-in'].indexOf(item.slug) >= 0" @change="setParams($event, 'brand.slug-in', item.slug)">
                                        <div class="flex items-center justify-center w-4 h-4 bg-white border border-gray-400">
                                            <svg class="fill-current hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                        </div>
                                        <div class="mx-3 capitalize" :for="item.slug">{{ item.name }}</div>
                                    </label>
                                </div>
                            </div>
                            <!--  -->
                        </div>
                    </div>
                </transition>
                <!-- Slider left -->
                <!--  -->
                <div class="w-full">  
                    <div class="bg-white">
                        <!-- icons -->
                        <div class="mb-4">
                            <div class="flex items-center px-4" :class="$settings.sections.blog.sidebar.active? 'justify-between': 'justify-end'">
                                <div v-if="$settings.sections.blog.sidebar.active" class="cursor-pointer rounded-full border-2 transition ease-linear delay-150 box-shadow scale px-3 py-1.5 bg-primary-border" @click="showSideBar = true">
                                   <div class="flex">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 translate">
                                           <path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path>
                                       </svg>
                                       <span class="mx-1"></span>
                                       <span class="font-bold text-md">{{ $settings.sections.shop.filter_text }}</span>
                                   </div>
                                </div>
                                <select class="text-md font-bold sort-select bg-white w-40 px-3 py-1.5 rounded-full transition ease-linear delay-150 box-shadow scale outline-none border-2 bg-primary-border" v-model="params.sort">
                                    <option v-for="(sort,i) in sorts" :key="i" :value="sort.field">{{ sort.name }}</option>
                                </select>
                            </div>
                        </div>
                        <!-- icons -->
                        <!-- Loader -->
                        <div v-if="loading.products" class="flex items-center justify-center my-5">
                            <si-loader></si-loader>
                        </div>
                        <!-- Loader -->
                        <!-- Products  -->
                        <div v-if="items.length > 0" class="flex flex-wrap">
                            <div v-for="(item, i) in items" :key="i" class="w-1/2 p-2 md:w-1/3 lg:w-1/4">
                                <si-product :item="item"></si-product>
                            </div>
                        </div>
                        <!-- Products -->
                        <!-- empty_text -->
                        <div v-if="!loading.products && items.length == 0" class="flex items-center justify-center">
                            <h1 class="pt-4 pb-6">{{ $settings.sections.shop.empty_text }}</h1>
                        </div>
                        <!-- empty_text -->
                        <!-- Pagination -->
                        <div class="flex flex-wrap items-center justify-center w-full p-2">
                            <!-- chivron left -->
                             <button class="flex items-center p-3 mx-2 transition-all ease-in-out delay-150 border-2 rounded-full box-shadow bg-primary-border scale" @click="getItems(paginate.current_page-1)">
                                <svg class="w-3 h-3 translate text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                            </button>
                            <!-- chivron left -->
                            <!-- pages -->
                            <button v-if="paginate.last_page > 1" :class="[(this.style),((paginate.last_page - (paginate.last_page -1)) == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -1))">
                                <span class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -1) }}</span>
                            </button> 
                            <button v-if="paginate.last_page > 2" :class="[(this.style),((paginate.last_page - (paginate.last_page -2)) == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -2))">
                                <span class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -2) }}</span>
                            </button> 
                            <button v-if="paginate.last_page > 3" :class="[(this.style),((paginate.last_page - (paginate.last_page -3)) == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -3))">
                                <span class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -3) }}</span>
                            </button> 
                            <button v-if="paginate.last_page > 4" :class="[(this.style),((paginate.last_page - (paginate.last_page -4)) == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -4))">
                                <span class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -4) }}</span>
                            </button> 
                            <button v-if="paginate.last_page > 5" :class="[(this.style),((paginate.last_page - (paginate.last_page -5)) == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page - (paginate.last_page -5))">
                                <span class="text-sm font-bold">{{ paginate.last_page - (paginate.last_page -5) }}</span>
                            </button> 
                            <!-- More Page exists -->
                            <button v-if="paginate.last_page > 5" :class="[(this.style),(paginate.current_page > (paginate.last_page - (paginate.last_page -5)) &&  paginate.current_page < (paginate.last_page)   ? 'bg-primary text-white' : '')]" >
                                <span class="text-sm font-bold">{{paginate.current_page > (paginate.last_page - (paginate.last_page -5)) &&  paginate.current_page < (paginate.last_page)? paginate.current_page:'...'}}</span>
                            </button> 
                            <button v-if="paginate.current_page > (paginate.last_page - (paginate.last_page -5)) &&  paginate.current_page < (paginate.last_page)" :class="this.style">
                                <span class="text-sm font-bold">...</span>      
                            </button> 
                            <!-- More Page exists -->
                            <!-- pages -->
                            <div v-if="paginate.last_page > 5">
                                <button v-if="paginate.last_page == paginate.current_page"  :class="[(this.style),(paginate.last_page == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page)">
                                    <span class="text-sm font-bold">{{ paginate.last_page }}</span>
                                </button> 
                            </div>
                            <div v-else>
                                <button v-if="paginate.last_page > 0" :class="[(this.style),(paginate.last_page == paginate.current_page ? 'bg-primary text-white' : '')]" @click="getItems(paginate.last_page)">
                                    <span class="text-sm font-bold">{{ paginate.last_page }}</span>
                                </button> 
                            </div>
                            <!-- pages -->
                            <!-- chivron right -->
                            <button class="flex items-center p-3 mx-2 transition-all ease-in-out delay-150 border-2 rounded-full box-shadow bg-primary-border scale" @click="getItems(paginate.current_page+1)">
                                <svg class="w-3 h-3 translate text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                            </button>
                            <!-- chivron right -->
                        </div>
                        <!-- Pagination -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: {
                products: true,
                filters: true,
                collections: true,
                brands: true,
            },
            query: {},
            param: [],
            filters: null,
            showSideBar: false,
            style: 'mx-2 h-10 w-10 transition-all ease-in-out delay-150 rounded-full box-shadow border-2 bg-primary-border scale',
            gridClass: 'w-1/2 md:w-1/3 lg:w-1/4',
            items: [],
            collections: [],
            brands: [],
            paginate: { page: 1, limit: this.$settings.sections.shop.pagination.limit, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
            lastParams: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
            sorts: [
                { field: { 'price.salePrice': 1 }, name: this.$settings.sections.shop.sorts.price_asc },
                { field: { 'price.salePrice': -1 }, name: this.$settings.sections.shop.sorts.price_desc },
                { field: { 'review.rating': -1 }, name: this.$settings.sections.shop.sorts.rating_desc },
                { field: { 'review.rating': 1 }, name: this.$settings.sections.shop.sorts.rating_asc },
                { field: { 'name': 1 }, name: this.$settings.sections.shop.sorts.name_asc },
                { field: { 'name': -1 }, name: this.$settings.sections.shop.sorts.name_desc },
                { field: { createdAt: -1 }, name: this.$settings.sections.shop.sorts.newest },
                { field: { createdAt: 1 }, name: this.$settings.sections.shop.sorts.oldest }
            ],
            girds: [
                { number: 2, width: 25, class: 'w-full md:w-1/2 lg:w-1/2' },
                { number: 3, width: 37, class: 'w-full xs:w1/2 md:w-1/2 lg:w-1/3' },
                { number: 4, width: 48, class: 'w-1/2 md:w-1/3 lg:w-1/4' },
                { number: 5, width: 60, class: 'w-1/2 xs:w-1/3 md:w-1/4 lg:w-1/5' },
                { number: 6, width: 72, class: 'w-1/2 xs:w-1/3 md:w-1/4 lg:w-1/6' },
            ]
        }
    },
    async fetch() {
        this.$store.state.seo.title = this.$settings.sections.shop.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.shop.description || this.$settings.store_description;
        if (this.$route.params.slug) {
            this.param = this.$route.params.slug.split(',');
            this.$route.params.slug.split(',').forEach(item => {
                this.params['collections.slug-in'].push(item);
            });
        }
        for (const key in this.$route.query) {
            if (!this.$route.query[key]) continue;
            switch (key) {
                case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]); break;
                case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]); break;
                case 'colors-size': this.$set(this.params, 'options.values.value1', this.$route.query[key].split(',')); break;
                case 'tags': this.$set(this.params, 'tags-in', this.$route.query[key].split(',')); break;
                case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(',')); break;
                case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
            }
        }
        this.lastParams = this.params;
        await this.getFilters();
        await this.getItems();
        await this.getCollections();
        await this.getBrands();
    },
    watch: {
        params: {
            handler(val) {
                if (JSON.stringify(val) !== JSON.stringify(this.lastParams)) {
                    this.getItems();
                }
            },
            deep: true
        },
        "$route.query.search"(val) {
            this.$set(this.params, 'search', val);
        }
    },
    mounted() {
        // All Pixels
        this.$tools.call('PAGE_VIEW');
        // Facebook Pixel
        this.$storeino.fbpx('PageView');
    },
    methods: {
        setParams(e, key, value) {
            if (key.indexOf('price') >= 0 || key.indexOf('page') >= 0) {
                this.$set(this.params, key, e.target.value);
                return false;
            } else {
                if (e.target.checked) {
                    if (!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            for (const key in this.params) {
                switch (key) {
                    case 'collections.slug-in': this.param = this.params[key]; break;
                    case 'price.salePrice-from': this.query['price-from'] = this.params[key]; break;
                    case 'price.salePrice-to': this.query['price-to'] = this.params[key]; break;
                    case 'options.values.value1': this.query['colors-size'] = this.params[key]; break;
                    case 'tags-in': this.query['tags'] = this.params[key]; break;
                    case 'brand.slug-in': this.query['brands'] = this.params[key]; break;
                    case 'page': this.query['page'] = [this.params[key]]; break;
                }
            }
            let url = `/shop/`;
            url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
            for (const key in this.query) {
                url += url.indexOf('?') == -1 ? '?' : '&';
                if (typeof this.query[key] == 'object') {
                    url += `${key}=${this.query[key].join(',')}`;
                } else url += `${key}=${this.query[key]}`;
            }
            window.history.pushState({}, '', url);
        },
        async getFilters() {
            this.filters = null;
            this.loading.filters = true;
            try {
                const { data } = await this.$storeino.products.filters({});
                this.filters = data;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.filters = false;
        },
        async getCollections() {
            this.collections = [];
            this.loading.collections = true;
            try {
                const { data } = await this.$storeino.collections.search({});
                this.collections = data.results;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.collections = false;
        },
        async getBrands() {
            this.brands = [];
            this.loading.brands = true;
            try {
                const { data } = await this.$storeino.brands.search({});
                this.brands = data.results;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.brands = false;
        },
        async getItems(page = null) {
            if (page != null) this.setParams({ target: { value: page } }, 'page', page);
            this.items = [];
            this.loading.products = true;
            try {
                this.params.search = this.$route.query.search;
                this.params.page = page || this.paginate.current_page;
                this.params.limit = this.$settings.sections.shop.pagination.limit;
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.products.search(this.params);
                this.items = data.results;
                this.paginate = data.paginate;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.products = false;
        }
    }
}
</script>

<style scoped>
[dir='rtl'] svg.translate {
    transform: rotateY(180deg);
}

.grid_icon:hover>span {
    background-color: var(--primary-color);
    opacity: 0.6;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' aria-hidden='true' focusable='false'><polygon points='8.25 5 6 7 3.75 5 8.25 5'/></svg>");
    background-repeat: no-repeat;
    background-position: right center;
}

[dir="rtl"] select {
    background-position: left center;
}

[dir="rtl"] .filters {
    right: 0;
    left: auto;
}

input[type="checkbox"]:checked+div {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

input[type="checkbox"]:checked+div svg {
    display: block;
}

.color-option label {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 4px;
    box-shadow: 0 0 0px 2px rgb(230, 230, 230);
}

.color-option.active label {
    color: transparent;
    box-shadow: 0 0 0px 2px white, 0 0 0px 4px var(--primary-color);
    margin-left: 6px;
    margin-right: 6px;
    width: 20px;
    height: 20px;
}

.slideleft-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
}

.slideleft-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slideleft-enter-to,
.slideleft-leave {
    width: 100%;
}

.slideleft-enter,
.slideleft-leave-to {
    width: 0%;
}

.show {
    display: block !important;
}
</style>