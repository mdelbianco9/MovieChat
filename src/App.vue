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
            v-model="message" 
            v-on:keyup.enter="handler()" 
            >
          </v-text-field>

            <h1 headline>Recommendations</h1>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <!-- End of Drawer -->

          <!-- This is where the SearchResults component goes -->
      <SearchResults :results="results"></SearchResults>

      
      <div id="newBox"></div>

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
        message: "",
        list: [],
        results: [],
        title: '',
        year: '',
        genre: '',
        rating: '',
        image: '',
        baseURL: 'https://api.themoviedb.org/3/',
        configData: null,
        baseImageURL: null,
        key: '?api_key=f942d08e742f6170fa89654a541ecfb0',
        query: '&query='
      }
    },

    methods: {
    getConfig() {
      let url = "".concat(this.baseURL, 'configuration', this.key);
      fetch(url).then((result)=>{
        return result.json();
      })
      .then((data)=>{
        // This adds a value to our instance
        this.baseImageURL = data.images.secure_base_url;
        console.log('config:', data);
        console.log('config fetched');
        console.log(this.baseImageURL);
        // runSearch('jaws');
        document.getElementById('newBox').innerHTML = JSON.stringify(data, null, 4);
      })
      .catch(function(err){
        alert(err);
      });
    },

    // Gets a keyword 
    runSearch(keyword) {
      let url = "".concat(this.baseURL, 'search/movie', this.key, '&query=', keyword);
      fetch(url)
      .then(result=>result.json())
      .then((data)=>{
        this.results = data.results;
        document.getElementById('newBox').innerHTML = JSON.stringify(data, null, 4);
        console.log(JSON.stringify(data, null, 4))
      })
    },

    handler(keyword){
      var search = this.message;
      this.getConfig();
      this.runSearch(search);
      console.log(this.results);
    }

  }
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
