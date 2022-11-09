<template>
  <v-app>
    <auth-provider ref="authProvider">
      <v-app-bar app color="primary" dark v-if="auth !== null">
        <div class="d-flex align-center">
          <v-img
            alt="Omnicloud Logo Icon"
            class="shrink mr-2"
            contain
            src="/img/icon-logo.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Omnicloud Logo Text"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="/img/omnicloud-logo-letters.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <v-menu open-on-hover bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              <span class="mr-2">{{ auth.name }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-list-item-avatar>
              <v-list-item-title>{{ auth.email }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="_signOut">
              <v-list-item-title>Cerrar sesión</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </auth-provider>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AuthProvider from "@/components/AuthProvider.vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "App",
  components: { AuthProvider },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    ...mapActions(["signOut"]),
    _signOut() {
      this.signOut();
    },
  },
});
</script>
