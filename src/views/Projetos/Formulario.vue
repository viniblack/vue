<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjet" />
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacoes";
import { useStore } from "@/store";
// import { notificacaoMixin } from "@/mixins/notificar";
import useNotificador from "@/hooks/notificador";
import { defineComponent } from "vue";
import { CADASTRAR_PROJETO, ALTERAR_PROJETO } from "@/store/tipoAcoes";

export default defineComponent({
  name: "ViewFormulario",
  props: {
    id: {
      type: String,
    }
  },
  // mixins: [notificacaoMixin],
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projeto.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.dispatch(ALTERAR_PROJETO, { id: this.id, nome: this.nomeDoProjeto })
          .then(() => this.lidarComSucesso())
      } else {
        this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
          .then(() => this.lidarComSucesso())
      }
    },
    lidarComSucesso() {
      this.nomeDoProjeto = "";
      this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Projeto salvo com sucesso')
      this.$router.push('/projetos')
    }
  },

  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    }
  }
});
</script>

