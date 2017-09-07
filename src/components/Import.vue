<template>
  <div class="import">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <h3 class="bits mb-3">Upload Score</h3>
      <div class="container">
        <label for="user" class="bits w-100 bold mt-2 mb-0">Your Score:</label>
        <label for="user" class="bits w-100">{{upload.score}}</label>
        <label for="user" class="bits w-100 bold mt-3">Enter your username:</label>
        <input type="text" class="bits w-75" v-model="upload.username" maxlength="12">

        <button class="action-button animate blue mt-4 mb-2 w-100" v-on:click="sendData()">Upload</button>

        <router-link to="/results">
          <button class="action-button animate green my-2 w-100">Back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'import',
  data () {
    return {
      upload:{
        username: '',
        score: '' 
      }
    }
  },
  methods: {
    sendData: function(){
      console.log(this.upload);
      this.$http.post('https://vue-quiz-ff485.firebaseio.com/score.json',this.upload)
      .then(function(data){
        console.log(data)
        this.$router.push({name: 'start'})
      })
      .catch(function(data){
        console.log("Error: ",data)
      })
    }
  },
  created(){
    this.upload.score = this.$store.getters.getScore; 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input.bits {
    border: 0px;
    border-bottom: 2px solid darkslategray;
    font-size: 28px;
    text-align: center
  }

  .bold{
    font-weight: bold;
  }
</style>