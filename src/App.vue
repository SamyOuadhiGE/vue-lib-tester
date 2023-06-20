<template>
  <div class="flex justify-center p-10">
    <button @click=" theme = theme === 'admin-theme' ? 'default' : 'admin-theme'">Change theme</button>
  </div>



  <div class="flex justify-center p-10">
    <h1>Current Theme : {{ theme }}</h1>
  </div>

  <div class="grid grid-cols-2 items-center gap-10 w-1/2 mx-auto mt-24" :class="theme">
    <div class="flex flex-col gap-4">
      <GEButton label="Hello" type="main" variant="primary" :loading="false"></GEButton>

      <GEButton label="Hello" type="main" variant="secondary" :loading="false"></GEButton>

      <GEButton label="Hello" type="main" variant="ghost" :loading="false"></GEButton>

      <GEButton label="Hello" type="main" variant="primary" :loading="true"></GEButton>

      <GEButton label="Hello" type="main" variant="ghost" :disabled="true"></GEButton>
    </div>

    <div class="flex flex-col gap-4">
      <GEButton label="Hello" type="destructive" variant="primary" :loading="false"></GEButton>

      <GEButton label="Hello" type="destructive" variant="secondary" :loading="false"></GEButton>

      <GEButton label="Hello" type="destructive" variant="ghost" :loading="false"></GEButton>

      <GEButton label="Hello" type="destructive" variant="primary" :loading="true"></GEButton>

      <GEButton label="Hello" type="destructive" variant="primary" :disabled="true"></GEButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const theme = ref('default');


</script>
