<template>
    <div class="container py-4">
        <div class="p-2 px-4 mb-4">
            <h3 class="align-center font-semibold text-lg md:text-xl lg:text-2xl">{{ $settings.sections.services.title }}</h3>
        </div>
        <div class="services flex flex-wrap justify-between items-center px-2">
            <div class="service flex w-full sm:w-1/2 lg:w-1/4 p-2" v-for="(item, i) in items" :key="i">
                <div class="w-full bg-white border border-gray-200 rounded-xl transition-all ease-linear box-shadow-x-hover overflow-hidden">
                    <nuxt-link :to="item.url" class="flex items-center">
                        <si-image width="80" height="80" class="w-20 h-20 p-2 object-cover opacity-80" :src="item.image ? item.image.src : null" :alt="item.text"/>
                        <div class="mx-2">
                            <b class="text-base font-bold mb-1">{{ item.text }}</b>
                            <p class="text-base font-normal mt-1">{{ item.description }}</p>
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
                    image: { src: 'https://cdn-icons-png.flaticon.com/512/7610/7610711.png' },
                    text: this.$settings.sections.services.items.delivery.text,
                    url: this.$settings.sections.services.items.delivery.url,
                    description: this.$settings.sections.services.items.delivery.description,
                },
                {
                    image: { src: 'https://cdn-icons-png.flaticon.com/512/3257/3257683.png' },
                    text: this.$settings.sections.services.items.satisfaction.text,
                    url: this.$settings.sections.services.items.satisfaction.url,
                    description: this.$settings.sections.services.items.satisfaction.description,
                },
                {
                    image: { src: 'https://cdn-icons-png.flaticon.com/512/1534/1534216.png' },
                    text: this.$settings.sections.services.items.quality.text,
                    url: this.$settings.sections.services.items.quality.url,
                    description: this.$settings.sections.services.items.quality.description,
                },
                {
                    image: { src: 'https://cdn-icons-png.flaticon.com/512/950/950299.png' },
                    text: this.$settings.sections.services.items.support.text,
                    url: this.$settings.sections.services.items.support.url,
                    description: this.$settings.sections.services.items.support.description,
                }
            ]
        }
    },
}
</script>