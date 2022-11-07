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
export default {
  name: "AuthProvider",
  components: { LoginForm },
  data: () => ({
    hasSession: false,
  }),
  methods: {
    loginSuccessHandler() {
      this.hasSession = true;
    },
    loginErrorHandler(ev) {
      alert("Hubo un error al iniciar sesión");
    },
  },
};
</script>

<style scoped></style>
