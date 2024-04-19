import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const useStore = defineStore({
  id: 'http',
  state: () => ({
    products : null,
    product : null
  }),
  getters: {

  },
  actions: {
    async getProducts(){
      try {
        let response = await axios.get("/products")
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products :' , error);
      }
    },
    async getProduct(id) {
      try {
        let response = await axios.get("/products"+id)
        this.product = response.data;
        return this.product
      }catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  }
})

