<template>
  <v-container>
    <v-row>
      <v-col md="8">
        <v-card>
          <v-card-title>Libros</v-card-title>

          <v-list-item three-line v-for="book in books" :key="book.id">
            <v-list-item-content>
              <v-list-item-title>
                {{ book.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                Editorial: {{ book.editorial.name }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                Autores:
                {{
                  book.authors.map((a) => `${a.name} ${a.lastName}`).join(", ")
                }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="4"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class HomeView extends Vue {
  name = "HomeView";
  books: BookDto[] = [];

  async mounted() {
    const { data } = await axios.get(`http://localhost:8001/api/book`);
    this.books = data;
  }
}

interface BookDto {
  id: number;
  title: string;
  publishedAt: Date;
  price: number;
  editorial: EditorialDto;
  authors: Author[];
}

interface EditorialDto {
  id: number;
  name: string;
  phoneNumber: string;
}

interface Author {
  id: number;
  name: string;
  lastName: string;
  email: string;
}
</script>

<style scoped></style>
