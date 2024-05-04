import{r as I,o as $,a as y,c as b,b as e,d as r,t as f,u as c,T as C,e as w,w as g,f as E,v as N,P}from"./index-tCGPpUKE.js";import{P as T}from"./PageTemplate-Ctyuh0gr.js";const k={class:"image-container"},D=e("div",{class:"render"},null,-1),M={class:"answer"},R=e("div",{class:"border"},null,-1),W={class:"text"},q={class:"title"},A={class:"language-js"},B={class:"explanation"},V={class:"language-js"},L={class:"language-js"},j={__name:"TrappingRainWaterImage",props:{colors:Array,heights:String},setup(_){let t=_,p=I(0);return $(()=>{let n=[];function d(){n=t.heights.split(",");let l=Math.max(...n),u=Math.min(...n),o=!1,a=0;p.value=0;for(let h=u;h<=l;h++){o=!1;for(let i=0;i<n.length;i++)if(h!==0&&(n[i]<h&&(a++,t.colors.push({index:i,color:"transparent",transparent:!0})),n[i]>=h)){if(o){p.value+=a;for(let s=0;s<a;s++)t.colors.pop();for(let s=0;s<a;s++)t.colors.push({index:i-(s+1),color:"rgb(37, 221, 126)",animation:!0})}t.colors.push({index:i,color:"rgb(2, 14, 8)"}),a=0,o=!0}}}function v(){const l=document.querySelector(".image-container"),u=document.querySelector(".render");l.removeChild(u);let o=document.createElement("div");o.className="render",l.appendChild(o)}function x(){const l=document.querySelector(".render");let u=n.length,o=1;for(let a=0;a<t.colors.length;a++){if(a==0){let m=document.createElement("div");m.className="parent",l.appendChild(m)}if(a==u){u+=n.length,o++;let m=document.createElement("div");m.className="parent",l.appendChild(m)}let i=document.querySelectorAll(".parent")[o-1],s=document.createElement("div");s.className="box",s.style.background=`${t.colors[a].color}`,t.colors[a].animation===!0&&s.classList.add("water"),t.colors[a].transparent===!0&&s.classList.add("transparent"),i.appendChild(s)}}d(),v(),x();function S(){d(),v(),x()}document.querySelector(".inputs-container input").addEventListener("input",()=>{S()})}),(n,d)=>(y(),b("div",k,[D,e("div",M,[R,e("div",W,[e("div",q,[r("Output: "),e("code",A,f(c(p)),1)]),e("div",B,[r("Explanation: The above elevation map (black section) is represented by array "),e("code",V,f(_.heights),1),r(". In this case, "),e("code",L,f(c(p)),1),r(" units of rain water (green section) are being trapped.")])])])]))}},O={class:"TrappingRainWater"},z=e("div",{class:"content"},[r(" Given "),e("code",{class:"language-js problem-code"},"n"),r(" non-negative integers representing an elevation map where the "),e("code",{class:"language-js problem-code"},"width"),r(" of each bar is "),e("code",{class:"language-js problem-code"},"1"),r(", compute how much water it can trap after raining. ")],-1),G={class:"inputs-container"},U={class:"array"},F=e("pre",null,[e("code",{class:"language-js"},`
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
        `)],-1),H={components:{PageTemplate:T,TrappingRainWaterImage:j},data(){return{boxSize:20,justInputs:!0}},mounted(){window.Prism=window.Prism||{},window.Prism.manual=!0,P.highlightAll()}},X=Object.assign(H,{__name:"TrappingRainWater",setup(_){const t=C();return t.colors=[],(p,n)=>(y(),b("div",O,[w(T,{justInputs:p.justInputs},{title:g(()=>[r("Trapping Rain Water")]),text:g(()=>[z]),input:g(()=>[e("div",G,[e("div",U,[r(" heights = ["),E(e("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>c(t).heights=d),onInput:n[1]||(n[1]=d=>c(t).clearColors()),type:"text",placeholder:"Array[] expected..."},null,544),[[N,c(t).heights]]),r("]. ")])])]),image:g(()=>[w(j,{colors:c(t).colors,heights:c(t).heights},null,8,["colors","heights"])]),notes:g(()=>[r("This solution was rejected because of time exceeded error. I solved 319/322 problems here.")]),code:g(()=>[F]),_:1},8,["justInputs"])]))}});export{X as default};
