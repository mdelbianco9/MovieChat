<template>
  <div id="app">
    <v-app>
      <!-- Tool Bar -->
    <v-toolbar app color="light-blue lighten-2">
      <v-btn @click.stop="drawer = !drawer" dark color="red accent-3">Search</v-btn>
    </v-toolbar>
    <!-- End of Tool Bar -->

    <!-- Main container area -->
    <v-container-fluid class="main-container">

      <!-- Side Drawer -->
      <v-layout wrap style="height: 50px;">
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
            ></v-text-field>

            <h1 headline>Recommendations</h1>

            <a>
              <v-card-media class="mt-3" src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg" height="300px">
              </v-card-media>
            </a>

            <a>
            <v-card-media class="mt-3" src="https://i.ytimg.com/vi/A7lc6WDaHls/hqdefault.jpg" height="300px">
            </v-card-media>
            </a>

          </v-list>
        </v-navigation-drawer>
      </v-layout>
      <!-- End of Drawer -->

      <SearchResults/>
    </v-container-fluid>
  </v-app>


    
   
  </div>
</template>

<script>
import SearchResults from './components/SearchResults'
import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

export default {
  name: 'App',
  components: {
    SearchResults
  },
  data () {
      return {
        drawer: null,
        
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
