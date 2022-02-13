"use strict";(self.webpackChunk_gmanninglive_tw_ui_library=self.webpackChunk_gmanninglive_tw_ui_library||[]).push([[991],{"./src/stories/Introduction.stories.mdx":(n,r,s)=>{s.r(r),s.d(r,{__page:()=>j,default:()=>z});var x=s("./node_modules/core-js/modules/es.object.keys.js"),h=s("./node_modules/core-js/modules/es.array.index-of.js"),v=s("./node_modules/core-js/modules/es.symbol.js"),b=s("./node_modules/core-js/modules/es.object.assign.js"),p=s("./node_modules/react/index.js"),t=s("./node_modules/@mdx-js/react/dist/esm.js"),m=s("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js"),y=s("./src/stories/assets/code-brackets.svg"),g=s("./src/stories/assets/colors.svg"),u=s("./src/stories/assets/comments.svg"),w=s("./src/stories/assets/direction.svg"),N=s("./src/stories/assets/flow.svg"),O=s("./src/stories/assets/plugin.svg"),S=s("./src/stories/assets/repo.svg"),I=s("./src/stories/assets/stackalt.svg"),C=["components"];function k(){return k=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},k.apply(this,arguments)}function D(e,i){if(e==null)return{};var a=E(e,i),o,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)o=d[l],!(i.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(a[o]=e[o]))}return a}function E(e,i){if(e==null)return{};var a={},o=Object.keys(e),l,d;for(d=0;d<o.length;d++)l=o[d],!(i.indexOf(l)>=0)&&(a[l]=e[l]);return a}var T={},M="wrapper";function f(e){var i=e.components,a=D(e,C);return(0,t.kt)(M,k({},T,a,{components:i,mdxType:"MDXLayout"}),(0,t.kt)(m.Meta,{title:"Example/Introduction",mdxType:"Meta"}),(0,t.kt)("style",null,`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`),(0,t.kt)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),(0,t.kt)("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,(0,t.kt)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),(0,t.kt)("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,(0,t.kt)("inlineCode",{parentName:"p"},"src/stories"),` directory to learn how they work.
We recommend building UIs with a `,(0,t.kt)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},(0,t.kt)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),(0,t.kt)("div",{className:"subheading"},"Configure"),(0,t.kt)("div",{className:"link-list"},(0,t.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},(0,t.kt)("img",{src:O,alt:"plugin"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),(0,t.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},(0,t.kt)("img",{src:I,alt:"Build"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"Build configuration"),"How to customize webpack and Babel")),(0,t.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},(0,t.kt)("img",{src:g,alt:"colors"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"Styling"),"How to load and configure CSS libraries")),(0,t.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},(0,t.kt)("img",{src:N,alt:"flow"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"Data"),"Providers and mocking for data libraries"))),(0,t.kt)("div",{className:"subheading"},"Learn"),(0,t.kt)("div",{className:"link-list"},(0,t.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},(0,t.kt)("img",{src:S,alt:"repo"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),(0,t.kt)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},(0,t.kt)("img",{src:w,alt:"direction"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"In-depth guides"),"Best practices from leading teams")),(0,t.kt)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},(0,t.kt)("img",{src:y,alt:"code"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"GitHub project"),"View the source and add issues")),(0,t.kt)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},(0,t.kt)("img",{src:u,alt:"comments"}),(0,t.kt)("span",null,(0,t.kt)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),(0,t.kt)("div",{className:"tip-wrapper"},(0,t.kt)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",(0,t.kt)("code",null,"src/stories/Introduction.stories.mdx")))}f.displayName="MDXContent",f.isMDXComponent=!0;var j=function(){throw new Error("Docs-only story")};j.parameters={docsOnly:!0};var c={title:"Example/Introduction",includeStories:["__page"]},P={};c.parameters=c.parameters||{},c.parameters.docs=Object.assign({},c.parameters.docs||{},{page:function(){return(0,t.kt)(m.AddContext,{mdxStoryNameToKey:P,mdxComponentAnnotations:c},(0,t.kt)(f,null))}});const z=c},"./node_modules/core-js/modules/es.array.index-of.js":(n,r,s)=>{var x=s("./node_modules/core-js/internals/export.js"),h=s("./node_modules/core-js/internals/function-uncurry-this.js"),v=s("./node_modules/core-js/internals/array-includes.js").indexOf,b=s("./node_modules/core-js/internals/array-method-is-strict.js"),p=h([].indexOf),t=!!p&&1/p([1],1,-0)<0,m=b("indexOf");x({target:"Array",proto:!0,forced:t||!m},{indexOf:function(g){var u=arguments.length>1?arguments[1]:void 0;return t?p(this,g,u)||0:v(this,g,u)}})},"./src/stories/assets/code-brackets.svg":(n,r,s)=>{n.exports=s.p+"static/media/code-brackets.2e1112d7.svg"},"./src/stories/assets/colors.svg":(n,r,s)=>{n.exports=s.p+"static/media/colors.a4bd0486.svg"},"./src/stories/assets/comments.svg":(n,r,s)=>{n.exports=s.p+"static/media/comments.a3859089.svg"},"./src/stories/assets/direction.svg":(n,r,s)=>{n.exports=s.p+"static/media/direction.b770f9af.svg"},"./src/stories/assets/flow.svg":(n,r,s)=>{n.exports=s.p+"static/media/flow.edad2ac1.svg"},"./src/stories/assets/plugin.svg":(n,r,s)=>{n.exports=s.p+"static/media/plugin.d494b228.svg"},"./src/stories/assets/repo.svg":(n,r,s)=>{n.exports=s.p+"static/media/repo.6d496322.svg"},"./src/stories/assets/stackalt.svg":(n,r,s)=>{n.exports=s.p+"static/media/stackalt.dba9fbb3.svg"}}]);
