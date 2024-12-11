<template>
    <div class="alert">
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'alert',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped lang="scss">
  .lert {
    width: 70px;
    height: 70px;
    background-color: #c43636;
    border-radius: 50%;
    bottom: 10%;
    right: 5%;
    transform: translate(-50%,-50%);
    z-index: 9999;
    position: fixed;
    
  }
  </style>
  