<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
const supabase = useSupabaseClient()
const form = ref({})
const onSubmit = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: form.value.name + '@1.com',
        password: form.value.password,
    })
  if (error) {
    console.log(error)
    return false
  } 
  if (data.user) {
    navigateTo('/')
  }
}
</script>

<template>
  <div class="page-index">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
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
