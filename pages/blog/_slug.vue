<template>
    <div class="container my-6 ">
        <div class="relative flex">
        <!-- slider left  -->
            <transition name="slide-left" v-if="$settings.sections.blog.sidebar.active">
                <!-- show slider content -->
                <div :class="showSideBar ? 'show':'hide'" class="fixed top-0 bottom-0 left-0 z-10 hidden h-full bg-white filters w-80">
                    <div class="fixed inset-0 block bg-black bg-opacity-50" @click="showSideBar=false"></div>
                    <div class="relative flex flex-col h-full bg-white border-r">
                        <!-- close -->
                        <div class="flex justify-end w-full"> 
                            <button @click="showSideBar=false" aria-label="Search button" class="p-3 m-1 transition-all ease-linear delay-200 rounded-full item hover-bg">
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 translate"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
                            </button>
                        </div>
                        <!-- close -->
                        <!-- Category -->
                        <h3 v-if="$settings.sections.blog.sidebar.categories.active" class="px-4 mb-2 text-base font-bold">{{ $settings.sections.blog.sidebar.categories.title }}</h3>
                        <!-- Category -->
                        <!-- Select category -->
                        <div v-if="$settings.sections.blog.sidebar.categories.active" class="flex flex-col mb-2">
                            <div v-for="(item, i) in categories" :key="i" class="flex items-center px-4 mb-2 text-sm font-normal">
                                <label class="relative flex items-center cursor-pointer">
                                    <input type="checkbox" class="absolute top-0 left-0 form-checkbox" style="z-index: -1" :id="item.slug" @change="setParams($event, 'categories.slug-in', item.slug)">
                                    <div class="flex items-center justify-center w-4 h-4 bg-white border border-gray-400">
                                        <svg class="fill-current hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                    </div>
                                    <div class="mx-3 capitalize" :for="item.slug">{{ item.name }}</div>
                                </label>
                            </div>
                        </div>
                        <!-- Select category -->
                    </div>
                </div>
            </transition>
            <!-- slider left -->
            <!-- blogs -->
            <div class="w-full">
                <div class="bg-white">
                    <!-- icons -->
                    <div class="mb-4">
                        <div class="flex items-center px-4" :class="$settings.sections.blog.sidebar.active? 'justify-between': 'justify-end'">
                            <div v-if="$settings.sections.blog.sidebar.active" class="cursor-pointer rounded-full border-2 transition ease-linear delay-150 box-shadow scale px-3 py-2 bg-primary-border" @click="showSideBar = true">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 translate">
                                    <path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path>
                                </svg>
                                <span class="mx-1"></span>
                                <span class="font-bold text-md">{{ $settings.sections.blog.filter_text }}</span>
                            </div>
                            </div>
                            <!--  -->
                            <select class="cursor-pointer text-md font-bold sort-select bg-white w-40 px-3 py-2 rounded-full transition ease-linear delay-150 box-shadow scale outline-none border-2 bg-primary-border" v-model="params.sort">
                                <option v-for="(sort,i) in sorts" :key="i" :value="sort.field">{{ sort.name }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- icons -->
                    <!-- Loader -->
                    <div v-if="loading.pages" class="flex items-center justify-center my-5">
                        <si-loader></si-loader>
                    </div>
                    <!-- Loader -->
                    <!-- Empty (No blogs)-->
                    <div v-if="!loading.pages && items.length == 0" class="flex items-center justify-center">
                        <h1 class="py-3">{{ $settings.sections.blog.empty_text }}</h1>
                    </div>
                    <!-- Empty (No blogs)-->
                    <!-- Posts-->
                    <div class="flex flex-wrap px-2">
                        <div v-for="(item, i) in items" :key="i" class="w-full p-2 sm:w-1/2 md:w-1/3">
                            <si-post :item="item"></si-post>
                        </div>
                    </div>
                    <!-- Posts -->
                    <!-- products  -->
                    <div v-if="!loading.pages && loading.categories" class="flex items-center justify-center my-5">
                        <si-loader></si-loader>
                    </div>
                    <div class="px-2">
                        <div v-if="products.length > 0 && $settings.sections.blog.sidebar.products.active" class="w-full">
                            <si-carousel :size="100" component="si-product"  :title="$settings.sections.blog.sidebar.products.title" :list="products" itemClass="w-full"></si-carousel>
                        </div>
                    </div>
                    <!-- products -->
                    <div>
                        <!-- Pagination -->
                    </div>
                </div>
            </div>  
            <!-- blogs -->  
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: {
                pages: true,
                products: true,
                categories: true,
            },
            query: {},
            param: [],
            products: [],
            showSideBar: false,
            gridClass: 'w-full md:w-1/2 lg:w-1/3',
            items: [],
            categories: [],
            paginate: { page: 1, limit: 12, total: 12 },
            params: { status: 'PUBLISH', 'categories.slug-in': [], sort: { createdAt: -1 }, type: 'POST' },
            lastParams: { status: 'PUBLISH', 'categories.slug-in': [], sort: { createdAt: -1 }, type: 'POST' },
            sorts: [
                { field: { 'name': 1 }, name: this.$settings.sections.blog.sorts.name_asc },
                { field: { 'name': -1 }, name: this.$settings.sections.blog.sorts.name_desc },
                { field: { createdAt: -1 }, name: this.$settings.sections.blog.sorts.newest },
                { field: { createdAt: 1 }, name: this.$settings.sections.blog.sorts.oldest }
            ],
            girds: [
                { number: 6, width: 16, class: 'w-full md:w-1/2 lg:w-1/2' },
                { number: 9, width: 21, class: 'w-full md:w-1/2 lg:w-1/3' },
                { number: 12, width: 26, class: 'w-1/2 md:w-1/3 lg:w-1/4' }
            ]
        }
    },
    watch: {
        params: {
            handler(val) {
                if (JSON.stringify(val) !== JSON.stringify(this.lastParams)) {
                    this.getItems();
                }
            },
            deep: true
        }
    },
    async fetch() {
        await this.getItems();
        await this.getCategories();
        await this.getProducts();
        this.$store.state.seo.title = this.$settings.sections.blog.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.blog.description || this.$settings.store_description;
    },
    mounted() {
        // All Pixels
        this.$tools.call('PAGE_VIEW');
        // Facebook Pixel
        this.$storeino.fbpx('PageView');
    },
    methods: {
        setParams(e, key, value) {
            if (key.indexOf('price') >= 0) {
                this.$set(this.params, key, e.target.value);
            } else {
                if (e.target.checked) {
                    if (!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            switch (key) {
                case 'categories.slug-in': this.param = [...new Set(...this.param, value)]; break;
                case 'price.salePrice-from': this.query['price-from'] = value; break;
                case 'price.salePrice-to': this.query['price-to'] = value; break;
                case 'options.values.value1': this.query['colors'] = value; break;
            }
        },
        async getProducts() {
            this.products = [];
            this.loading.products = true;
            try {
                const { data } = await this.$storeino.products.search({ limit: 5 });
                this.products = data.results;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.products = false;
        },
        async getCategories() {
            this.categories = [];
            this.loading.categories = true;
            try {
                const { data } = await this.$storeino.categories.search({});
                this.categories = data.results;
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.categories = false;
        },
        async getItems() {
            this.items = [];
            this.loading.pages = true;
            try {
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.pages.search(this.params);
                this.items = data.results
            } catch (err) {
                this.$sentry.captureException(err);
            }
            this.loading.pages = false;
        }
    }
}
</script>

<style >
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
  