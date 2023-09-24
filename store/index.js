import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        loading: true,
        customer: null,
        IP: undefined,
        showCurrencyModal: false,
        cart: [],
        isPreview: false,
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
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NTAwOTdhMDgzYjllZjFiZjkxNTZkZmEifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjk1NTUxMzczLCJleHAiOjE3MjcwODczNzN9.wkHVzBDtsABopicSj1aeKAvt6G0IwPmREW8Cz60ktJc',
        // Prod Token
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2MjYxMmZhN2I4ODZkYTAwYTRkNWZmMmYifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNjk0Nzg3NTY0LCJleHAiOjE3MjYzMjM1NjR9.BaWISVP1QJxEdCNmuCwVDxutzwE0yqQnpjBoUyWjzbI',
        primary: {
          rgb: { r: 0, g: 0, b: 0 },
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
    actions: () => { },
    mutations: () => { },
    getters: () => { }
  })
}
export default createStore
