import{_ as m,r as g,o as u,c as h,n as v,a as t,d as a,w as l,e as p,f as b,g as x,v as w,F as _,h as f,i as o,p as k,b as y}from"./index-3QIEcqPB.js";import{_ as C,a as S,b as j,c as A,d as M,e as I,f as R,g as V,h as P,i as D,j as B,k as N,l as T,m as E}from"./Footer-EY6ko208.js";const K={name:"NavbarWomanPage",data(){return{isSidebarVisible:!1,isHovered:!1,isScrolled:!1,isProfileModalVisible:!1,isCartModalVisible:!1,searchResultsVisible:!1}},methods:{toggleSidebar(){this.isSidebarVisible=!this.isSidebarVisible},showSidebarContent(){this.isHovered=!0},hideSidebarContent(){this.isHovered=!1},handleScroll(){this.isScrolled=window.scrollY>0},toggleCartModal(r){if(r==="profile"?this.isProfileModalVisible=!this.isProfileModalVisible:r==="cart"&&(this.isCartModalVisible=!this.isCartModalVisible),this.isCartModalVisible|this.isProfileModalVisible)document.body.style.position="fixed",document.body.style.top=`-${window.scrollY}px`,document.body.style.width="100%";else{const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,parseInt(e||"0")*-1)}},showSearchResults(){this.searchResultsVisible=!0,document.body.style.position="fixed",document.body.style.top=`-${window.scrollY}px`,document.body.style.width="100%"},hideSearchResults(){this.searchResultsVisible=!1;const r=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,parseInt(r||"0")*-1)}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},i=r=>(k("data-v-0172c7c1"),r=r(),y(),r),H=i(()=>t("div",{class:"hamburger"},[t("div",{class:"hamburger-icon"}),t("div",{class:"hamburger-icon"}),t("div",{class:"hamburger-icon"})],-1)),L=[H],W={key:1,class:"sidebar"},z={class:"main-links"},O=i(()=>t("li",null,[t("p",null,"|")],-1)),Y={class:"kategori"},U={class:"main-links"},F=i(()=>t("li",null,[t("p",null,"|")],-1)),J={class:"kategori"},G={class:"kategori2"},Q={key:2,class:"navbar-brand"},Z={class:"navbar-menu"},q={class:"navbar-end"},X={class:"search-box"},$=f('<button class="search-button" data-v-0172c7c1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" data-v-0172c7c1><circle cx="11" cy="11" r="8" data-v-0172c7c1></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-0172c7c1></line></svg></button><input type="text" placeholder="Cari" class="search-input" data-v-0172c7c1>',2),tt=[$],et=i(()=>t("img",{src:C,alt:"Profile",class:"icon"},null,-1)),st=[et],at=i(()=>t("img",{src:S,alt:"Cart",class:"icon"},null,-1)),lt=[at],ot=i(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),ct=[ot],it={class:"modal-content"},nt=i(()=>t("img",{src:j},null,-1)),rt=i(()=>t("h6",null,"Sedang Dalam Pengembangan",-1)),dt=i(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{stroke:"none",d:"M0 0h24V0H0z",fill:"none"}),t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),ut=[dt],ht={class:"modal-content"},pt=i(()=>t("h1",null,"Keranjang Belanja (0)",-1)),vt=i(()=>t("hr",null,null,-1)),bt=i(()=>t("img",{src:A},null,-1)),ft=i(()=>t("h6",null,"Keranjang Belanja Anda Kosong",-1)),mt=i(()=>t("p",null,"Periksa apakah ada produk di daftar keinginan Anda, dan dapatkan produk tersebut sebelum kehabisan! Anda juga dapat memeriksa barang yang baru tiba ;)",-1)),gt={key:3,class:"bg-white fixed inset-0 z-50 overflow-y-auto"},xt={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0 bg-white"},wt={class:"search-results-container fixed inset-0 z-50 overflow-y-auto pt-10 bg-white"},_t={class:"fixed top-0 inset-x-0 z-50 bg-white px-4 py-4 border-b border-gray-200"},kt={class:"searchbar-modal relative"},yt=i(()=>t("i",{class:"fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-black"},null,-1)),Ct={class:"mt-28 px-4"},St=i(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)),jt=[St],At=f('<h2 class="text-xl font-bold text-gray-700 mb-4 font-sans" data-v-0172c7c1>Disarankan Untuk Anda</h2><div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 bg-white" data-v-0172c7c1><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+M+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Kaos STWD Tie-Dye</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR299.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+I+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Gaun Midi</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR299.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+R+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Set Gelang Manik</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR179.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+V+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Jaket Suede</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR479.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+P+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Hoodie Oversize</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR499.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+D+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Celana Kargo Wanita</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR399.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+B+'" class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Celana Rajut Pria</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR799.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+N+'" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Blus Tekstur Pita</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR479.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+T+'" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Kemeja Motif</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR649.000</p></a><a href="#" class="group" data-v-0172c7c1><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" data-v-0172c7c1><img src="'+E+'" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" data-v-0172c7c1></div><h3 class="mt-4 text-sm text-black text-center font-sans" data-v-0172c7c1>Biker Jaket Wanita</h3><p class="mt-1 text-md font-bold text-black font-sans text-center" data-v-0172c7c1>IDR1.299.000</p></a></div>',2);function Mt(r,e,It,Rt,d,n){const s=g("router-link");return u(),h(_,null,[d.searchResultsVisible?p("",!0):(u(),h("nav",{key:0,class:v(["navbar",{"navbar-scrolled":d.isScrolled}])},[d.isScrolled&&!d.isSidebarVisible?(u(),h("div",{key:0,class:"navbar-hamburger",onMouseover:e[0]||(e[0]=(...c)=>n.showSidebarContent&&n.showSidebarContent(...c)),onMouseleave:e[1]||(e[1]=(...c)=>n.hideSidebarContent&&n.hideSidebarContent(...c))},L,32)):(u(),h("div",W,[t("ul",z,[t("li",null,[a(s,{to:"/wanita"},{default:l(()=>[o("WANITA")]),_:1})]),O,t("li",null,[a(s,{to:"/pria"},{default:l(()=>[o("PRIA")]),_:1})])]),t("ul",Y,[t("li",null,[a(s,{to:"/pakaian-wanita"},{default:l(()=>[o("PAKAIAN")]),_:1})]),t("li",null,[a(s,{to:"/aksesoris-wanita"},{default:l(()=>[o("AKSESORIS")]),_:1})]),t("li",null,[a(s,{to:"/tas-wanita"},{default:l(()=>[o("TAS | RANSEL")]),_:1})]),t("li",null,[a(s,{to:"/pasific-republic-wanita"},{default:l(()=>[o("PASIFIC REPUBLIC")]),_:1})])])])),t("div",{class:v(["sidebar-content",{"show-sidebar":d.isSidebarVisible||d.isHovered}])},[t("ul",U,[t("li",null,[a(s,{to:"/woman"},{default:l(()=>[o("WANITA")]),_:1})]),F,t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("PRIA")]),_:1})])]),t("ul",J,[t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("PAKAIAN")]),_:1})]),t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("AKSESORIS")]),_:1})]),t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("TAS | RANSEL")]),_:1})]),t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("KOLABORASI")]),_:1})])]),t("ul",G,[t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("TANYA JAWAB")]),_:1})]),t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("Cara Melakukan Pengembalian")]),_:1})]),t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("TOKO")]),_:1})]),t("li",null,[a(s,{to:"/man"},{default:l(()=>[o("NEWSLETTER")]),_:1})])])],2),d.isScrolled?p("",!0):(u(),h("div",Q,[a(s,{to:"/wanita",class:"navbar-item"},{default:l(()=>[o(" FILZ DU DIABLE ")]),_:1})])),t("div",Z,[t("div",q,[t("div",X,[t("div",{class:"search-input-container",onClick:e[2]||(e[2]=(...c)=>n.showSearchResults&&n.showSearchResults(...c))},tt)]),t("div",{class:"navbar-item",onClick:e[3]||(e[3]=c=>n.toggleCartModal("profile"))},st),t("div",{class:"navbar-item",onClick:e[4]||(e[4]=c=>n.toggleCartModal("cart"))},lt)])])],2)),d.isProfileModalVisible?(u(),h("div",{key:1,class:"modal-overlay2",onClick:e[8]||(e[8]=c=>n.toggleCartModal("profile"))},[t("div",{class:"modal2",onClick:e[7]||(e[7]=b(()=>{},["stop"]))},[t("button",{class:"modal-close-btn",onClick:e[5]||(e[5]=c=>n.toggleCartModal("profile"))},ct),t("div",it,[nt,rt,t("button",{class:"profile-btn",onClick:e[6]||(e[6]=c=>n.toggleCartModal("profile"))},"Halaman Utama")])])])):p("",!0),d.isCartModalVisible?(u(),h("div",{key:2,class:"modal-overlay",onClick:e[12]||(e[12]=c=>n.toggleCartModal("cart"))},[t("div",{class:"modal",onClick:e[11]||(e[11]=b(()=>{},["stop"]))},[t("button",{class:"modal-close-btn",onClick:e[9]||(e[9]=c=>n.toggleCartModal("cart"))},ut),t("div",ht,[pt,vt,bt,ft,mt,t("button",{class:"shopcart-btn",onClick:e[10]||(e[10]=c=>n.toggleCartModal("cart"))},"Lihat Barang Baru")])])])):p("",!0),d.searchResultsVisible?(u(),h("div",gt,[t("div",xt,[t("div",wt,[t("div",_t,[t("div",kt,[x(t("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=c=>r.searchQuery=c),placeholder:"Apa Yang Anda Cari?",class:"w-full pl-10 pr-4 py-3 rounded-lg focus:ring-opacity-20 text-3xl font-semibold font-sans text-gray-500 placeholder-opacity-100"},null,512),[[w,r.searchQuery]]),yt])]),t("div",Ct,[t("button",{onClick:e[14]||(e[14]=c=>d.searchResultsVisible=!1),class:"close-search-results text-black hover:text-gray-800 focus:outline-none absolute top-24 right-2"},jt),At])])])])):p("",!0)],64)}const Dt=m(K,[["render",Mt],["__scopeId","data-v-0172c7c1"]]);export{Dt as N};
