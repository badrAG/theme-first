<template>
    <!--  -->
    <div class="default_page">
        <!--  -->
        <div class="maintenance_page" v-if="$settings.store_maintenance || !show_store_maintenance">
            <sections-maintenance @openStore="openStore" />
        </div>
        <!--  -->
        <div v-else class="nuxt_page">
            <!--  -->
            <div class="fixed top-0 right-0 z-50" v-if="$settings.store_maintenance_unlocked">
                <div class="bg-blue-500 p-2 cursor-pointer opacity-70 hover:opacity-100 transition-all" @click="closeStore()">
                    <svg class="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
            <!--  -->
            <component :is="'style'">
                :root{  
                    --primary-rgb: {{ rgb.r }}, {{rgb.g}}, {{ rgb.b }}; 
                    --primary-color: rgb(var(--primary-rgb)); 
                    --header-rgb: {{ header_rgb.r }},{{ header_rgb.g  }}, {{ header_rgb.b }} ; 
                    --header-color-bg: rgb(var(--header-rgb)); 
                    --header-text-rgb: {{ header_text_rgb.r }},{{ header_text_rgb.g  }}, {{ header_text_rgb.b }} ; 
                    --header-text-col: rgb(var(--header-text-rgb));          
                    --collection-rgb: {{ collection_rgb.r }},{{ collection_rgb.g  }}, {{ collection_rgb.b }} ; 
                    --collection-color-bg: rgb(var(--collection-rgb));          
                    --collection-text-rgb: {{ collection_text_rgb.r }},{{ collection_text_rgb.g  }}, {{ collection_text_rgb.b }} ; 
                    --collection-text-col: rgb(var(--collection-text-rgb));          
                    --products-price-rgb: {{ products_price_rgb.r }},{{ products_price_rgb.g  }}, {{ products_price_rgb.b }} ; 
                    --products-price-col: rgb(var(--products-price-rgb));          
                    --products-delprice-rgb: {{ products_delprice_rgb.r }},{{ products_delprice_rgb.g  }}, {{ products_delprice_rgb.b }} ; 
                    --products-delprice-col: rgb(var(--products-delprice-rgb));          
                    --testimonial-rgb: {{ testimonial_rgb.r }},{{ testimonial_rgb.g  }}, {{ testimonial_rgb.b }} ; 
                    --testimonial-color-bg: rgb(var(--testimonial-rgb));          
                    --testimonial-text-rgb: {{ testimonial_text_rgb.r }},{{ testimonial_text_rgb.g  }}, {{ testimonial_text_rgb.b }} ; 
                    --testimonial-text-col: rgb(var(--testimonial-text-rgb));
                    --footer-color-rgb: {{ footer_color_rgb.r }},{{ footer_color_rgb.g  }}, {{ footer_color_rgb.b }} ; 
                    --footer-color-bg: rgb(var(--footer-color-rgb));          
                    --footer-text-rgb: {{ footer_text_rgb.r }},{{ footer_text_rgb.g  }}, {{ footer_text_rgb.b }} ; 
                    --footer-text-col: rgb(var(--footer-text-rgb));   
                    --payments-color-rgb: {{ payments_color_rgb.r }},{{ payments_color_rgb.g  }}, {{ payments_color_rgb.b }} ; 
                    --payments-color-bg: rgb(var(--payments-color-rgb));   
                    --copyright-color-rgb: {{ copyright_color_rgb.r }},{{ copyright_color_rgb.g  }}, {{ copyright_color_rgb.b }} ; 
                    --copyright-color-bg: rgb(var(--copyright-color-rgb));          
                    --copyright-text-rgb: {{ copyright_text_rgb.r }},{{ copyright_text_rgb.g  }}, {{ copyright_text_rgb.b }} ; 
                    --copyright-text-col: rgb(var(--copyright-text-rgb));          
                    --addtocart-rgb: {{ addtocart_rgb.r }},{{ addtocart_rgb.g  }}, {{ addtocart_rgb.b }} ; 
                    --addtocart-color-bg: rgb(var(--addtocart-rgb)); 
                    --addtocart-text-rgb: {{ addtocart_text_rgb.r }},{{ addtocart_text_rgb.g  }}, {{ addtocart_text_rgb.b }} ; 
                    --addtocart-text-col: rgb(var(--addtocart-text-rgb));          
                    --buynow-rgb: {{ buynow_rgb.r }},{{ buynow_rgb.g  }}, {{ buynow_rgb.b }} ; 
                    --buynow-color-bg: rgb(var(--buynow-rgb));          
                    --buynow-text-rgb: {{ buynow_text_rgb.r }},{{ buynow_text_rgb.g  }}, {{ buynow_text_rgb.b }} ; 
                    --buynow-text-col: rgb(var(--buynow-text-rgb)); 
                    --services-rgb: {{ services_rgb.r }},{{ services_rgb.g  }}, {{ services_rgb.b }} ; 
                    --services-color-gb: rgb(var(--services-rgb)); 
                    --services-text-rgb: {{ services_text_rgb.r }},{{ services_text_rgb.g  }}, {{ services_text_rgb.b }} ; 
                    --services-text-col: rgb(var(--services-text-rgb)); 
                    --hover-rgb: {{ hover_rgb.r }},{{ hover_rgb.g  }}, {{ hover_rgb.b }} ; 
                    --hover-color-gb: rgb(var(--hover-rgb)); 
                    --hover-text-rgb: {{ hover_text_rgb.r }},{{ hover_text_rgb.g  }}, {{ hover_text_rgb.b }} ; 
                    --hover-text-col: rgb(var(--hover-text-rgb)); 
                }
                .bg-primary{ background-color: var(--primary-color); }
                .bg-primary-hover:hover{ background-color: rgb(var(--primary-rgb)); }
                .bg-primary-border { border-color: var(--primary-color); }
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
                .payments-bg {background-color: var(--payments-color-bg);}
                .copyright-bg {background-color: var(--copyright-color-bg);}
                .copyright-text-bg {color: var(--copyright-text-col);}
                .addtocart-bg {background-color: var(--addtocart-color-bg);}
                .addtocart-text-bg {color: var(--addtocart-text-col);}
                .buynow-bg {background-color: var(--buynow-color-bg);}
                .buynow-text-bg {color: var(--buynow-text-col);}
                .services-bg {background-color: var(--services-color-gb);}
                .services-text-bg {color: var(--services-text-col);}
                .hover-bg,
                .hover-bg-footer {
                    transform: translate3d(0, -1px, 0);
                }
                .hover-bg:hover {
                    background-color: var(--hover-color-gb);
                }
                @media (min-width:0px) and (max-width:768px) {
                    .hover-bg-footer:hover {
                        background-color: var(--hover-color-gb);
                    }
                }
                .hover-text-bg {
                    transition: all 0.3s ease-in-out;
                }
                .hover-text-bg:hover {
                    color: var(--hover-text-col);
                }
            </component>
            <sections-header-top></sections-header-top>
            <sections-scroll-top v-if="$settings.sections.scrolltotop.active"></sections-scroll-top>
            <sections-header></sections-header>
            <sections-header-menu></sections-header-menu>
            <Nuxt />
            <sections-footer></sections-footer>
            <sections-copyright></sections-copyright>
            <si-full-image></si-full-image>
            <div v-if="$settings.other_scripts" class="other-scripts" v-html="$settings.other_scripts"></div>
        </div>
    <!--  -->
    </div>
    <!--  -->
