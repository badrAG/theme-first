<template>
<div class="container">
    <div class="flex flex-wrap flex-row justify-between py-6 px-2 md:px-0">
      <div class="flex w-1/2 md:w-1/4" v-for="(item, i) in items" :key="i">
        <div class="flex items-center py-4">
            <nuxt-link :to="item.url" class="flex items-center">
                <si-image width="80" height="80" class="service mx-2 md:mx-4 w-12 h-12 sm:h-14 sm:w-14 lg:w-16 lg:h-16 object-cover opacity-90" :src="item.image ? item.image.src : null" :alt="item.text"/>
                <div>
                    <b class="pb-2 text-sm md:text-base font-bold">{{ item.text }}</b>
                    <p class="pt-2 text-xs md:text-sm font-normal ">{{ item.description }}</p>
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

<style scoped>
/* [dir="rtl"] .service {
    margin-left: 1rem;
    margin-right: 0;

} */
</style>