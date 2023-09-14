<template>
    <div class="flex items-center justify-center">
        <div class="flex justify-between border rounded-lg box-shadow hover:border-gray-400" :class="page=='product'? 'w-full' : ''">
            <div class="flex">                 
                <label class="relative h-full border-black" :class="page=='product'? 'py-3' : 'py-1.5 md:py-2.5'" >
                    <span class="px-3 py-2 text-base font-normal text-center md:py-4 md:px-5 ">{{ value }}</span>
                    <input :min="quantity.min" :max="quantity.max" class="absolute inset-0 w-full h-full px-2 text-base font-normal text-center bg-opacity-0 rounded-lg outline-none" v-model="value" type="number">
                </label>
                <span class="text-base font-normal opacity-95" v-if="quantity.unit" :class="page=='product'? 'flex items-center' : 'hidden'">{{ quantity.unit }}</span>
            </div>
            <div class="flex">
                <!--  -->
                <button @click="inc(-1)" class="text-base font-normal text-black munus-button hover:opacity-90"  :class="[(value > quantity.min? 'bg-primary text-white' : ''),(page=='product'?'px-5':'px-2 md:px-3')]" >
                    <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <!--  -->
                <span class="w-px"></span>
                <!--  -->
                <button @click="inc(1)" class="text-base font-normal text-black rounded-r-lg plus-button hover:opacity-90" :class="[(value < quantity.instock ? 'bg-primary text-white' : ''),(page=='product'?'px-5':'px-2 md:px-3')]">
                    <svg class="w-5 h-5 transform" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <!--  -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quantity: Object,
        page: { type: String, required: false }
    },
    data() {
        return {
            value: this.quantity.value || this.quantity.default || 1
        }
    },
    watch: {
        value(val, old) {
            if (val > this.quantity.instock) this.value = this.quantity.instock;
            if (val < this.quantity.min) this.value = this.quantity.default;
            if (isNaN(val)) this.value = this.quantity.default;
            this.$emit('selected', this.value);
        }
    },
    methods: {
        inc(inc) {
            this.value = Number(this.value) + (Number(this.quantity.increment) * Number(inc))
        }
    },
}
</script>

<style scoped>
[dir="rtl"] .plus-button {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}
</style>