<script setup>
import { TextJustificationStore } from '@/stores/store'
const store = TextJustificationStore()
store.justify()
</script>

<template>
  <div class="inputs">
    <div class="title">Input:</div>
    <div class="input">
      <div class="array">
        words = [<input style="width: 200px" v-model="store.words" @input="store.justify()" type="text" placeholder="Array of strings expected...">].
      </div>
      <div class="number">
        maxWidth = <input style="width: 30px" type="text" v-model="store.maxWidth" @input="store.justify()" placeholder="Number expexted...">.
      </div>
    </div>
  </div>

  <div class="image-container">
    <div class="answer">
      <div class="border"></div>
      <div class="text">
        <div class="title">Output:</div>
        <div class="lines">
          <pre>
            <div v-for="line in store.res" :key="line" class="line"><code class="language-js">{{ line }}</code></div>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>