<template>
  <router-view />
</template>

<script lang="ts">
import { router } from './router'
export default {
  name: 'App',
  setup() {
      router
  }
}

</script>