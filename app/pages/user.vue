<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { data, pending, error, refresh } = await useFetch('/api/user')

console.log(data)
</script>

<template>
  <div>
    <p class="u-text-black">正在登录...</p>
  </div>
</template>

<style>
.page-index {
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
