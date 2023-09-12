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
          // Dev Token
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NTAwOTdhMDgzYjllZjFiZjkxNTZkZmEiLCJuYW1lIjoiYmF6emFyLXRoZW1lIiwic3ViZG9tYWluIjoiYmF6emFyLXRoZW1lLnN0b3JlaW5vLndvcmxkIn0sInVzZXIiOnsiX2lkIjoiNjI1NDNiNDM1YWY3OGYwMDQ0YjU3YzdlIiwiZmlyc3RuYW1lIjoiYWJkZWxhbGkiLCJsYXN0bmFtZSI6InJhZmlrIiwiZW1haWwiOiJhYmRlbGFsaS5yYWZpazExQGdtYWlsLmNvbSJ9LCJjb21wYW55Ijp7InN0YXR1cyI6IlVOQ09NUExFVEVEIiwiX2lkIjoiNjI1NDNiNDM1YWY3OGYwMDQ0YjU3YzdjIiwibmFtZSI6InNvdTlpbm8ifSwidG9rZW5JZCI6IjExNTMzM01ER01JQjEzMzMzM0lLUlRMRCIsImlhdCI6MTY5NDUzNzc5MiwiZXhwIjoxNjk1NDAxNzkyfQ.ZAyS-tu98FDwZFXrDpoL49Ai22a2MMre_BrEzQ4AGS0',
          // Prod Token
          // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MjYxMmZhN2I4ODZkYTAwYTRkNWZmMmYifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjkyMTczODM0LCJleHAiOjE3MjM3MDk4MzR9.Hy27CGIsqpU5Hn3sp-X47P38x090kBxAurTwmVfN55w',
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
