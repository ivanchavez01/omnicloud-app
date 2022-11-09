<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <book-searcher @search="searchHandler"></book-searcher>
      </v-col>
      <v-col md="5">
        <book-list
          :search.sync="search"
          :books="books"
          @onSelected="bookSelectorHandler"
        ></book-list>
      </v-col>
      <v-col md="7">
        <book-details :book="bookSelected"></book-details>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import Component from "vue-class-component";
import Vue from "vue";
import BookList from "@/components/Home/BooksList.vue";
import BookDetails from "@/components/Home/BookDetails.vue";
import BookSearcher from "@/components/Home/BookSearcher.vue";
import { BookDto } from "@/source/Book";

@Component({
  components: { BookSearcher, BookDetails, BookList },
})
export default class HomeView extends Vue {
  name = "HomeView";
  books: BookDto[] = [];
  bookSelected: BookDto | null = null;
  search = "";

  async mounted() {
    const { data } = await axios.get(
      `${process.env.VUE_APP_API_HOST}/api/book`,
      {
        auth: {
          username: process.env.VUE_APP_API_USERNAME,
          password: process.env.VUE_APP_API_PASSWORD,
        },
      }
    );
    this.books = data;
  }

  searchHandler(ev: string) {
    this.search = ev;
  }

  bookSelectorHandler(book: BookDto) {
    this.bookSelected = book;
  }
}
</script>

<style scoped></style>
