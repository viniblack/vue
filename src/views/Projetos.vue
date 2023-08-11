<template>
  <div class="projetos">
    <div class="title">Projetos</div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewProjetos",
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>