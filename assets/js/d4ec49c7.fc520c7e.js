"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[4977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(k,s(s({ref:t},c),{},{components:n})):o.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(7462),l=(n(7294),n(3905));const r={title:"Introduction"},s="Modules",a={unversionedId:"developing/osmosis-core/modules/README",id:"developing/osmosis-core/modules/README",title:"Introduction",description:"* Epochs",source:"@site/docs/developing/osmosis-core/modules/README.md",sourceDirName:"developing/osmosis-core/modules",slug:"/developing/osmosis-core/modules/",permalink:"/docs/developing/osmosis-core/modules/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developing/osmosis-core/modules/README.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/category/modules"},next:{title:"spec-epochs",permalink:"/docs/developing/osmosis-core/modules/spec-epochs"}},i={},u=[{value:"Module Accounts",id:"module-accounts",level:2},{value:"Module Flow",id:"module-flow",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modules"},"Modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-epochs"},"Epochs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Allows other modules to be signaled once every period to run their desired function"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-gamm"},"GAMM"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Provides the logic to create and interact with liquidity pools on Osmosis"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-incentives"},"Incentives"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Creates gauges to provide incentives to users who lock specified tokens for a certain period of time"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-lockup"},"Lockup"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bonds LP shares for user-defined locking periods to earn rewards"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-mint"},"Mint"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Creates tokens to reward validators, incentivize liquidity, provide funds for governance, and pay developers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-pool-incentives"},"Pool-Incentives"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Creates individual gauges for every lock duration that exists in a pool"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-gov"},"Gov"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On-chain governance which allows token holders to participate in a community led decision-making process"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-superfluid"},"Superfluid Staking"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Stakes user-bonded LP shares to earn rewards and provides an additional layer of consensus security"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/developing/osmosis-core/modules/spec-twap"},"Twap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The TWAP package is responsible for being able to serve TWAPs for every AMM pool.")))),(0,l.kt)("h2",{id:"module-accounts"},"Module Accounts"),(0,l.kt)("p",null,"All modules have their own module account. Think of this as a wallet that can only be controlled by that module. Here are a few with their respective wallet addresses and permissions:"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("code",null,"Name")),(0,l.kt)("th",null,(0,l.kt)("code",null,"Address")),(0,l.kt)("th",null,(0,l.kt)("code",null,"Permissions"))))," ",(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"transfer"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1yl6hdjhmkf37639730gffanpzndzdpmhxy9ep3"},"osmo1yl6hdjhmkf37639730gffanpzndzdpmhxy9ep3"))),(0,l.kt)("td",null,"minter, burner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bonded_tokens_pool"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3aq6l09"},"osmo1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3aq6l09"))),(0,l.kt)("td",null,"burner, staking")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"not_bonded_tokens_pool"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1tygms3xhhs3yv487phx3dw4a95jn7t7lfqxwe3"},"osmo1tygms3xhhs3yv487phx3dw4a95jn7t7lfqxwe3"))),(0,l.kt)("td",null,"burner, staking")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"developer_vesting_unvested"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1vqy8rqqlydj9wkcyvct9zxl3hc4eqgu3d7hd9k"},"osmo1vqy8rqqlydj9wkcyvct9zxl3hc4eqgu3d7hd9k"))),(0,l.kt)("td",null,"minter")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"gov"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo10d07y265gmmuvt4z0w9aw880jnsr700jjeq4qp"},"osmo10d07y265gmmuvt4z0w9aw880jnsr700jjeq4qp"))),(0,l.kt)("td",null,"burner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"distribution"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1jv65s3grqf6v6jl3dp4t6c9t9rk99cd80yhvld"},"osmo1jv65s3grqf6v6jl3dp4t6c9t9rk99cd80yhvld"))),(0,l.kt)("td",null,"none")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lockup"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1njty28rqtpw6n59sjj4esw76enp4mg6g7cwrhc"},"osmo1njty28rqtpw6n59sjj4esw76enp4mg6g7cwrhc"))),(0,l.kt)("td",null,"minter, burner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"incentives"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1krxwf5e308jmclyhfd9u92kp369l083wequge6"},"osmo1krxwf5e308jmclyhfd9u92kp369l083wequge6"))),(0,l.kt)("td",null,"minter, burner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"gamm"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1c9y7crgg6y9pfkq0y8mqzknqz84c3etr0kpcvj"},"osmo1c9y7crgg6y9pfkq0y8mqzknqz84c3etr0kpcvj"))),(0,l.kt)("td",null,"minter, burner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mint"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1m3h30wlvsf8llruxtpukdvsy0km2kum8q25g3j"},"osmo1m3h30wlvsf8llruxtpukdvsy0km2kum8q25g3j"))),(0,l.kt)("td",null,"minter, burner")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"claim"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1m5dncvfv7lvpvycr23zja93fecun2kcv226glq"},"osmo1m5dncvfv7lvpvycr23zja93fecun2kcv226glq"))),(0,l.kt)("td",null,"minter")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"poolincentives"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo1upfuxznarpja3sywq0tzd2kktg9wv8mcc0rlm9"},"osmo1upfuxznarpja3sywq0tzd2kktg9wv8mcc0rlm9"))),(0,l.kt)("td",null,"none")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fee_collector"),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/account/osmo17xpfvakm2amg962yls6f84z3kell8c5lczssa0"},"osmo17xpfvakm2amg962yls6f84z3kell8c5lczssa0"))),(0,l.kt)("td",null,"none")))),(0,l.kt)("h2",{id:"module-flow"},"Module Flow"),(0,l.kt)("p",null,"While module functions can be called in many different orders, here is a basic flow of module commands to bring assets onto Osmosis and then add/remove liquidity:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"(IBC-Transfer) IBC Received"),(0,l.kt)("li",{parentName:"ol"},"(GAMM) Swap Exact Amount In"),(0,l.kt)("li",{parentName:"ol"},"(GAMM) Join Pool"),(0,l.kt)("li",{parentName:"ol"},"(lockup) Lock-tokens"),(0,l.kt)("li",{parentName:"ol"},"(superfluid) Calculate and delegate synthetic Osmo"),(0,l.kt)("li",{parentName:"ol"},"(lockup) Begin-unlock-tokens"),(0,l.kt)("li",{parentName:"ol"},"(GAMM) Exit Pool")))}p.isMDXComponent=!0}}]);