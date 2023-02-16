<template>
    <div>
        <component :is="'style'">
            :root{ --primary-rgb: {{ rgb.r }}, {{rgb.g}}, {{ rgb.b }}; --primary-color: rgb(var(--primary-rgb)); 
                   --header-rgb: {{ header_rgb.r }},{{ header_rgb.g  }}, {{ header_rgb.b }} ; --header-color-bg: rgb(var(--header-rgb)); 
                   --header-text-rgb: {{ header_text_rgb.r }},{{ header_text_rgb.g  }}, {{ header_text_rgb.b }} ; --header-text-col: rgb(var(--header-text-rgb));          
                   --collection-rgb: {{ collection_rgb.r }},{{ collection_rgb.g  }}, {{ collection_rgb.b }} ; --collection-color-bg: rgb(var(--collection-rgb));          
                   --collection-text-rgb: {{ collection_text_rgb.r }},{{ collection_text_rgb.g  }}, {{ collection_text_rgb.b }} ; --collection-text-col: rgb(var(--collection-text-rgb));          
                  
                   --products-price-rgb: {{ products_price_rgb.r }},{{ products_price_rgb.g  }}, {{ products_price_rgb.b }} ; --products-price-col: rgb(var(--products-price-rgb));          
                   --products-delprice-rgb: {{ products_delprice_rgb.r }},{{ products_delprice_rgb.g  }}, {{ products_delprice_rgb.b }} ; --products-delprice-col: rgb(var(--products-delprice-rgb));          
                   --testimonial-rgb: {{ testimonial_rgb.r }},{{ testimonial_rgb.g  }}, {{ testimonial_rgb.b }} ; --testimonial-color-bg: rgb(var(--testimonial-rgb));          
                   --testimonial-text-rgb: {{ testimonial_text_rgb.r }},{{ testimonial_text_rgb.g  }}, {{ testimonial_text_rgb.b }} ; --testimonial-text-col: rgb(var(--testimonial-text-rgb));          
                   --footer-color-rgb: {{ footer_color_rgb.r }},{{ footer_color_rgb.g  }}, {{ footer_color_rgb.b }} ; --footer-color-bg: rgb(var(--footer-color-rgb));          
                   --footer-text-rgb: {{ footer_text_rgb.r }},{{ footer_text_rgb.g  }}, {{ footer_text_rgb.b }} ; --footer-text-col: rgb(var(--footer-text-rgb));          
                   --copyright-color-rgb: {{ copyright_color_rgb.r }},{{ copyright_color_rgb.g  }}, {{ copyright_color_rgb.b }} ; --copyright-color-bg: rgb(var(--copyright-color-rgb));          
                   --copyright-text-rgb: {{ copyright_text_rgb.r }},{{ copyright_text_rgb.g  }}, {{ copyright_text_rgb.b }} ; --copyright-text-col: rgb(var(--copyright-text-rgb));          
                   --addtocart-rgb: {{ addtocart_rgb.r }},{{ addtocart_rgb.g  }}, {{ addtocart_rgb.b }} ; --addtocart-color-bg: rgb(var(--addtocart-rgb)); 
                   --addtocart-text-rgb: {{ addtocart_text_rgb.r }},{{ addtocart_text_rgb.g  }}, {{ addtocart_text_rgb.b }} ; --addtocart-text-col: rgb(var(--addtocart-text-rgb));          
                   --buynow-rgb: {{ buynow_rgb.r }},{{ buynow_rgb.g  }}, {{ buynow_rgb.b }} ; --buynow-color-bg: rgb(var(--buynow-rgb));          
                   --buynow-text-rgb: {{ buynow_text_rgb.r }},{{ buynow_text_rgb.g  }}, {{ buynow_text_rgb.b }} ; --buynow-text-col: rgb(var(--buynow-text-rgb));          
                }
            .bg-primary{ background-color: var(--primary-color); }
            .bg-primary-hover:hover{ background-color: rgb(var(--primary-rgb)); }
            .text-primary{ color: var(--primary-color); }
            .header-bg {background-color: var(--header-color-bg);}
            .header-text-color {color: var(--header-text-col);}
            .header-bg-border {border-color: var(--header-text-col);}
            .collection-bg {background-color: var(--collection-color-bg);}
            .collection-text-bg {color: var(--collection-text-col);}
            .testimonial-bg {background-color: var(--testimonial-color-bg);}
            .testimonial-text-bg {color: var(--testimonial-text-col);}
            .products-price-text-bg {color: var(--products-price-col);}
            .products-delprice-text-bg {color: var(--products-delprice-col);}
            .footer-bg {background-color: var(--footer-color-bg);}
            .footer-text-bg {color: var(--footer-text-col);}
            .copyright-bg {background-color: var(--copyright-color-bg);}
            .copyright-text-bg {color: var(--copyright-text-col);}
            .addtocart-bg {background-color: var(--addtocart-color-bg);}
            .addtocart-text-bg {color: var(--addtocart-text-col);}
            .buynow-bg {background-color: var(--buynow-color-bg);}
            .buynow-text-bg {color: var(--buynow-text-col);}
        </component>
        <sections-scroll-top v-if="$settings.sections.scrolltotop.active"></sections-scroll-top>
        <sections-header></sections-header>
        <sections-header-menu></sections-header-menu>
        <Nuxt keep-alive/>
        <sections-footer></sections-footer>
        <sections-copyright></sections-copyright>
        <si-full-image></si-full-image>
    </div>
