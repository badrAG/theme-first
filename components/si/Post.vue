<template>
    <div class="h-full flex relative">
      <!--  -->
        <div class="w-full flex flex-col h-full bg-white rounded-xl border box-shadow-xs-hover">
            <div class="pb-4/5 relative overflow-hidden">
                <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                    <si-image width="400" height="400" class="h-full w-full absolute inset-0  object-cover rounded-t-xl" :src="item.image ? item.image.url : null" :alt="item.title"/>
                </nuxt-link>
            </div>
            <!--  -->
            <div class="h-full px-4">
                <div class="flex py-2.5">
                    <div v-for="(category, i) in item.categories"  :key="i" >
                        <span class="categoty capitalize font-normal text-md mr-2">{{ category.name}} </span>
                    </div>
                </div>
                <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                    <h3 class="pb-2.5 text-base font-bold lint leading-5 hover:underline">{{ item.title }}</h3>
                </nuxt-link>
                <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                    <p class="pb-2.5 text-sm font-normal text-gr text-sl">{{ item.excerpt.length > 150? item.excerpt.slice(0, 150) + '...' : item.excerpt }}</p>
                </nuxt-link>
            </div>
            <!--  -->
        </div>
        <!--  -->
    </div>
    </template>
    <script>
    export default {
        props: {
            item: Object
        },

    }
    </script>

<style scoped>
[dir="rtl"] .categoty{
    margin-right: 0;
    margin-left: 0.5rem;
}
</style>