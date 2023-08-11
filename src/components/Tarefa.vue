<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="collumn is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefas from "@/interfaces/ITarefa";

export default defineComponent({
    name: "TarefaHome",
    components: {
        Cronometro
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefas>,
            required: true
        }
    }
})
</script>

<style scoped> .box {
     background: #FAF0CA;
 }
</style>
```