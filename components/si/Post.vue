<template>
    <div class="relative flex h-full">
        <div class="flex flex-col w-full h-full bg-white border rounded-xl box-shadow-xs-hover">
            <div class="relative overflow-hidden pb-4/5">
                <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                    <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full rounded-t-xl" :src="item.image ? item.image.url : null" :alt="item.title"/>
                </nuxt-link>
            </div>
            <div class="h-full px-4 pt-3">
                <div class="flex pb-3" v-if="$settings.sections.blogs.show_categories">
                    <div v-for="(category, i) in item.categories"  :key="i">
                        <span class="mr-2 font-normal capitalize categoty text-md">{{ category.name}}</span>
                    </div>
                </div>
                <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                    <h3 class="pb-3 text-base font-bold leading-5 lint hover:underline">{{ item.title }}</h3>
                </nuxt-link>
                <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
                    <p class="pb-3 text-sm font-normal text-gr text-sl">{{ item.excerpt.length > 150? item.excerpt.slice(0, 150) + '...' : item.excerpt }}</p>
                </nuxt-link>
            </div>
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
[dir="rtl"] .categoty {
    margin-right: 0;
    margin-left: 0.5rem;
}
</style>