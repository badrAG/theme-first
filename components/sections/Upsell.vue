<template>
    <div class="container my-5" v-if="item">
        <div class="mb-3">
            <h2 class="px-4 text-xl font-medium">{{ $settings.sections.product.upsell.title }}</h2>
        </div>
        <!-- products -->
        <div class="flex flex-wrap">
            <div v-for="(product, i) in item.products" :key="i" class="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                <si-product :item="product" :upsell="item"></si-product>
            </div>
        </div>
        <!-- products -->
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object, default: null }
    }
}
</script>