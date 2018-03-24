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

            <!-- This is where the Input Component Goes -->
            <InputComponent></InputComponent>

            <h1 headline>Recommendations</h1>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <!-- End of Drawer -->

      <!-- This is where the SearchResults component goes -->
      <SearchResults></SearchResults>

    </v-container>
  </v-app>


    
   
  </div>
</template>

<script>
import SearchResults from './components/SearchResults';
import InputComponent from './components/InputComponent';
import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

export default {
  name: 'App',
  components: {
    InputComponent,
    SearchResults
  
  },
  data () {
      return {
        drawer: null,
      }
    },
    methods: {
    getConfig() {
      let url = "".concat(this.baseURL, 'configuration', this.key);
      fetch(url).then((result)=>{
        return result.json();
      })
      .then((data)=>{
        this.baseImageURL = data.images.secure_base_url;
        console.log('config:', data);
        console.log('config fetched');
        // runSearch('jaws');
        document.getElementById('newBox').innerHTML = JSON.stringify(data, null, 4);
      })
      .catch(function(err){
        alert(err);
      });
    },

    runSearch(keyword) {
      let url = "".concat(this.baseURL, 'search/movie', this.key, '&query', keyword);
      fetch(url).then(retult=>result.json())
      .then((data)=>{
        document.getElementById('newBox').innerHTML = JSON.stringify(data, null, 4);
        console.log(JSON.stringify(data, null, 4))
      })
    },

    handler(keyword){
      this.getConfig();
      this.runSearch(keyword);
    },



    addTask: function() {
      var task = this.message;
      this.list.push(task);
      console.log(this.results);
      console.log(this.list[0]);




      // var task = this.message;
      // this.list.push(task);
      // this.message = "";

      // // Movie Title
      //  var newTitle = this.results.Title;
      //  this.title = newTitle;
      // console.log(newTitle);

      // // Movie Year
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

      // // Movie Image
      // var img = this.results.Poster;
      // this.image = img;
      // console.log("Image is posting");
    },

    learnMore: function() {
      this.image = '';
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
