import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
      state: ()=>{
        return {
          loading:true,
          customer:null,
          cart: [],
          isPreview:false,
          whishlist: [],
          seo: {
            title: '',
            description: '',
            keywords: [],
            url: '',
            image: '',
            metaTags: [],
            scripts: [],
          },
          settings: null,
          domain: 'www.storeino.com',
          apps: [],
          // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2M2VjYjI5MmYzMGI5ZTFkOGIzYzJlZTkifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjc2NDc2NDAzLCJleHAiOjE3MDgwMTI0MDN9.XJJ_kbd526wHtj_KT32ED18P1mDjz4-RcyGgFfPOJDc',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MThmMDFlZjZmYWYzYzAxOWU1ZGEyZTEifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjc1ODQ3NjQ3LCJleHAiOjE3MDczODM2NDd9.dmA6bJF5fftbMsIvhd8oGtzy8ASwOLySFeUByCHr7Uo',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          search: '',
          defaults: {
              image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
              sliderImage: "https://storeno.b-cdn.net/themes/palest/slider.jpeg",
              sideBanner: "https://storeno.b-cdn.net/themes/palest/side-banner.jpeg",
              logo: "https://storeno.b-cdn.net/themes/palest/logo.png",
              icon: "https://storeno.b-cdn.net/themes/palest/icon.png"
          },
          baseURL: 'https://api-stores.storeino.world/api',
          currency: {
            symbol: "DH",
            code: undefined
          },
          language: {
            name: "Unknown",
            code: undefined
          },
          //
          fullImage: null,
          showHeaderMenu: false,
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore
