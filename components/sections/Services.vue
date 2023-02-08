<template>
<div class="container">
    <div class="flex flex-wrap flex-row justify-between items-center py-6">
      <div class="services flex" v-for="(item, i) in items" :key="i">
        <div class="p-2">
            <nuxt-link :to="item.url" class="flex items-center">
                <si-image width="80" height="80" class="w-16 h-16 p-2 object-cover opacity-70" :src="item.image ? item.image.src : null" :alt="item.text"/>
                <div>
                    <b class="p-2 text-sm">{{ item.text }}</b>
                    <p class="p-2 text-sm">{{ item.description }}</p>
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
.services {
    width: 25%;
}

@media screen and (max-width: 1025px){
    .services {
        width: 50%;
    }
}

@media screen and (max-width: 767px){
    .services {
        width: 100%;
        justify-content: center;
        text-align: center;
    }

    .services a {
        flex-direction: column;
        align-items: center;
    }

    .services img {
        width: 5rem;
        height: 5rem;
    }
    

}
</style>