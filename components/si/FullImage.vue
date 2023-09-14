<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center p-5 md:p-10" v-if="$store.state.fullImage">
        <div @click="$store.state.fullImage=null" class="absolute inset-0 bg-black bg-opacity-60"></div>
            <si-image class="relative z-10 object-contain w-full bg-white shadow cursor-pointer zooom md:h-full md:w-auto rounded-xl" :src="$store.state.fullImage" :alt="`Full screen image`"/>
        <button @click="$store.state.fullImage=null" class="absolute top-0 right-0 z-20 flex items-center justify-center w-12 h-12 px-2 m-2 transition ease-linear delay-200 bg-white rounded-full shadow-lg scale hover-bg">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape' && this.$store.state.fullImage != null) this.$store.state.fullImage = null;
        })
    }
}
</script>

<style scoped>
.zooom {
    transition: transform 0.3s;
}

.zooom:hover {
    transform: scale(1.05);
}
</style>