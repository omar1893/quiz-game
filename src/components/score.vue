<template>
  <div class="score">
    <div class="card w-75 animated bounce text-center py-4 px-5 mb-3 mx-auto">
      <h3 class="bits">Ranking</h3>

      <div class="container mb-4 px-5">

        <div class="d-flex justify-content-between mb-4">
          <span class="bits">Username</span>
          <span class="bits text-right">Score</span>
        </div>

        <div class="d-flex justify-content-between bits" v-for="user in score">
          <span>{{user.username}}</span>
          <span>{{user.score}}</span>
        </div>

      </div>

      <div class="w-100">
        <router-link class="w-100 d-flex justify-content-center" to="/">
          <button class="w-50 action-button animate green bits">
            Back
          </button>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
      score: []
    }
  },
  created(){
    this.$http.get('https://vue-quiz-ff485.firebaseio.com/score.json?orderBy="score"&startAt=3&print=pretty')
    .then(function(data){
      this.score = mostrar(data.body);
      console.log(this.score);
    })
    .catch(function(data){
      console.log("Error: ", data)
    })
  }
}

function mostrar(a){
  var x = [];
    for(var i in a){
      x.push(a[i]);
    }
    return x.reverse();
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>