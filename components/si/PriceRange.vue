<template>
    <div class="px-2 mx-1 mt-1">
        <div class="relative flex items-center h-1 px-6 mx-2 bg-gray-200 rounded-md range">
            <div class="absolute top-0 range-width h-0.5" :style="`left:${minVal*100/max}%;width:${(maxVal-minVal)*100/max}%`"></div>
            <input class="absolute top-0 left-0 w-full h-1 bg-transparent appearance-none min" type="range" v-model="minVal" :min="min" :max="max" @change="setParams($event, 'price.salePrice-from')">
            <input class="absolute top-0 left-0 w-full h-1 bg-transparent appearance-none max" type="range" v-model="maxVal" :min="min" :max="max" @change="setParams($event, 'price.salePrice-to')">
        </div>
        <div class="flex justify-between m-1">
            <b>{{ min }}</b>
            <b>{{ max }}</b>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 }

    },
    watch: {
        minVal: function (val) {
            if (Number(val) > Number(this.maxVal)) {
                this.minVal = this.maxVal;
            }
        },
        maxVal: function (val) {
            if (Number(val) < Number(this.minVal)) {
                this.maxVal = this.minVal;
            }
        }
    },
    data() {
        return {
            minVal: this.min,
            maxVal: this.max
        }
    },
    methods: {
        setParams(event, key) {
            this.$emit('change', event, key);
        }
    },
}
</script>

<style>
.range input::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    background: var(--primary-color);
    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.2);
}

.range input.min::-webkit-slider-thumb {
    right: 5px;
}

.range input.max::-webkit-slider-thumb {
    left: 5px;
}

.range .range-width {
    background-color: var(--primary-color);
    opacity: 0.7;
}
</style>