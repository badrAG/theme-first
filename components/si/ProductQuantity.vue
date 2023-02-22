<template>
    <div class="flex items-center justify-center ">
        <div class="flex justify-between border box-shadow rounded-lg box-shadow hover:border-gray-400" :class="page=='product'? 'w-full' : ''">
            <div class="flex">                 
                <label class="relative border-black h-full" :class="page=='product'? 'py-3' : 'py-1.5 md:py-2.5'" >
                    <span class="text-base font-normal py-2 md:py-4 px-3 md:px-5 text-center ">{{ value }}</span>
                    <input :min="quantity.min" :max="quantity.max" class="text-base font-normal rounded-lg px-2 text-center absolute outline-none inset-0 bg-opacity-0 w-full h-full" v-model="value" type="number">
                </label>
                    <span class="flex items-center text-primary border px-2" v-if="quantity.unit">{{ quantity.unit }}</span>
            </div>

            <div class="flex">
                <!--  -->
                <button @click="inc(-1)" class="munus-button text-black  hover:opacity-90 text-base font-normal"  :class="[(value > quantity.min? 'bg-primary text-white' : ''),(page=='product'?'px-5':'px-2 md:px-4')]" >-</button>
                <!--  -->
                <span class="w-px"></span>
                <!--  -->
                <button @click="inc(1)" class="plus-button text-black  rounded-r-lg hover:opacity-90 text-base font-normal" :class="[(value < quantity.instock ? 'bg-primary text-white' : ''),(page=='product'?'px-5':'px-2 md:px-4')]">+</button>
                <!--  -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        quantity: Object,
        page: { 
            type: String,
            required: false
        }
    },
    data() {
        return {
            value: this.quantity.value || this.quantity.default || 1
        
        }
    },
    watch:{
        value(val, old){
            if(val > this.quantity.instock) this.value = this.quantity.instock;
            if(val < this.quantity.min) this.value = this.quantity.default;
            if(isNaN(val)) this.value = this.quantity.default;
            this.$emit('selected', this.value);
        }
    },
    methods: {
        inc(inc){
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