<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BotaoHome",
    emits: ["clicado"],
    props: {
        texto: String,
        icone: String,
        desabilitado: Boolean,
    },
    methods: {
        clicado(): void {
            this.$emit('clicado')
        }
    }
})
</script>

<template>
    <button class="button" @click=clicado :disabled=desabilitado>
        <span class="icon">
            <i :class=icone></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>