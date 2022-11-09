<template>
  <v-card>
    <v-card-title>Libros</v-card-title>
    <v-list-item
      three-line
      v-for="book in bookFiltered"
      :key="book.id"
      @click="listItemSelectorHandler(book)"
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ book.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          Editorial: {{ book.editorial.name }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Autores:
          {{ book.authors.map((a) => `${a.name} ${a.last_name}`).join(", ") }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "BookList",
  computed: {
    bookFiltered() {
      return this.books.filter((b) => {
        return (
          b.title.toUpperCase().match(this.search.toUpperCase()) ||
          b.editorial.name.toUpperCase().match(this.search.toUpperCase())
        );
      });
    },
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
  },
  methods: {
    listItemSelectorHandler(book) {
      this.$emit("onSelected", book);
    },
  },
};
</script>

<style scoped></style>
