<template>
  <div class="hello">

      <v-container fluid grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex class="m-5 box1" >
            <!-- xs4 v-for="i in 3" :key="`4${i}`" goes in the line above-->
            <v-card-media
              src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
              height="400px"
              cover
              >
            </v-card-media>
            <!-- <v-card-text class="px-0">{{ msg }}</v-card-text> -->

            <v-card dark color="light-blue lighten-2">
              <!-- v-for="task in list" goes in line above -->
              <v-card-text class="px-0">hello</v-card-text>
            </v-card>
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
  data () {
    return {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  border: 1px solid blue;
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
