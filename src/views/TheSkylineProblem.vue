<script setup>
import { TheSkylineProblemStore } from '@/stores/store'

const store = TheSkylineProblemStore()
const buildings = store.buildings
</script>

<script>
import PageTemplate from '@/components/PageTemplate.vue'
import TheSkylineProblemImage from '@/components/TheSkylineProblemImage.vue'
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.min.css";

export default {
  components: { PageTemplate, TheSkylineProblemImage },
  data() {
    return {
      input: '',

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
  <div class="TheSkylineProblem">
    <PageTemplate :justInputs="justInputs">
      <template #title>The Skyline Problem</template>
  
      <template #text>
        <div class="content">
          A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.<br><br>
        
          The geometric information of each building is given in the array buildings where <code style="border: none" class="language-js">buildings[i] = [left [i], right [i], height [i]]</code>:<br><br>
    
          <code class="language-js">left[i]</code> is the x coordinate of the left edge of the ith building.<br>
          <code class="language-js">right[i]</code> is the x coordinate of the right edge of the ith building.<br>
          <code class="language-js">height[i]</code> is the height of the ith building.<br><br>
    
          You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at <code class="language-js">height 0</code>.<br><br>
    
          The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form <code style="border: none" class="language-js">[[x1,y1],[x2,y2],...]</code>. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.<br><br>
    
          Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, <code style="border: none" class="language-js">[...,[2 3],[4 5],[7 5],[11 5],[12 7],...]</code> is not acceptable; the three lines of height 5 should be merged into one in the final output as such: <code style="border: none" class="language-js">[...,[2 3],[4 5],[12 7],...]</code>.
        </div>
      </template>
  
      <template #input>
        <div class="inputs-container">
          <div class="example">buildings = {{ buildings }}</div>
          <div class="array">
            try yourself = <input v-model="input" type="text" placeholder="Array[[],[]] expected...">.
          </div>
          <div class="button">
            <button @click="store.inputArray(input)">submit</button>
          </div>
        </div>
      </template>
  
      <template #image>
        <TheSkylineProblemImage :buildings="store.buildings"></TheSkylineProblemImage>
      </template>
  
      <template #notes>Slow speed because of multiple cycles. There is solution lighter and faster.</template>
  
      <template #code>
        <pre>
          <code style="display: inline; height: 20px" class="language-javascript">
var getSkyline = function(buildings) {
  let max = buildings.reduce((acc, c) => acc[1] > c[1] ? acc : c), 
      arr = [0], every = 0, cur = every, res = []

  for (i = 0; i <= max[1]; i++) {
    for (j = 0; j < buildings.length; j++) {
      if (buildings[j][0] === i) {
        arr.push(buildings[j][2])
      }
      if (buildings[j][1] === i) {
        for (k = 0; k < arr.length; k++) {
          if (arr[k] === buildings[j][2]) {
            arr.splice(k, 1)
          }
        }
      }
      every = Math.max(...arr)
    }
    if (every !== cur) {
      res.push([i, Math.max(...arr)])
      cur = every
    }
  }
  return res
}
        </code></pre>
      </template>
    </PageTemplate>
  </div>
</template>