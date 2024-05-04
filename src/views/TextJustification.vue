<script>
import PageTemplate from '@/components/PageTemplate.vue'
import TextJustificationImage from '@/components/TextJustificationImage.vue'
import Prism from "prismjs"
import "prismjs/themes/prism-twilight.min.css"

export default {
  components: { PageTemplate, TextJustificationImage },
  data() {
    return {
      justInputs: false
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
  <div class="TextJustification">
    <PageTemplate :justInput="justInputs">
      <template #title>Text Justification</template>
  
      <template #text>
        <div class="content">
          Given an array of strings words and a width <code class="language-js">maxWidth</code>, format the text such that each line has exactly <code class="language-js">maxWidth</code> characters and is fully (left and right) justified. <br><br>
  
          You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly <code class="language-js">maxWidth</code> characters. <br><br>
            
          Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. <br><br>
            
          For the last line of text, it should be left-justified, and no extra space is inserted between words.
        </div>
      </template>
  
      <template #inputs>
        <TextJustificationImage/>
      </template>
  
      <template #notes>Clearly solved.</template>
  
      <template #code>
        <pre><code style="display: inline; height: 20px" class="language-js">
var fullJustify = function(words, maxWidth) {
  let length = 0, remainder = 0, arr = [],
      stringGlobal = '', spaceArr = [], 
      string = '', start = 0, index = 0

  for (i = 0; i < words.length; i++) {
    stringGlobal += words[i] + ' '
    length += words[i].length
    let spaceQuantity = i - start

    if (length + spaceQuantity > maxWidth) {
      spaceQuantity -= 1
      remainder = maxWidth - (length - words[i].length)
      let spaceWidth = Math.ceil(remainder / spaceQuantity)

      for (k = 0; k < spaceQuantity; k++) {
        spaceArr.push(spaceWidth)
      }

      let sum = spaceArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);

      for (l = spaceQuantity - 1; l >= 0; l--) {
        if (sum > remainder && spaceArr[l] !== 0) {
          spaceArr[l]--
          sum--
        }
      }

      for (j = start; j < i; j++) {
        if (spaceQuantity === 0) {
          string += words[j].padEnd(words[j].length + remainder)
        } else {
          if (j !== i - 1) {
            string += words[j].padEnd(words[j].length + spaceArr[index])
            index++
          } else {
            string += words[j].padEnd(words[j].length)
          }
        }
      }

      arr.push(string)
      
      length = words[i].length
      spaceQuantity = 0
      string = ''
      index = 0
      spaceArr = []
      stringGlobal = words[i] + ' '
      start = i 
    }
    if (i === words.length - 1) {
      arr.push(stringGlobal.substring(0, maxWidth).padEnd(maxWidth))
    }
  }

  return arr
}
        </code></pre>
      </template>
    </PageTemplate>
  </div>
</template>