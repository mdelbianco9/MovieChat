<template>
  <div id="app">
    <v-app>
    <v-toolbar app>
      <v-btn @click.stop="drawer = !drawer" dark color="blue">Search</v-btn>
    </v-toolbar>

  <v-layout wrap style="height: 200px;">
    
    <v-navigation-drawer
      temporary
      v-model="drawer"
      absolute
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
      
      </v-list>

    </v-navigation-drawer>
  </v-layout>
  </v-app>


    
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
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

.toolbar {
  background-color: red;
}

.drawer {
  position: relative;
  margin-top: 2rem;
}
</style>
