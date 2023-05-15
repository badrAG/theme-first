<template>
    <div class="container py-4">
        <div class="p-2 px-4 mb-4">
            <h3 class="align-center font-bold text-xl md:text-2xl">{{ $settings.sections.services.title }}</h3>
        </div>
        <div class="services flex flex-wrap justify-between px-2">
            <div class="service flex w-1/2 lg:w-1/4 p-2" v-for="(item, i) in items" :key="i">
                <div class="p-2 w-full services-bg services-text-bg border border-gray-200 rounded-xl transition-all ease-linear box-shadow-x-hover">
                    <nuxt-link :to="item.url" class="flex flex-col items-center md:flex-row">
                        <si-image width="80" height="80" class="mb-4 md:mb-0 w-20 h-20 md:w-16 md:h-16 object-cover opacity-80" :src="item.image ? item.image.src : item.defaultImage.src" :alt="item.text"/>
                        <div class="service-title md:ml-3">
                            <p class="align-center text-base font-bold pb-1">{{ item.text }}</p>
                            <p class="align-center text-base font-normal pt-1">{{ item.description }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        image : this.$settings.sections.services.items.delivery.image ,
                        defaultImage: { 
                            src: 'https://storeno.b-cdn.net/themes/bazar/bazar-fastdelivery.png'
                        },
                        text: this.$settings.sections.services.items.delivery.text,
                        url: this.$settings.sections.services.items.delivery.url,
                        description: this.$settings.sections.services.items.delivery.description,
                    },
                    {
                        image : this.$settings.sections.services.items.satisfaction.image ,
                        defaultImage: { 
                            src: 'https://storeno.b-cdn.net/themes/bazar/bazar-satisfaction.png' 
                        },
                        text: this.$settings.sections.services.items.satisfaction.text,
                        url: this.$settings.sections.services.items.satisfaction.url,
                        description: this.$settings.sections.services.items.satisfaction.description,
                    },
                    {
                        image : this.$settings.sections.services.items.quality.image ,
                        defaultImage: { 
                            src: 'https://storeno.b-cdn.net/themes/bazar/bazar-heightqualite.png' 
                        },
                        text: this.$settings.sections.services.items.quality.text,
                        url: this.$settings.sections.services.items.quality.url,
                        description: this.$settings.sections.services.items.quality.description,
                    },
                    {
                        image : this.$settings.sections.services.items.support.image ,
                        defaultImage: { 
                            src: 'https://storeno.b-cdn.net/themes/bazar/bazar-support.png' 
                        },
                        text: this.$settings.sections.services.items.support.text,
                        url: this.$settings.sections.services.items.support.url,
                        description: this.$settings.sections.services.items.support.description,
                    }
                ]
            }
        },
    }
</script>

<style scoped> 



    @media (min-width: 768px) {
        [dir="rtl"] .service-title {
            margin-right: 0.75rem;
            margin-left: 0;
        }
    }
</style>