<template>  
  <div>
    <v-app id="layout" app>
      <Menu />
      <v-main>
        <slot name="conteudo"> </slot>
      </v-main>
    </v-app>
  
  </div>
</template>
<script>
    import Menu from "@/components/Menu.vue"


    export default {
  name: "Layout",
  components: {
      Menu
    },
};


</script>

<style lang="sass" scoped>


</style>