</template>

<script>
export default {
    head() {
        return {
            title: this.$store.state.seo.title,
            meta: [
                { hid: "description", name: "description", content: this.$store.state.seo.description },
                { hid: "og:title", property: "og:title", content: this.$store.state.seo.title },
                { hid: "og:site_name", property: "og:site_name", content: this.$settings ? this.$settings.store_name : "" },
                { hid: "og:type", property: "og:type", content: "article" },
                { hid: "og:description", property: "og:description", content: this.$store.state.seo.description },
                { name: "theme-color", content: this.$settings ? this.$settings.style.primary.color : "#333" },
                { hid: "currency", name: "currency", content: this.$store.state.currency.code },
                ...this.$store.state.seo.metaTags
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: this.$settings.store_favicon ? this.$settings.store_favicon.src : this.$store.state.defaults.icon },
                { rel: "dns-prefetch", href: 'https://storeno.b-cdn.net/stores/' },
            ],
            script: [
                {
                  src: 'https://umami.storeino.world/script.js',
                  'data-website-id': this.$settings.analitycs_shere && this.$settings.analitycs_shere[0]['data-website-id'],
                  rel: "defer"
                }
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
            payments_color_rgb: { r: 0, g: 130, b: 70 },
            copyright_color_rgb: { r: 0, g: 130, b: 70 },
            copyright_text_rgb: { r: 0, g: 130, b: 70 },
            addtocart_rgb: { r: 0, g: 130, b: 70 },
            addtocart_text_rgb: { r: 0, g: 130, b: 70 },
            buynow_rgb: { r: 0, g: 130, b: 70 },
            buynow_text_rgb: { r: 0, g: 130, b: 70 },
            services_rgb: { r: 0, g: 130, b: 70 },
            services_text_rgb: { r: 0, g: 130, b: 70 },
            hover_rgb: { r: 0, g: 130, b: 70 },
            hover_text_rgb: { r: 0, g: 130, b: 70 },
            show_store_maintenance: true,
            show_store_maintenance_unlocked: false
        }
    },
    fetch() {
        this.$store.state.seo.title = this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.store_description;
        this.$store.state.seo.keywords = this.$settings.store_keywords || [];
        if (this.$settings.store_og_image) { 
            this.$store.state.seo.image = this.$settings.store_og_image.src; 
        }
        if (this.$settings.favicon) { 
            this.$store.state.seo.favicon = this.$settings.favicon.src; 
        }
        this.rgb = this.$tools.hexToRgb(this.$settings.style.primary.color);
        this.header_rgb = this.$tools.hexToRgb(this.$settings.style.header.color);
        this.header_text_rgb = this.$tools.hexToRgb(this.$settings.style.header.text_color);
        this.collection_rgb = this.$tools.hexToRgb(this.$settings.style.collection.color);
        this.collection_text_rgb = this.$tools.hexToRgb(this.$settings.style.collection.text_color);
        this.products_price_rgb = this.$tools.hexToRgb(this.$settings.style.products.price_color);
        this.products_delprice_rgb = this.$tools.hexToRgb(this.$settings.style.products.delprice_color);
        this.testimonial_rgb = this.$tools.hexToRgb(this.$settings.style.testimonial.color);
        this.testimonial_text_rgb = this.$tools.hexToRgb(this.$settings.style.testimonial.text_color);
        this.footer_color_rgb = this.$tools.hexToRgb(this.$settings.style.footer.color);
        this.footer_text_rgb = this.$tools.hexToRgb(this.$settings.style.footer.text_color);
        this.payments_color_rgb = this.$tools.hexToRgb(this.$settings.style.footer.payments_color);
        this.copyright_color_rgb = this.$tools.hexToRgb(this.$settings.style.copyright.color);
        this.copyright_text_rgb = this.$tools.hexToRgb(this.$settings.style.copyright.text_color);
        this.addtocart_rgb = this.$tools.hexToRgb(this.$settings.style.addtocart.color);
        this.addtocart_text_rgb = this.$tools.hexToRgb(this.$settings.style.addtocart.text_color);
        this.buynow_rgb = this.$tools.hexToRgb(this.$settings.style.buynow.color);
        this.buynow_text_rgb = this.$tools.hexToRgb(this.$settings.style.buynow.text_color);
        this.services_rgb = this.$tools.hexToRgb(this.$settings.style.services.color);
        this.services_text_rgb = this.$tools.hexToRgb(this.$settings.style.services.text_color);
        this.hover_rgb = this.$tools.hexToRgb(this.$settings.style.hover.color);
        this.hover_text_rgb = this.$tools.hexToRgb(this.$settings.style.hover.text_color);
    },
    methods: {
        openStore(active) {
            this.show_store_maintenance = active
        },
        closeStore() {
            document.cookie = `store_maintenance_code=${this.code}`;
            this.show_store_maintenance = false
        }
    }
}
</script>
