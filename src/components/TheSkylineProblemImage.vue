<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({buildings: Array})
let output = ref([])

onMounted(() => {
  let array = props.buildings
  let boxSize = 10

  function updateProps() {  
    array = props.buildings
  }

  function getSkyline() {
    let max = array.reduce((acc, c) => acc[1] > c[1] ? acc : c), 
        arr = [0], every = 0, cur = every, res = []

    for (let i = 0; i <= max[1]; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j][0] === i) {
          arr.push(array[j][2])
        }
        if (array[j][1] === i) {
          for (let k = 0; k < arr.length; k++) {
            if (arr[k] === array[j][2]) {
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
    output.value = res
  }

  function clearBoxes() {
    const container = document.querySelector('.image-container')
    const render = document.querySelector('.render')
    container.removeChild(render)
    let newDiv = document.createElement('div')
    newDiv.className = 'render'
    container.appendChild(newDiv)
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  function getImage() {
    let maxHeight = 0
    const render = document.querySelector('.render')

    for (let i = 0; i < array.length; i++) {
      maxHeight = Math.max(array[i][2], maxHeight)
      render.style.height = `${maxHeight * boxSize}px`

      let newDiv = document.createElement('div')
      newDiv.className = 'box'
      newDiv.style.background = `${getRandomColor()}`
      newDiv.style.width = `${(array[i][1] - array[i][0]) * boxSize}px`
      newDiv.style.height = `${array[i][2] * boxSize}px`
      newDiv.style.left = `${array[i][0] * boxSize}px`
      render.appendChild(newDiv)
    }
  }

  function getSkylineImage() {
    const render = document.querySelector('.render')
    let pointSize = 10

    for (let i = 0; i < output.value.length; i++) {
      let newDiv = document.createElement('div')
      newDiv.className = 'point'
      newDiv.style.background = `${getRandomColor()}`
      newDiv.style.left = `${(output.value[i][0] * boxSize) - (pointSize / 2)}px`
      newDiv.style.bottom = `${(output.value[i][1] * boxSize) - (pointSize / 2)}px`
      render.appendChild(newDiv)
    }
  }

  function getResult() {
    updateProps()
    clearBoxes()
    getSkyline()
    getImage()
    getSkylineImage()
  }

  getResult()

  const button = document.querySelector('.inputs-container button')

  button.addEventListener('click', () => {
    getResult()
  })
})
</script>

<template>
  <div class="image-container">
    <div class="render"></div>

    <div class="answer">
      <div class="border"></div>
      <div class="text">
        <div class="title">Output: <code class="language-js">{{ output }}</code></div>
        <div class="explanation">Explanation: Boxes show the buildings of the input. <br> Points show the skyline formed by those buildings. The points represent the key points in the output list.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.TheSkylineProblem {
  .render {
    position: relative;
  
    .box {
      position: absolute;
      bottom: 0;
    }
  
    .point {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}
</style>