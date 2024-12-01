<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-page-header @back="onBack">
          <template #breadcrumb>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: './page-header.html' }">
                homepage
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="./page-header.html">route 1</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>route 2</el-breadcrumb-item>
            </el-breadcrumb>
          </template>
        </el-page-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :router="true"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1" route="/user">
              <el-icon><icon-menu /></el-icon>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="2" route="/docs">
              <el-icon><document /></el-icon>
              <span>材料管理</span>
            </el-menu-item>
            <el-menu-item index="3" route="/report">
              <el-icon><setting /></el-icon>
              <span>报告管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><slot /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
