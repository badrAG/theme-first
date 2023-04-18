import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
      state: ()=>{
        return {
          loading:true,
          customer:null,
          IP: undefined,
          showCurrencyModal: false,
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
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNTQzYjQzNWFmNzhmMDA0NGI1N2M3ZSIsImZpcnN0bmFtZSI6ImFiZGVsYWxpIiwibGFzdG5hbWUiOiJyYWZpayIsInBvc2l0aW9uIjoiQ0xJRU5UIiwiZW1haWwiOiJhYmRlbGFsaS5yYWZpazExQGdtYWlsLmNvbSIsImFkZHJlc3MiOm51bGx9LCJjb21wYW55Ijp7Il9pZCI6IjYyNTQzYjQzNWFmNzhmMDA0NGI1N2M3YyIsIm5hbWUiOiJzb3U5aW5vIiwic3RhdHVzIjoiVU5DT01QTEVURUQifSwic3RvcmUiOnsiX2lkIjoiNjQxZDdlYjdmNzUyOTAyMDhiNTZiZGFmIiwibmFtZSI6Im1haGFsIiwic3ViZG9tYWluIjoibWFoYWwuc3RvcmVpbm8ud29ybGQifSwidG9rZW5JZCI6Ijc3MDY2OE1RQVRDRjY3MDA2MEpKUVhTTyIsImlhdCI6MTY4MTgxMjE1OSwiZXhwIjoxNjgyNjc2MTU5fQ.cnj0LkpOVie35rVf1Jru_lZaTf8RpCxqltCV20lDH9E',
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          search: '',
          defaults: {
              image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
              sliderImage: "https://storeno.b-cdn.net/themes/palest/slider.jpeg",
              sideBanner: "https://storeno.b-cdn.net/themes/palest/side-banner.jpeg",
              logo: "https://storeno.b-cdn.net/themes/bazar/Logo.png",
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
          showHeaderMenu: false
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore
