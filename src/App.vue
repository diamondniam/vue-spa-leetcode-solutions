<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="trapping-rain-water">Trapping Rain Water</RouterLink>
      <RouterLink to="text-justification">Text Justification</RouterLink>
      <RouterLink to="the-skyline-problem">The Skyline Problem</RouterLink>
    </div>
  
    <RouterView />
  </div>
</template>

<style>
  .container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .nav {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 30px;
  }
</style>