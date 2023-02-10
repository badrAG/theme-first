<template>
<div class="mt-10 testimonial-bg testimonial-text-bg">
    <span style="fill: white" aria-hidden="true">
        <svg class="h-6 block w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path d="M1400 0l-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z"></path>
        </svg>
    </span>

    <div class="container py-20 px-4">
        <div class="container flex justify-center p-2 ">
            <h1 class="text-4xl md:text-5xl guard-cairo-font font-light">{{ testimonial.title }}</h1>
        </div>

        <div class="align-center flex flex-wrap md:justify-between mt-8">
            <div class="mb-5 md:mb-0 w-full md:w-1/3 p-2">
                <h2 class="text-2xl font-semibold mb-5">{{ testimonial.left.title  }}</h2>
                <p class="text-base font-normal">{{ testimonial.left.description  }}</p>
            </div>
            <div class="mb-5 md:mb-0 w-full md:w-1/3 p-2">
                <h2 class="text-2xl font-semibold mb-5">{{ testimonial.center.title  }}</h2>
                <p class="text-base font-normal">{{ testimonial.center.description  }}</p>
            </div>
            <div class="w-full md:w-1/3 p-2">
                <h2 class="text-2xl font-semibold mb-5">{{ testimonial.right.title  }}</h2>
                <p class="text-base font-normal">{{ testimonial.right.description  }}</p>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return {
            testimonial: this.$settings.sections.testimonial,
        }
    }

}
</script>

<style scoped>

</style>
