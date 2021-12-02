<template>
    <div>
        <v-carousel
            show-arrows-on-hover
            cycle
            interval="7000"
            height="400"
            hide-delimiter-background
        >
            <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        <v-container>
            <v-card-title class="justify-center">Акционные товары</v-card-title>
            <v-row class="myRow">
                <product-component
                    v-for="product in $store.getters.getCurrentCategoryProducts
                        .promotionProducts.products"
                    :key="product.id"
                    v-bind:product="product"
                />
            </v-row>
        </v-container>
        <v-divider />
        <v-container>
            <v-card-title class="justify-center">Хит продаж</v-card-title>
            <v-row class="myRow">
                <product-component
                    v-for="product in $store.getters.getCurrentCategoryProducts
                        .topProducts.products"
                    :key="product.id"
                    v-bind:product="product"
                />
            </v-row>
        </v-container>
        <v-divider />
        <v-container>
            <v-card-title class="justify-center">Рекомендуется вам</v-card-title>
            <v-row class="myRow">
                <product-component
                    v-for="product in $store.getters.getCurrentCategoryProducts
                        .bestCostProducts.products"
                    :key="product.id"
                    v-bind:product="product"
                />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import ProductComponent from '../components/productComponents/ProductComponent.vue';
import { mapMutations } from 'vuex';
export default {
    components: { ProductComponent },
    data() {
        return {
            items: [
                {
                    src:
                        'https://look.com.ua/pic/201702/1920x1080/look.com.ua-198951.jpg',
                },
                {
                    src: 'http://co14.nevseoboi.com.ua/197/19690/1417375622-6055866-www.nevseoboi.com.ua.jpg',
                },
                {
                    src: 'https://s1.1zoom.me/b5050/221/Mouse_computing_Camera_lens_Coffee_Laptops_Camera_572800_1920x1080.jpg',
                },
                {
                    src: 'https://s1.1zoom.ru/big3/660/371388-blackangel.jpg',
                },
            ],
        };
    },
    created() {
        this.setProducts();
        setTimeout(() => this.setCurrentCategoryProducts(), 1500);
    },
    methods: {
        ...mapMutations([
            'setProducts',
            'setCurrentCategoryProducts',
            'getCurrentCategoryProducts',
        ]),
    },
};
</script>

<style scoped>
.myRow {
    margin: 0 auto;
}
</style>
