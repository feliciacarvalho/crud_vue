<template>
    <v-container>
        <h1> Registro </h1>
   
        <v-row>
            <v-col cols="5">
                <v-text-field
                    v-model="editedItem.name"
                    Label="Nome Completo"
                >
                </v-text-field>
            </v-col>
        </v-row>


        <v-row>
            <v-col cols="" >
                <v-select
                v-model="editedItem.gender"
                    :items="sexo"
                    label="sexo"
                ></v-select>
            
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="5">
                <v-autocomplete
                    :items= "departement" 
                    Label="Setor"
                ></v-autocomplete>
            </v-col>
        </v-row>

        <v-row
        
        >
            <v-col cols="">
                <v-textarea
                    v-model="editedItem.about"
                    outLined
                    label="Sobre o Fucionário: "
                ></v-textarea>

                <v-dialog
                        v-model="dialog" width="500px"
                        
                         >
                    <v-card>
                        <v-card-title>
                            <p> Registro Feito com Sucesso</p>
                        </v-card-title>

                        <v-card-title>
                            <p> Verificar se Está na Tabela</p>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn   @click.stop="dialog = !dialog" color="primary" :to="'/'"  >OK</v-btn>
                        
                        </v-card-actions>
                    
                    </v-card>


                </v-dialog>
            </v-col>
        </v-row>



        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="1">
                <v-btn
                   
                    color="primary"
                    
                
                >
                Salvar
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default{
    data(){
        return{
            sexo: ["Masculino", "Feminino" ],
            departementList:["Getec", "Desen" ],
            dialog:false,
            editedItem:{
                name: '',
                gender: '',
                departement: '',
                about: ' ',

            }

            
        }
    }


}
</script>