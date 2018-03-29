<template>
  <div class="hello">

      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex
             xs4 v-for="result in results" 
             :key="`4${result.id}`" 
             v-on:click="getId(result.id)">
            <v-card-media 
            v-on:click="getId(result.id)"
             @click.native.stop="dialog = true"
              :src="baseImageURL + result.poster_path"
              height="400px"
              contain
              ></v-card-media>
          </v-flex>
        </v-layout>

        <!-- Modal Box -->
         <v-dialog v-model="dialog" fullscreen>
          <v-layout row wrap>
          <div id="my-modal">

            <v-btn color="blue darken-1" light flat @click.native="dialog = false" d-inline>Close</v-btn>
            <div class="">
              <img :src="baseImageURL + newdata.poster_path" class="new-image">
              <v-flex d-inline md6 class="info-box"> 
                <h1> Hello world</h1>
                <h1>{{ newdata.title }}</h1>
                <h2>ID: {{ newdata.id }}</h2>
                <h2> {{ newdata.overview}}</h2>
                <h4>Rating: {{ newdata.vote_average}}</h4>
                <h4>{{ newdata.tagline}}</h4>
              </v-flex>
            </div>

          </div>
         </v-layout>
        </v-dialog>
        <!-- End of Dialoge box -->
      </v-container>

          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/doc-images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>


     
          
  </div>
</template>

<script>
// import axios from 'axios';
import Vue from 'vue';
// import App from '../App';

export default {
  // name: 'SearchResults',
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
      dialog: false,
      newResults: this.results,
      newbaseURL: this.baseURL,
      newKey: this.mykey,
      newdata: "", 
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


    showTheModal() {
        this.isModalVisible = true;
      },

    closeTheModal() {
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


/*.new-image {
  width: 25%;
  display: inline;
}

.info-box {
  width: 60%;
  border: 2px solid white;
  display: inline;
}*/

#my-modal {
  border: 1px solid black;
  padding: 20px;
  background-color: rgba(0,0,0,.8);
  color: white;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  position: fixed;
  overflow: scroll;
  text-align: left;
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
