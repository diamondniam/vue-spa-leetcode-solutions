import{P as _}from"./PageTemplate-CtJk0FmF.js";import{g as w,a as o,c as d,b as t,d as e,f as l,v as c,u as i,F as u,h as y,t as v,_ as b,P as j,e as p,w as r,i as h}from"./index-CTUXxUsL.js";const T={class:"inputs"},W=t("div",{class:"title"},"Input:",-1),I={class:"input"},P={class:"array"},A={class:"number"},J={class:"image-container"},$={class:"answer"},k=t("div",{class:"border"},null,-1),Q={class:"text"},V=t("div",{class:"title"},"Output:",-1),E={class:"lines"},G={class:"language-js"},N={__name:"TextJustificationImage",setup(m){const n=w();return n.justify(),(g,a)=>(o(),d(u,null,[t("div",T,[W,t("div",I,[t("div",P,[e(" words = ["),l(t("input",{style:{width:"200px"},"onUpdate:modelValue":a[0]||(a[0]=s=>i(n).words=s),onInput:a[1]||(a[1]=s=>i(n).justify()),type:"text",placeholder:"Array of strings expected..."},null,544),[[c,i(n).words]]),e("]. ")]),t("div",A,[e(" maxWidth = "),l(t("input",{style:{width:"30px"},type:"text","onUpdate:modelValue":a[2]||(a[2]=s=>i(n).maxWidth=s),onInput:a[3]||(a[3]=s=>i(n).justify()),placeholder:"Number expexted..."},null,544),[[c,i(n).maxWidth]]),e(". ")])])]),t("div",J,[t("div",$,[k,t("div",Q,[V,t("div",E,[t("pre",null,[e("            "),(o(!0),d(u,null,y(i(n).res,s=>(o(),d("div",{key:s,class:"line"},[t("code",G,v(s),1)]))),128)),e(`
          `)])])])])])],64))}},B={components:{PageTemplate:_,TextJustificationImage:N},data(){return{justInputs:!1}},mounted(){window.Prism=window.Prism||{},window.Prism.manual=!0,j.highlightAll()}},C={class:"TextJustification"},F=t("div",{class:"content"},[e(" Given an array of strings words and a width "),t("code",{class:"language-js"},"maxWidth"),e(", format the text such that each line has exactly "),t("code",{class:"language-js"},"maxWidth"),e(" characters and is fully (left and right) justified. "),t("br"),t("br"),e(" You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly "),t("code",{class:"language-js"},"maxWidth"),e(" characters. "),t("br"),t("br"),e(" Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. "),t("br"),t("br"),e(" For the last line of text, it should be left-justified, and no extra space is inserted between words. ")],-1),D=t("pre",null,[t("code",{style:{display:"inline",height:"20px"},class:"language-js"},`
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
        `)],-1);function M(m,n,g,a,s,S){const x=h("TextJustificationImage"),f=h("PageTemplate");return o(),d("div",C,[p(f,{justInput:s.justInputs},{title:r(()=>[e("Text Justification")]),text:r(()=>[F]),inputs:r(()=>[p(x)]),notes:r(()=>[e("Clearly solved.")]),code:r(()=>[D]),_:1},8,["justInput"])])}const O=b(B,[["render",M]]);export{O as default};
