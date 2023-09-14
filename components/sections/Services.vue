<template>
    <div class="container py-4">
        <div class="p-2 px-4 mb-4" v-show="$settings.sections.services.title.length > 0">
            <h3 class="text-xl font-bold align-center md:text-2xl">{{ $settings.sections.services.title }}</h3>
        </div>
        <div class="flex flex-wrap justify-between px-2 services">
            <div class="flex w-1/2 p-2 service lg:w-1/4" v-for="(item, i) in items" :key="i">
                <div class="w-full p-2 transition-all ease-linear border border-gray-200 services-bg services-text-bg rounded-xl box-shadow-x-hover">
                    <nuxt-link :to="item.url" class="flex flex-col items-center md:flex-row">
                        <si-image width="80" height="80" class="object-cover w-20 h-20 mb-4 md:mb-0 md:w-16 md:h-16 opacity-80" :src="item.image ? item.image.src : item.defaultImage.src" :alt="item.text"/>
                        <div class="service-title md:ml-3">
                            <p class="pb-1 text-base font-bold align-center">{{ item.text }}</p>
                            <p class="pt-1 text-base font-normal align-center">{{ item.description }}</p>
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
                    image: this.$settings.sections.services.items.delivery.image,
                    defaultImage: {
                        src: 'https://storeno.b-cdn.net/themes/bazar/bazar-fastdelivery.png'
                    },
                    text: this.$settings.sections.services.items.delivery.text,
                    url: this.$settings.sections.services.items.delivery.url,
                    description: this.$settings.sections.services.items.delivery.description,
                },
                {
                    image: this.$settings.sections.services.items.satisfaction.image,
                    defaultImage: {
                        src: 'https://storeno.b-cdn.net/themes/bazar/bazar-satisfaction.png'
                    },
                    text: this.$settings.sections.services.items.satisfaction.text,
                    url: this.$settings.sections.services.items.satisfaction.url,
                    description: this.$settings.sections.services.items.satisfaction.description,
                },
                {
                    image: this.$settings.sections.services.items.quality.image,
                    defaultImage: {
                        src: 'https://storeno.b-cdn.net/themes/bazar/bazar-heightqualite.png'
                    },
                    text: this.$settings.sections.services.items.quality.text,
                    url: this.$settings.sections.services.items.quality.url,
                    description: this.$settings.sections.services.items.quality.description,
                },
                {
                    image: this.$settings.sections.services.items.support.image,
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
