<template>
  <div class="hello">

      <v-container fluid grid-list-xl>

        <v-layout row wrap>
          <v-flex
             xs4 v-for="result in results" 
             :key="`4${result.id}`" 
             v-on:click="getId(result.id)">
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
  name: 'SearchResults',
  // comonents: {
  //   modal,
  // },
  props: {
    results: Array,
    baseImageURL: String,
    baseURL: String,
    mykey: String
  },
  data () {
    return {
      isModalVisible: false,
      newResults: this.results,
      newbaseURL: this.baseURL,
      newKey: this.mykey,
      newdata: null, 
      showModal: false,
      title: null,
      genre: null,
      imdb: null,
      rotten: null,
      production: null,
      awards: null
    }
  },
  methods: {
    getId(event) {
      let url = "".concat(this.newbaseURL, 'movie/', event, this.newKey, '&language=en-US');
      fetch(url)
      .then(newdata=>newdata.json())
      .then((data)=>{
        this.newdata = data;
        this.title = data.title;
        // this.genre = data.genre;

        console.log(JSON.stringify(data, null, 4))
        console.log(this.newdata.id);
      })
    },
    showModal() {
        this.isModalVisible = true;
      },

    closeModal() {
        this.isModalVisible = false;
      },
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
