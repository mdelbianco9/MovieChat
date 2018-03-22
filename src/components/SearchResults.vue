<template>
  <div class="hello">

   <!--  <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text
          v-text="lorem">
          </v-card-text>
        </v-card>
      </v-flex> -->
      
            <v-layout row wrap>

                  <v-flex d-flex xs12 sm6 md3 order-md1 order-sm2 class="pl-3">
                    <v-card-media
                      src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
                      height="300px"
                      cover
                    ></v-card-media>
                 </v-flex>

                 <v-flex d-flex xs12 sm6 md3 order-md2 order-sm1 class="pl-3">
                    <v-card-media
                      src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
                      height="300px"
                      cover
                    ></v-card-media>
                    
                 </v-flex>
              

               <v-flex d-flex xs12 sm6 md3 order-md3 order-sm4 class="pl-3">
                    <v-card-media
                      src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
                      height="300px"
                      cover
                    ></v-card-media>
                 </v-flex>
               

               <v-flex d-flex xs12 sm6 md3 order-md4 order-sm3 class="pl-3">
                    <v-card-media
                      src="https://images-na.ssl-images-amazon.com/images/I/91+X85ksGPL._RI_.jpg"
                      height="300px"
                      cover
                    ></v-card-media>
                 </v-flex>
               </v-layout>
          
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
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
</style>
