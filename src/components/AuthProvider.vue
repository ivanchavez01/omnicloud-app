<template>
  <div>
    <slot v-if="hasSession"></slot>
    <login-form
      v-else
      @onLoginSuccess="loginSuccessHandler"
      @onLoginError="loginErrorHandler"
    ></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import { mapActions } from "vuex";

export default {
  name: "AuthProvider",
  components: { LoginForm },
  computed: {
    hasSession() {
      return this.$store.state.auth !== null;
    },
  },
  methods: {
    ...mapActions(["login"]),
    loginSuccessHandler(ev) {
      this.login(ev);
    },
    loginErrorHandler() {
      alert("Hubo un error al iniciar sesión");
    },
  },
};
</script>

<style scoped></style>
