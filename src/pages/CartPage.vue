<template>
    <v-container>
        <div v-if="$store.getters.getCartCount > 0">
            <v-row class="myRow">
                <product-component
                    v-for="product in $store.getters.getCart"
                    :key="product.id"
                    v-bind:product="product"
                />
            </v-row>

            <hr class="navbar-divider" />

            <div class="pa-5 navbar-item">
                Сумма всех товаров составляет: {{ totalPrice }}$
            </div>

            <v-btn>
                Оплатить
            </v-btn>
        </div>

        <div v-else>
            <div class="pa-5 navbar-item">
                Корзина в данный момент пуста
            </div>
            <v-btn @click="$router.push(`/catalog`)">
                Перейти к покупкам
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import ProductComponent from '../components/productComponents/ProductComponent.vue';
import { mapMutations } from 'vuex';
export default {
    components: { ProductComponent },
    computed: {
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.cartModule.cart) {
                total += Number(item.totalPrice);
            }

            return total.toFixed(2);
        },
    },
    methods: {
        ...mapMutations(['addToCart', 'removeFromCart']),
    },
    created() {},
};
</script>

<style scoped>
.myRow {
    margin: 0 auto;
}
.container {
    text-align: center;
}
</style>
