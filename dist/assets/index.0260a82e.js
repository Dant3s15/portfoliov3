var be=Object.defineProperty,pe=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var oe=(t,r,c)=>r in t?be(t,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[r]=c,s=(t,r)=>{for(var c in r||(r={}))xe.call(r,c)&&oe(t,c,r[c]);if(ce)for(var c of ce(r))Ce.call(r,c)&&oe(t,c,r[c]);return t},a=(t,r)=>pe(t,Se(r));import{R as ue,j as ge,r as o,u as we,i as je,g as Ne,P as ye,a as Ae,G as $e,s as De,b as Le}from"./vendor.0945d6ec.js";const Re=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))_(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&_(h)}).observe(document,{childList:!0,subtree:!0});function c(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function _(d){if(d.ep)return;d.ep=!0;const n=c(d);fetch(d.href,n)}};Re();const le=ue.createContext({isSelected:!1,renderSection:!1}),Te="_header_1gtq1_27",Fe="_navigation_1gtq1_57",ze="_logo_1gtq1_82",Ie="_nav_1gtq1_57",Oe="_nav__item_1gtq1_112",Me="_google_1gtq1_237";var m={header:Te,"header-wrapper":"_header-wrapper_1gtq1_35",navigation:Fe,logo:ze,"logo-item":"_logo-item_1gtq1_89",nav:Ie,nav__item:Oe,"hamburger-button":"_hamburger-button_1gtq1_135","hamburger-icon":"_hamburger-icon_1gtq1_144","close-icon":"_close-icon_1gtq1_145","nav-mobile":"_nav-mobile_1gtq1_174","hamburger-not-active":"_hamburger-not-active_1gtq1_190","hamburger-active":"_hamburger-active_1gtq1_215",google:Me};const e=ge.exports.jsx,i=ge.exports.jsxs,qe=t=>i("svg",a(s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),{children:[e("title",{children:"Menu"}),e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M80 160h352M80 256h352M80 352h352"})]})),Ee=t=>i("svg",a(s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),{children:[e("title",{children:"Close"}),e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M368 368 144 144m224 0L144 368"})]})),de=t=>i("svg",a(s({width:46,height:46,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t),{children:[e("title",{children:"btn_google_light_normal_ios"}),i("defs",{children:[i("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"a",children:[e("feOffset",{dy:1,in:"SourceAlpha",result:"shadowOffsetOuter1"}),e("feGaussianBlur",{stdDeviation:.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),e("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),e("feOffset",{in:"SourceAlpha",result:"shadowOffsetOuter2"}),e("feGaussianBlur",{stdDeviation:.5,in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),e("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),i("feMerge",{children:[e("feMergeNode",{in:"shadowMatrixOuter1"}),e("feMergeNode",{in:"shadowMatrixOuter2"}),e("feMergeNode",{in:"SourceGraphic"})]})]}),e("rect",{id:"b",x:0,y:0,width:40,height:40,rx:2})]}),i("g",{fill:"none",fillRule:"evenodd",children:[i("g",{transform:"translate(3 3)",filter:"url(#a)",children:[e("use",{fill:"#FFF",xlinkHref:"#b"}),e("use",{xlinkHref:"#b"}),e("use",{xlinkHref:"#b"}),e("use",{xlinkHref:"#b"})]}),e("path",{d:"M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z",fill:"#4285F4"}),e("path",{d:"M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 23 32Z",fill:"#34A853"}),e("path",{d:"M17.964 24.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 14 23c0 1.452.348 2.827.957 4.042l3.007-2.332Z",fill:"#FBBC05"}),e("path",{d:"M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71Z",fill:"#EA4335"}),e("path",{d:"M14 14h18v18H14V14Z"})]})]})),He=t=>{const[r,c]=o.exports.useState(!1),_=()=>{r?(c(!1),console.log("hamburger closed")):(c(!0),console.log("hamburger opened"))};return e("header",{className:m.header,children:i("div",{className:`${m["header-wrapper"]} card-glass ${r?m["hamburger-active"]:m["hamburger-not-active"]}`,children:[i("div",{className:m.navigation,children:[e("div",{className:m["logo-item"],children:e("a",{className:m.logo,href:"#",children:e("img",{src:"src/resources/logo.svg",alt:""})})}),i("nav",{className:m.nav,children:[e("a",{href:"#",className:m.nav__item,children:"SECTION1"}),e("a",{href:"#",className:m.nav__item,children:"SECTION2"}),e("a",{href:"#",className:m.nav__item,children:"SECTION3"}),e("a",{href:"#",className:m.nav__item,children:"SECTION4"}),!t.data.google.user&&i("button",{className:`${m.nav__item} ${m.google}`,onClick:t.data.google.signInWithGoogle,id:"login",children:[e(de,{}),e("p",{children:"Sign in with Google"})]}),t.data.google.auth.currentUser&&i("button",{className:`${m.nav__item} ${m.google}`,onClick:()=>t.data.google.auth.signOut(),id:"login",children:[e(de,{}),e("p",{children:"Sign Out"})]})]}),i("button",{className:m["hamburger-button"],onClick:_,children:[e(qe,{className:`${m["hamburger-icon"]} ${r?m["hidden-btn"]:""} `,alt:"hamburger icon"}),e(Ee,{className:`${m["close-icon"]} ${r?"":m["hidden-btn"]}`,alt:"close icon"})]})]}),i("nav",{className:m["nav-mobile"],children:[e("a",{href:"#",className:m.nav__item,children:"SECTION1"}),e("a",{href:"#",className:m.nav__item,children:"SECTION2"}),e("a",{href:"#",className:m.nav__item,children:"SECTION3"}),e("a",{href:"#",className:m.nav__item,children:"SECTION4"})]})]})})},Pe="_gray_4pw3i_82";var Q={"section-hero":"_section-hero_4pw3i_27","character-selection":"_character-selection_4pw3i_51",gray:Pe};const Be="_character_frr8z_259",Xe="_character__name_frr8z_277",Ue="_character__front_frr8z_295",Ve="_character__right_frr8z_303",Ge="_character__left_frr8z_309",We="_jump_frr8z_1",Qe="_jumpnorotate_frr8z_1",Je="_selected_frr8z_336",Ze="_dummy_frr8z_1",Ke="_shine_frr8z_1",Ye="_shine2_frr8z_1",et="_flicker_frr8z_1",tt="_flicker2_frr8z_1",lt="_shine3_frr8z_1",st="_shine4_frr8z_1",at="_blink_frr8z_1",rt="_blink2_frr8z_1",it="_pxmove_frr8z_1",nt="_lineheight_frr8z_1",ct="_lineheight2_frr8z_1",ot="_popzoom_frr8z_1",dt="_cardmove_frr8z_1",_t="_cardmoverev_frr8z_1";var J={character:Be,character__name:Xe,character__front:Ue,character__right:Ve,character__left:Ge,jump:We,jumpnorotate:Qe,selected:Je,"slide-right-left":"_slide-right-left_frr8z_1","slide-left-right":"_slide-left-right_frr8z_1","rotate-left-right":"_rotate-left-right_frr8z_1",dummy:Ze,shine:Ke,shine2:Ye,flicker:et,flicker2:tt,shine3:lt,shine4:st,blink:at,blink2:rt,pxmove:it,lineheight:nt,lineheight2:ct,popzoom:ot,cardmove:dt,cardmoverev:_t},ht="/assets/character.3ea10162.png";const G=t=>{const c=J[`character__${(_=>{if(_===0)return"left";if(_===1)return"front";if(_===2)return"right"})(t.data)}`];return i("div",{className:`${J.character} ${c||""} ${t.selected?J.selected:""}`,onClick:_=>{t.onRotateCharacters(_)},children:[e("div",{className:J.character__name,children:t.name}),e("img",{"data-const-pos":t.dataConstPos,"data-character":t.data,src:ht,alt:"character image"})]})};const mt="_flicker2_1ozcc_1",vt="_cta__text_1ozcc_138",ut="_absolute_1ozcc_142";var V={"button-big":"_button-big_1ozcc_62",flicker2:mt,"button-text":"_button-text_1ozcc_94",cta__text:vt,absolute:ut,"greyed-out":"_greyed-out_1ozcc_152"};const W=t=>e("button",{type:t.type?t.type:"",className:`${V["button-big"]}
    ${t.isAbsolute&&t.isAbsolute.isAbsolute?V.absolute:""}

     card--glass ${t.isGreyedOut===!0?V["greyed-out"]:""}`,style:t.style,onClick:t.onClick,children:t.type!=="submit"?e("a",{className:V["button-text"],href:`#${t.moveTo?t.moveTo:""}`,children:t.text}):e("p",{className:V["button-text"],children:t.text})},Math.random()),gt="_characters_ejqhs_27",ft="_hidden_ejqhs_41",kt="_character__overlay_ejqhs_76",bt="_cta_ejqhs_95",pt="_cta__text_ejqhs_103",St="_shine4_ejqhs_1";var I={characters:gt,hidden:ft,"character-col":"_character-col_ejqhs_46",character__overlay:kt,"character__overlay--hidden":"_character__overlay--hidden_ejqhs_90",cta:bt,cta__text:pt,shine4:St,"character-level":"_character-level_ejqhs_120","character-level__level-title":"_character-level__level-title_ejqhs_142","character-level__level-number":"_character-level__level-number_ejqhs_145","character-levels":"_character-levels_ejqhs_169"};const xt=t=>{const[r,c]=o.exports.useState(0),[_,d]=o.exports.useState(1),[n,h]=o.exports.useState(2),[f,w]=o.exports.useState({clicked:!1}),x=o.exports.useContext(le),j=()=>{w(!f),C(),t.onCtaButtonChange({clicked:f}),$.current.ondragstart=()=>!1},k=o.exports.useRef(null),$=o.exports.useRef(null);o.exports.useEffect(()=>{const g={leftChar:r,frontChar:_,rightChar:n};t.charState(g)},[r,_,n]);const R=[0,1,2],T=((g,A=300)=>{let D;return(...L)=>{clearTimeout(D),D=setTimeout(()=>{g.apply(globalThis,L)},A)}})(()=>C()),C=()=>{let g;k.current&&(g=k.current.offsetWidth);let A=g*.4;document.documentElement.style.setProperty("--characters-width",A+"px")};window.addEventListener("resize",T);const P=function(g,A=-1){if(A==1)return(g+1)%3;if(A==-1)return g==0?g+2:(g-1)%3},q=g=>{t.selectedState.setWhichSelected(g)},E=g=>{const A=u=>{c(P(r,u)),d(P(_,u)),h(P(n,u))};let D=0,L=+g.target.dataset.character;L===1&&(t.selectedState.setSelected(!0),q(+g.target.dataset.constPos)),L===0&&(D=1,A(D),t.selectedState.setSelected(!0),q(+g.target.dataset.constPos),x.setRenderSection(!1)),L===2&&(D=-1,A(D),t.selectedState.setSelected(!0),q(+g.target.dataset.constPos),x.setRenderSection(!1)),g.target===k.current&&(t.selectedState.setSelected(!1),q(null),x.setRenderSection(!1))};let B=r===1&t.selectedState.isSelected,X=_===1&t.selectedState.isSelected,U=n===1&t.selectedState.isSelected;const z=()=>B?{isSelected:!0,text:"Create character",moveTo:"creator"}:X?{isSelected:!0,text:"Level me up",moveTo:"about-me"}:U?{isSelected:!0,text:"Character Locked",greyedOut:!0}:{isSelected:!1},se=()=>{x.setRenderSection(!0)};return i("div",{ref:$,className:I["character-col"],children:[e("div",{className:`${I.character__overlay} ${f?"":I["character__overlay--hidden"]}`,children:i("div",{className:I.cta,children:[e(W,{isAbsolute:!1,onClick:j,text:"Select Character"}),e("div",{className:`${I.cta__text}  shine`,children:"And let your adventure begin..."})]})}),i("div",{ref:k,onClick:E,className:`${I.characters} ${f?I.hidden:""}`,children:[z().isSelected?e(W,{onClick:se,moveTo:z().moveTo,isAbsolute:{isAbsolute:!0},text:z().text,isGreyedOut:z().greyedOut}):"",e(G,{dataConstPos:R[0],data:r,selected:B,name:"Character Creator",onRotateCharacters:E}),e(G,{dataConstPos:R[1],data:_,selected:X,name:"Damian",onRotateCharacters:E}),e(G,{dataConstPos:R[2],selected:U,data:n,name:"Future Damian",onRotateCharacters:E})]})]})};var Z={"skill-tile":"_skill-tile_1e36k_27","skill-tile-level":"_skill-tile-level_1e36k_66","skill-tile-name":"_skill-tile-name_1e36k_67","skill-tile-icon":"_skill-tile-icon_1e36k_94"};const Ct=t=>e(o.exports.Fragment,{children:i("button",{className:`${Z["skill-tile"]}`,children:[e("div",{className:Z["skill-tile-level"],children:e("p",{children:t.skill.lvl})}),e("div",{className:Z["skill-tile-icon"],children:e("img",{src:t.skill.icon})}),e("div",{className:Z["skill-tile-name"],children:e("p",{children:t.skill.name})})]})});var _e="/assets/1.0a434083.svg",K="/assets/2.ba6bedbc.svg",wt="/assets/3.81ee32fd.svg",jt="/assets/4.8b3dfa56.svg",Nt="/assets/5.788b8660.svg",yt="/assets/6.7ca4c8b5.svg",At="/assets/7.72b012cb.svg",he="/assets/8.27088f9a.svg",$t="/assets/9.dfb74367.svg",Dt="/assets/10.8e7123e0.svg",Lt="/assets/13.3cd30d38.svg",Rt="/assets/14.767ba50a.svg",Tt="/assets/15.970f2fd9.svg",Ft="/assets/17.f36a900e.svg",zt="/assets/18.7aa314f8.svg",It="/assets/19.8b027b20.svg",Ot="/assets/20.27d96244.svg",Mt="/assets/22.9022d9e8.svg",qt="/assets/23.43620640.svg",Y="/assets/26.b2af9f3f.svg",Et="/assets/25.8a1cb3ce.png",Ht="/assets/27.194350df.svg",Pt="/assets/28.cf7f6481.svg",Bt="/assets/29.89936136.svg",me="/assets/30.6999bf32.svg",Xt="/assets/31.799a5318.svg",Ut="/assets/32.b9aa9c6a.svg",ve="/assets/33.686df6a8.svg",Vt="/assets/35.07788d6d.svg",Gt="/assets/36.7b13e3c5.svg",Wt="/assets/37.f67cdf26.svg",Qt="/assets/38.57544037.svg",Jt="/assets/39.3fef0fab.svg",Zt="/assets/40.020cbe20.svg",Kt="/assets/41.0aafdd10.svg",Yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAC8VBMVEUAAADwcnbEJyvYXHWeBgb3scfwPTzoPDybBQT2QEDQJyfWKyrNJiS0FBTcZX+YAQD1rb3EIiDeMTHYWXH8uMfieIvaXXz9wc7hQkbVLy/7wMyqDw7NJST7vcr4u8eZAwLSTmLkNTSbBAS2HR3yl6fFIB7tmqr8vsugBwb3ssCdBQXFHx73s8DTKSf4t8P1qLb3s8D9wM+lHh/UWHH2r770p7bhMzL1rrv5uMTAHBz0QD/tk6HPKSj1prWqDg3ti5zSKCjlfJHXXXWyExPrjaDjdorkNDOmCwr/xdHpjJ/bcX6sFxf+w9HPKCeqDQ3ZLizQJyfXWnL2tMDYXHbdZXvgcor6t8X0p7e9SU36RETul6O8HyG8QEKkCgnvPTyZAwL5QkKpJCXLR1reMTGuERCwFxnzorPjkZvvmquwMTOkDxHuOzrqnqjDPEqvEhHbLy39v8zsOjrWLCvFHx+yExLslqHfi5X9wtDvnq/eMTCWAADSKSm1Iyrxo7TWLCv8wMzBMj7jf5H0QT/VeILoOTawKi2vFxivFxnTWHHUVm/9RUX4QkL7RETyPj30QD/pODfmNjXgMjHZLSzVKyriNDPtOzrZX3rwPTy8Ghn7vcv5t8X2QUDBHRz2rb30p7jrOTnbLy7SKSjQJyb+xdLIIiHoh5zkNDTeMDD6uMfwm6ztlajlgJUwLDvqhZCyExKtEBCgBwbrkKTpi5/daYL0REbvPDvMJCOqDg34s8LlV2DOJSSmCwryorTFISC4FxbhdIzWP0LtP0HbPT+1FRSdBwfxn7LmcHvMSVW+PEi9KyzjeZDfcInmcILeZXrrYGvqUFvlSFHeSk3tRUnUNzntipjmanbRTl/bWV7dUlnhOTvqmaPghIzleoPlQkfEPD/POj2MNj3NNjitGhznhJrdWGzfUmXDPlDleo/bgYpvbHbjX3LRY2ndXmRPS1jyTVHRPkm3O0CpODyPNTxLLzzHLS22tbqKiJDTcXjSbXRwS1RcMDyxyoPEAAAAinRSTlMABQr9Dwoj/suvoVpKPzw5LB8Q6R0bEP79/Pr49/bq3bynoIx1b1ZVRjoiGP3pyaGMFfz08ejl493b2tfW0srJv762raKYkYZxWU9OPjUwK+DbwHNc/fr6+vj19fT08vDs7Ovp5eTi4dra2szFxMO/vr20r5yUlICAf3Nwb2pnZFtSRjExMNvakY5f2D8CAAAHmklEQVRYw81XZXgTQRA9SKGlLRQo7u7u7u7u7u7ubiF2jfRC466FJmmEFuqCt8Xd3R1+Mbd3CQ0t+ov3JbtzN997Nzu3O3uL/d8IqxE0dWpQjbB/pDcIOkwjqMG/8OtNPgpwOsl2cr2/5xet6IyOdh6FBuCsWPRv+QGzoq1WqzPFmZycDEb0rIC/FFiVnHzsWGQk/ADHjiUnr/o7fglgOiOjvCBFSvwRsWDfPbN7DsGwmkC2RsWr1eroFGd8fDxo1MSwIT1n7+1b8JcCm6oNF16cWAJrHw/kWIDncEqKOlatjo9vj5WYeFE4vNom7DcoJkyv3RDYHo/S6vQooqIjlUqPBzQa1k4XFsN+jwKMi7VDYz1KhSLCelQRgaBQKD2xobUvMgr8gcBI4avBIUpg4jguRwADNJQhg18JR/6eP2D06U7YRqDLFTodD0Gnk8tBYiPW6fToAb/jb9eYckKxLbhcx4vU8fl8rRYaUkSOb8FCc0z3tv+a398YkxCMYSFyHg+4XG5yLBeg1YKGPBTDghNijP1/xa8TZ0joBC+6MI8PbA6Hg/NlHACXCxKFYZp0SjCk1vk5v/hYaUJjNOPakHSZTIAgk5ESbdAMbZwgHVv8Z/xCrV2XKw1GZh+gCxwOEYLDIQCJPsgxuNIlV+tCPxFoJrYoQyhzF9BFLB9EILGL8oQoLeJm+fNLNRLndPNeLBTdehPIphH45pZoodfTLUfcqFS+Ak0hgFDvdJxy64n5K/sQAvvLC/OtKQWw34RQqJX+sqIkfVGY9fbDC3MSEyHpyUfzW1Zh2lVScVnfKr8pXV8iLt8Y8wncNptB4CCAmQTmbRCg0bi8WFI/H4HNEqlymK8usG+aze+YBw8ADjLfmc032QV8AkqpZLMftTRq10kNivK+e0WYr2+XQ3T4l7v9mlnEt1rLKwzSdTQRoQ61QGqlGhT4UN8YppGPZx9gyqCBIKb5RjAUVxhSa1ELj5qUi3bTyyC1PL4e8ymMh0frRCwuWwfGeODTWI+XT6UXxO5FqGs7kIonxpiFzyzpDbQIGTsucGgdODmQIt4UlJyJZxljqOAHtkVdhZqUq7smTc6rTicR+IAIjoAniziAFOhiWp0nT9N0p+yaFVBXeVIAVQxPmJJ4/OpkDDs6MCkBmUMroASYHXaQz6/O5yWZTlClMWBSZdRX+dyXEuxx8jSfzw1cXqQD+xAlgItEXJGcEjjE7lBkeSCXf+X0yR4YQt9PVVDfpFHFgVTc4cL7V7gcgYjlFdAyWRwm1yvAEgk43Cv3hcMLUhmoKB6BjH6qZ/TeWTpcyLh8IzE7GwTspAL8D0EHhh0EsrMTb1xmCMNL07vvM1U/ZDWvQGRaa6IslwkXAh4ksuxP3UD+joPup3ZW4n3SG14GvaWa1kyiQnO6Dqgkmcfa125I3q/GeHBDILJfsJ1Fg/DymWdtF+wiwY0HjGoko2Ht9scyJapm3nXYTtXoZmSUeli3FUvb8CEJ2adO2uxMUPDxmXbbyVPZkAJ+m6Urug1TR0XebKRqV8hXSqqUJa6/V8cqI3AdXxt4xnTi5NlDTFA4CBrQgHno7MkTpjOBWr4Oj1DGqt9fJ8pWyVVWmjcpS4gtzxNyksq502I0puNn4UVAIs+cOnHi1BlIILyCs8dNmpg0d7mknITnFjFRtglKgA912+rFLolUGmcwak65E6EestkvH93TAO49eslms1iORPcpjdEQJ5VKXGJ927p5a/rqjhPOp7mzrkAWZIJEFstuijmCEGOys1iJUJlhFmW5L1gmdFydb2UvurKSh8wCL/Cc+/Q5h+jMEWOv4oUKFe9lPHJG5Dh32n0ukEdmwFNpZdH8vk16RkbduZR23XIennjcdk4msBi6Uq6uBotAds52HCI6b7medulOVGTPgnn4XazpV/ViCSQBCZTjyIxxtShfrTijjFMOCUAKJGL91XRrlx8VakRfK0voW7WeM69j1+69R5WpzuXESb0C0jgOt3qZUb27d+04b07rVnqi7LXoGv78sMPXVO3q5tqy+vC1UklTesOQSLX8Prk2gLrtVNcOh/kHkKEa4VfrQ3g8g6szZXd2GXi8EL/PoBGqDP8Qql6t7L9jlpTrzovHIM0CY8TndfKS/rtQ5atV/VKYooJw/RCMX9ATg0hrEKG/gAf/uA+qUnKnMaCFaivmj6ERWXpiLWmtJfRZEUN/cG9VtQjIPaYWqjxTM1ghIZaRxjJCogj+0VtX1cIvZ0FEvzyfy5UsRGVUdAlLpTwfyv2IIL/rDY+bYHlCuKQnSsFaJ/SXgvM4mzze4H88mF5hkNfeRvehd1zi+rBri113Qv1dkNgK0wN+OOCMq+JdYYvpwTXMlLhIAZckviGdqsXelVtlXL08J7T5c9fsRIV1Bu0rmimVNIchSKSZRemnzEAFdeeaufPD8julhaGoSjMWoL7gkoupndFETE1fUhCNcwGjDOrDfn2KC88IGgJyXe5qjHXQ9m/U3O0ClCFBD8OxP8FIYUZK1aqH79o0vTCEXhrb3cNVq6ZkCEdhf4R9QsbDjHTb8d4F6Nz1Pm5Lz3jIEO7H/hDFqrVktOxRLNeNHnCjWjHsv8Q3qT+pQ+yRx+cAAAAASUVORK5CYII=",el="/assets/43.4e1bd9ad.svg",tl="/assets/45.cc6523e8.svg",ll="/assets/46.06b0bca0.svg",sl="/assets/47.d424469c.svg",al="/assets/48.f47543d0.svg",rl="/assets/49.cc3faffd.svg",il="/assets/50.13f479e2.svg",nl="/assets/51.7f9483f2.svg",cl="/assets/52.13b7da21.png",ol="/assets/54.fd352404.svg",dl="/assets/55.5e0c52e1.svg",_l="/assets/56.9b6f04d4.svg",hl="/assets/57.c4b08fe6.svg",ml="/assets/58.32995831.svg",vl="/assets/59.3c1981fd.png",ul="/assets/60.a3c92e92.svg",gl="/assets/61.4274306b.svg",fl="/assets/62.d33268da.svg",kl="/assets/63.933f991d.svg",bl="/assets/65.7a16d51d.svg",pl="/assets/66.f80df3f0.svg",Sl="/assets/67.0b623229.svg",xl="/assets/68.f025d683.svg",Cl="/assets/69.dc3bc1b9.svg";const wl=[_e,_e,K,wt,jt,Nt,yt,At,he,$t,Dt,K,K,Lt,Rt,Tt,he,Ft,zt,It,Ot,Mt,qt,K,Y,Et,Y,Ht,Pt,Bt,me,Xt,Ut,ve,ve,Vt,Gt,Wt,Qt,Jt,Zt,Kt,Yt,el,Y,tl,ll,sl,al,rl,il,nl,cl,me,ol,dl,_l,hl,ml,vl,ul,gl,fl,kl,Y,bl,pl,Sl,xl,Cl],l=[{id:0,name:"DUMMY"},{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"},{id:4,name:"Git"},{id:5,name:"GitHub"},{id:6,name:"GitLab"},{id:7,name:"Bitbucket"},{id:8,name:"npm"},{id:9,name:"yarn"},{id:10,name:"BEM"},{id:11,name:"OOCSS"},{id:12,name:"SMACSS"},{id:13,name:"Sass"},{id:14,name:"PostCSS"},{id:15,name:"Less"},{id:16,name:"npm scripts"},{id:17,name:"Webpack"},{id:18,name:"esbuild"},{id:19,name:"Rollup"},{id:20,name:"Parcel"},{id:21,name:"Vite"},{id:22,name:"Styled Components"},{id:23,name:"CSS Modules"},{id:24,name:"Styled JSX"},{id:25,name:"Emotion"},{id:26,name:"React"},{id:27,name:"Redux"},{id:28,name:"MobX"},{id:29,name:"Recoil"},{id:30,name:"Angular"},{id:31,name:"RxJS"},{id:32,name:"NgRx"},{id:33,name:"Vue.js"},{id:34,name:"VueX"},{id:35,name:"Bootstrap"},{id:36,name:"Bulma"},{id:37,name:"Tailwind CSS"},{id:38,name:"Chakra UI"},{id:39,name:"Material UI"},{id:40,name:"Radix UI"},{id:41,name:"Jest"},{id:42,name:"react-testing-library"},{id:43,name:"Cypress"},{id:44,name:"Enzyme"},{id:45,name:"Mocha"},{id:46,name:"Chai"},{id:47,name:"Ava"},{id:48,name:"Jasmine"},{id:49,name:"TypeScript"},{id:50,name:"Flow"},{id:51,name:"Next.js"},{id:52,name:"After.js"},{id:53,name:"Universal"},{id:54,name:"Nuxt.js"},{id:55,name:"GraphQL"},{id:56,name:"Apollo"},{id:57,name:"Relay Modern"},{id:58,name:"GatsbyJS"},{id:59,name:"Vuepress"},{id:60,name:"Jekyll"},{id:61,name:"Hugo"},{id:62,name:"Gridsome"},{id:63,name:"Eleventy"},{id:64,name:"React Native"},{id:65,name:"NativeScript"},{id:66,name:"Flutter"},{id:67,name:"Ionic"},{id:68,name:"Electron"},{id:69,name:"Proton Native"}];for(let t=1;t<l.length;t++)l[t].icon||(l[t].icon=wl[t]);const jl="_blink_n43dw_1",Nl="_lineheight_n43dw_1",yl="_shine3_n43dw_1",Al="_shine4_n43dw_1",$l="_lineheight2_n43dw_1",Dl="_dummy_n43dw_1",Ll="_shine_n43dw_1",Rl="_shine2_n43dw_1",Tl="_flicker_n43dw_1",Fl="_flicker2_n43dw_1",zl="_blink2_n43dw_1",Il="_pxmove_n43dw_1",Ol="_popzoom_n43dw_1",Ml="_cardmove_n43dw_1",ql="_cardmoverev_n43dw_1",El="_jump_n43dw_1",Hl="_jumpnorotate_n43dw_1";var b={"skills-list":"_skills-list_n43dw_259",blink:jl,"skills-list-name":"_skills-list-name_n43dw_290","character-skills":"_character-skills_n43dw_305","skills-col":"_skills-col_n43dw_321","skills-window":"_skills-window_n43dw_344","skills-window__header":"_skills-window__header_n43dw_407","skills-text":"_skills-text_n43dw_436",lineheight:Nl,shine3:yl,"abs-up":"_abs-up_n43dw_477",shine4:Al,lineheight2:$l,"skills-card":"_skills-card_n43dw_486","character-level":"_character-level_n43dw_497","character-level__level-title":"_character-level__level-title_n43dw_523","character-level__level-number":"_character-level__level-number_n43dw_528","character-levels":"_character-levels_n43dw_555","abs-down":"_abs-down_n43dw_562","selected--skills":"_selected--skills_n43dw_570","slide-right-left":"_slide-right-left_n43dw_1","slide-left-right":"_slide-left-right_n43dw_1","rotate-left-right":"_rotate-left-right_n43dw_1",dummy:Dl,shine:Ll,shine2:Rl,flicker:Tl,flicker2:Fl,blink2:zl,pxmove:Il,popzoom:Ol,cardmove:Ml,cardmoverev:ql,jump:El,jumpnorotate:Hl};const Pl=t=>{const r=o.exports.useRef(),c=o.exports.useRef(null),_=o.exports.useContext(le),d=j=>{const k=j.reduce((T=0,C)=>C.name==="JavaScript"||C.name==="React"||C.name==="Vue"||C.name==="Angular"?T+=2*C.lvl:T+=C.lvl,0),$=(l.length-1)*10;function R(T,C){return 100*T/C}const M=R(k,$);return Math.round(M)};o.exports.useEffect(()=>{_.isSelected?r.current.classList.add(`${b["selected--skills"]}`):r.current.classList.remove(`${b["selected--skills"]}`)},[_]);const n=[a(s({},l[3]),{lvl:2}),a(s({},l[4]),{lvl:1}),a(s({},l[5]),{lvl:4})],h=[a(s({},l[1]),{lvl:8}),a(s({},l[2]),{lvl:8}),a(s({},l[3]),{lvl:7}),a(s({},l[4]),{lvl:4}),a(s({},l[5]),{lvl:6}),a(s({},l[13]),{lvl:7}),a(s({},l[8]),{lvl:5}),a(s({},l[23]),{lvl:9}),a(s({},l[26]),{lvl:5}),a(s({},l[10]),{lvl:5})],f=[a(s({},l[1]),{lvl:9}),a(s({},l[2]),{lvl:9}),a(s({},l[3]),{lvl:9}),a(s({},l[4]),{lvl:9}),a(s({},l[5]),{lvl:9}),a(s({},l[6]),{lvl:9}),a(s({},l[7]),{lvl:9}),a(s({},l[8]),{lvl:9}),a(s({},l[9]),{lvl:9}),a(s({},l[10]),{lvl:9}),a(s({},l[11]),{lvl:9}),a(s({},l[12]),{lvl:9}),a(s({},l[13]),{lvl:9}),a(s({},l[14]),{lvl:9}),a(s({},l[15]),{lvl:9}),a(s({},l[16]),{lvl:9}),a(s({},l[17]),{lvl:9}),a(s({},l[18]),{lvl:9}),a(s({},l[19]),{lvl:9}),a(s({},l[20]),{lvl:9}),a(s({},l[21]),{lvl:9}),a(s({},l[22]),{lvl:9}),a(s({},l[23]),{lvl:9}),a(s({},l[24]),{lvl:9}),a(s({},l[25]),{lvl:9}),a(s({},l[26]),{lvl:9}),a(s({},l[27]),{lvl:9}),a(s({},l[28]),{lvl:9}),a(s({},l[29]),{lvl:9}),a(s({},l[30]),{lvl:9}),a(s({},l[31]),{lvl:9}),a(s({},l[32]),{lvl:9}),a(s({},l[33]),{lvl:9}),a(s({},l[34]),{lvl:9}),a(s({},l[35]),{lvl:9}),a(s({},l[36]),{lvl:9}),a(s({},l[37]),{lvl:9}),a(s({},l[38]),{lvl:9}),a(s({},l[39]),{lvl:9}),a(s({},l[40]),{lvl:9}),a(s({},l[41]),{lvl:9}),a(s({},l[42]),{lvl:9}),a(s({},l[43]),{lvl:9}),a(s({},l[44]),{lvl:9}),a(s({},l[45]),{lvl:9}),a(s({},l[46]),{lvl:9}),a(s({},l[47]),{lvl:9}),a(s({},l[48]),{lvl:9}),a(s({},l[49]),{lvl:9}),a(s({},l[50]),{lvl:9}),a(s({},l[51]),{lvl:9}),a(s({},l[52]),{lvl:9}),a(s({},l[53]),{lvl:9}),a(s({},l[54]),{lvl:9}),a(s({},l[55]),{lvl:9}),a(s({},l[56]),{lvl:9}),a(s({},l[57]),{lvl:9}),a(s({},l[58]),{lvl:9}),a(s({},l[59]),{lvl:9}),a(s({},l[60]),{lvl:9}),a(s({},l[61]),{lvl:9}),a(s({},l[62]),{lvl:9}),a(s({},l[63]),{lvl:9}),a(s({},l[64]),{lvl:9}),a(s({},l[65]),{lvl:9}),a(s({},l[66]),{lvl:9}),a(s({},l[67]),{lvl:9}),a(s({},l[68]),{lvl:9}),a(s({},l[69]),{lvl:9})],w=[[...n],[...h],[...f]],x=(j,k)=>(c.current&&(c.current.scrollTop=0),e("ul",{className:b["skills-list"],"data-character":k,children:w[j].map($=>e(Ct,{skill:$},$.id))}));return e("div",{className:b["skills-col"],children:i("div",{ref:r,className:`card--glass ${b["skills-window"]} ${t.onCtaButtonChange.clicked?"":"not-started"} `,children:[i("div",{className:`${b["skills-text"]} shine ${t.onCtaButtonChange.clicked?b["abs-up"]:""}`,children:[e("p",{children:"Choose"}),e("p",{children:"and"}),e("p",{children:e("strong",{className:"shine",children:" level up"})}),e("p",{children:"your"}),e("p",{children:"developer!"})]}),i("div",{className:`${b["skills-card"]} ${t.onCtaButtonChange.clicked?"":b["abs-down"]}`,children:[i("header",{className:b["skills-window__header"],children:[e("div",{className:b["skills-list-name"],children:e("h2",{children:"Skills"})}),i("div",{className:`${b["character-level"]}`,id:"character-level",children:[e("div",{className:b["character-level__level-title"],children:"level"}),i("div",{className:b["character-levels"],children:[e("div",{className:b["character-level__level-number"],"data-character":t.charStateData.leftChar,children:d(n)}),e("div",{className:b["character-level__level-number"],"data-character":t.charStateData.frontChar,children:d(h)}),e("div",{className:b["character-level__level-number"],"data-character":t.charStateData.rightChar,children:d(f)})]})]})]}),i("div",{ref:c,className:`${b["character-skills"]} `,children:[x(0,t.charStateData.leftChar),x(1,t.charStateData.frontChar),x(2,t.charStateData.rightChar)]})]})]})})},Bl=t=>{const r=o.exports.useContext(le),[c,_]=o.exports.useState(!1),[d,n]=o.exports.useState({},k=>{console.log(k)}),[h,f]=o.exports.useState("false"),w=k=>{n(k)},x=k=>{f(k),console.log(h)},j=k=>{_(k)};return e("section",{className:`${Q["section-hero"]} ${h.clicked?"":Q.gray}`,children:i("div",{className:Q["character-selection"],children:[e(xt,{onCtaButtonChange:x,onSelectedChange:j,selectedState:r,charState:w}),e(Pl,{className:Q["character-skills"],onCtaButtonChange:h,charStateData:d,onReceivedSelectState:c})]})})},Xl="_shine_5bjm2_272",Ul="_dummy_5bjm2_1",Vl="_shine2_5bjm2_1",Gl="_flicker_5bjm2_1",Wl="_flicker2_5bjm2_1",Ql="_shine3_5bjm2_1",Jl="_shine4_5bjm2_1",Zl="_blink_5bjm2_1",Kl="_blink2_5bjm2_1",Yl="_pxmove_5bjm2_1",es="_lineheight_5bjm2_1",ts="_lineheight2_5bjm2_1",ls="_popzoom_5bjm2_1",ss="_cardmove_5bjm2_1",as="_cardmoverev_5bjm2_1",rs="_jump_5bjm2_1",is="_jumpnorotate_5bjm2_1";var ns={"absolute-center":"_absolute-center_5bjm2_259","cancel-absolute":"_cancel-absolute_5bjm2_268",shine:Xl,"card--glass":"_card--glass_5bjm2_279","not-started":"_not-started_5bjm2_286","hidden-btn":"_hidden-btn_5bjm2_303","slide-right-left":"_slide-right-left_5bjm2_1","slide-left-right":"_slide-left-right_5bjm2_1","rotate-left-right":"_rotate-left-right_5bjm2_1",dummy:Ul,shine2:Vl,flicker:Gl,flicker2:Wl,shine3:Ql,shine4:Jl,blink:Zl,blink2:Kl,pxmove:Yl,lineheight:es,lineheight2:ts,popzoom:ls,cardmove:ss,cardmoverev:as,jump:rs,jumpnorotate:is};const ne=t=>e("div",{className:`${ns["card--glass"]} ${t.className?t.className:""}`,children:t.children}),cs="_container_1yktx_44",os="_labels_1yktx_51",ds="_name_1yktx_58",_s="_email_1yktx_60",hs="_textfield_1yktx_134";var y={"contact-me":"_contact-me_1yktx_27",container:cs,labels:os,"name-email":"_name-email_1yktx_58",name:ds,email:_s,"error-corner":"_error-corner_1yktx_101",textfield:hs,"input-error":"_input-error_1yktx_198","form-error":"_form-error_1yktx_201"};const ms=t=>{const r={};return t.name?t.name.length<2&&(r.name="More than 1 characters"):r.name="Required",t.text?t.text.length<2&&(r.text="More than 2 characters"):r.text="Required",t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(r.email="Invalid email address"):r.email="Required",r},vs=t=>{Email.send({Host:"smtp.gmail.com",Username:"portfoliod3s@gmail.com",Password:"ZAQ!2wsx",To:"damiansobierajdev@gmail.com",From:t.email,Subject:"Contact from Portfolio",Body:`${t.email} ${t.text}`}).then(r=>alert(r))},us=t=>{const r=we({initialValues:{name:"",email:"",text:""},validate:ms,onSubmit:async n=>{vs(n),await(await fetch("https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/emails.json",{method:"POST",body:JSON.stringify(n,null,2),headers:{"Content-Type":"application/json"}})).json()}}),c=n=>r.errors[n]&&r.touched[n]?e("div",{className:y["form-error"],children:r.errors[n]}):null,_=n=>r.errors[n]&&r.touched[n]?y["input-error"]:null,d=n=>r.errors[n]&&r.touched[n]?y["error-corner"]:null;return e("div",{id:"contact-me",className:y["contact-me"],children:e("div",{className:y.container,children:i("form",{onSubmit:r.handleSubmit,children:[i("div",{className:y["name-email"],children:[i("div",{className:`${y.name} ${d("name")}`,children:[i("div",{className:y.labels,children:[e("label",{htmlFor:"name",children:"Your Name"}),c("name")]}),e("input",{className:_("name"),id:"name",type:"text",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name})]}),i("div",{className:`${y.email} ${d("email")}`,children:[i("div",{className:y.labels,children:[e("label",{htmlFor:"email",children:"Your Email"}),c("email")]}),e("input",{className:`${_("email")}`,id:"email",type:"email",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email})]})]}),i("div",{className:`${y.textfield} ${d("text")}`,children:[i("div",{className:y.labels,children:[e("label",{htmlFor:"text",children:"Your Message"}),c("text")]}),e("textarea",{className:_("text"),id:"text",type:"text",name:"text",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.text})]}),e(W,{type:"submit",text:"Send"})]})})})},gs="_projects_1tem3_27",fs="_title_1tem3_36",ks="_scene_1tem3_50",bs="_project_1tem3_27",ps="_links_1tem3_187",Ss="_skill_1tem3_227";var p={projects:gs,title:fs,"my-projects":"_my-projects_1tem3_40",scene:ks,project:bs,"project-image-window":"_project-image-window_1tem3_106","project-link":"_project-link_1tem3_109","project-image":"_project-image_1tem3_106","project-description":"_project-description_1tem3_137","project-title":"_project-title_1tem3_146","project-overview":"_project-overview_1tem3_155","used-skills":"_used-skills_1tem3_170","used-skills-title":"_used-skills-title_1tem3_182",links:ps,skill:Ss,"skill-title":"_skill-title_1tem3_258"},ae="/assets/project1.c84fd0b3.png",xs="/assets/logo-github.002bb576.svg";const Cs=t=>i("div",{className:p.projects,children:[e("p",{className:p.title,children:"My Projects"}),i("div",{className:p["my-projects"],children:[e("div",{className:p.scene,children:e(re,{projectData:{image:ae,title:"portfolio",overview:i(o.exports.Fragment,{children:["Frontend game-like character ",e("strong",{children:"selector"})," and"," ",e("strong",{children:"creator"})," , create your own character or contact me and ",e("strong",{children:"LEVEL ME UP!"})]}),skills:[l[1],l[2],l[3],l[26],l[13],l[23],l[5],l[21]],link:"https://portfolio-27cdd.web.app/",repo:"https://github.com/Dant3s15/portfoliov3"}})}),e("div",{className:p.scene,children:e(re,{projectData:{image:ae,title:"portfolio",overview:i(o.exports.Fragment,{children:["Frontend game-like character ",e("strong",{children:"selector"})," and"," ",e("strong",{children:"creator"})," , create your own character or contact me and ",e("strong",{children:"LEVEL ME UP!"})]}),skills:[l[1],l[2],l[3],l[26],l[13],l[23],l[5],l[21]],link:"https://portfolio-27cdd.web.app/",repo:"https://github.com/Dant3s15/portfoliov3"}})}),e("div",{className:p.scene,children:e(re,{projectData:{image:ae,title:"portfolio",overview:i(o.exports.Fragment,{children:["Frontend game-like character ",e("strong",{children:"selector"})," and"," ",e("strong",{children:"creator"})," , create your own character or contact me and ",e("strong",{children:"LEVEL ME UP!"})]}),skills:[l[1],l[2],l[3],l[26],l[13],l[23],l[5],l[21]],link:"https://portfolio-27cdd.web.app/",repo:"https://github.com/Dant3s15/portfoliov3"}})})]})]}),re=t=>{var _,d,n,h,f,w,x;const r=(_=t.projectData)==null?void 0:_.skills,c=r==null?void 0:r.map(j=>i("li",{className:p.skill,children:[e("img",{src:j.icon,alt:""}),e("p",{className:p["skill-title"],children:j.name})]},Math.random()));return i(ne,{className:`${p.project}`,children:[e("div",{className:p.links,children:e("a",{href:(d=t.projectData)==null?void 0:d.repo,target:"_blank",children:e("img",{src:xs,alt:"github"})})}),e("div",{className:p["project-image-window"],children:e("a",{className:p["project-link"],href:(n=t.projectData)==null?void 0:n.link,target:"_blank",children:e("img",{src:(h=t.projectData)==null?void 0:h.image,className:p["project-image"]})})}),i("div",{className:p["project-description"],children:[e("h3",{className:p["project-title"],children:(w=(f=t.projectData)==null?void 0:f.title)!=null?w:"Title"}),e("div",{className:p["project-overview"],children:e("p",{children:(x=t.projectData)==null?void 0:x.overview})}),e("h3",{className:p["used-skills-title"],children:"Skills Used:"}),e("ul",{className:p["used-skills"],children:c})]})]})},ws="_title_j8hhk_45",js="_text_j8hhk_41",Ns="_char__container_j8hhk_60";var O={"about-me":"_about-me_j8hhk_27","about-me-text":"_about-me-text_j8hhk_34","text-container":"_text-container_j8hhk_41",title:ws,text:js,"about-me-char":"_about-me-char_j8hhk_52",char__container:Ns};const ys=t=>i(o.exports.Fragment,{children:[i("div",{id:"about-me",className:O["about-me"],children:[e("div",{className:O["about-me-text"],children:e("div",{className:`${O["text-container"]}`,children:i(ne,{children:[e("h2",{className:O.title,children:"About Me"}),e("p",{className:O.text,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident quae assumenda consequatur rem minus animi, voluptatem, quisquam nihil fugiat ea dignissimos, similique eum porro atque. Vitae est delectus numquam fugiat quidem. Ab, culpa reiciendis dolorum obcaecati laudantium excepturi cupiditate?"})]})})}),i("div",{className:O["about-me-char"],children:[e(W,{isAbsolute:{isAbsolute:!0},style:{top:"80%"},text:"Contact Me",moveTo:"contact-me"}),e("div",{className:`${O.char__container} cancel-absolute`,children:e(G,{onRotateCharacters:()=>{},data:"1",name:"Front"})})]})]}),e(Cs,{}),e(us,{})]}),As="_shine_g4vas_307",$s="_skill_g4vas_342",Ds="_icon_g4vas_367",Ls="_name_g4vas_381",Rs="_level_g4vas_394",Ts="_dummy_g4vas_1",Fs="_shine2_g4vas_1",zs="_flicker_g4vas_1",Is="_flicker2_g4vas_1",Os="_shine3_g4vas_1",Ms="_shine4_g4vas_1",qs="_blink_g4vas_1",Es="_blink2_g4vas_1",Hs="_pxmove_g4vas_1",Ps="_lineheight_g4vas_1",Bs="_lineheight2_g4vas_1",Xs="_popzoom_g4vas_1",Us="_cardmove_g4vas_1",Vs="_cardmoverev_g4vas_1",Gs="_jump_g4vas_1",Ws="_jumpnorotate_g4vas_1";var H={"absolute-center":"_absolute-center_g4vas_294","cancel-absolute":"_cancel-absolute_g4vas_303",shine:As,"card--glass":"_card--glass_g4vas_314","not-started":"_not-started_g4vas_321","hidden-btn":"_hidden-btn_g4vas_338",skill:$s,icon:Ds,name:Ls,"manage-skill":"_manage-skill_g4vas_386",level:Rs,"level-title":"_level-title_g4vas_405","slide-right-left":"_slide-right-left_g4vas_1","slide-left-right":"_slide-left-right_g4vas_1","rotate-left-right":"_rotate-left-right_g4vas_1",dummy:Ts,shine2:Fs,flicker:zs,flicker2:Is,shine3:Os,shine4:Ms,blink:qs,blink2:Es,pxmove:Hs,lineheight:Ps,lineheight2:Bs,popzoom:Xs,cardmove:Us,cardmoverev:Vs,jump:Gs,jumpnorotate:Ws};const fe=t=>{const r=i("div",{className:H.level,children:[e("p",{className:H["level-title"],children:"LVL"}),e("p",{children:t.data.level})]});return i("div",{className:H.skill,children:[e("div",{className:H.icon,children:e("img",{src:t.data.icon,alt:"skill icon"})}),i("div",{className:H.name,children:[t.data.name," ",t.data.id]}),t.data.level?r:"",e("button",{onClick:()=>{t.onSkillChange(t.data)},className:H["manage-skill"],children:t.sign})]})},Qs="_blur_13wk8_27",Js="_levels_13wk8_45";var ee={blur:Qs,"skill-add-window":"_skill-add-window_13wk8_39",levels:Js};const Zs=t=>{const[r,c]=o.exports.useState(null),_=o.exports.useRef(),d=h=>(c(h),t.skillData.level=h,t.onSetLevel(!0),h),n=()=>{t.skillData.level=void 0,t.onSetLevel(!1),t.onCancel()};return e("div",{className:ee.blur,onClick:n,children:i("div",{className:ee["skill-add-window"],onClick:h=>{h.stopPropagation()},children:[e("div",{className:ee.title,children:"Adding Skill"}),e(fe,{onSkillChange:t.onSkillAdd,data:t.skillData,sign:"+"}),e("div",{className:ee.levels,children:e("input",{onChange:()=>{d(_.current.value)},ref:_,type:"range",min:"1",max:"10"})})]})})};var F={"skill-selector":"_skill-selector_1zpu9_27","skills-selector__grid":"_skills-selector__grid_1zpu9_36","title-row":"_title-row_1zpu9_44","skills-menu":"_skills-menu_1zpu9_51"};const Ks=t=>{const[r,c]=o.exports.useState(l),[_,d]=o.exports.useState(r),[n,h]=o.exports.useState(!1),[f,w]=o.exports.useState([]),[x,j]=o.exports.useState(f),[k,$]=o.exports.useState(!1),[R,M]=o.exports.useState(!1),[T,C]=o.exports.useState(!1),[P,q]=o.exports.useState(l[0]),[E,B]=o.exports.useState(!1),X=o.exports.useRef(""),U=o.exports.useRef(""),z=()=>{const u=X.current.value.toLowerCase(),N=U.current.value.toLowerCase();if(u!==""){const v=r.filter(S=>S.name.toLowerCase().includes(u));h(!0),d(v)}else h(!1);if(N!==""){const v=f.filter(S=>S.name.toLowerCase().includes(N));$(!0),j(v)}else $(!1)},se=u=>{M(!1),C(!1)},g=u=>{const N=v=>v.sort((S,ke)=>S.name.localeCompare(ke.name));r.some(v=>v===u)?(M(!0),q(u),R&!T&&(c(v=>N(v.filter(S=>S!==u))),d(v=>N(v.filter(S=>S!==u))),w(v=>N([...r.filter(S=>S===u),...v])),M(!1),C(!1))):r.some(v=>v!==u)&&(R||(w(v=>N(v.filter(S=>S!==u))),j(v=>N(v.filter(S=>S!==u))),c(v=>N([...f.filter(S=>(u.level=void 0,S===u)),...v])))),B(!1)},A=u=>{E?(C(!0),g(u)):console.log("scroll")},D=async()=>{if(f.length===0){console.log("add Skills");return}else{const N=await(await fetch("https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/saved-characters.json",{method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json"}})).json();console.log(N.name)}},L=(u,N)=>u.map(v=>e(fe,{onSkillChange:g,data:v,sign:N},v.id));return e(o.exports.Fragment,{children:e(ne,{children:i("div",{className:F["skill-selector"],children:[R&&e(Zs,{onSetLevel:B,onCancel:se,onSkillAdd:A,skillData:P}),i("div",{className:F["skills-selector__grid"],children:[i("div",{className:F["title-row"],children:["All Skills",i("div",{className:F["search-field"],children:[e("label",{htmlFor:"search-all",children:"Search"}),e("input",{onChange:z,ref:X,id:"search-all",type:"text"})]})]}),i("div",{className:F["title-row"],children:["Added Skills",i("div",{className:F["search-field"],children:[e("label",{htmlFor:"search-added",children:"Search"}),e("input",{onChange:z,ref:U,id:"search-added",type:"text"})]})]}),e("div",{className:F["skills-menu"],children:L(n===!1?r:_,"+")}),e("div",{className:F["skills-menu"],children:L(k===!1?f:x,"-")})]}),e(W,{onClick:D,type:"submit",text:"Save Character"})]})})})},Ys="_creator_pbkkc_27";var te={creator:Ys,"skill-selector__col":"_skill-selector__col_pbkkc_35","image-selector__col":"_image-selector__col_pbkkc_43","image-selector":"_image-selector_pbkkc_43"};const ea=t=>i("div",{id:"creator",className:te.creator,children:[e("div",{className:te["skill-selector__col"],children:e(Ks,{})}),e("div",{className:te["image-selector__col"],children:e("div",{className:`${te["image-selector"]} cancel-absolute`,children:e(G,{onRotateCharacters:()=>{},data:"1",name:"Front"})})})]}),ta="_footer_1yl8v_1";var la={footer:ta};const sa=t=>e("div",{className:la.footer,children:"Footer"}),aa=t=>e("h1",{children:"FUTURE"}),ra={apiKey:"AIzaSyA4Biu3C9D3pJF7f3cOgNfMYG4OtewhwNY",authDomain:"portfolio-27cdd.firebaseapp.com",databaseURL:"https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app",projectId:"portfolio-27cdd",storageBucket:"portfolio-27cdd.appspot.com",messagingSenderId:"156569045681",appId:"1:156569045681:web:7e9b36b440d0a31ac3f090",measurementId:"G-B13VR57PZH"},ia=je(ra),ie=Ne(ia);ye();function na(){const[t,r]=o.exports.useState(!1),[c,_]=o.exports.useState(null),[d,n]=o.exports.useState(!1),[h]=Ae(ie),f=()=>{const w=new $e;De(ie,w)};return i(o.exports.Fragment,{children:[i(le.Provider,{value:{isSelected:t,setSelected:r,whichIsSelected:c,setWhichSelected:_,renderSection:d,setRenderSection:n},children:[e(He,{data:{google:{user:h,auth:ie,signInWithGoogle:f}}}),i("main",{children:[e(Bl,{}),c===0&&d?e(ea,{}):"",c===1&&d?e(ys,{}):"",c===2&&d?e(aa,{}):""]})]}),e(sa,{})]})}Le.render(e(ue.StrictMode,{children:e(na,{})}),document.getElementById("root"));
