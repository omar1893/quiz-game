<template>
  <div class="results">
    <div class="card w-75 animated bounce text-center py-4 mb-3 mx-auto">
      <doughnut></doughnut>
      <div class="container">
        <router-link to="/import">
          <button class="action-button animate blue my-2 w-100">Upload Score</button>
        </router-link>

        <router-link to="/">
          <button class="action-button animate green w-100">Home Page</button>
        </router-link>

      </div>
    </div>


  </div>
</template>


<script>
import Doughnut from './doughnut'
export default {
  name: 'results',
  data () {
    return {

    }
  },
  components:{
    "doughnut": Doughnut
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>