<template>  
  <div>
    <v-app id="layout" app>
      <app-menu />
      <slot name="conteudo"> </slot>
    </v-app>
    <app-footer class="footer" />
  </div>
</template>
<script>
    import menu from "@/components/Menu.vue"
    import footer from "@/components/template/Footer.vue"

    export default {
  name: "Layout",
  components: { "app-footer": footer, 'app-menu': menu },
};


</script>

<style lang="sass" scoped>


</style>