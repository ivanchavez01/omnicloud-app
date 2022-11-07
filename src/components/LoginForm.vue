<template>
  <div class="login-wallpaper">
    <v-container>
      <v-row justify="center" class="mt-6">
        <v-col md="4">
          <v-card elevation="1">
            <v-card-title>OMNICLOUD</v-card-title>
            <v-card-subtitle>Iniciar sesión</v-card-subtitle>
            <div>
              <v-form ref="loginForm" v-model="loginFormValid" lazy-validation>
                <v-text-field
                  v-model="email"
                  prepend-inner-icon="mdi-email"
                  filled
                  shaped
                  placeholder="Email"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  prepend-inner-icon="mdi-lock"
                  filled
                  shaped
                  placeholder="Contraseña"
                ></v-text-field>
              </v-form>
            </div>
            <v-card-actions>
              <v-btn
                color="primary"
                class="float-right"
                rounded
                @click="startSession()"
              >
                Iniciar sesión
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data: () => ({
    loginFormValid: false,
    showPassword: false,
    email: null,
    password: null,
  }),
  methods: {
    async startSession() {
      let email = this.email;
      let password = this.password;
      try {
        const { data } = await axios.post(`http://localhost:8001/api/login`, {
          email,
          password,
        });
        this.$emit("onLoginSuccess", data);
      } catch (e) {
        this.$emit("onLoginError", e);
      }
    },
  },
};
</script>

<style scoped></style>
