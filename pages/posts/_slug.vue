<template>
    <div>
        <div class="container my-6 bg-white ">
            <div v-if="loading" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>
            <div v-if="item" class="">
                <!-- title -->
                <div class="px-4">
                    <div class="flex justify-center">
                        <h1 class="max-w-4xl text-3xl font-light text-center md:text-4xl lg:text-5xl guard-cairo-font">{{ item.title }}</h1>
                    </div>

                    <div class="flex justify-center m-4 ">
                        <div v-for="(category, i) in item.categories"  :key="i" >
                            <span class="max-w-4xl px-4 py-1 mx-1 font-normal capitalize bg-gray-100 rounded-full text-md">{{ category.name}} </span>
                        </div>
                    </div>
                </div>
                <!-- title -->
                <!-- image -->
                <div class="px-4 pt-4 mb-10">
                    <div class="relative overflow-hidden pb-3/5 ">
                        <si-image  width="400" height="400" class="absolute inset-0 object-cover w-full h-full bg-no-repeat" :src="item.image ? item.image.url : null" :alt="item.name"/>
                    </div>
                </div>
                <!-- image -->
                <div class="flex justify-center ">
                    <div class="max-w-4xl ">
                        <!-- created post  -->
                        <div v-if="$settings.sections.post.creator.active" class="px-4 mb-2">
                            <p class="text-base font-bold leading-5">{{ $settings.sections.post.creator.title }} {{ item.publisher.firstname }} {{ item.publisher.lastname }}</p>
                        </div>
                        <!-- created post  -->
                        <!-- post date -->
                        <div v-if="$settings.sections.post.createdat.active" class="px-4 mb-2">
                            <p class="text-sm">{{ getdate(item.createdAt) }}</p>
                        </div>
                        <!-- post date -->
                        <!-- short description -->
                        <p class="px-4 mt-4 text-base font-normal leading-7 text-gr">{{ item.excerpt }}</p>
                        <!-- short description -->
                        <!-- description -->
                        <div class="px-4">
                            <div  v-if="item" class="text-base font-normal leading-7 text-bl" id="description" v-html="item.content"></div>
                        </div>
                        <!-- description -->
                        <!-- share products icons -->
                        <div class="mt-4 bg-white" v-if="$settings.sections.post.share_buttons.active">
                            <div class="flex items-center justify-center">
                                <h3 class="px-4 mb-3 text-lg font-bold whitespace-nowrap">{{ $settings.sections.post.share_buttons.title }}</h3>
                            </div>
                            <div class="flex justify-center">
                                <div v-for="item in socialMedia.filter(s=>$settings.sections.post.share_buttons[s.name])" :key="item.name" class="flex items-center justify-center m-2">
                                    <a class="flex h-full hover:opacity-80" :href="item.url" target="_blank" rel="noopener noreferrer">
                                        <svg class="w-6 h-6 mx-2 lg:w-8 lg:h-8 hover:opacity-80" aria-label="social media icons" fill-rule="evenodd" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path :d="item.image" fill="currentColor"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- share products icons -->
                    </div>
                </div>
            </div>
            <!-- Realated post -->
            <div class="px-2" v-if="$settings.sections.post.related.active"> 
                <div v-if="item" class="related">
                    <sections-related-posts :item="item"/>
                </div>
            </div>
            <!-- Realated post -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            item: null,
            socialMedia: [
                {
                    name: "whatsapp",
                    url: "https://api.whatsapp.com/send?text={title}%20{url}",
                    image: 'M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z'
                },
                {
                    name: "facebook",
                    url: "https://www.facebook.com/sharer.php?u={url}",
                    image: 'M15.1742424,5.3203125 L17,5.3203125 L17,2.140625 C16.6856061,2.09765625 15.6022727,2 14.3409091,2 C11.7083333,2 9.90530303,3.65625 9.90530303,6.69921875 L9.90530303,9.5 L7,9.5 L7,13.0546875 L9.90530303,13.0546875 L9.90530303,22 L13.4659091,22 L13.4659091,13.0546875 L16.2537879,13.0546875 L16.6969697,9.5 L13.4659091,9.5 L13.4659091,7.05078125 C13.4659091,6.0234375 13.7424242,5.3203125 15.1742424,5.3203125 Z'
                },
                {
                    name: "twitter",
                    url: "https://twitter.com/intent/tweet?url={url}&text={title}",
                    image: 'M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z'
                },
                {
                    name: "linkedin",
                    url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
                    image: 'M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z'
                }
            ]
        }
    },
    async fetch() {
        try {
            const { slug } = this.$route.params;
            const { data } = await this.$storeino.pages.get({ slug, type: 'POST' })
            this.item = data;

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
            if (this.item.image) { this.$store.state.seo.image = this.item.image.url; }


            const url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
            }
            this.loading = false;
        } catch (err) {
            this.$sentry.captureException(err);
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }
    },
    mounted() {
        this.$storeino.fbpx('PageView');
        this.$tools.call('PAGE_VIEW');
    }, methods: {
        getdate(createdDatte) {
            const date = new Date(createdDatte);
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = date.toLocaleDateString("en-US", options);
            return formattedDate
        }
    }
}
</script>
