<template>
  <div id="app">
    <v-app>
      <!-- Tool Bar -->
    <v-toolbar app color="light-blue lighten-2">
      <v-btn @click.stop="drawer = !drawer" dark color="red accent-3" @click="closeIntro">Search</v-btn>
      <v-toolbar-title class="white--text center-title">Welcome to MovieBot</v-toolbar-title>
      <v-icon class="mr-2 white--text">Github</v-icon>
      <v-icon class="mr-2 white--text">LinkedIn</v-icon>
    </v-toolbar>
    <!-- End of Tool Bar -->

    <!-- Side Drawer -->
    <v-layout wrap style="height: 50px;"">
        <v-navigation-drawer
          temporary
          v-model="drawer"
          absolute
          class="pl-2 pr-2 fixed-side"
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

            <v-card-media class="mt-3"
              src="https://image.tmdb.org/t/p/w500/5vMEXtz1DXgxFsv8pgFFGuOlI8V.jpg"
              height="400px"
              contain
              ></v-card-media>

              <v-card-media class="mt-3"
              src="https://image.tmdb.org/t/p/w500/ilrZAV2klTB0FLxLb01bOp5pzD9.jpg"
              height="400px"
              contain
              ></v-card-media>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <!-- End of Drawer -->

    <!-- Main container area -->
    <v-container fluid class="main-container">
      <!-- Side Drawer -->

          <!-- Jumbotron -->
       <v-jumbotron color="grey lighten-2" v-show="showIntro">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to MovieBot</h3>
              <span class="subheading">Search for any movie or show titles. </span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">Sorry for the boring Home Page</div>
              <v-btn @click.stop="drawer = !drawer" large color="primary mx-0" @click="closeIntro">See more</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <!-- End of jumbotron -->
      
          <!-- This is where the SearchResults component goes -->
      <SearchResults 
        :results=results
        :baseImageURL=baseImageURL 
        :baseURL=baseURL
        :mykey=mykey
        >
      </SearchResults>

      
      <!-- <div id="newBox"></div> -->

    </v-container>
  </v-app>


    
   
  </div>
</template>

<script>
import SearchResults from './components/SearchResults';
import InputComponent from './components/InputComponent';
import modal from './components/modal.vue';
import Vue from 'vue';
// import axios from 'axios';
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

export default {
  name: 'App',
  components: {
    InputComponent,
    SearchResults,
    // modal
  
  },
  data () {
      return {
        showIntro: true,
        drawer: null,
        message: "",
        list: [],
        results: [],
        baseURL: 'https://api.themoviedb.org/3/',
        configData: null,
        baseImageURL: null,
        mykey: '?api_key=f942d08e742f6170fa89654a541ecfb0',
        query: '&query=',
        fullImage: null,

      }
    },



    methods: {
    getConfig() {
      let url = "".concat(this.baseURL, 'configuration', this.mykey);
      fetch(url).then((result)=>{
        return result.json();
      })
      .then((data)=>{
        // This adds a value to our instance
        this.baseImageURL = data.images.secure_base_url +'w500';
        console.log('config:', data);
        console.log('config fetched');
        console.log(this.baseImageURL);
        // runSearch('jaws');
        // document.getElementById('newBox').innerHTML = JSON.stringify(data, null, 4);
      })
      .catch(function(err){
        alert(err);
      });
    },

    // Gets a keyword 
    runSearch(keyword) {
      let url = "".concat(this.baseURL, 'search/movie', this.mykey, '&query=', keyword);
      fetch(url)
      .then(result=>result.json())
      .then((data)=>{
        this.results = data.results;
        // document.getElementById('newBox').innerHTML = JSON.stringify(data, null, 4);
        // console.log(JSON.stringify(data, null, 4))
      })
    },

    showIntro() {
        this.showIntro = true;
      },

    closeIntro() {
        this.showIntro = false;
      },


    handler(keyword){
      var search = this.message;
      this.getConfig();
      this.runSearch(search);
      // console.log(this.results);
    },

    // showModal() {
    //     this.isModalVisible = true;
    //   },

    // closeModal() {
    //     this.isModalVisible = false;
    //   },

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

.fixed-side {
  position: fixed;
  margin-top: 2rem;
}

.center-title {
  margin: auto;
}

.main-container {
  height: 100%;
}
</style>
