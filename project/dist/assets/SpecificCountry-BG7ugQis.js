import{d as C,r as f,o as b,w as N,a as n,c as s,b as e,e as i,t as l,F as _,f as p,u as L,g as S,l as h,h as w,p as B,i as D}from"./index-BKWFjLCG.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const a=r=>(B("data-v-a1d0f53e"),r=r(),D(),r),R={key:0},T=a(()=>e("span",null,"←",-1)),$={class:"country-details"},x={class:"country-flag"},F=["src","alt"],P={class:"country-container"},V={class:"two-p"},E={class:"first-p"},M=a(()=>e("strong",null,"Native Name:",-1)),j=a(()=>e("strong",null,"Population:",-1)),q=a(()=>e("strong",null,"Region:",-1)),z=a(()=>e("strong",null,"Sub Region:",-1)),A=a(()=>e("strong",null,"Capital:",-1)),G={class:"second-p"},H=a(()=>e("strong",null,"Top Level Domain:",-1)),J=a(()=>e("strong",null,"Currencies:",-1)),K={key:0},O={key:1},Q=a(()=>e("strong",null,"Languages:",-1)),U={key:0},W={key:1},X={class:"borders"},Y=a(()=>e("strong",null,"Border Countries:",-1)),Z={key:0},ee=["onClick"],oe={key:1},ne={key:1},se=a(()=>e("p",null,"Loading country details...",-1)),te=[se],ae=C({__name:"SpecificCountry",setup(r){const v=L(),y=S(),g=f(v.params.name),o=f(null),m=()=>{const u=h.find(c=>c.name.toLowerCase()===g.value.toLowerCase());o.value=u||null};b(m),N(()=>v.params.name,u=>{g.value=u,m()});const k=u=>{var t;const c=(t=h.find(d=>d.alpha3Code===u))==null?void 0:t.name;c&&y.push({name:"countryName",params:{name:c}})};return(u,c)=>o.value?(n(),s("div",R,[e("button",{class:"go-back",onClick:c[0]||(c[0]=t=>u.$router.push("/"))},[T,i(" Back ")]),e("div",$,[e("div",x,[e("img",{src:o.value.flag,alt:`Flag of ${o.value.name}`},null,8,F)]),e("div",P,[e("h1",null,l(o.value.name),1),e("div",V,[e("div",E,[e("p",null,[M,i(" "+l(o.value.nativeName),1)]),e("p",null,[j,i(" "+l(o.value.population.toLocaleString()),1)]),e("p",null,[q,i(" "+l(o.value.region),1)]),e("p",null,[z,i(" "+l(o.value.subregion),1)]),e("p",null,[A,i(" "+l(o.value.capital),1)])]),e("div",G,[e("p",null,[H,i(" "+l(o.value.topLevelDomain[0]),1)]),e("p",null,[J,o.value.currencies.length?(n(),s("span",K,[e("ul",null,[(n(!0),s(_,null,p(o.value.currencies,t=>(n(),s("li",{key:t.code},l(t.name),1))),128))])])):(n(),s("span",O,"No currencies available"))]),e("p",null,[Q,o.value.languages.length?(n(),s("span",U,[e("ul",null,[(n(!0),s(_,null,p(o.value.languages,t=>(n(),s("li",{key:t.code},l(t.name),1))),128))])])):(n(),s("span",W,"No languages info available"))])])]),e("div",X,[e("div",null,[Y,o.value.borders.length?(n(),s("span",Z,[e("ul",null,[(n(!0),s(_,null,p(o.value.borders,t=>(n(),s("li",{key:t.code,onClick:d=>k(t)},l(w(h).find(d=>d.alpha3Code===t).name),9,ee))),128))])])):(n(),s("span",oe,"No borders info available"))])])])])])):(n(),s("div",ne,te))}}),ce=I(ae,[["__scopeId","data-v-a1d0f53e"]]);export{ce as default};