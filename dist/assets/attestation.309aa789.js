import{_ as A,d as y,r as B,k as f,l as w,i as n,m as N,w as s,e1 as V,o as d,c as v,f as o,e,a as E,t as b,p as k,g as I,v as S,V as q}from"./index.322f631a.js";import{L as H}from"./infoLayout.7b25df45.js";const a=i=>(k("data-v-00133299"),i=i(),I(),i),L=a(()=>e("div",{class:"head-text"},[e("div",{class:"text"},"\u6839\u636E\u56FD\u5BB6\u653F\u7B56\u8981\u6C42\uFF0C\u8BF7\u60A8\u8FDB\u884C\u5B9E\u540D\u8BA4\u8BC1"),e("div",{class:"text"},"\u5B9E\u540D\u4FE1\u606F\u63D0\u4EA4\u540E\u4E0D\u53EF\u4FEE\u6539\uFF0C\u8BF7\u8C28\u614E\u586B\u5199")],-1)),R={key:0,class:"auth-body flex-column flex-vertical-center"},U=a(()=>e("div",{class:"description"},"\u4F8B\u5982\uFF1A\u534E\u5B89",-1)),$=a(()=>e("div",{class:"description"},"\u4F8B\u5982\uFF1A320981202207079527",-1)),M={style:{"margin-top":"35px"}},T=S("\u63D0\u4EA4\u8BA4\u8BC1"),j={key:1,class:"auth-body flex-column flex-vertical-center"},z={class:"flex-row flex-vertical-center"},G=a(()=>e("p",{class:"label"},"\u5B8C\u6210\u8EAB\u4EFD\u8BA4\u8BC1",-1)),J={class:"getter-row flex-row flex-vertical-center flex-between",style:{"margin-top":"54px"}},K=a(()=>e("span",{class:"label"},"\u771F\u5B9E\u59D3\u540D: ",-1)),O={class:"value"},P={class:"getter-row flex-row flex-vertical-center flex-between",style:{"margin-top":"15px"}},Q=a(()=>e("span",{class:"label"},"\u8EAB\u4EFD\u8BC1\u53F7: ",-1)),W={class:"value"},X=a(()=>e("div",{class:"line"},null,-1)),Y={name:"Attestation"},Z=y({...Y,setup(i){const _=B(),m=B(!1),t=f({name:"",idNumber:""}),g=f({name:[{required:!1,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur","change"]},{required:!1,pattern:/^[\u4e00-\u9fa5]{2,5}$/,message:"\u60A8\u8F93\u5165\u7684\u59D3\u540D\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",trigger:["blur","change"]}],idNumber:[{required:!1,message:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",trigger:"blur"},{required:!1,validator:(r,u,l)=>{u?V(u)?l():l(new Error("\u60A8\u8F93\u5165\u7684\u8EAB\u4EFD\u8BC1\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165")):l(new Error("\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7"))},trigger:"blur"}]}),p=w(()=>t.name&&t.idNumber),h=async r=>{!r||await r&&r.validate(u=>{u&&(q({message:"\u60A8\u5DF2\u63D0\u4EA4\u5B9E\u540D\u8BA4\u8BC1",type:"success"}),m.value=!0)})};return(async()=>{})(),(r,u)=>{const l=n("el-input"),F=n("el-form-item"),D=n("el-button"),x=n("el-form"),C=n("svg-icon");return d(),N(H,{title:"\u5B9E\u540D\u8BA4\u8BC1"},{head:s(()=>[L]),body:s(()=>[m.value?(d(),v("div",j,[e("div",z,[o(C,{"icon-class":"ok"}),G]),e("div",J,[K,e("span",O,b(t.name),1)]),e("div",P,[Q,e("span",W,b(t.idNumber),1)])])):(d(),v("div",R,[o(x,{ref_key:"ruleFormRef",ref:_,model:t,rules:g,"label-width":"0px",class:"rule-form"},{default:s(()=>[o(F,{prop:"name"},{default:s(()=>[o(l,{class:"h50",modelValue:t.name,"onUpdate:modelValue":u[0]||(u[0]=c=>t.name=c),placeholder:"\u5355\u884C\u8F93\u5165"},null,8,["modelValue"]),U]),_:1}),o(F,{prop:"idNumber"},{default:s(()=>[o(l,{class:"h50",modelValue:t.idNumber,"onUpdate:modelValue":u[1]||(u[1]=c=>t.idNumber=c),placeholder:"\u8EAB\u4EFD\u8BC1\u53F7"},null,8,["modelValue"]),$]),_:1}),e("div",M,[o(D,{class:"submit-btn h50",type:E(p)?"primary":"info",onClick:u[2]||(u[2]=c=>h(_.value)),disabled:!E(p)},{default:s(()=>[T]),_:1},8,["type","disabled"])])]),_:1},8,["model","rules"])]))]),foot:s(()=>[X]),_:1})}}});var oe=A(Z,[["__scopeId","data-v-00133299"]]);export{oe as default};
