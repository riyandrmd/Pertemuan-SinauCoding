import { defineStore } from "pinia";
import { ref } from "vue";
import Product from "../json/Product.json";

export const useCartStore = defineStore('cart', () => {
    const count = ref(7)
    const name = ref('Eduardo')
    const product = ref(Product)
    const cartItem = ref([])


    const addCartItem = () => {
        count.value++
    }

    const deleteCartItem = () => {
        count.value--
    }

    return { count, name, product, addCartItem, deleteCartItem, cartItem }
});
