"use strict";(self.webpackChunk_gmanninglive_tw_ui_library=self.webpackChunk_gmanninglive_tw_ui_library||[]).push([[574],{42574:(Ye,me,b)=>{b.r(me),b.d(me,{WithToolTipState:()=>Fe,WithTooltip:()=>Fe,WithTooltipPure:()=>Te});var Xe=b(47042),Se=b(43371),le=b(47941),X=b(82526),z=b(19601),I=b(41817),ze=b(41539),Ae=b(32165),kt=b(66992),vo=b(33948),ho=b(68309),mo=b(91038),go=b(78783),yo=b(54747),y=b(67294),ge=b(36305),Lt=b(58908),Dt=b.n(Lt),Wt=b(63366),V=b(87462),Ze=b(94578),Ht=b(73935),Ge=y.createContext(),Je=y.createContext();function It(t){var e=t.children,o=y.useState(null),r=o[0],n=o[1],i=y.useRef(!1);y.useEffect(function(){return function(){i.current=!0}},[]);var s=y.useCallback(function(a){i.current||n(a)},[]);return y.createElement(Ge.Provider,{value:r},y.createElement(Je.Provider,{value:s},e))}var Ke=function(e){return Array.isArray(e)?e[0]:e},Qe=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},je=function(e,o){if(typeof e=="function")return Qe(e,o);e!=null&&(e.current=o)},qe=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},_e=typeof window!="undefined"&&window.document&&window.document.createElement?y.useLayoutEffect:y.useEffect;function H(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function re(t){var e=H(t).Element;return t instanceof e||t instanceof Element}function D(t){var e=H(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function et(t){if(typeof ShadowRoot=="undefined")return!1;var e=H(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var q=Math.max,ye=Math.min,oe=Math.round;function ne(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(D(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=oe(o.width)/s||1),i>0&&(n=oe(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Be(t){var e=H(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ft(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function $t(t){return t===H(t)||!D(t)?Be(t):Ft(t)}function F(t){return t?(t.nodeName||"").toLowerCase():null}function Z(t){return((re(t)?t.ownerDocument:t.document)||window.document).documentElement}function Me(t){return ne(Z(t)).left+Be(t).scrollLeft}function Y(t){return H(t).getComputedStyle(t)}function ke(t){var e=Y(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Nt(t){var e=t.getBoundingClientRect(),o=oe(e.width)/t.offsetWidth||1,r=oe(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Ut(t,e,o){o===void 0&&(o=!1);var r=D(e),n=D(e)&&Nt(e),i=Z(e),s=ne(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((F(e)!=="body"||ke(i))&&(a=$t(e)),D(e)?(l=ne(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Me(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Le(t){var e=ne(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function be(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(et(t)?t.host:null)||Z(t)}function tt(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:D(t)&&ke(t)?t:tt(be(t))}function ce(t,e){var o;e===void 0&&(e=[]);var r=tt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=H(r),s=n?[i].concat(i.visualViewport||[],ke(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(ce(be(s)))}function Vt(t){return["table","td","th"].indexOf(F(t))>=0}function rt(t){return!D(t)||Y(t).position==="fixed"?null:t.offsetParent}function Yt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&D(t)){var r=Y(t);if(r.position==="fixed")return null}for(var n=be(t);D(n)&&["html","body"].indexOf(F(n))<0;){var i=Y(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function ue(t){for(var e=H(t),o=rt(t);o&&Vt(o)&&Y(o).position==="static";)o=rt(o);return o&&(F(o)==="html"||F(o)==="body"&&Y(o).position==="static")?e:o||Yt(t)||e}var u=b(87701);function Xt(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function zt(t){var e=Xt(t);return u.xs.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function Zt(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Gt(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var bo="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",wo="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",ot={placement:"bottom",modifiers:[],strategy:"absolute"};function nt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Jt(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?ot:n;return function(a,l,p){p===void 0&&(p=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ot,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],w=!1,f={state:c,setOptions:function(C){var P=typeof C=="function"?C(c.options):C;v(),c.options=Object.assign({},i,c.options,P),c.scrollParents={reference:re(a)?ce(a):a.contextElement?ce(a.contextElement):[],popper:ce(l)};var x=zt(Gt([].concat(r,c.options.modifiers)));if(c.orderedModifiers=x.filter(function(S){return S.enabled}),!1)var d,O,T,R,E,A,j;return g(),f.update()},forceUpdate:function(){if(!w){var C=c.elements,P=C.reference,x=C.popper;if(!!nt(P,x)){c.rects={reference:Ut(P,ue(x),c.options.strategy==="fixed"),popper:Le(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(S){return c.modifiersData[S.name]=Object.assign({},S.data)});for(var d=0,O=0;O<c.orderedModifiers.length;O++){if(c.reset===!0){c.reset=!1,O=-1;continue}var T=c.orderedModifiers[O],R=T.fn,E=T.options,A=E===void 0?{}:E,j=T.name;typeof R=="function"&&(c=R({state:c,options:A,name:j,instance:f})||c)}}}},update:Zt(function(){return new Promise(function(m){f.forceUpdate(),m(c)})}),destroy:function(){v(),w=!0}};if(!nt(a,l))return f;f.setOptions(p).then(function(m){!w&&p.onFirstUpdate&&p.onFirstUpdate(m)});function g(){c.orderedModifiers.forEach(function(m){var C=m.name,P=m.options,x=P===void 0?{}:P,d=m.effect;if(typeof d=="function"){var O=d({state:c,name:C,instance:f,options:x}),T=function(){};h.push(O||T)}})}function v(){h.forEach(function(m){return m()}),h=[]}return f}}var Oo=null,we={passive:!0};function Kt(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=H(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&p.forEach(function(c){c.addEventListener("scroll",o.update,we)}),a&&l.addEventListener("resize",o.update,we),function(){i&&p.forEach(function(c){c.removeEventListener("scroll",o.update,we)}),a&&l.removeEventListener("resize",o.update,we)}}const Qt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Kt,data:{}};function $(t){return t.split("-")[0]}function ie(t){return t.split("-")[1]}function De(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t){var e=t.reference,o=t.element,r=t.placement,n=r?$(r):null,i=r?ie(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case u.we:l={x:s,y:e.y-o.height};break;case u.I:l={x:s,y:e.y+e.height};break;case u.F2:l={x:e.x+e.width,y:a};break;case u.t$:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var p=n?De(n):null;if(p!=null){var c=p==="y"?"height":"width";switch(i){case u.BL:l[p]=l[p]-(e[c]/2-o[c]/2);break;case u.ut:l[p]=l[p]+(e[c]/2-o[c]/2);break;default:}}return l}function qt(t){var e=t.state,o=t.name;e.modifiersData[o]=it({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const _t={name:"popperOffsets",enabled:!0,phase:"read",fn:qt,data:{}};var er={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tr(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:oe(e*n)/n||0,y:oe(o*n)/n||0}}function at(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,p=t.adaptive,c=t.roundOffsets,h=t.isFixed,w=s.x,f=w===void 0?0:w,g=s.y,v=g===void 0?0:g,m=typeof c=="function"?c({x:f,y:v}):{x:f,y:v};f=m.x,v=m.y;var C=s.hasOwnProperty("x"),P=s.hasOwnProperty("y"),x=u.t$,d=u.we,O=window;if(p){var T=ue(o),R="clientHeight",E="clientWidth";if(T===H(o)&&(T=Z(o),Y(T).position!=="static"&&a==="absolute"&&(R="scrollHeight",E="scrollWidth")),T=T,n===u.we||(n===u.t$||n===u.F2)&&i===u.ut){d=u.I;var A=h&&O.visualViewport?O.visualViewport.height:T[R];v-=A-r.height,v*=l?1:-1}if(n===u.t$||(n===u.we||n===u.I)&&i===u.ut){x=u.F2;var j=h&&O.visualViewport?O.visualViewport.width:T[E];f-=j-r.width,f*=l?1:-1}}var S=Object.assign({position:a},p&&er),k=c===!0?tr({x:f,y:v}):{x:f,y:v};if(f=k.x,v=k.y,l){var B;return Object.assign({},S,(B={},B[d]=P?"0":"",B[x]=C?"0":"",B.transform=(O.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",B))}return Object.assign({},S,(e={},e[d]=P?v+"px":"",e[x]=C?f+"px":"",e.transform="",e))}function rr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a;if(!1)var p;var c={placement:$(e.placement),variation:ie(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,at(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,at(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const or={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:rr,data:{}};function nr(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!D(i)||!F(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function ir(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,p){return l[p]="",l},{});!D(n)||!F(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}const ar={name:"applyStyles",enabled:!0,phase:"write",fn:nr,effect:ir,requires:["computeStyles"]};function sr(t,e,o){var r=$(t),n=[u.t$,u.we].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[u.t$,u.F2].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function lr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=u.Ct.reduce(function(c,h){return c[h]=sr(h,e.rects,i),c},{}),a=s[e.placement],l=a.x,p=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=p),e.modifiersData[r]=s}const cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:lr};var ur={left:"right",right:"left",bottom:"top",top:"bottom"};function Oe(t){return t.replace(/left|right|bottom|top/g,function(e){return ur[e]})}var pr={start:"end",end:"start"};function st(t){return t.replace(/start|end/g,function(e){return pr[e]})}function fr(t){var e=H(t),o=Z(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Me(t),y:a}}function dr(t){var e,o=Z(t),r=Be(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=q(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=q(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Me(t),l=-r.scrollTop;return Y(n||o).direction==="rtl"&&(a+=q(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function lt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&et(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function We(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vr(t){var e=ne(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ct(t,e){return e===u.Pj?We(fr(t)):re(e)?vr(e):We(dr(Z(t)))}function hr(t){var e=ce(be(t)),o=["absolute","fixed"].indexOf(Y(t).position)>=0,r=o&&D(t)?ue(t):t;return re(r)?e.filter(function(n){return re(n)&&lt(n,r)&&F(n)!=="body"}):[]}function mr(t,e,o){var r=e==="clippingParents"?hr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var p=ct(t,l);return a.top=q(p.top,a.top),a.right=ye(p.right,a.right),a.bottom=ye(p.bottom,a.bottom),a.left=q(p.left,a.left),a},ct(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ut(){return{top:0,right:0,bottom:0,left:0}}function pt(t){return Object.assign({},ut(),t)}function ft(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}function pe(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?u.zV:i,a=o.rootBoundary,l=a===void 0?u.Pj:a,p=o.elementContext,c=p===void 0?u.k5:p,h=o.altBoundary,w=h===void 0?!1:h,f=o.padding,g=f===void 0?0:f,v=pt(typeof g!="number"?g:ft(g,u.mv)),m=c===u.k5?u.YP:u.k5,C=t.rects.popper,P=t.elements[w?m:c],x=mr(re(P)?P:P.contextElement||Z(t.elements.popper),s,l),d=ne(t.elements.reference),O=it({reference:d,element:C,strategy:"absolute",placement:n}),T=We(Object.assign({},C,O)),R=c===u.k5?T:d,E={top:x.top-R.top+v.top,bottom:R.bottom-x.bottom+v.bottom,left:x.left-R.left+v.left,right:R.right-x.right+v.right},A=t.modifiersData.offset;if(c===u.k5&&A){var j=A[n];Object.keys(E).forEach(function(S){var k=[u.F2,u.I].indexOf(S)>=0?1:-1,B=[u.we,u.I].indexOf(S)>=0?"y":"x";E[S]+=j[B]*k})}return E}function gr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,p=l===void 0?u.Ct:l,c=ie(r),h=c?a?u.bw:u.bw.filter(function(g){return ie(g)===c}):u.mv,w=h.filter(function(g){return p.indexOf(g)>=0});w.length===0&&(w=h);var f=w.reduce(function(g,v){return g[v]=pe(t,{placement:v,boundary:n,rootBoundary:i,padding:s})[$(v)],g},{});return Object.keys(f).sort(function(g,v){return f[g]-f[v]})}function yr(t){if($(t)===u.d7)return[];var e=Oe(t);return[st(t),e,st(e)]}function br(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,p=o.padding,c=o.boundary,h=o.rootBoundary,w=o.altBoundary,f=o.flipVariations,g=f===void 0?!0:f,v=o.allowedAutoPlacements,m=e.options.placement,C=$(m),P=C===m,x=l||(P||!g?[Oe(m)]:yr(m)),d=[m].concat(x).reduce(function(se,Q){return se.concat($(Q)===u.d7?gr(e,{placement:Q,boundary:c,rootBoundary:h,padding:p,flipVariations:g,allowedAutoPlacements:v}):Q)},[]),O=e.rects.reference,T=e.rects.popper,R=new Map,E=!0,A=d[0],j=0;j<d.length;j++){var S=d[j],k=$(S),B=ie(S)===u.BL,J=[u.we,u.I].indexOf(k)>=0,K=J?"width":"height",M=pe(e,{placement:S,boundary:c,rootBoundary:h,altBoundary:w,padding:p}),L=J?B?u.F2:u.t$:B?u.I:u.we;O[K]>T[K]&&(L=Oe(L));var ae=Oe(L),_=[];if(i&&_.push(M[k]<=0),a&&_.push(M[L]<=0,M[ae]<=0),_.every(function(se){return se})){A=S,E=!1;break}R.set(S,_)}if(E)for(var Re=g?3:1,$e=function(Q){var he=d.find(function(Pe){var ee=R.get(Pe);if(ee)return ee.slice(0,Q).every(function(Ne){return Ne})});if(he)return A=he,"break"},ve=Re;ve>0;ve--){var Ce=$e(ve);if(Ce==="break")break}e.placement!==A&&(e.modifiersData[r]._skip=!0,e.placement=A,e.reset=!0)}}const wr={name:"flip",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"],data:{_skip:!1}};function Or(t){return t==="x"?"y":"x"}function fe(t,e,o){return q(t,ye(e,o))}function xr(t,e,o){var r=fe(t,e,o);return r>o?o:r}function Tr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,p=o.rootBoundary,c=o.altBoundary,h=o.padding,w=o.tether,f=w===void 0?!0:w,g=o.tetherOffset,v=g===void 0?0:g,m=pe(e,{boundary:l,rootBoundary:p,padding:h,altBoundary:c}),C=$(e.placement),P=ie(e.placement),x=!P,d=De(C),O=Or(d),T=e.modifiersData.popperOffsets,R=e.rects.reference,E=e.rects.popper,A=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,j=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(!!T){if(i){var B,J=d==="y"?u.we:u.t$,K=d==="y"?u.I:u.F2,M=d==="y"?"height":"width",L=T[d],ae=L+m[J],_=L-m[K],Re=f?-E[M]/2:0,$e=P===u.BL?R[M]:E[M],ve=P===u.BL?-E[M]:-R[M],Ce=e.elements.arrow,se=f&&Ce?Le(Ce):{width:0,height:0},Q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ut(),he=Q[J],Pe=Q[K],ee=fe(0,R[M],se[M]),Ne=x?R[M]/2-Re-ee-he-j.mainAxis:$e-ee-he-j.mainAxis,so=x?-R[M]/2+Re+ee+Pe+j.mainAxis:ve+ee+Pe+j.mainAxis,Ue=e.elements.arrow&&ue(e.elements.arrow),lo=Ue?d==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,Rt=(B=S==null?void 0:S[d])!=null?B:0,co=L+Ne-Rt-lo,uo=L+so-Rt,Ct=fe(f?ye(ae,co):ae,L,f?q(_,uo):_);T[d]=Ct,k[d]=Ct-L}if(a){var Pt,po=d==="x"?u.we:u.t$,fo=d==="x"?u.I:u.F2,te=T[O],Ee=O==="y"?"height":"width",Et=te+m[po],St=te-m[fo],Ve=[u.we,u.t$].indexOf(C)!==-1,At=(Pt=S==null?void 0:S[O])!=null?Pt:0,jt=Ve?Et:te-R[Ee]-E[Ee]-At+j.altAxis,Bt=Ve?te+R[Ee]+E[Ee]-At-j.altAxis:St,Mt=f&&Ve?xr(jt,te,Bt):fe(f?jt:Et,te,f?Bt:St);T[O]=Mt,k[O]=Mt-te}e.modifiersData[r]=k}}const Rr={name:"preventOverflow",enabled:!0,phase:"main",fn:Tr,requiresIfExists:["offset"]};var Cr=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,pt(typeof e!="number"?e:ft(e,u.mv))};function Pr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=$(o.placement),l=De(a),p=[u.t$,u.F2].indexOf(a)>=0,c=p?"height":"width";if(!(!i||!s)){var h=Cr(n.padding,o),w=Le(i),f=l==="y"?u.we:u.t$,g=l==="y"?u.I:u.F2,v=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],m=s[l]-o.rects.reference[l],C=ue(i),P=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,x=v/2-m/2,d=h[f],O=P-w[c]-h[g],T=P/2-w[c]/2+x,R=fe(d,T,O),E=l;o.modifiersData[r]=(e={},e[E]=R,e.centerOffset=R-T,e)}}function Er(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!lt(e.elements.popper,n)||(e.elements.arrow=n))}const Sr={name:"arrow",enabled:!0,phase:"main",fn:Pr,effect:Er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function dt(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function vt(t){return[u.we,u.F2,u.I,u.t$].some(function(e){return t[e]>=0})}function Ar(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=pe(e,{elementContext:"reference"}),a=pe(e,{altBoundary:!0}),l=dt(s,r),p=dt(a,n,i),c=vt(l),h=vt(p);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}var jr=[Qt,_t,or,ar,cr,wr,Rr,Sr,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ar}],Br=Jt({defaultModifiers:jr}),Mr=b(69590),kr=b.n(Mr),Lr=[],Dr=function(e,o,r){r===void 0&&(r={});var n=y.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Lr},s=y.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],p=y.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var g=f.state,v=Object.keys(g.elements);l({styles:qe(v.map(function(m){return[m,g.styles[m]||{}]})),attributes:qe(v.map(function(m){return[m,g.attributes[m]]}))})},requires:["computeStyles"]}},[]),c=y.useMemo(function(){var w={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[p,{name:"applyStyles",enabled:!1}])};return kr()(n.current,w)?n.current||w:(n.current=w,w)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,p]),h=y.useRef();return _e(function(){h.current&&h.current.setOptions(c)},[c]),_e(function(){if(!(e==null||o==null)){var w=r.createPopper||Br,f=w(e,o,c);return h.current=f,function(){f.destroy(),h.current=null}}},[e,o,r.createPopper]),{state:h.current?h.current.state:null,styles:a.styles,attributes:a.attributes,update:h.current?h.current.update:null,forceUpdate:h.current?h.current.forceUpdate:null}},Wr=function(){},Hr=function(){return Promise.resolve(null)},Ir=[];function Fr(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?Ir:i,a=t.referenceElement,l=t.onFirstUpdate,p=t.innerRef,c=t.children,h=y.useContext(Ge),w=y.useState(null),f=w[0],g=w[1],v=y.useState(null),m=v[0],C=v[1];y.useEffect(function(){je(p,f)},[p,f]);var P=y.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:m!=null,options:{element:m}}])}},[o,n,l,s,m]),x=Dr(a||h,f,P),d=x.state,O=x.styles,T=x.forceUpdate,R=x.update,E=y.useMemo(function(){return{ref:g,style:O.popper,placement:d?d.placement:o,hasPopperEscaped:d&&d.modifiersData.hide?d.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:d&&d.modifiersData.hide?d.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:O.arrow,ref:C},forceUpdate:T||Wr,update:R||Hr}},[g,C,o,d,O,R,T]);return Ke(c)(E)}var $r=b(42473),Nr=b.n($r);function Ur(t){var e=t.children,o=t.innerRef,r=y.useContext(Je),n=y.useCallback(function(i){je(o,i),Qe(r,i)},[o,r]);return y.useEffect(function(){return function(){return je(o,null)}}),y.useEffect(function(){Nr()(Boolean(r),"`Reference` should not be used outside of a `Manager` component.")},[r]),Ke(e)({ref:n})}var ht=y.createContext({}),N=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},Vr=function(){},mt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},Yr=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},gt=function(t){(0,Ze.Z)(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,p=r.props,c=p.hideTooltip,h=p.clearScheduled;h(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,p=r.props,c=p.hideTooltip,h=p.clearScheduled;h(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,Yr(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),(0,V.Z)({},a,{style:(0,V.Z)({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),(0,V.Z)({},a,r.isTriggeredBy("hover")&&{onMouseEnter:N(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:N(r.props.hideTooltip,a.onMouseLeave)},{style:(0,V.Z)({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return y.createElement(ht.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(y.Component);gt.contextType=ht;var Xr={childList:!0,subtree:!0},yt=function(t){(0,Ze.Z)(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,p=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=(0,V.Z)({},c,{pageX:l,pageY:p})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,p=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:p})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,p=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:p})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,p=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:p})},r.getTriggerProps=function(a){return a===void 0&&(a={}),(0,V.Z)({},a,r.isTriggeredBy("click")&&{onClick:N(r.clickToggle,a.onClick),onTouchEnd:N(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:N(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&(0,V.Z)({onMouseEnter:N(r.showTooltip,a.onMouseEnter),onMouseLeave:N(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:N(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:N(r.showTooltip,a.onFocus),onBlur:N(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,p=i.trigger,c=i.getTriggerRef,h=i.modifiers,w=i.closeOnReferenceHidden,f=i.usePortal,g=i.portalContainer,v=i.followCursor,m=i.getTooltipRef,C=i.mutationObserverOptions,P=(0,Wt.Z)(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),x=y.createElement(Fr,(0,V.Z)({innerRef:m,placement:l,modifiers:[{name:"followCursor",enabled:v,phase:"main",fn:function(O){n.popperOffset=O.state.rects.popper}}].concat(h)},P),function(d){var O=d.ref,T=d.style,R=d.placement,E=d.arrowProps,A=d.isReferenceHidden,j=d.update;if(v&&n.popperOffset){var S=n.state,k=S.pageX,B=S.pageY,J=n.popperOffset,K=J.width,M=J.height,L=k+K>window.pageXOffset+document.body.offsetWidth?k-K:k,ae=B+M>window.pageYOffset+document.body.offsetHeight?B-M:B;T.transform="translate3d("+L+"px, "+ae+"px, 0"}return y.createElement(gt,(0,V.Z)({arrowProps:E,closeOnReferenceHidden:w,isReferenceHidden:A,placement:R,update:j,style:T,tooltip:a,trigger:p,mutationObserverOptions:C},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:O}))});return y.createElement(It,null,y.createElement(Ur,{innerRef:c},function(d){var O=d.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:O})}),this.getState()&&(f?(0,Ht.createPortal)(x,g):x))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(y.Component);yt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:Vr,placement:"right",portalContainer:mt()?document.body:null,trigger:"hover",usePortal:mt(),mutationObserverOptions:Xr,modifiers:[]};const zr=yt;var To=b(23123),Ro=b(74916),Co=b(23157),Po=b(92222),Zr=b(52326),Gr=b.n(Zr),U=b(37976);function xe(){return xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},xe.apply(this,arguments)}function Jr(t,e){if(t==null)return{};var o=Kr(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function Kr(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var W=Gr()(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),G=8,Qr=ge.zo.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}default:}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(W("top",r,G*-1,"auto"),"px"),top:"".concat(W("bottom",r,G*-1,"auto"),"px"),right:"".concat(W("left",r,G*-1,"auto"),"px"),left:"".concat(W("right",r,G*-1,"auto"),"px"),borderBottomWidth:"".concat(W("top",r,"0",G),"px"),borderTopWidth:"".concat(W("bottom",r,"0",G),"px"),borderRightWidth:"".concat(W("left",r,"0",G),"px"),borderLeftWidth:"".concat(W("right",r,"0",G),"px"),borderTopColor:W("top",r,e.color[o]||o||e.base==="light"?(0,U.tG)(e.background.app):(0,U.r5)(e.background.app),"transparent"),borderBottomColor:W("bottom",r,e.color[o]||o||e.base==="light"?(0,U.tG)(e.background.app):(0,U.r5)(e.background.app),"transparent"),borderLeftColor:W("left",r,e.color[o]||o||e.base==="light"?(0,U.tG)(e.background.app):(0,U.r5)(e.background.app),"transparent"),borderRightColor:W("right",r,e.color[o]||o||e.base==="light"?(0,U.tG)(e.background.app):(0,U.r5)(e.background.app),"transparent")}}),qr=ge.zo.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?(0,U.tG)(e.background.app):(0,U.r5)(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),He=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,p=Jr(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return y.createElement(qr,xe({hasChrome:r,placement:o,ref:s},p,{color:l}),r&&y.createElement(Qr,xe({placement:o,ref:a},i,{color:l})),n)};He.displayName="Tooltip",He.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var bt,wt;function _r(t,e){return oo(t)||ro(t,e)||to(t,e)||eo()}function eo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function to(t,e){if(!!t){if(typeof t=="string")return Ot(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ot(t,e)}}function Ot(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function ro(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function oo(t){if(Array.isArray(t))return t}function de(){return de=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},de.apply(this,arguments)}function xt(t,e){if(t==null)return{};var o=no(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function no(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function Tt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Ie=Dt().document,io=ge.zo.div(bt||(bt=Tt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),ao=ge.zo.g(wt||(wt=Tt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Te=function(e){var o=e.svg,r=e.trigger,n=e.closeOnClick,i=e.placement,s=e.modifiers,a=e.hasChrome,l=e.tooltip,p=e.children,c=e.tooltipShown,h=e.onVisibilityChange,w=xt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),f=o?ao:io;return y.createElement(zr,{placement:i,trigger:r,modifiers:s,tooltipShown:c,onVisibilityChange:h,tooltip:function(v){var m=v.getTooltipProps,C=v.getArrowProps,P=v.tooltipRef,x=v.arrowRef,d=v.placement;return y.createElement(He,de({hasChrome:a,placement:d,tooltipRef:P,arrowRef:x,arrowProps:C()},m()),typeof l=="function"?l({onHide:function(){return h(!1)}}):l)}},function(g){var v=g.getTriggerProps,m=g.triggerRef;return y.createElement(f,de({ref:m},v(),w),p)})};Te.displayName="WithTooltipPure",Te.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Fe=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=xt(e,["startOpen","onVisibilityChange"]),i=(0,y.useState)(o||!1),s=_r(i,2),a=s[0],l=s[1],p=(0,y.useCallback)(function(c){r&&r(c)===!1||l(c)},[r]);return(0,y.useEffect)(function(){var c=function(){return p(!1)};Ie.addEventListener("keydown",c,!1);var h=Array.from(Ie.getElementsByTagName("iframe")),w=[];return h.forEach(function(f){var g=function(){try{f.contentWindow.document&&(f.contentWindow.document.addEventListener("click",c),w.push(function(){try{f.contentWindow.document.removeEventListener("click",c)}catch(m){}}))}catch(m){}};g(),f.addEventListener("load",g),w.push(function(){f.removeEventListener("load",g)})}),function(){Ie.removeEventListener("keydown",c),w.forEach(function(f){f()})}}),y.createElement(Te,de({},n,{tooltipShown:a,onVisibilityChange:p}))};Fe.displayName="WithToolTipState"},42473:Ye=>{var me=!1,b=function(){};if(me){var Xe=function(le,X){var z=arguments.length;X=new Array(z>1?z-1:0);for(var I=1;I<z;I++)X[I-1]=arguments[I];var ze=0,Ae="Warning: "+le.replace(/%s/g,function(){return X[ze++]});typeof console!="undefined"&&console.error(Ae);try{throw new Error(Ae)}catch(kt){}};b=function(Se,le,X){var z=arguments.length;X=new Array(z>2?z-2:0);for(var I=2;I<z;I++)X[I-2]=arguments[I];if(le===void 0)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");Se||Xe.apply(null,[le].concat(X))}}Ye.exports=b}}]);
