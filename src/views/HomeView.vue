<template>
  <app-layout>
  <div slot="conteudo">
  </div>
  </app-layout>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Menu from '../components/Menu'


  export default {
    name: 'Home',

    components: {
      HelloWorld, Menu,  
    },
  }
</script>
