<template>
  <div class="start">
    <div class="card w-50 text-center py-4 mx-auto">
      <div class="w-75 mx-auto">
        <img src="../assets/logo.png" class="img-fluid" alt="">
      </div>
      <h1 class="bits">Quiz Game</h1>

      <div class="w-50 mx-auto" id="btn-container">
        <!--<router-link to="/game">-->
          <button class="action-button animate green w-100 mb-3" v-on:click="getQuestions()">
            Play
          </button>
        <!--</router-link>-->

        <router-link to="/score">
          <button class="action-button animate blue w-100">
            Ranking
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'start',
  data () {
    return {

    }
  },
  methods:{
    getQuestions(){
      var router = this.$router;
       this.$store.dispatch('getQuestions')
       .then(function(data){
         router.push({name: 'game'})
       })
       .catch(function(data){
         console.log("Error: ",data)
       })
    }
  },
  created(){
    this.$store.commit('initData');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: white;
  }
  #btn-container{
    display: flex;
    flex-direction: column;
  }

</style>