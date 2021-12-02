<template>
    <v-footer dark padless>
        <v-card flat tile class="grey darken-4 white--text text-center set-color">
            <v-card>
              <v-row align="stretch" justify="center">
                <v-col cols="6" align="center" class="pad grey darken-4 --white">
                  <h3>About</h3>
                  <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci in libero maxime. Numquam, laudantium similique quas
                dolorem harum ad quidem, ratione amet officia dicta excepturi
                minima obcaecati vitae, tempore eos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                  </p>
                </v-col>
                <v-col cols="6" align="center" class="pad grey darken-4 --white">
                  <h3>Info</h3>
                  <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci in libero maxime. Numquam, laudantium similique quas
                dolorem harum ad quidem, ratione amet officia dicta excepturi
                minima obcaecati vitae, tempore eos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                  </p>
                </v-col>
              </v-row>
            </v-card>

            <v-card-text>
                <v-btn
                    v-for="item in icons"
                    :key="item.id"
                    class="mx-4 white--text"
                    target="_blank"
                    :href="item.link"
                    icon
                >
                    <v-icon size="24px">
                        {{ item.icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text">
                © 2020-{{ new Date().getFullYear() }} —
                <strong>Donetsk</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            { icon: 'mdi-facebook', link: 'https://www.facebook.com/' },
            { icon: 'mdi-twitter', link: 'https://twitter.com/' },
            { icon: 'mdi-linkedin', link: 'https://ru.linkedin.com/' },
            { icon: 'mdi-instagram', link: 'https://www.instagram.com/' },
        ],
    }),
};
</script>

<style scoped>
.v-footer {
    flex-shrink: 0 !important;
    display: inline;
}

.pad{
    padding: 20px !important;
    color: #E0E0E0;
    border: none !important; 
}

</style>
