<template>
  <div class="hello">

      <v-container fluid grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex class="m-5 box1" xs4 v-for="i in 3" :key="`4${i}`">
            <v-card-media
              src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
              height="400px"
              cover
              >
            </v-card-media>
             <!-- <v-text-field class="pl-2 pt-3"
              name="input-1"
              label="What do you want to watch?"
              id="testing"
              v-model="mytext"
              v-on:keyup.enter="addTask"
            ></v-text-field> -->
            <v-card-text class="px-0">{{ msg }}</v-card-text>

            <v-card dark color="light-blue lighten-2" v-for="task in list">
              <v-card-text class="px-0">{{ title }}</v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
          
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
// import App from '../App';

export default {
  props: ['msg'],
  data () {
    return {
      mytext: '',
      list: [],
      results: [],
      title: '',
      year: '',
      genre: '',
      rating: '',
      image: '',
      url: "http://www.omdbapi.com/?i=tt3896198&apikey=af4ba98b",
    }
  },

  mounted() {
          axios.get(this.url).then(response => {this.results = response.data})
        },

  methods: {
        addTask: function() {
          var task = this.mytext;
          this.list.push(task);
          this.mytext = "";
          console.log("Function is working");

          // Movie Title
         var newTitle = this.results.Title;
         this.title = newTitle;
        console.log(newTitle);

        //   // Movie Year
        // var newYear = this.results.Year;
        // this.year = newYear;
        // console.log(newYear);

        // // Movie Genre
        // var newGenre = this.results.Genre;
        // this.genre = newGenre;
        // console.log(newGenre);

        // // IMDB Rating
        // var newRating = this.results.imdbRating;
        // this.rating = newRating;
        // console.log(newRating);

        // Movie Image
        var img = this.results.Poster;
        this.image = img;
        console.log("Image is posting");
        }

  },
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
