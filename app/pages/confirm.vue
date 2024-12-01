<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo('/')
    }
  },
  { immediate: true }
)
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
