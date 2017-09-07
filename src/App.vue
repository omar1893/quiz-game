<template>
  <div id="app" class="py-5">
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    background-color: #31b0d5;
    height: 100vh;
    width: 100vw;
  }

  .bits{
    font-family: bits;
  }
  
  @font-face {
    font-family: bits;
    src: url('./vendor/fonts/bits.ttf');
  }
  
  .animate {
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
  }
  
  .action-button {
    position: relative;
    padding: 10px 16px;
    float: left;
    border-radius: 10px;
    font-family: 'bits', cursive;
    font-size: 14px;
    color: #FFF;
    text-decoration: none;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
  }
  
  .blue {
    background-color: #3498DB;
    border-bottom: 5px solid #2980B9;
    text-shadow: 0px -2px #2980B9;
  }
  
  .red {
    background-color: #E74C3C;
    border-bottom: 5px solid #BD3E31;
    text-shadow: 0px -2px #BD3E31;
  }
  
  .green {
    background-color: #82BF56;
    border-bottom: 5px solid #669644;
    text-shadow: 0px -2px #669644;
  }
  
  .yellow {
    background-color: #F2CF66;
    border-bottom: 5px solid #D1B358;
    text-shadow: 0px -2px #D1B358;
  }
  
  .disabled {
    pointer-events: none;
  }

  .action-button:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    border-bottom: 1px solid;
  }

  :focus {outline:0!important;}
</style>