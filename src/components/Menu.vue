<template>
<div>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item>
      <v-avatar size="40" color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Pessoa </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>


  </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Início", icon: "mdi-view-dashboard", to: "/" },
      //{ title: 'Photos', icon: 'mdi-image' },
      {
        title: "Tarefa",
        icon: "mdi-account-search",
        to: "/tarefa",
      },
      {
        title: "Consulta Gestor",
        icon: "mdi-account-edit",
        to: "/consultagestor",
      },
    //   { title: "Nova Tomada ", icon: "", to: "/novatomada" },
      {
        title: "Envio de Processo",
        icon: "mdi-cloud-upload",
        to: "/envioprocesso",
      },
      { title: "Sair", icon: "mdi-logout" },
    ],
    
  }),
};
</script>
