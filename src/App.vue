<template>
  <div id="app">
    <v-app>
      <!-- Tool Bar -->
    <v-toolbar app color="light-blue lighten-2">
      <v-btn @click.stop="drawer = !drawer" dark color="red accent-3">Search</v-btn>
    </v-toolbar>
    <!-- End of Tool Bar -->

    <!-- Main container area -->
    <v-container fluid class="main-container">

      <!-- Side Drawer -->
      <v-layout wrap style="height: 50px;"">
        <v-navigation-drawer
          temporary
          v-model="drawer"
          absolute
          class="pl-2 pr-2"
        >
          <v-list class="pa-1">
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Welcome to MovieChat</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-text-field class="pl-2 pt-3"
              name="input-1"
              label="What do you want to watch?"
              id="testing"
              v-model="msg"
              v-on:keyup.enter="addTask"
            ></v-text-field>
            <h1 headline>Recommendations</h1>
            <h3>{{ msg }}</h3>
            <!-- <a>
              <v-card-media class="mt-3" src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg" height="300px">
              </v-card-media>
            </a>
            <a>
            <v-card-media class="mt-3" src="https://i.ytimg.com/vi/A7lc6WDaHls/hqdefault.jpg" height="300px">
            </v-card-media>
            </a> -->
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <!-- End of Drawer -->

      <!-- <SearchResults :msg="msg"></SearchResults> -->

      <!-- Search Results -->
      <v-container fluid grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex class="m-5 box1" xs4 v-for="i in 3" :key="`4${i}`">
            <v-card-media
              src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
              height="400px"
              cover
              >
            </v-card-media>
            <v-card dark color="light-blue lighten-2" v-for="task in list">
              <v-card-text class="px-0">{{ title }}</v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>

    </v-container>
  </v-app>


    
   
  </div>
</template>

<script>
// import SearchResults from './components/SearchResults';
import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

export default {
  name: 'App',
  components: {
    // SearchResults,
  
  },
  data () {
      return {
        drawer: null,
        msg:'',
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
           
            if (this.msg == newTitle.toLowerCase()) {
               console.log(newTitle);
            }
         
          

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

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-container {
  height: 100%;
}
</style>
