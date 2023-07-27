<template>
    <div>
        <div class="container my-6 bg-white ">
            <div v-if="loading" class="flex justify-center items-center my-5">
                <si-loader></si-loader>
            </div>
            <div v-if="item" class="">
                <!-- title -->
                <div class="px-4">
                    <div class="flex justify-center">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl guard-cairo-font font-light text-center max-w-4xl">{{ item.title }}</h1>
                    </div>

                    <div class="flex justify-center m-4 ">
                        <div v-for="(category, i) in item.categories"  :key="i" >
                            <span class="capitalize font-normal text-md py-1 px-4 mx-1 rounded-full bg-gray-100 max-w-4xl">{{ category.name}} </span>
                        </div>
                    </div>
                </div>
                <!-- title -->
                <!-- image -->
                <div class="px-4 pt-4 mb-10">
                    <div class="relative pb-3/5 overflow-hidden ">
                        <si-image  width="400" height="400" class="h-full w-full absolute inset-0 object-cover bg-no-repeat" :src="item.image ? item.image.url : null" :alt="item.name"/>
                    </div>
                </div>
                <!-- image -->
                <div class="flex justify-center ">
                    <div class="max-w-4xl ">
                        <!-- created post  -->
                        <div v-if="$settings.sections.post.creator.active" class="px-4 mb-2">
                            <p class="font-bold text-base leading-5">{{ $settings.sections.post.creator.title }} {{ item.publisher.firstname }} {{ item.publisher.lastname }}</p>
                        </div>
                        <!-- created post  -->
                        <!-- post date -->
                        <div v-if="$settings.sections.post.createdat.active" class="px-4 mb-2">
                            <p class="text-sm">{{ getdate(item.createdAt) }}</p>
                        </div>
                        <!-- post date -->
                        <!-- short description -->
                        <p class="px-4 mt-4 font-normal text-base leading-7 text-gr">{{ item.excerpt }}</p>
                        <!-- short description -->
                        <!-- description -->
                        <div class="px-4">
                            <div  v-if="item" class="font-normal text-base leading-7 text-bl" id="description" v-html="item.content"></div>
                        </div>
                        <!-- description -->
                        <!-- share products icons -->
                        <div class="bg-white mt-4" v-if="$settings.sections.post.share_buttons.active">
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
                const { data } = await this.$storeino.pages.get({ slug, type: 'POST' })
                this.item = data;
    
                this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
                this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
                if(this.item.image){ this.$store.state.seo.image = this.item.image.url; }
    
    
                let url = `https://${this.$store.state.domain}/posts/${slug}`;
                for (const button of this.socialMedia) {
                    button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
                }
                this.loading = false;
            }catch(e){
                console.log({e});
                this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
            }
        },
        mounted() {
            this.$storeino.fbpx('PageView')
        },methods: {
            getdate(createdDatte){
                const date = new Date(createdDatte);
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const formattedDate = date.toLocaleDateString("en-US", options);
                return formattedDate
            }
        }
    }
</script>
