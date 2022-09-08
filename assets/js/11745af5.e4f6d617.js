"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[8725],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4156:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={},s="Cosmwasm & Beaker on testnet",l={unversionedId:"developing/Cosmwasm Smart Contracts/cosmwasm-testnet",id:"developing/Cosmwasm Smart Contracts/cosmwasm-testnet",title:"Cosmwasm & Beaker on testnet",description:"Deploying Cosmwasm Contracts to the testnet with Beaker",source:"@site/docs/developing/Cosmwasm Smart Contracts/cosmwasm-testnet.md",sourceDirName:"developing/Cosmwasm Smart Contracts",slug:"/developing/Cosmwasm Smart Contracts/cosmwasm-testnet",permalink:"/docs/developing/Cosmwasm Smart Contracts/cosmwasm-testnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developing/Cosmwasm Smart Contracts/cosmwasm-testnet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CosmWasm with Testnet",permalink:"/docs/developing/Cosmwasm Smart Contracts/cosmwasm-testnet-manual"},next:{title:"Verifying Smart Contracts",permalink:"/docs/developing/Cosmwasm Smart Contracts/cosmwasm-verify-contract"}},i={},p=[{value:"Deploying Cosmwasm Contracts to the testnet with Beaker",id:"deploying-cosmwasm-contracts-to-the-testnet-with-beaker",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Install Beaker",id:"install-beaker",level:3},{value:"Scaffolding your new dapp project",id:"scaffolding-your-new-dapp-project",level:3},{value:"Your first CosmWasm contract with Beaker",id:"your-first-cosmwasm-contract-with-beaker",level:3},{value:"Deploy contract on permisionless network",id:"deploy-contract-on-permisionless-network",level:3},{value:"Deploy with an admin",id:"deploy-with-an-admin",level:3},{value:"Deploy contract via governance",id:"deploy-contract-via-governance",level:3},{value:"Build contract",id:"build-contract",level:3},{value:"Submit proposal",id:"submit-proposal",level:3},{value:"Query proposal",id:"query-proposal",level:3},{value:"Proposal period",id:"proposal-period",level:4},{value:"Voting on proposal on testnet",id:"voting-on-proposal-on-testnet",level:2},{value:"Signers",id:"signers",level:3},{value:"Using the OS keyring",id:"using-the-os-keyring",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmwasm--beaker-on-testnet"},"Cosmwasm & Beaker on testnet"),(0,a.kt)("h2",{id:"deploying-cosmwasm-contracts-to-the-testnet-with-beaker"},"Deploying Cosmwasm Contracts to the testnet with Beaker"),(0,a.kt)("p",null,"The following guide will show you how to create and deploy a Cosmwasm smart contract to the Osmosis testnet. The testnet is permisonless by default to allow developers to test their contracts on a live environment. The Osmosis mainnet is permissioned meaning that you will need to submit a governance proposal in order to deploy to it. "),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Cargo")," ")),(0,a.kt)("h3",{id:"install-beaker"},"Install Beaker"),(0,a.kt)("p",null,"Beaker is available via ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"cargo")," which is a rust toolchain. Once cargo is ready on your machine, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install beaker\n")),(0,a.kt)("h3",{id:"scaffolding-your-new-dapp-project"},"Scaffolding your new dapp project"),(0,a.kt)("p",null,"In the directory you want your project to reside, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"beaker new counter-dapp\n")),(0,a.kt)("p",null,"For detailed information about Beaker ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker/edit/main/README.md"},"click here"),"."),(0,a.kt)("h3",{id:"your-first-cosmwasm-contract-with-beaker"},"Your first CosmWasm contract with Beaker"),(0,a.kt)("p",null,"After that we can create new contract (the command uses template from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-template"},"cw-template"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd counter-dapp\nbeaker wasm new counter\n")),(0,a.kt)("h3",{id:"deploy-contract-on-permisionless-network"},"Deploy contract on permisionless network"),(0,a.kt)("p",null,"The testnet is permisionless by default in order to allow developers to easyly deploy contracts. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"beaker wasm deploy counter --signer-account test1 --network testnet --no-wasm-opt --raw '{ \"count\": 0 }' --label 'My first Beaker Contract'\n")),(0,a.kt)("p",null,"Note how we added ",(0,a.kt)("inlineCode",{parentName:"p"},"--network testnet")," to tell beaker to deploy to the testnet Osmosis chain. "),(0,a.kt)("h3",{id:"deploy-with-an-admin"},"Deploy with an admin"),(0,a.kt)("p",null,"In this example we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"osmo1nyphwl8p5yx6fxzevjwqunsfqpcxukmtk8t60m")," which is the address from the beaker test1 account as seen in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker/blob/main/packages/cli/src/framework/config.rs"},"config.rs")," file. "),(0,a.kt)("p",null,"::: warning\nPlease note that account test1 is publicaly available as documented ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker/blob/main/docs/config/global.md"},"here")," and only used for development purposes. Beaker will support local keyring in about 1-2 weeks.\n:::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"beaker wasm deploy counter --signer-account test1 --admin osmo1nyphwl8p5yx6fxzevjwqunsfqpcxukmtk8t60m --network testnet --no-wasm-opt --raw '{ \"count\": 0 }' --label 'My first Beaker Contract' \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"deploy-counter-admin",src:o(959).Z,width:"2290",height:"1218"}),"  "),(0,a.kt)("h3",{id:"deploy-contract-via-governance"},"Deploy contract via governance"),(0,a.kt)("p",null,"We can also deploy the contract via governance on the testnet before going to mainnet. There are a couple of steps as described in the manual process via CLI",(0,a.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/developing/dapps/get_started/submit_wasm_proposal.html"},"here"),", more details also available on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md"},"official CosmWasm Docs"),". "),(0,a.kt)("h3",{id:"build-contract"},"Build contract"),(0,a.kt)("p",null,"This is required to create the compiled.wasm file that will be uploaded to the block chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"beaker wasm build\n")),(0,a.kt)("h3",{id:"submit-proposal"},"Submit proposal"),(0,a.kt)("p",null,"The proposal can be submitted with all the meta data in a yml file or toml file. Example file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"touch prop.yml\nnano prop.yml\n")),(0,a.kt)("p",null,"Paste the following template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"title: Proposal to allow DappName to be enabled in Osmosis\ndescription: |\n            A lengthy proposal description\n            goes here  \n            we expect this to be many lines...\ndeposit: 500000000uosmo\ncode:\n    repo:   https://github.com/osmosis-labs/beaker/\n    rust_flags: -C link-arg=-s\n    roptimizer: workspace-optimizer:0.12.6\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"beaker wasm proposal store-code --proposal prop.yml --signer-account test1 --network testnet counter --gas 25000000uosmo --gas-limit 25000000\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"store-proposal",src:o(9190).Z,width:"1660",height:"716"}),"  "),(0,a.kt)("h3",{id:"query-proposal"},"Query proposal"),(0,a.kt)("p",null,"There are four ways to query the proposal results"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Beaker command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"beaker wasm proposal query store-code --network testnet counter\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Osmosisd ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"osmosisd query gov tally 196\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Mintstan testnet explorer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://testnet.mintscan.io/osmosis-testnet/proposals/196\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"LCD Proposal endpoint")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://lcd-test.osmosis.zone/cosmos/gov/v1beta1/proposals/196\n")),(0,a.kt)("p",null,"Note how the min_deposit was ",(0,a.kt)("inlineCode",{parentName:"p"},"500000000uosmo")," that's why our prop.yml had ",(0,a.kt)("inlineCode",{parentName:"p"},"500000000uosmo"),". If the deposit requirement is not met, then additional funds need to be send to the proposal. "),(0,a.kt)("h4",{id:"proposal-period"},"Proposal period"),(0,a.kt)("p",null,"On the testnet the voting period is very short to allow developers to move quickly with their testing, as you can see in this case it's ",(0,a.kt)("inlineCode",{parentName:"p"},"3 minutes"),". This means you must vote within the next 3 minutes for your proposal to pass. In mainet the voting period is usually several days. If you take longer than 3 minutes, then you will get an error letting you know that the voting period has passed. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \u251c\u2500\u2500 voting_start_time: 2022-07-06T18:45:06Z\n    \u2514\u2500\u2500 voting_end_time: 2022-07-06T18:48:06Z\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"store-proposal",src:o(1326).Z,width:"1948",height:"1974"}),"  "),(0,a.kt)("h2",{id:"voting-on-proposal-on-testnet"},"Voting on proposal on testnet"),(0,a.kt)("p",null,"Run the following command to vote from beaker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"beaker wasm proposal vote --option yes counter --signer-account test1 --network testnet\n")),(0,a.kt)("p",null,"Even though the testnet is configured as permisionless, it's important to undertanding the voting process. We need validators to vote  for your proposal in order to reach the quorum. We created a simple utility in our faucet that will allow you to request a validator with enough voting power to vote for your proposal as well. "),(0,a.kt)("p",null,"Please visit: "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://faucet.osmosis.zone/#/contracts"},"https://faucet.osmosis.zone/#/contracts")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"store-proposal",src:o(8169).Z,width:"1880",height:"1382"})," "),(0,a.kt)("p",null,"Great! Your proposal should have passed now!"),(0,a.kt)("h3",{id:"signers"},"Signers"),(0,a.kt)("p",null,"In the examples above we used the test1 account to sign transactions. However, Bekaer supports 3 options for signing transactions as shown on the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker#Signers"},"README"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--signer-account")," input of this option refer to the accounts defined in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/beaker/blob/main/docs/config/global.md"},"config file"),", which is not encrypted, so it should be used only for testing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--signer-mnemonic")," input of this option is the raw mnemonic string to construct a signer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--signer-private-key")," input of this option is the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"--signer-mnemonic")," except it expects base64 encoded private key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--signer-keyring")," use the OS secure store as backend to securely store your key. To manage them, you can find more information ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/beaker/blob/main/docs/commands/beaker_key.md"},"here"),".")),(0,a.kt)("h3",{id:"using-the-os-keyring"},"Using the OS keyring"),(0,a.kt)("p",null,"Let's dive a little deeper on how to use the OS keyring in order to sing a transaction with your OS keyring. "),(0,a.kt)("p",null,"First of all you can import an account by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"beaker key set account1 'MNEMONIC'\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"beaker key set account1 'cable often loyal ozone master disorder gospel brief pool stairs lion sport urge copy myth exit toddler urban what live column deal vehicle hip'\n")),(0,a.kt)("p",null,"Please note that Beaker currently supports 24 words mnemonics only. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/beaker/issues/88"}," 12 will be supported"),". "),(0,a.kt)("p",null,"This created a new account called ",(0,a.kt)("inlineCode",{parentName:"p"},"account1"),". On Macs you are able to see this account in the keychain under the name of ",(0,a.kt)("inlineCode",{parentName:"p"},"beaker")),(0,a.kt)("p",null,"This document is constantly being updated and improved, please let us know on Github if you have any questions!"))}m.isMDXComponent=!0},959:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/beaker-admin-58239b88ded5e7db864def61bafe849b.png"},8169:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/faucet-vote-8a35a04310791c04c8064af8e5b291d2.png"},1326:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proposal-query-afb3ff7c6a1f61cea37c222aaa09d8c3.png"},9190:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/store-prop-5ff9fa1a33c2486903949f05e188a6d5.png"}}]);