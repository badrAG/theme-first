<template>
    <div class="flex justify-center items-center fixed z-50 inset-0 md:p-10 p-5" v-if="$store.state.fullImage">
        <div @click="$store.state.fullImage=null" class="bg-black absolute inset-0 bg-opacity-60"></div>
            <si-image class="zooom relative md:h-full w-full md:w-auto z-10 object-contain bg-white rounded-xl shadow cursor-pointer" :src="$store.state.fullImage" :alt="`Full screen image`"/>
        <button @click="$store.state.fullImage=null" class="absolute top-0 z-20 right-0 m-2 bg-white rounded-full shadow-lg w-12 h-12 px-2 flex items-center justify-center transition ease-linear delay-200 scale hover-bg"><fa class="text-xl"  :icon="['fa', 'xmark']"></fa></button>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.addEventListener('keydown', (e)=>{
                if(e.key == 'Escape' && this.$store.state.fullImage != null) this.$store.state.fullImage=null;
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