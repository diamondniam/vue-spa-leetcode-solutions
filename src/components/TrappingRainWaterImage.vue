<script setup>
import { onMounted, onUpdated, ref } from 'vue'

let props = defineProps({colors: Array, heights: String})
let totalSpaces = ref(0)

onMounted(() => {
  let array = []

  function getTrap() {
    array = props.heights.split(',')
    
    let max = Math.max(...array), 
        min = Math.min(...array), 
        trappy = false, space = 0
    
    totalSpaces.value = 0
      
    for (let i = min; i <= max; i++) {
      trappy = false
      for (let l = 0; l < array.length; l++) {
        if (i !== 0) {
          if (array[l] < i) {
            space++
            props.colors.push({index: l, color: `transparent`, transparent: true})
          }

          if (array[l] >= i) {
            if (trappy) {
              totalSpaces.value += space
              for (let k = 0; k < space; k++) {
                props.colors.pop()
              }
              for (let k = 0; k < space; k++) {
                props.colors.push({index: l - (k+1), color: `rgb(37, 221, 126)`, animation: true})
              }
            }

            props.colors.push({index: l, color: `rgb(2, 14, 8)`})

            space = 0
            trappy = true
          }
        }
      }
    }
  }

  function clearBoxes() {
    const container = document.querySelector('.image-container')
    const render = document.querySelector('.render')
    container.removeChild(render)
    let newDiv = document.createElement('div')
    newDiv.className = 'render'
    container.appendChild(newDiv)
  }

  function getImage() {
    const render = document.querySelector('.render')

    let split = array.length, counter = 1

    for (let i = 0; i < props.colors.length; i++) {
      if (i == 0) {
        let newDiv = document.createElement('div')
        newDiv.className = 'parent'
        render.appendChild(newDiv)
      }
      if (i == split) {
        split += array.length
        counter++
        let newDiv = document.createElement('div')
        newDiv.className = 'parent'
        render.appendChild(newDiv)
      }
      let parents = document.querySelectorAll(`.parent`)
      let parent = parents[counter-1]
      let newDiv = document.createElement('div')
      newDiv.className = 'box'
      newDiv.style.background = `${props.colors[i].color}`
      if (props.colors[i].animation === true) {
        newDiv.classList.add('water')
      }
      if (props.colors[i].transparent === true) {
        newDiv.classList.add('transparent')
      }
      parent.appendChild(newDiv)
    }
  }

  getTrap()
  clearBoxes()
  getImage()

  function pushArray() {
    getTrap()
    clearBoxes()
    getImage()
  }

  ////// LISTEN INPUT
  let input = document.querySelector('.inputs-container input')

  input.addEventListener('input', () => {
    pushArray()
  })
})
</script>

<template>
  <div class="image-container">
    <div class="render"></div>

    <div class="answer">
      <div class="border"></div>
      <div class="text">
        <div class="title">Output: <code class="language-js">{{ totalSpaces }}</code></div>
        <div class="explanation">Explanation: The above elevation map (black section) is represented by array <code class="language-js">{{ heights }}</code>. In this case, <code class="language-js">{{ totalSpaces }}</code> units of rain water (green section) are being trapped.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.TrappingRainWater {
  .image-container {
    .render {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
  
      .parent {
        display: flex;
        
        .box {
          width: 20px;
          height: 20px;
          background: #000;
        }
      }
    }
  }
  
  .water {
    animation: colorBoxAnimation 1s infinite alternate linear;
  }
  
  .transparent {
    box-sizing: border-box;
    border: .5px solid rgba(255, 255, 255, 0.135);
  }
  
  @keyframes colorBoxAnimation {
    0% { background: rgb(37, 221, 126); }
    100% { background: rgba(37, 221, 126, 0.286); }
  }
}
</style>