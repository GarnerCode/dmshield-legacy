(this["webpackJsonpdm-shield"]=this["webpackJsonpdm-shield"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"updateCampName",(function(){return x})),n.d(a,"updateCampSumm",(function(){return O})),n.d(a,"addSession",(function(){return p})),n.d(a,"deleteSession",(function(){return f})),n.d(a,"addChar",(function(){return g})),n.d(a,"deleteChar",(function(){return v}));var c=n(1),i=n.n(c),s=n(11),r=n.n(s),l=(n(23),n(24),n(9)),o=n(2),j=n.p+"static/media/logo.8385d9aa.png",u=n(0);function d(){return Object(u.jsxs)("div",{className:"Navbar",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("button",{children:Object(u.jsx)("i",{className:"fas fa-book"})})}),Object(u.jsx)(l.b,{to:"/characters",children:Object(u.jsx)("button",{children:Object(u.jsx)("i",{className:"fas fa-users"})})}),Object(u.jsx)(l.b,{to:"/encounters",children:Object(u.jsx)("button",{children:Object(u.jsx)("i",{className:"fas fa-skull"})})})]})}var h=n(3),b=n(5),m=n(7),x=function(e){return function(t){t({type:"updateName",payload:e})}},O=function(e){return function(t){t({type:"updateSumm",payload:e})}},p=function(e,t){return function(n){n({type:"addSession",title:e,payload:t,id:Math.random()})}},f=function(e){return function(t){t({type:"deleteSession",payload:e})}},g=function(e,t,n,a,c,i,s,r,l,o,j,u,d,h,b,m){return function(x){x({type:"addChar",id:Math.random(),charName:e,race:t,charClass:n,armorClass:a,initiative:c,speed:i,hitMax:s,hitDice:r,profBonus:l,strength:o,dexterity:j,constitution:u,intelligence:d,wisdom:h,charisma:b,charNotes:m})}},v=function(e){return function(t){t({type:"deleteSession",payload:e})}};function C(e){var t=e.title,n=e.text,a=e.deleteSession,c=e.id;return Object(u.jsxs)("div",{className:"SessionEntry",children:[Object(u.jsx)("button",{onClick:function(){return a(c)},children:Object(u.jsx)("i",{class:"fas fa-trash"})}),Object(u.jsx)("h1",{children:t}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:n})]})}function y(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),r=Object(h.a)(s,2),l=r[0],o=r[1],j=Object(c.useState)(""),d=Object(h.a)(j,2),x=d[0],O=d[1],p=function(){i(!n)},f=Object(b.c)((function(e){return e.sessions})),g=Object(b.b)(),v=Object(m.b)(a,g),y=v.addSession,N=v.deleteSession;return Object(u.jsxs)("div",{className:"Sessions",children:[Object(u.jsx)("h1",{children:"Session Logs"}),n?Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==l.replace(/\s+/g,"")&&""!==x.replace(/\s+/g,"")&&(p(),y(l,x),o(""),O(""))}(e)},children:[Object(u.jsx)("input",{className:"inputTitle",onChange:function(e){return function(e){o(e.target.value)}(e)},value:l,type:"text"}),Object(u.jsx)("textarea",{onChange:function(e){return function(e){O(e.target.value)}(e)},value:x,id:"",cols:"50",rows:"10"}),Object(u.jsx)("input",{className:"submit",type:"submit"}),Object(u.jsx)("button",{className:"cancel",onClick:p,children:"Cancel"})]}):Object(u.jsx)("button",{className:"addSession",onClick:p,children:Object(u.jsx)("i",{className:"fas fa-plus"})}),f.map((function(e){return Object(u.jsx)(C,{title:e.title,text:e.text,deleteSession:N,id:e.id})}))]})}function N(){var e=Object(b.c)((function(e){return e.campName})),t=Object(b.c)((function(e){return e.campSumm})),n=Object(b.b)(),i=Object(m.b)(a,n),s=i.updateCampName,r=i.updateCampSumm,l=Object(c.useState)(!1),o=Object(h.a)(l,2),j=o[0],d=o[1],x=function(){d(!j)};return Object(u.jsxs)("div",{className:"Campaign",children:[j?Object(u.jsxs)("form",{className:"formCampaign",children:[Object(u.jsx)("button",{className:"toggleInput",onClick:x,children:Object(u.jsx)("i",{className:"fas fa-check"})}),Object(u.jsx)("input",{value:e,onChange:function(e){return s(e)},type:"text",placeholder:"Campaign Title",className:"inputCampName"}),Object(u.jsx)("textarea",{value:t,onChange:function(e){return r(e)},className:"inputCampSumm",placeholder:"Short summary of your campaign",id:"",cols:"30",rows:"10"})]}):Object(u.jsxs)("div",{className:"campInfo",children:[Object(u.jsx)("button",{className:"toggleInput",onClick:x,children:Object(u.jsx)("i",{className:"fas fa-edit"})}),Object(u.jsx)("h1",{children:e}),Object(u.jsx)("p",{children:t})]}),Object(u.jsx)(y,{})]})}var S=n(12),F=n(16);function w(e){var t=e.handleToggleForm,n={charName:"",race:"",charClass:"",armorClass:"",initiative:"",speed:"",hitMax:"",hitDice:"",profBonus:"",strength:"",dexterity:"",constitution:"",intelligence:"",wisdom:"",charisma:"",charNotes:""},i=Object(c.useState)(n),s=Object(h.a)(i,2),r=s[0],l=s[1],o=function(e){for(var t in r)if(e.target.name===t){l(Object(F.a)(Object(F.a)({},r),{},Object(S.a)({},t,e.target.value)));break}},j=Object(b.b)(),d=Object(m.b)(a,j),x=d.addChar;d.deleteChar;return Object(u.jsx)("div",{className:"CharForm",children:Object(u.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),x(r),t(),l(n)}(e)},children:Object(u.jsxs)("div",{className:"textInputContainer",children:[Object(u.jsx)("div",{className:"containerLeft"}),Object(u.jsx)("div",{className:"containerRight"}),Object(u.jsxs)("div",{className:"charInfo",children:[Object(u.jsx)("label",{htmlFor:"charName",children:"Name"}),Object(u.jsx)("input",{onChange:function(e){return o(e)},type:"text",name:"charName"}),Object(u.jsx)("label",{htmlFor:"race",children:"Race"}),Object(u.jsx)("input",{onChange:function(e){return o(e)},type:"text",name:"race"}),Object(u.jsx)("label",{htmlFor:"charClass",children:"Class"}),Object(u.jsx)("input",{onChange:function(e){return o(e)},type:"text",name:"charClass"})]}),Object(u.jsxs)("div",{className:"charMisc",children:[Object(u.jsx)("label",{htmlFor:"armorClass",children:"Armor Class"}),Object(u.jsx)("input",{type:"number",name:"armorClass"}),Object(u.jsx)("label",{htmlFor:"initiative",children:"Initiative"}),Object(u.jsx)("input",{type:"number",name:"initiative"}),Object(u.jsx)("label",{htmlFor:"speed",children:"Speed"}),Object(u.jsx)("input",{type:"number",name:"speed"}),Object(u.jsx)("label",{htmlFor:"profBonus",children:"Proficency Bonus"}),Object(u.jsx)("input",{type:"number",name:"profBonus"})]}),Object(u.jsxs)("div",{className:"charHealth",children:[Object(u.jsx)("label",{htmlFor:"hitMax",children:"Max Hit Points"}),Object(u.jsx)("input",{type:"number",name:"hitMax"}),Object(u.jsx)("label",{htmlFor:"hitDice",children:"Hit Dice"}),Object(u.jsx)("input",{type:"text",name:"hitDice"})]}),Object(u.jsxs)("div",{className:"charStats",children:[Object(u.jsx)("label",{htmlFor:"strength",children:"Strength"}),Object(u.jsx)("input",{type:"number",name:"strength"}),Object(u.jsx)("label",{htmlFor:"dexterity",children:"Dexterity"}),Object(u.jsx)("input",{type:"number",name:"dexterity"}),Object(u.jsx)("label",{htmlFor:"constitution",children:"Constitution"}),Object(u.jsx)("input",{type:"number",name:"constitution"}),Object(u.jsx)("label",{htmlFor:"intelligence",children:"Intelligence"}),Object(u.jsx)("input",{type:"number",name:"intelligence"}),Object(u.jsx)("label",{htmlFor:"wisdom",children:"Wisdom"}),Object(u.jsx)("input",{type:"number",name:"wisdom"}),Object(u.jsx)("label",{htmlFor:"charisma",children:"Charisma"}),Object(u.jsx)("input",{type:"number",name:"charisma"})]}),Object(u.jsx)("input",{type:"submit"})]})})})}function D(e){return Object(u.jsx)("div",{})}function M(){var e=Object(b.c)((function(e){return e.characters}));return Object(u.jsx)("div",{children:e.map((function(e){return Object(u.jsx)(D,{charName:e.charName,race:e.race,charClass:e.charClass,armorClass:e.armorClass,initiative:e.initiative,speed:e.speed,hitMax:e.hitMax,hitDice:e.hitDice,profBonus:e.profBonus,strength:e.strength,dexterity:e.dexterity,constitution:e.constitution,intelligence:e.intelligence,wisdom:e.wisdom,charisma:e.charisma,charNotes:e.charNotes,charData:e},e.id)}))})}function k(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],i=function(){a(!n)};return Object(u.jsxs)("div",{className:"Characters",children:[n?Object(u.jsx)(w,{handleToggleForm:i}):Object(u.jsx)("button",{className:"addChar",onClick:i,children:"+"}),Object(u.jsx)("h1",{children:"Characters"}),Object(u.jsx)("hr",{}),Object(u.jsx)(M,{})]})}function B(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Encounters"})})}var I=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.a,{basename:"/dmshield",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",element:Object(u.jsx)(N,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/characters",element:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/encounters",element:Object(u.jsx)(B,{})})]})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"My Campaign",t=arguments.length>1?arguments[1]:void 0;return"updateName"===t.type?t.payload.target.value:e},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Summary of my campaign",t=arguments.length>1?arguments[1]:void 0;return"updateSumm"===t.type?t.payload.target.value:e},E=n(13),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addSession":return[].concat(Object(E.a)(e),[{title:t.title,text:t.payload,id:t.id}]);case"deleteSession":return e.filter((function(e){return e.id!==t.payload}));default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addChar":return[].concat(Object(E.a)(e),[{id:t.id,charName:t.charName,race:t.race,charClass:t.charClass,armorClass:t.armorClass,initiative:t.initiative,speed:t.speed,hitMax:t.hitMax,hitDice:t.hitDice,profBonus:t.profBonus,strength:t.strength,dexterity:t.dexterity,constitution:t.constitution,intelligence:t.intelligence,wisdom:t.wisdom,charisma:t.charisma,charNotes:t.charNotes}]);case"deleteChar":return e.filter((function(e){return e.id!==t.payload}));default:return e}},J=Object(m.c)({campName:L,campSumm:P,sessions:H,characters:A}),R=n(18),W=Object(m.d)(J,{},Object(m.a)(R.a));r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b.a,{store:W,children:Object(u.jsx)(I,{})})}),document.getElementById("root")),T()}},[[32,1,2]]]);
//# sourceMappingURL=main.fe345bc4.chunk.js.map