(self.webpackChunk_gmanninglive_tw_ui_library=self.webpackChunk_gmanninglive_tw_ui_library||[]).push([[758],{"./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/stories/button.css":(f,c,n)=>{var m=n("./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js");c=m(!1),c.push([f.id,`.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`,""]),f.exports=c},"./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/stories/header.css":(f,c,n)=>{var m=n("./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js");c=m(!1),c.push([f.id,`.wrapper {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

svg {
  display: inline-block;
  vertical-align: top;
}

h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

button + button {
  margin-left: 10px;
}

.welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,""]),f.exports=c},"./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/runtime/api.js":f=>{"use strict";f.exports=function(m){var d=[];return d.toString=function(){return this.map(function(p){var g=c(p,m);return p[2]?"@media ".concat(p[2]," {").concat(g,"}"):g}).join("")},d.i=function(i,p,g){typeof i=="string"&&(i=[[null,i,""]]);var b={};if(g)for(var h=0;h<this.length;h++){var O=this[h][0];O!=null&&(b[O]=!0)}for(var r=0;r<i.length;r++){var v=[].concat(i[r]);g&&b[v[0]]||(p&&(v[2]?v[2]="".concat(p," and ").concat(v[2]):v[2]=p),d.push(v))}},d};function c(m,d){var i=m[1]||"",p=m[3];if(!p)return i;if(d&&typeof btoa=="function"){var g=n(p),b=p.sources.map(function(h){return"/*# sourceURL=".concat(p.sourceRoot||"").concat(h," */")});return[i].concat(b).concat([g]).join(`
`)}return[i].join(`
`)}function n(m){var d=btoa(unescape(encodeURIComponent(JSON.stringify(m)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d);return"/*# ".concat(i," */")}},"./src/stories/button.css":(f,c,n)=>{var m=n("./node_modules/@storybook/addon-postcss/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n("./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/stories/button.css");d=d.__esModule?d.default:d,typeof d=="string"&&(d=[[f.id,d,""]]);var i={};i.insert="head",i.singleton=!1;var p=m(d,i);f.exports=d.locals||{}},"./src/stories/header.css":(f,c,n)=>{var m=n("./node_modules/@storybook/addon-postcss/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n("./node_modules/@storybook/addon-postcss/node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/stories/header.css");d=d.__esModule?d.default:d,typeof d=="string"&&(d=[[f.id,d,""]]);var i={};i.insert="head",i.singleton=!1;var p=m(d,i);f.exports=d.locals||{}},"./node_modules/@storybook/addon-postcss/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(f,c,n)=>{"use strict";var m=function(){var e;return function(){return typeof e=="undefined"&&(e=Boolean(window&&document&&document.all&&!window.atob)),e}}(),d=function(){var e={};return function(s){if(typeof e[s]=="undefined"){var a=document.querySelector(s);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(l){a=null}e[s]=a}return e[s]}}(),i=[];function p(t){for(var e=-1,o=0;o<i.length;o++)if(i[o].identifier===t){e=o;break}return e}function g(t,e){for(var o={},s=[],a=0;a<t.length;a++){var l=t[a],u=e.base?l[0]+e.base:l[0],_=o[u]||0,C="".concat(u," ").concat(_);o[u]=_+1;var S=p(C),E={css:l[1],media:l[2],sourceMap:l[3]};S!==-1?(i[S].references++,i[S].updater(E)):i.push({identifier:C,updater:j(E,e),references:1}),s.push(C)}return s}function b(t){var e=document.createElement("style"),o=t.attributes||{};if(typeof o.nonce=="undefined"){var s=n.nc;s&&(o.nonce=s)}if(Object.keys(o).forEach(function(l){e.setAttribute(l,o[l])}),typeof t.insert=="function")t.insert(e);else{var a=d(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}function h(t){if(t.parentNode===null)return!1;t.parentNode.removeChild(t)}var O=function(){var e=[];return function(s,a){return e[s]=a,e.filter(Boolean).join(`
`)}}();function r(t,e,o,s){var a=o?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=O(e,a);else{var l=document.createTextNode(a),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(l,u[e]):t.appendChild(l)}}function v(t,e,o){var s=o.css,a=o.media,l=o.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),l&&typeof btoa!="undefined"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var y=null,x=0;function j(t,e){var o,s,a;if(e.singleton){var l=x++;o=y||(y=b(e)),s=r.bind(null,o,l,!1),a=r.bind(null,o,l,!0)}else o=b(e),s=v.bind(null,o,e),a=function(){h(o)};return s(t),function(_){if(_){if(_.css===t.css&&_.media===t.media&&_.sourceMap===t.sourceMap)return;s(t=_)}else a()}}f.exports=function(t,e){e=e||{},!e.singleton&&typeof e.singleton!="boolean"&&(e.singleton=m()),t=t||[];var o=g(t,e);return function(a){if(a=a||[],Object.prototype.toString.call(a)==="[object Array]"){for(var l=0;l<o.length;l++){var u=o[l],_=p(u);i[_].references--}for(var C=g(a,e),S=0;S<o.length;S++){var E=o[S],T=p(E);i[T].references===0&&(i[T].updater(),i.splice(T,1))}o=C}}}},"./src/stories/Header.stories.tsx":(f,c,n)=>{"use strict";n.r(c),n.d(c,{default:()=>v,LoggedIn:()=>x,LoggedOut:()=>j});var m=n("./node_modules/core-js/modules/es.object.assign.js"),d=n.n(m),i=n("./node_modules/core-js/modules/es.function.bind.js"),p=n.n(i),g=n("./node_modules/react/index.js"),b=n("./src/stories/Header.tsx"),h=n("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,r={LoggedIn:{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}},LoggedOut:{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}}};const v={title:"Example/Header",component:b.h,parameters:{layout:"fullscreen"}};var y=function(e){return(0,h.jsx)(b.h,Object.assign({},e))};y.displayName="Template";var x=y.bind({});x.args={user:{name:"Jane Doe"}};var j=y.bind({});j.args={},x.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},x.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},j.parameters)},"./src/stories/Header.tsx":(f,c,n)=>{"use strict";n.d(c,{h:()=>e});var m=n("./node_modules/core-js/modules/es.function.name.js"),d=n("./node_modules/react/index.js"),i=n("./node_modules/core-js/modules/es.object.keys.js"),p=n("./node_modules/core-js/modules/es.array.index-of.js"),g=n("./node_modules/core-js/modules/es.symbol.js"),b=n("./node_modules/core-js/modules/es.array.join.js"),h=n("./node_modules/core-js/modules/es.object.assign.js"),O=n("./src/stories/button.css"),r=n("./node_modules/react/jsx-runtime.js"),v=["primary","size","backgroundColor","label"];function y(o,s){if(o==null)return{};var a=x(o,s),l,u;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(o);for(u=0;u<_.length;u++)l=_[u],!(s.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,l)||(a[l]=o[l]))}return a}function x(o,s){if(o==null)return{};var a={},l=Object.keys(o),u,_;for(_=0;_<l.length;_++)u=l[_],!(s.indexOf(u)>=0)&&(a[u]=o[u]);return a}var j=function(s){var a=s.primary,l=a===void 0?!1:a,u=s.size,_=u===void 0?"medium":u,C=s.backgroundColor,S=s.label,E=y(s,v),T=l?"storybook-button--primary":"storybook-button--secondary";return(0,r.jsx)("button",Object.assign({type:"button",className:["storybook-button","storybook-button--"+_,T].join(" "),style:{backgroundColor:C}},E,{children:S}))};j.displayName="Button";try{j.displayName="Button",j.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:j.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(o){}var t=n("./src/stories/header.css"),e=function(s){var a=s.user,l=s.onLogin,u=s.onLogout,_=s.onCreateAccount;return(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,r.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,r.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,r.jsx)("h1",{children:"Acme"})]}),(0,r.jsx)("div",{children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,r.jsx)("b",{children:a.name}),"!"]}),(0,r.jsx)(j,{size:"small",onClick:u,label:"Log out"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{size:"small",onClick:l,label:"Log in"}),(0,r.jsx)(j,{primary:!0,size:"small",onClick:_,label:"Sign up"})]})})]})})};e.displayName="Header";try{e.displayName="Header",e.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:e.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(o){}},"./node_modules/core-js/modules/es.array.index-of.js":(f,c,n)=>{"use strict";var m=n("./node_modules/core-js/internals/export.js"),d=n("./node_modules/core-js/internals/function-uncurry-this.js"),i=n("./node_modules/core-js/internals/array-includes.js").indexOf,p=n("./node_modules/core-js/internals/array-method-is-strict.js"),g=d([].indexOf),b=!!g&&1/g([1],1,-0)<0,h=p("indexOf");m({target:"Array",proto:!0,forced:b||!h},{indexOf:function(r){var v=arguments.length>1?arguments[1]:void 0;return b?g(this,r,v)||0:i(this,r,v)}})},"./node_modules/core-js/modules/es.function.bind.js":(f,c,n)=>{var m=n("./node_modules/core-js/internals/export.js"),d=n("./node_modules/core-js/internals/function-bind.js");m({target:"Function",proto:!0,forced:Function.bind!==d},{bind:d})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(f,c,n)=>{"use strict";/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n("./node_modules/object-assign/index.js");var m=n("./node_modules/react/index.js"),d=60103;if(c.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var i=Symbol.for;d=i("react.element"),c.Fragment=i("react.fragment")}var p=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function h(O,r,v){var y,x={},j=null,t=null;v!==void 0&&(j=""+v),r.key!==void 0&&(j=""+r.key),r.ref!==void 0&&(t=r.ref);for(y in r)g.call(r,y)&&!b.hasOwnProperty(y)&&(x[y]=r[y]);if(O&&O.defaultProps)for(y in r=O.defaultProps,r)x[y]===void 0&&(x[y]=r[y]);return{$$typeof:d,type:O,key:j,ref:t,props:x,_owner:p.current}}c.jsx=h,c.jsxs=h},"./node_modules/react/jsx-runtime.js":(f,c,n)=>{"use strict";f.exports=n("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
