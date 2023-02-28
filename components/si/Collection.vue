<template>
    <div class="bg-white border border-gray-200 rounded-xl transition-all ease-linear box-shadow-xs-hover">
        <div class="image_box pb-4/5 relative zoom overflow-hidden rounded-t-xl">
            <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                <si-image  width="400" height="400" class="image_zoom h-full w-full absolute inset-0 object-cover" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
            </nuxt-link>
        </div>
        <div class="p-3">
            <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                <div style="text-align: center;" class="text-base md:text-lg font-bold truncate">{{ item.name }}</div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        }
    }
</script>

<style scoped>
    .img-zom {
        transition:  .2s ease;
    }

    .collection-box:hover .img-zom{
        transform: scale(1.1);
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }

    .collection-box:hover .collection-text{
        text-decoration: underline;
        text-underline-offset: 5px;
    }
</style>