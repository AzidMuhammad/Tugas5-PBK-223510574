import{_ as t,c as n,a as o,o as i}from"./index-51o9ACv2.js";const c="/assets/woman-model-DfFs3kz-.jpg",r="/assets/man-model-CBDtXlKt.jpg",m={methods:{goToWomanPage(){this.$router.push({name:"WomanPage"})},goToManPage(){this.$router.push({name:"ManPage"})}}},_={class:"container"},d=o("img",{src:c},null,-1),g=o("div",{class:"text"},"Wanita",-1),l=[d,g],u=o("img",{src:r},null,-1),p=o("div",{class:"text"},"Pria",-1),P=[u,p];function h(f,s,v,T,k,a){return i(),n("div",null,[o("div",_,[o("div",{class:"image-container woman",onClick:s[0]||(s[0]=(...e)=>a.goToWomanPage&&a.goToWomanPage(...e))},l),o("div",{class:"image-container man",onClick:s[1]||(s[1]=(...e)=>a.goToManPage&&a.goToManPage(...e))},P)])])}const W=t(m,[["render",h]]);export{W as default};