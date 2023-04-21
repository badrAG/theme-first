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
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NDE0NDlmOGY3NTI5MDIwOGI1NmJhODciLCJuYW1lIjoiZGlvciIsInN1YmRvbWFpbiI6ImRpb3Iuc3RvcmVpbm8ud29ybGQifSwidXNlciI6eyJfaWQiOiI2MjU0M2I0MzVhZjc4ZjAwNDRiNTdjN2UiLCJmaXJzdG5hbWUiOiJhYmRlbGFsaSIsImxhc3RuYW1lIjoicmFmaWsiLCJlbWFpbCI6ImFiZGVsYWxpLnJhZmlrMTFAZ21haWwuY29tIn0sImNvbXBhbnkiOnsic3RhdHVzIjoiVU5DT01QTEVURUQiLCJfaWQiOiI2MjU0M2I0MzVhZjc4ZjAwNDRiNTdjN2MiLCJuYW1lIjoic291OWlubyJ9LCJ0b2tlbklkIjoiNDEwMTExWkpLQ1JaMDAwMTEwVUZVU0RUIiwiaWF0IjoxNjgyMDc1NTQ2LCJleHAiOjE2ODI5Mzk1NDZ9.T0mmU_8xxaF8BZLWlJYyMBZmL9AEdruQA5NNzTL8XVE',
          // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NDFkN2ViN2Y3NTI5MDIwOGI1NmJkYWYiLCJuYW1lIjoibWFoYWwiLCJzdWJkb21haW4iOiJtYWhhbC5zdG9yZWluby53b3JsZCJ9LCJ1c2VyIjp7Il9pZCI6IjYyNTQzYjQzNWFmNzhmMDA0NGI1N2M3ZSIsImZpcnN0bmFtZSI6ImFiZGVsYWxpIiwibGFzdG5hbWUiOiJyYWZpayIsImVtYWlsIjoiYWJkZWxhbGkucmFmaWsxMUBnbWFpbC5jb20ifSwiY29tcGFueSI6eyJzdGF0dXMiOiJVTkNPTVBMRVRFRCIsIl9pZCI6IjYyNTQzYjQzNWFmNzhmMDA0NGI1N2M3YyIsIm5hbWUiOiJzb3U5aW5vIn0sInRva2VuSWQiOiI5NDQ5NDlJVUJCVEk0MDQwOTRYTFJSRFAiLCJpYXQiOjE2ODIwNzQ5NjIsImV4cCI6MTY4MjkzODk2Mn0.vi8yp9gYcc2NqjCINjQh0wOylizs1wZLketIbjKPNkg',
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
