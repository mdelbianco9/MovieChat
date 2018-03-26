<template>
  <div class="hello">

      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex
             xs4 v-for="result in results" :key="`4${result.id}`">
            <v-card-media
              :src="baseImageURL + result.poster_path"
              height="400px"
              contain
              >
            </v-card-media>
          <!--   <v-card-text class="px-0">{{ result.id }}</v-card-text>
            <v-card dark color="light-blue lighten-2">
              <v-card-text class="px-0">{{ result.original_title }}</v-card-text>
            </v-card> -->
          </v-flex>
        </v-layout>
      </v-container>
          
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import InputComponent from './InputComponent';
// import App from '../App';

export default {
  // props: ['results'],
  props: {
    results: Array,
    baseImageURL: String,
  },
  data () {
    return {
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movieCard{
  display: inline;
  margin: 10px;
  
}

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
