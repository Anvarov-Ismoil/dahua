import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    }
  },
  actions: {
    async fetchProducts({
      commit
    }) {
      const API = 'https://domofon.1611297-cp30907.webtm.ru/categories-products/';
      try {
        const res = await fetch(API)
        const data = await res.json()
        commit('setProducts', data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  }
})