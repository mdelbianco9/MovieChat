<template>
  <div class="hello">

      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex
             xs4 v-for="result in results" :key="`4${result.id}`" v-on:click="getId">
            <v-card-media
              class="overlay"
              :src="baseImageURL + result.poster_path"
              height="400px"
              contain
              ></v-card-media>
              
            <!-- <v-card-text class="px-0">{{ result.id }}</v-card-text> -->
            <!-- <v-card dark color="light-blue lighten-2">
              <v-card-text class="px-0">{{ result.original_title }}</v-card-text>
            </v-card> -->
          </v-flex>
        </v-layout>
      </v-container>
          
  </div>
</template>

<script>
// import axios from 'axios';
import Vue from 'vue';
// import App from '../App';

export default {
  // props: ['results'],
  props: {
    results: Array,
    baseImageURL: String,
  },
  data () {
    return {
      newResults: this.results
    }
  },
  methods: {
    getId(event) {
      console.log(this.results[1].id);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
