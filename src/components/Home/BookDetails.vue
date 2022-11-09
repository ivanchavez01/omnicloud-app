<template>
  <v-card v-if="book">
    <v-card-title>{{ book.title }}</v-card-title>
    <v-container>
      {{ authorText }}
      {{ book.authors.map((a) => `${a.name} ${a.last_name}`).join(", ") }}
      <br />
      Editorial: {{ book.editorial.name }}
      <br />
      Fecha de publicación: {{ book.published_at }}
      <br />
      Precio: $ {{ book.price }}
      <br />
      <br />
      <a
        :href="`http://localhost:8001/storage/${book.pdf_file.file}`"
        target="_blank"
      >
        Descargar PDF
      </a>
    </v-container>
  </v-card>
  <v-card v-else>
    <v-card-title>Contenido del libro</v-card-title>
    <v-container> Seleccione un libro para ver su detalle </v-container>
  </v-card>
</template>

<script>
export default {
  name: "BookDetails",
  props: {
    book: Object,
  },
  computed: {
    authorText() {
      return this.book.authors.length > 1 ? "Autores: " : "Autor: ";
    },
  },
};
</script>

<style scoped></style>
