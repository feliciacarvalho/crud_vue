<template>
  <app-layout>
    <div slot="conteudo">
      <v-container>

        <v-card class="ma-10 pa-10">
          <v-card-text>
            <h2 class="mb-3">Olá</h2>
            <h1>Bem vindo </h1>
            <hr class="my-4 mb-10">
            <p :key="item.text" v-for="item in welcome"> {{ item.text }} </p>
            
          </v-card-text>
        </v-card>
      

      </v-container>
    </div>
  </app-layout>
  
</template>




<script>

export default {
  name: 'IndexPage',

  data: () => ({
    headers: [
      { text: 'Período', value: 'periodoNome' },
      { text: 'Prazo de Envio', value: 'prazoEnvio' },
    ],
    welcome:[
      { text: 'Etomada - Tribunal de Contas do Estado do Maranhão (TCE/MA).'},
      
    ],
  }),

  watch: {

  },

  methods: {
    firstWord(str) {
      return str.split(' ')[0];
    },

    capitalize(str) {
      return str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    },

  },
}
</script>