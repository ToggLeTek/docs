"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[4241],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(i),h=a,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return i?o.createElement(g,s(s({ref:t},d),{},{components:i})):o.createElement(g,s({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,s=new Array(n);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<n;c++)s[c]=i[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6356:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var o=i(7462),a=(i(7294),i(3905));const n={},s="Learn More",r={unversionedId:"overview/osmosis-app/learn-more",id:"overview/osmosis-app/learn-more",title:"Learn More",description:"Liquidity Bootstrapping Pools",source:"@site/docs/overview/osmosis-app/learn-more.md",sourceDirName:"overview/osmosis-app",slug:"/overview/osmosis-app/learn-more",permalink:"/docs/overview/osmosis-app/learn-more",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/osmosis-app/learn-more.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/overview/osmosis-app/"},next:{title:"Glossary",permalink:"/docs/overview/terminology"}},l={},c=[{value:"Liquidity Bootstrapping Pools",id:"liquidity-bootstrapping-pools",level:2},{value:"Bonded Liquidity Gauges",id:"bonded-liquidity-gauges",level:2},{value:"Allocation Points",id:"allocation-points",level:2},{value:"External Incentives",id:"external-incentives",level:2},{value:"Fees",id:"fees",level:2},{value:"TX Fees",id:"tx-fees",level:3},{value:"Swap Fees",id:"swap-fees",level:3},{value:"Exit Fees",id:"exit-fees",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"learn-more"},"Learn More"),(0,a.kt)("h2",{id:"liquidity-bootstrapping-pools"},"Liquidity Bootstrapping Pools"),(0,a.kt)("p",null,"Osmosis offers a convenient design for Liquidity Bootstrapping Pools (LBPs), a special type of AMM designed for token sales. New protocols can use Osmosis\u2019 LBP feature to distribute tokens and achieve initial price discovery."),(0,a.kt)("p",null,"LBPs differ from other liquidity pools in terms of the ratio of assets within the pool. In LBPs, the ratio adjusts over time. LBPs involve an initial ratio, a target ratio, and an interval of time over which the ratio adjusts. These weights are customizable before launch. One can create an LBP with an initial ratio of 90-10, with the goal of reaching 50-50 over a month. The ratio continues to gradually adjust until the weights are equal within the pool. Like traditional LPs, the prices of assets within the pool is based on the ratio at the time of trade."),(0,a.kt)("p",null,"After the LBP period ends or the final ratio is reached, the pool converts into a traditional LP pool."),(0,a.kt)("p",null,"LBPs facilitate price discovery by demonstrating the acceptable market price of an asset. Ideally, LBPs will have very few buyers at the time of launch. The price slowly declines until traders are willing to step in and buy the asset. Arbitrage maintains this price for the remainder of the LBP. The process is shown by the blue line below. The price declines as the ratios adjust. Buyers step in until the acceptable price is again reached."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(8789).Z,width:"462",height:"360"})),(0,a.kt)("p",null,"Choosing the correct parameters is very important to price discovery for an LBP. If the initial price is too low, the asset will get bought up as soon as the pool is launched. It is also possible that the targeted final price is too high, creating little demand for the asset. The green line above shows this scenario. A buyer places a large order, but afterwards the price continues to decline as no additional buyers are willing to bite."),(0,a.kt)("p",null,"Osmosis aims to provide an intuitive, easy-to-use LBP design to give protocols the best chance of a successful sale. The LBP feature facilitates initial price discovery for tokens and allows protocols to fairly distribute tokens to project stakeholders."),(0,a.kt)("h2",{id:"bonded-liquidity-gauges"},"Bonded Liquidity Gauges"),(0,a.kt)("p",null,"Bonded Liquidity Gauges are mechanisms for distributing liquidity incentives to LP tokens that have been bonded for a minimum amount of time. 45% of the daily issuance of OSMO goes towards these liquidity incentives."),(0,a.kt)("p",null,"For instance, a Pool 1 LP share, 1-week gauge would distribute rewards to users who have bonded Pool1 LP tokens for one week or longer. The amount that each user receives is in proportion to the number of their bonded tokens."),(0,a.kt)("p",null,"A bonded LP position can be eligible for multiple gauges. Qualifications for a gauge only involve a minimum bonding time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tux, the Linux mascot",src:i(3447).Z,width:"1400",height:"800"})),(0,a.kt)("p",null,"The rewards earned from liquidity mining are not subject to unbonding. Rewards are liquid and transferable immediately. Only the principal bonded shares are subject to the unbonding period."),(0,a.kt)("h2",{id:"allocation-points"},"Allocation Points"),(0,a.kt)("p",null,"Not all pools have incentivized gauges. In Osmosis, staked OSMO holders choose which pools to incentivize via on-chain governance proposals. To incentivize a pool, governance can assign \u201callocation points\u201d to specific gauges. At the end of every daily epoch, 45% of the newly released OSMO (the portions designated for liquidity incentives) is distributed proportionally to the allocation points that each gauge has. The percent of the OSMO liquidity rewards that each gauge receives is calculated as its number of points divided by the total number of allocation points."),(0,a.kt)("p",null,"Take, for example, a scenario in which three gauges are incentivized:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gauge #3 \u2013 10 allocation points"),(0,a.kt)("li",{parentName:"ul"},"Gauge #4 \u2013 5 allocation points"),(0,a.kt)("li",{parentName:"ul"},"Gauge #7 \u2013 5 allocation points")),(0,a.kt)("p",null,"20 total allocation points are assigned in this scenario. At the end of the daily epochs, Gauge #3 will receive 50% (10 out of 20) of the liquidity incentives minted. Gauges #4 and #7 will receive 25% each."),(0,a.kt)("p",null,"Governance can pass an UpdatePoolIncentives proposal to edit the existing allocation points of any gauge. By setting a gauge\u2019s allocation to zero, it can remove it from the list of incentivized gauges entirely. Proposals can also set the allocation points of new gauges. When a new gauge is added, the total number of allocation points increases, thus diluting all the existing incentivized gauges.\nGauge #0 is a special gauge that sends its incentives directly to the chain community pool. Assigning allocation points to gauge #0 allows governance to save some of the current liquidity mining incentives to be spent at a later time."),(0,a.kt)("p",null,"At genesis, the only gauge that will be incentivized is Gauge #0, (the community pool gauge). However, a governance proposal can come immediately after launch to choose which gauges/pools to incentivize. Governance voting period at launch is only 3 days at launch, so liquidity incentives may be activated as soon as 3 days after genesis."),(0,a.kt)("h2",{id:"external-incentives"},"External Incentives"),(0,a.kt)("p",null,"Osmosis not only allows the community to add incentives to gauges. Anyone can deposit tokens into a gauge to be distributed. This feature allows outside parties to augment Osmosis\u2019 own liquidity incentive program."),(0,a.kt)("p",null,"For example, there may be an ATOM< >FOOCOIN pool that has a one-day gauge incentivized by governance OSMO rewards. However, the Foo Foundation may also choose to add additional incentives to the one-day gauge or even add incentives to a new gauge (such as one-week gauge)."),(0,a.kt)("p",null,"These external incentive providers can also set up long-lasting incentive programs that distribute rewards over an extended time period. For example, the Foo Foundation can deposit 30,000 Foocoins to be distributed over a one-month liquidity program. The program will automatically distribute 1000 Foocoins per day to the gauge."),(0,a.kt)("h2",{id:"fees"},"Fees"),(0,a.kt)("p",null,"In addition to liquidity mining, Osmosis provides three sources of revenue: transaction fees, swap fees, and exit fees."),(0,a.kt)("h3",{id:"tx-fees"},"TX Fees"),(0,a.kt)("p",null,"Transaction fees are paid by any user to post a transaction on the chain. The fee amount is determined by the computation and storage costs of the transaction. Minimum gas costs are determined by the proposer of a block in which the transaction is included. This transaction fee is distributed to OSMO stakers on the network.\nValidators can choose which assets to accept for fees in the blocks that they propose. This optionality is a unique feature of Osmosis."),(0,a.kt)("h3",{id:"swap-fees"},"Swap Fees"),(0,a.kt)("p",null,"Swap fees are fees charged for making a swap in an LP pool. The fee is paid by the trader in the form of the input asset. Pool creators specify the swap fee when establishing the pool. The total fee for a particular trade is calculated as percentage of swap size. Fees are added to the pool, effectively resulting in pro-rata distribution to LPs proportional to their share of the total pool."),(0,a.kt)("h3",{id:"exit-fees"},"Exit Fees"),(0,a.kt)("p",null,"Osmosis LPs pay a small fee when withdrawing from the pool. Similar to swap fees, exit fees per pool are set by the pool creator.\nExit fees are paid in LP tokens. Users withdraw their tokens, minus a percent for the exit fee. These LP shares are burned, resulting in pro-rata distribution to remaining LPs."))}p.isMDXComponent=!0},3447:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/gauges-b912b8e4a9193d4ccc3d10e76645c45d.png"},8789:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/lbp-d36bfc21292c77ebc05f0f7ef077f999.png"}}]);