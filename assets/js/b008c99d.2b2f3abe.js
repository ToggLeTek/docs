"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[2276],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var r=n.createContext({}),c=function(e){var t=n.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(o),m=i,k=u["".concat(r,".").concat(m)]||u[m]||p[m]||s;return o?n.createElement(k,l(l({ref:t},d),{},{components:o})):n.createElement(k,l({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,l=new Array(s);l[0]=u;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<s;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2494:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const s={},l="Osmosis IDE Setup",a={unversionedId:"developing/osmosis-core/ide-guide",id:"developing/osmosis-core/ide-guide",title:"Osmosis IDE Setup",description:"Recommended IDE setup for developing on Osmosis in Go.",source:"@site/docs/developing/osmosis-core/ide-guide.md",sourceDirName:"developing/osmosis-core",slug:"/developing/osmosis-core/ide-guide",permalink:"/docs/developing/osmosis-core/ide-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developing/osmosis-core/ide-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/developing/osmosis-core/contributing"},next:{title:"osmosisd",permalink:"/docs/developing/osmosis-core/osmosisd"}},r={},c=[{value:"Install Go and VSCode",id:"install-go-and-vscode",level:2},{value:"Clone Osmosis and Cosmos SDK",id:"clone-osmosis-and-cosmos-sdk",level:2},{value:"Add Relevant VSCode Extensions",id:"add-relevant-vscode-extensions",level:2},{value:"Vscode configuration",id:"vscode-configuration",level:2},{value:"License",id:"license",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"osmosis-ide-setup"},"Osmosis IDE Setup"),(0,i.kt)("p",null,"Recommended IDE setup for developing on Osmosis in Go."),(0,i.kt)("h2",{id:"install-go-and-vscode"},"Install Go and VSCode"),(0,i.kt)("p",null,"First, install VSCode: ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")),(0,i.kt)("p",null,"Then, install Go: ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"https://go.dev/doc/install")),(0,i.kt)("h2",{id:"clone-osmosis-and-cosmos-sdk"},"Clone Osmosis and Cosmos SDK"),(0,i.kt)("p",null,"To set up your local environment for Osmosis, clone the Osmosis repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/osmosis-labs/osmosis.git\n")),(0,i.kt)("p",null,"The next step is not necessary, but it is extremely useful to have as a reference. For"),(0,i.kt)("p",null,"Clone the Cosmos SDK repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cosmos/cosmos-sdk.git\n")),(0,i.kt)("p",null,"Now launch VSCode and open the Osmosis folder through ",(0,i.kt)("inlineCode",{parentName:"p"},"File -> Open")),(0,i.kt)("p",null,"Finally, add the Cosmos SDK to your workspace by selecting it in ",(0,i.kt)("inlineCode",{parentName:"p"},"File -> Add Folder to Workspace")),(0,i.kt)("p",null,"Both Osmosis and the Cosmos SDK should now show up on the same VSCode page!"),(0,i.kt)("h2",{id:"add-relevant-vscode-extensions"},"Add Relevant VSCode Extensions"),(0,i.kt)("p",null,"Add the following extensions to your VSCode:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=golang.Go"},"Go by Google")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3"},"VSCode Proto 3 by zxh404")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},"Git Lens by GitKraken")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode"},"Tabnine AI by Tabnine"))),(0,i.kt)("h2",{id:"vscode-configuration"},"Vscode configuration"),(0,i.kt)("p",null,'To make your environment run tests automatically every time you save"'),(0,i.kt)("p",null,"Go to: ",(0,i.kt)("inlineCode",{parentName:"p"},"VSCode -> Preferences -> settings -> Extensions -> Go")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Go: Lint tool")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"golint"),". You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"staticcheck")," if you'd like, it can just take lots of computational resources.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you'd like to use the same configuration as osmosis code, use ",(0,i.kt)("inlineCode",{parentName:"li"},"golangci-lint")," ."),(0,i.kt)("li",{parentName:"ul"},"You will likely be prompted to install the linter you choose, click the install button."))),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Go: Format tool")," to one of the following: ",(0,i.kt)("inlineCode",{parentName:"li"},"goreturns")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"gofumports"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You will likely be prompted to install the formatter you choose, click the install button."))),(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("inlineCode",{parentName:"li"},"Go: Test on Save"))),(0,i.kt)("p",null,"At this point, your environment should be ready to go!"),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"This work is dual-licensed under Apache 2.0 and MIT.\nYou can choose between one of them if you use this work."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SPDX-License-Identifier: Apache-2.0 OR MIT")))}p.isMDXComponent=!0}}]);