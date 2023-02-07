<template>
    <div class="flex items-center justify-center ">
            <div class="flex justify-between border box-shadow rounded-lg box-shadow hover:border-gray-400">

                <div class="flex">                 
                    <label class="relative border-black py-1 md:py-2 h-full">
                        <span class="py-2 md:py-4 px-3 md:px-5 text-center ">{{ value }}</span>
                        <input :min="quantity.min" :max="quantity.max" class="rounded-lg px-2 text-center absolute outline-none inset-0 bg-opacity-0 w-full h-full" v-model="value" type="number">
                    </label>
                      <!-- <span class="flex items-center bg-black border border-black px-2" v-if="quantity.unit">{{ quantity.unit }}</span> -->
                </div>

                <div class="flex">
                    <!--  -->
                    <button @click="inc(-1)" class="text-black py-1 md:py-2 px-2 md:px-3   hover:opacity-90" :class="value > quantity.min ? 'bg-primary text-white' : ''">-</button>
                    <!--  -->
                    <button @click="inc(1)" class="text-black py-1 md:py-2 px-2 md:px-3  rounded-r-lg hover:opacity-90" :class="value < quantity.instock ? 'bg-primary text-white' : ''">+</button>
                    <!--  -->
                </div>
                
            </div>
        
    </div>
</template>

<script>

export default {
    props: {
        quantity: Object,
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