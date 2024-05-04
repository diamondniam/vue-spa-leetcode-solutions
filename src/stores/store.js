import { defineStore } from "pinia"

export const TheSkylineProblemStore = defineStore('TheSkylineProblemStore', {
  state: () => ({
    buildings: [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
  }),
  actions: {
    inputArray(input) {
      let array = []
      let subarray = ''
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== '[' && input[i] !== ']') {
          subarray += input[i]
        }
        if (input[i] == ']' && subarray[0]) {
          array.push(subarray.split(',').map((x) => parseInt(x)))
          subarray = ''
          i++
        }
        if (input[i] == ']' && subarray[0]) {
          array.push(subarray)
          subarray = []
        }
      }
      this.buildings = array
    }
  }
})

export const TrappingRainWaterStore = defineStore('TrappingRainWater', {
  state: () => ({
    heights: '0,1,0,2,1,0,1,3,2,1,2,1',
    colors: [],
  }),
  actions: {
    clearColors() {
      this.colors = []
    }
  }
})

export const TextJustificationStore = defineStore('TextJustificationStore', {
  state: () => ({
    words: 'This is an example of text justification.',
    maxWidth: 16,
    res: []
  }),
  actions: {
    justify() {
      let length = 0, remainder = 0, arr = [], stringGlobal = '', spaceArr = [], 
          string = '', start = 0, index = 0

      let array = this.words.split(' ')

      for (let i = 0; i < array.length; i++) {
        stringGlobal += array[i] + ' '
        length += array[i].length
        let spaceQuantity = i - start

        if (length + spaceQuantity > this.maxWidth) {
          spaceQuantity -= 1
          remainder = this.maxWidth - (length - array[i].length)
          let spaceWidth = Math.ceil(remainder / spaceQuantity)

          for (let k = 0; k < spaceQuantity; k++) {
            spaceArr.push(spaceWidth)
          }

          let sum = spaceArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          },0);

          for (let l = spaceQuantity - 1; l >= 0; l--) {
            if (sum > remainder && spaceArr[l] !== 0) {
              spaceArr[l]--
              sum--
            }
          }

          for (let j = start; j < i; j++) {
            if (spaceQuantity === 0) {
              string += array[j].padEnd(array[j].length + remainder)
            } else {
              if (j !== i - 1) {
                string += array[j].padEnd(array[j].length + spaceArr[index])
                index++
              } else {
                string += array[j].padEnd(array[j].length)
              }
            }
          }

          arr.push(string)
          
          length = array[i].length
          spaceQuantity = 0
          string = ''
          index = 0
          spaceArr = []
          stringGlobal = array[i] + ' '
          start = i 
        }
        if (i === array.length - 1) {
          arr.push(stringGlobal.substring(0, this.maxWidth).padEnd(this.maxWidth))
        }
      }

      this.res = arr
    }
  }
})