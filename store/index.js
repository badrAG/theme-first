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
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NDc1YjM1MGU3NTI3MTIyYzc5M2JjOTkifSwic291cmNlIjoiVEhFTUVTIiwiY3VzdG9tZXIiOnsiX2lkIjoiNjRlNzBmZGJmMDI3YzUwMDExMTFkODg1IiwiZmlyc3RuYW1lIjoiYWJkZWxhbGkiLCJsYXN0bmFtZSI6ImVyLXJhZmlrIiwiZW1haWwiOiJhYmRlbGFsaS5yYWZpazFAZ21haWwuY29tIn0sImlhdCI6MTY5Mjg4NTM3OCwiZXhwIjoxNzI0NDIxMzc4fQ.3d0yYyGTEesdnsZR5w2TH1ERK_gE0xAI4bnXe56StuA',
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
