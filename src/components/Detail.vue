<template>
    <div class="Detail">
      <div></div>
      <div></div>
      <div>
        Email: <span>******@**.com</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Detail',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped lang="scss">
    .Detail{
        width: 100%;
        height: 30vh;
        background-color: black;
        display: flex;
        justify-content: space-between;
        div{
            width: 30%;
            font-size: 18px;
            color: white;
            padding-top: 10%;
        }
    }
    @media (max-width: 767px) {
      .Detail{
        div{
          display: none;
        }
      }
    }
  </style>
  