<template>
  <v-text-field
    @input="inputHandler"
    prepend-inner-icon="mdi-magnify"
    filled
    rounded
    placeholder="Buscar libros"
  ></v-text-field>
</template>

<script>
export default {
  name: "BookSearcher",
  methods: {
    inputHandler(ev) {
      this.$emit("search", ev);
    },
  },
};
</script>

<style scoped></style>
