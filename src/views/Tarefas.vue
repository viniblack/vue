<template>
    <Formulario @SalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa" />
        <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>

        <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Editando uma tarefa</p>
                    <button @click="fecharModal" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label for="descricaoTarefa" class="label"> Descrição </label>
                        <input type="text" class="input" v-model="tarefaSelecionada.descricao" id="descricaoTarefa" />
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button @click="alterarTarefa" class="button is-success">Salvar alterações</button>
                    <button @click="fecharModal" class="button">Cancelar</button>
                </footer>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue'
import Tarefa from '../components/Tarefa.vue'
import Box from '../components/Box.vue'
import { useStore } from '@/store';
import { OBETER_TAREFAS, CADASTRAR_TAREFA, ALTERAR_TAREFA, OBETER_PROJETOS } from '@/store/tipoAcoes';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
    name: 'App',
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data() {
        return {
            tarefaSelecionada: null as ITarefa | null
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.store.dispatch(CADASTRAR_TAREFA, tarefa)
        },
        selecionarTarefa(tarefa: ITarefa) {
            this.tarefaSelecionada = tarefa
        },
        fecharModal() {
            this.tarefaSelecionada = null
        },
        alterarTarefa() {
            this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
                .then(() => this.fecharModal())
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    setup() {
        const store = useStore()
        store.dispatch(OBETER_TAREFAS)
        store.dispatch(OBETER_PROJETOS)

        return {
            tarefas: computed(() => store.state.tarefas),
            store
        }
    }
});
</script>