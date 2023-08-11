<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" v-model="descricao" placeholder="Qual tarefa você deseja iniciar?" />
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
    name: "FormulárioHome",
    emits: ["SalvarTarefa"],
    components: {
        Temporizador
    },
    data() {
        return {
            descricao: ""
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
           this.$emit("SalvarTarefa", {
               descricao: this.descricao,
               tempo: tempoDecorrido
           })
            this.descricao = ""
        }
    }
});
</script>