</template>
<script>
export default {
    head(){
        return {
            title: this.$store.state.seo.title,
            meta: [
                { hid: 'description', name: 'description', content: this.$store.state.seo.description },
                { hid: 'keywords', name: 'keywords', content: this.$store.state.seo.keywords.join(',') },
                { hid: 'og:title', property: 'og:title', content: this.$store.state.seo.title },
                { hid: 'og:site_name', property: 'og:site_name', content: this.$settings.store_name },
                { hid: 'og:description', property: 'og:description', content: this.$store.state.seo.description },
                { hid: 'og:image', property: 'og:image', content: this.$store.state.seo.image },
                { hid: 'og:url', property: 'og:url', content: this.$store.state.seo.url },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.seo.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.seo.description },
                { hid: 'twitter:image', name: 'twitter:image', content: this.$store.state.seo.logo },
                { hid: 'twitter:url', name: 'twitter:url', content: this.$store.state.seo.url },
                { hid: "theme-color", property: "theme-color", content: this.$settings.style.primary_color },
                { hid: "currency", name: "currency", content: this.$store.state.currency.code },
                { hid: "product:price:currency", property: "product:price:currency", content: this.$store.state.currency.code },
                { hid: "priceCurrency", itemprop: "priceCurrency", content: this.$store.state.currency.code },
                ...this.$store.state.seo.metaTags
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: this.$settings.store_favicon ? this.$settings.store_favicon.src : this.$store.state.defaults.icon },
                { rel: "dns-prefetch", href: 'https://storeno.b-cdn.net/stores/' },
                ...this.otherLinks
            ],
            htmlAttrs: {
                lang: this.$store.state.language.code,
                dir: this.$store.state.language.code == 'AR' ? 'rtl' : 'ltr'
            }
        }
    },
    data() {
        return {
            rgb: { r: 0, g: 130, b: 70 },
            header_rgb: { r: 0, g: 130, b: 70 },
            header_text_rgb: { r: 0, g: 130, b: 70 },
            collection_rgb: { r: 0, g: 130, b: 70 },
            collection_text_rgb: { r: 0, g: 130, b: 70 },
            products_price_rgb: { r: 0, g: 130, b: 70 },
            products_delprice_rgb: { r: 0, g: 130, b: 70 },
            testimonial_rgb: { r: 0, g: 130, b: 70 },
            testimonial_text_rgb: { r: 0, g: 130, b: 70 },
            footer_color_rgb: { r: 0, g: 130, b: 70 },
            footer_text_rgb: { r: 0, g: 130, b: 70 },
            copyright_color_rgb: { r: 0, g: 130, b: 70 },
            copyright_text_rgb: { r: 0, g: 130, b: 70 },
            addtocart_rgb: { r: 0, g: 130, b: 70 },
            addtocart_text_rgb: { r: 0, g: 130, b: 70 },
            buynow_rgb: { r: 0, g: 130, b: 70 },
            buynow_text_rgb: { r: 0, g: 130, b: 70 },
            otherLinks: [
                ]
        }
    },
    async fetch(){
        this.$store.state.seo.title = this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.store_description;
        this.$store.state.seo.keywords = this.$settings.store_keywords || [];
        if(this.$settings.store_og_image){ this.$store.state.seo.image = this.$settings.store_og_image.src; }
        if(this.$settings.favicon){ this.$store.state.seo.favicon = this.$settings.favicon.src; }
        this.rgb = this.$tools.hexToRgb(this.$settings.style.primary_color);
        this.header_rgb = this.$tools.hexToRgb(this.$settings.style.header_color);
        this.header_text_rgb = this.$tools.hexToRgb(this.$settings.style.header_text_color);
        this.collection_rgb = this.$tools.hexToRgb(this.$settings.style.collection_color);
        this.collection_text_rgb = this.$tools.hexToRgb(this.$settings.style.collection_text_color);
        this.products_price_rgb = this.$tools.hexToRgb(this.$settings.style.products_price_color);
        this.products_delprice_rgb = this.$tools.hexToRgb(this.$settings.style.products_delprice_color);
        this.testimonial_rgb = this.$tools.hexToRgb(this.$settings.style.testimonial_color);
        this.testimonial_text_rgb = this.$tools.hexToRgb(this.$settings.style.testimonial_text_color);
        this.footer_color_rgb = this.$tools.hexToRgb(this.$settings.style.footer_color);
        this.footer_text_rgb = this.$tools.hexToRgb(this.$settings.style.footer_text_color);
        this.copyright_color_rgb = this.$tools.hexToRgb(this.$settings.style.copyright_color);
        this.copyright_text_rgb = this.$tools.hexToRgb(this.$settings.style.copyright_text_color);
        this.addtocart_rgb = this.$tools.hexToRgb(this.$settings.style.addtocart_color);
        this.addtocart_text_rgb = this.$tools.hexToRgb(this.$settings.style.addtocart_text_color);
        this.buynow_rgb = this.$tools.hexToRgb(this.$settings.style.buynow_color);
        this.buynow_text_rgb = this.$tools.hexToRgb(this.$settings.style.buynow_text_color);
        if(this.$store.state.language.code == 'AR'){
            this.otherLinks = [
                { rel: "preconnect", href: 'https://fonts.googleapis.com' },
                { rel: "preconnect", href: 'https://fonts.gstatic.com', crossorigin: true },
                { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap' }
            ]
        }
    },
    methods: {
    }
}
</script>
