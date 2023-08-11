<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
    name: "TemporizadorHome",
    emits: ["TemporizadorFinalizado"],
    components: {
        Cronometro,
        Botao
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            // começar a contagem
            // 1 seg = 1000 ms
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit("TemporizadorFinalizado", this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
});
</script>

<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao texto="play" icone="fas fa-play"  @clicado="iniciar" :desabilitado="cronometroRodando"/>
        <Botao texto="stop" icone="fas fa-stop"  @clicado="finalizar" :desabilitado="!cronometroRodando"/>
    </div>
</template>