import{r as C,o as E,a as x,c as k,b as e,d as n,t as j,u as b,j as I,e as _,w as h,P as A,f as N,v as q}from"./index-t9_TEQmV.js";import{P as w}from"./PageTemplate-BhEdUWiV.js";const B={class:"image-container"},D=e("div",{class:"render"},null,-1),z={class:"answer"},V=e("div",{class:"border"},null,-1),F={class:"text"},O={class:"title"},R={class:"language-js"},G=e("div",{class:"explanation"},[n("Explanation: Boxes show the buildings of the input. "),e("br"),n(" Points show the skyline formed by those buildings. The points represent the key points in the output list.")],-1),S={__name:"TheSkylineProblemImage",props:{buildings:Array},setup(m){const c=m;let d=C([]);return E(()=>{let i=c.buildings,l=10;function g(){i=c.buildings}function $(){let r=i.reduce((u,a)=>u[1]>a[1]?u:a),s=[0],t=0,o=t,v=[];for(let u=0;u<=r[1];u++){for(let a=0;a<i.length;a++){if(i[a][0]===u&&s.push(i[a][2]),i[a][1]===u)for(let p=0;p<s.length;p++)s[p]===i[a][2]&&s.splice(p,1);t=Math.max(...s)}t!==o&&(v.push([u,Math.max(...s)]),o=t)}d.value=v}function P(){const r=document.querySelector(".image-container"),s=document.querySelector(".render");r.removeChild(s);let t=document.createElement("div");t.className="render",r.appendChild(t)}function y(){var r="0123456789ABCDEF",s="#";for(let t=0;t<6;t++)s+=r[Math.floor(Math.random()*16)];return s}function T(){let r=0;const s=document.querySelector(".render");for(let t=0;t<i.length;t++){r=Math.max(i[t][2],r),s.style.height=`${r*l}px`;let o=document.createElement("div");o.className="box",o.style.background=`${y()}`,o.style.width=`${(i[t][1]-i[t][0])*l}px`,o.style.height=`${i[t][2]*l}px`,o.style.left=`${i[t][0]*l}px`,s.appendChild(o)}}function M(){const r=document.querySelector(".render");let s=10;for(let t=0;t<d.value.length;t++){let o=document.createElement("div");o.className="point",o.style.background=`${y()}`,o.style.left=`${d.value[t][0]*l-s/2}px`,o.style.bottom=`${d.value[t][1]*l-s/2}px`,r.appendChild(o)}}function f(){g(),P(),$(),T(),M()}f(),document.querySelector(".inputs-container button").addEventListener("click",()=>{f()})}),(i,l)=>(x(),k("div",B,[D,e("div",z,[V,e("div",F,[e("div",O,[n("Output: "),e("code",R,j(b(d)),1)]),G])])]))}},H={class:"TheSkylineProblem"},L=e("div",{class:"content"},[n(" A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively."),e("br"),e("br"),n(" The geometric information of each building is given in the array buildings where "),e("code",{style:{border:"none"},class:"language-js"},"buildings[i] = [left [i], right [i], height [i]]"),n(":"),e("br"),e("br"),e("code",{class:"language-js"},"left[i]"),n(" is the x coordinate of the left edge of the ith building."),e("br"),e("code",{class:"language-js"},"right[i]"),n(" is the x coordinate of the right edge of the ith building."),e("br"),e("code",{class:"language-js"},"height[i]"),n(" is the height of the ith building."),e("br"),e("br"),n(" You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at "),e("code",{class:"language-js"},"height 0"),n("."),e("br"),e("br"),n(' The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form '),e("code",{style:{border:"none"},class:"language-js"},"[[x1,y1],[x2,y2],...]"),n(". Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour."),e("br"),e("br"),n(" Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, "),e("code",{style:{border:"none"},class:"language-js"},"[...,[2 3],[4 5],[7 5],[11 5],[12 7],...]"),n(" is not acceptable; the three lines of height 5 should be merged into one in the final output as such: "),e("code",{style:{border:"none"},class:"language-js"},"[...,[2 3],[4 5],[12 7],...]"),n(". ")],-1),U={class:"inputs-container"},Y={class:"example"},J={class:"array"},K={class:"button"},Q=e("pre",null,[n("          "),e("code",{style:{display:"inline",height:"20px"},class:"language-javascript"},`
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
        `)],-1),W={components:{PageTemplate:w,TheSkylineProblemImage:S},data(){return{input:"",justInputs:!0}},mounted(){window.Prism=window.Prism||{},window.Prism.manual=!0,A.highlightAll()}},te=Object.assign(W,{__name:"TheSkylineProblem",setup(m){const c=I(),d=c.buildings;return(i,l)=>(x(),k("div",H,[_(w,{justInputs:i.justInputs},{title:h(()=>[n("The Skyline Problem")]),text:h(()=>[L]),input:h(()=>[e("div",U,[e("div",Y,"buildings = "+j(b(d)),1),e("div",J,[n(" try yourself = "),N(e("input",{"onUpdate:modelValue":l[0]||(l[0]=g=>i.input=g),type:"text",placeholder:"Array[[],[]] expected..."},null,512),[[q,i.input]]),n(". ")]),e("div",K,[e("button",{onClick:l[1]||(l[1]=g=>b(c).inputArray(i.input))},"submit")])])]),image:h(()=>[_(S,{buildings:b(c).buildings},null,8,["buildings"])]),notes:h(()=>[n("Slow speed because of multiple cycles. There is solution lighter and faster.")]),code:h(()=>[Q]),_:1},8,["justInputs"])]))}});export{te as default};