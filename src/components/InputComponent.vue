<template>
  <div class="hello">
 
    <v-text-field class="pl-2 pt-3"
      name="input-1"
      label="What do you want to watch?"
      id="testing"
      v-model="message" 
      v-on:keyup.enter="handler()" 
      >
    </v-text-field>

  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import SearchResults from './SearchResults';

export default {
  data () {
    return {
      message: '',
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

        },

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
