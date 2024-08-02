<template>
    <nuxt-img @click="$emit('click')" width="200" height="200" :id="id" :src="newSrc" :alt="alt"  preload loading="lazy" />
</template>

<script>
export default {
    props: {
        alt: { type: String, default: 'No alt found' },
        src: { type: String, default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4' },
        property: { type: String, default: null },
        default: { type: String, default: null }
    },
    data() {
        return {
            id: '_' + (Math.random() * 10000).toFixed(0),
            newSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4',
            empty: this.default || this.$store.state.defaults.image
        }
    },
    mounted() {
        this.init();
    },
    watch: {
        src() {
            this.init();
        }
    },
    methods: {
        init() {
            if (this.src && this.src.indexOf('base64') > -1) {
                this.newSrc = this.src.trim()
            } else {
                this.id = '_' + (Math.random() * 10000).toFixed(0);
                this.$nextTick(() => {
                    let element = document.getElementById(this.id);
                    if (!element) element = { clientHeight: 300, clientWidth: 300 };
                    let property = 'Width';
                    if (element.clientHeight > element.clientWidth) property = 'Height';
                    if (this.property) property = this.property.charAt(0).toUpperCase() + this.property.slice(1).toLowerCase();
                    const value = element ? parseInt(element[`client${property}`] * 1.6) : '';
                    this.newSrc = this.src ? `${this.src.trim()}?${property.toLowerCase()}=${value}` : this.empty;
                })
            }
        }
    }
}
</script>