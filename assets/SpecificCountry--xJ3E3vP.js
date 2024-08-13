import{d as C,r as y,o as b,w as N,c as n,a as e,b as r,t as l,F as v,e as g,u as L,f as S,l as m,g as s,h as w,p as B,i as D}from"./index-CP5uGIIc.js";const a=u=>(B("data-v-a1d0f53e"),u=u(),D(),u),I={key:0},R=a(()=>e("span",null,"←",-1)),T={class:"country-details"},$={class:"country-flag"},x=["src","alt"],F={class:"country-container"},P={class:"two-p"},V={class:"first-p"},E=a(()=>e("strong",null,"Native Name:",-1)),M=a(()=>e("strong",null,"Population:",-1)),O=a(()=>e("strong",null,"Region:",-1)),j=a(()=>e("strong",null,"Sub Region:",-1)),q=a(()=>e("strong",null,"Capital:",-1)),z={class:"second-p"},A=a(()=>e("strong",null,"Top Level Domain:",-1)),G=a(()=>e("strong",null,"Currencies:",-1)),H={key:0},J={key:1},K=a(()=>e("strong",null,"Languages:",-1)),Q={key:0},U={key:1},W={class:"borders"},X=a(()=>e("strong",null,"Border Countries:",-1)),Y={key:0},Z=["onClick"],ee={key:1},oe={key:1},ne=a(()=>e("p",null,"Loading country details...",-1)),se=[ne],te=C({__name:"SpecificCountry",setup(u){const d=L(),_=S(),p=y(d.params.name),o=y(null),f=()=>{const c=m.find(i=>i.name.toLowerCase()===p.value.toLowerCase());o.value=c||null};b(f),N(()=>d.params.name,c=>{p.value=c,f()});const k=c=>{var t;const i=(t=m.find(h=>h.alpha3Code===c))==null?void 0:t.name;i&&_.push({name:"countryName",params:{name:i}})};return(c,i)=>o.value?(s(),n("div",I,[e("button",{class:"go-back",onClick:i[0]||(i[0]=t=>c.$router.push("/"))},[R,r(" Back ")]),e("div",T,[e("div",$,[e("img",{src:o.value.flag,alt:`Flag of ${o.value.name}`},null,8,x)]),e("div",F,[e("h1",null,l(o.value.name),1),e("div",P,[e("div",V,[e("p",null,[E,r(" "+l(o.value.nativeName),1)]),e("p",null,[M,r(" "+l(o.value.population.toLocaleString()),1)]),e("p",null,[O,r(" "+l(o.value.region),1)]),e("p",null,[j,r(" "+l(o.value.subregion),1)]),e("p",null,[q,r(" "+l(o.value.capital),1)])]),e("div",z,[e("p",null,[A,r(" "+l(o.value.topLevelDomain[0]),1)]),e("p",null,[G,o.value.currencies.length?(s(),n("span",H,[e("ul",null,[(s(!0),n(v,null,g(o.value.currencies,t=>(s(),n("li",{key:t.code},l(t.name),1))),128))])])):(s(),n("span",J,"No currencies available"))]),e("p",null,[K,o.value.languages.length?(s(),n("span",Q,[e("ul",null,[(s(!0),n(v,null,g(o.value.languages,t=>(s(),n("li",{key:t.code},l(t.name),1))),128))])])):(s(),n("span",U,"No languages info available"))])])]),e("div",W,[e("div",null,[X,o.value.borders.length?(s(),n("span",Y,[e("ul",null,[(s(!0),n(v,null,g(o.value.borders,t=>(s(),n("li",{key:t.code,onClick:h=>k(t)},l(w(m).find(h=>h.alpha3Code===t).name),9,Z))),128))])])):(s(),n("span",ee,"No borders info available"))])])])])])):(s(),n("div",oe,se))}}),ae=(u,d)=>{const _=u.__vccOpts||u;for(const[p,o]of d)_[p]=o;return _},ue=ae(te,[["__scopeId","data-v-a1d0f53e"]]);export{ue as default};