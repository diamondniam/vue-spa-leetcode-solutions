<script setup>
import { TrappingRainWaterStore } from '@/stores/store'
const store = TrappingRainWaterStore()
store.colors = []
</script>

<script>
import TrappingRainWaterImage from '../components/TrappingRainWaterImage.vue';
import PageTemplate from '@/components/PageTemplate.vue';
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.min.css";

export default {
  components: { PageTemplate, TrappingRainWaterImage },
  data() {
    return {
      boxSize: 20,
      justInputs: true
    }
  },
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  }
}
</script>

<template>
  <div class="TrappingRainWater">
    <PageTemplate :justInputs="justInputs">
      <template #title>Trapping Rain Water</template>
  
      <template #text>
        <div class="content">
          Given <code class="language-js problem-code">n</code> non-negative integers representing an elevation map where the <code class="language-js problem-code">width</code> of each bar is <code class="language-js problem-code">1</code>, compute how much water it can trap after raining.
        </div>
      </template>
  
      <template #input>
        <div class="inputs-container">
          <div class="array">
            heights = [<input v-model="store.heights" @input="store.clearColors()" type="text" placeholder="Array[] expected...">].
          </div>
        </div>
      </template>
  
      <template #image>
        <trapping-rain-water-image :colors="store.colors" :heights="store.heights"></trapping-rain-water-image>
      </template>
  
      <template #notes>This solution was rejected because of time exceeded error. I solved 319/322 problems here.</template>
  
      <template #code>
        <pre><code class="language-js">
function getTrap() {
  let max = Math.max(...height), 
      min = Math.min(...height), 
      trappy = false, 
      space = 0, 
      totalSpaces = 0
    
  for (i = min; i <= max; i++) {
    trappy = false
      for (l = 0; l < height.length; l++) {
        if (height[l] < i) {
          space++
        }

        if (height[l] >= i) {
          if (trappy) {
            totalSpaces += space
          }

          space = 0
          trappy = true
        }
      }
    }
  return totalSpaces
}
        </code></pre>
      </template>
    </PageTemplate>
  </div>
</template>