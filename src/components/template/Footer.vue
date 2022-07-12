<template>
  <v-footer class="footer elevation-4" padless>
      <v-spacer></v-spacer>
      <span> &copy;Tribunal de Contas do Estado do Maranhão - {{ new Date().getFullYear() }} </span>
      <v-spacer></v-spacer>
  </v-footer>
</template>

<style lang="sass" scoped>
    .footer
        font-size: 12px
        padding: 5px
</style>