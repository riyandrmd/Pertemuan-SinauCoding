import { defineStore } from "pinia";
import { ref } from "vue";
import Product from "../json/Product.json";

export const useCartStore = defineStore('cart', () => {
    const count = ref(0)
    const product = ref(Product)
    const cartItem = ref([])


    const addCartItem = (data) => {
        const itemInCart = cartItem.value.find(x => x.id === data.id)
        if (!itemInCart) {
            cartItem.value.push(data);
            count.value++
        } else {
            alert("Item sudah ada di dalam keranjang")
        }

    }

    const deleteCartItem = (data) => {
        const index = cartItem.value.findIndex(x => x.id === data.id);
        if (index !== -1) {
            cartItem.value.splice(index, 1);
            count.value--;
        }
    }

    return { count, product, addCartItem, deleteCartItem, cartItem }
});
