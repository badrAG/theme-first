<template>
    <div class="container my-6 bg-white">
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>
        <div v-if="item" class="">
            <h1 class="text-3xl md:text-4xl font-light guard-cairo-font px-4 mb-1 ">{{ item.title }}</h1>
            <p class="px-4 text-lg"><small>{{ item.excerpt }}</small></p>
            <div  v-if="item" class="bg-white text-base font-normal leading-7 rounded-md mt-4 px-4 description" id="description" v-html="item.content"></div>
            <div v-if="$route.params.slug && $route.params.slug.indexOf('contact') > -1">
                <si-app-loader :placement="'AFTER_CONTACT_PAGE'"/>
            </div>
            <!-- share products icons -->
            <div class="bg-white mt-4">
                <div class="flex items-center justify-center">
                    <h3 class="whitespace-nowrap text-lg font-bold px-4 mb-3">{{ $settings.sections.post.share_buttons.title }}</h3>
                </div>
                <div class="flex justify-center">
                    <div v-for="item in socialMedia.filter(s=>$settings.sections.post.share_buttons[s.name])" :key="item.name" class="m-2 flex items-center justify-center">
                        <a class="h-full flex hover:opacity-80" :href="item.url" target="_blank" rel="noopener noreferrer">
                        <fa class="text-3xl mx-2" :icon="['fab', item.name]"></fa>
                        </a>
                    </div>
                </div>
            </div>
            <!-- share products icons -->
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
                        name: 'whatsapp',
                        url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                        image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                    },
                    {
                        name: 'facebook',
                        image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                        url: 'https://www.facebook.com/sharer.php?u={url}'
                    },
                    {
                        name: 'twitter',
                        url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                        image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                    },
                    {
                        name: 'linkedin',
                        url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                        image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                    }
                ]
            }
        },
        async fetch(){
            try{
                const { slug } = this.$route.params;
                const { data } = await this.$storeino.pages.get({ slug, type: 'PAGE' })
                this.item = data;

                this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
                this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
                if(this.item.image){ this.$store.state.seo.image = this.item.image.url; }

                let url = `https://${this.$store.state.domain}/pages/${slug}`;
                for (const button of this.socialMedia) {
                    button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
                }
                this.loading = false;
            }catch(e){
                console.log({e});
                // Redirect to error page if product not exists
                this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
            }
        },
        mounted(){
        this.$storeino.fbpx('PageView')
        }
    }
</script>
