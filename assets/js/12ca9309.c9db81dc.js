"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[6748],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6958:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const i={},a="Contributing",s={unversionedId:"developing/osmosis-core/contributing",id:"developing/osmosis-core/contributing",title:"Contributing",description:"The following information provides a set of guidelines for contributing to the Osmo chain dev repo. Use your best judgment, and, if you see room for improvement, please propose changes to this document.",source:"@site/docs/developing/osmosis-core/contributing.md",sourceDirName:"developing/osmosis-core",slug:"/developing/osmosis-core/contributing",permalink:"/docs/developing/osmosis-core/contributing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developing/osmosis-core/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build and Test",permalink:"/docs/developing/osmosis-core/build"},next:{title:"Osmosis IDE Setup",permalink:"/docs/developing/osmosis-core/ide-guide"}},l={},u=[{value:"First steps",id:"first-steps",level:2},{value:"Proposing changes",id:"proposing-changes",level:2},{value:"Working with the SDK",id:"working-with-the-sdk",level:2},{value:"Updating dependencies for builds",id:"updating-dependencies-for-builds",level:3},{value:"Changing things in vendor for local builds / local testing",id:"changing-things-in-vendor-for-local-builds--local-testing",level:3},{value:"Branch structure of releases on v7, v6, v4",id:"branch-structure-of-releases-on-v7-v6-v4",level:3},{value:"How to build proto files. (rm -rf vendor/ &amp;&amp; make build-reproducible once docker is installed)",id:"how-to-build-proto-files-rm--rf-vendor--make-build-reproducible-once-docker-is-installed",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"The following information provides a set of guidelines for contributing to the Osmo chain dev repo. Use your best judgment, and, if you see room for improvement, please propose changes to this document."),(0,n.kt)("p",null,"The contributing guide for Osmosis explains the branching structure, how to use the SDK fork, how to make / test updates to SDK branches and how to create release notes."),(0,n.kt)("p",null,"Contributions come in the form of writing documentation, raising issues / PRs, and any other actions that help develop the Osmo protocol documentation."),(0,n.kt)("h2",{id:"first-steps"},"First steps"),(0,n.kt)("p",null,"The first step is to find an issue you want to fix. To identify issues we think are good for first-time contributors, we add the ",(0,n.kt)("strong",{parentName:"p"},"good first issue")," label."),(0,n.kt)("p",null,"If you have a feature request, please use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/feature-requests"},"feature-request repo")),(0,n.kt)("p",null,"Once you find an existing issue that you want to work on or if you have a new issue to create, continue below."),(0,n.kt)("h2",{id:"proposing-changes"},"Proposing changes"),(0,n.kt)("p",null,"To contribute a change proposal, use the following workflow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis"},"Fork the repository"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"Add an upstream")," so that you can update your fork.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone your fork to your computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a branch and name it appropriately.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Work on only one major change in one pull request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure all tests are passing locally.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Next, rinse and repeat the following:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Commit your changes. Write a simple, straightforward commit message. To learn more, see ",(0,n.kt)("a",{parentName:"li",href:"https://chris.beams.io/posts/git-commit/"},"How to Write a Git Commit Message"),"."),(0,n.kt)("li",{parentName:"ol"},"Push your changes to your remote fork."),(0,n.kt)("li",{parentName:"ol"},"Create a PR on the Osmo repository. There should be a PR template to help you do so."),(0,n.kt)("li",{parentName:"ol"},"Wait for your changes to be reviewed. If you are a maintainer, you can assign your PR to one or more reviewers. If you aren't a maintainer, one of the maintainers will assign a reviewer."),(0,n.kt)("li",{parentName:"ol"},"After you receive feedback from a reviewer, make the requested changes, commit them to your branch, and push them to your remote fork again."),(0,n.kt)("li",{parentName:"ol"},"Once approval is given, feel free to squash & merge!")))),(0,n.kt)("h2",{id:"working-with-the-sdk"},"Working with the SDK"),(0,n.kt)("h3",{id:"updating-dependencies-for-builds"},"Updating dependencies for builds"),(0,n.kt)("p",null,"Vendor is a folder that go automatically makes if you run go mod vendor, which contains the source code for all of your dependencies. Its often helpful for local debugging. In order to update it..."),(0,n.kt)("p",null,"Commit & push to the Cosmos-SDK fork in a new branch (see above steps for more details), and then you can grab the commit hash to do:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"go get github.com/osmosis-labs/cosmos-sdk@{my commit hash}")),(0,n.kt)("p",null,"You get something like:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"go get: github.com/osmosis-labs/cosmos-sdk@v0.33.2 updating to\n\tgithub.com/osmosis-labs/cosmos-sdk@v0.42.10-0.20210829064313-2c87644925da: parsing go.mod:\n\tmodule declares its path as: github.com/cosmos/cosmos-sdk\n\t        but was required as: github.com/osmosis-labs/cosmos-sdk")),(0,n.kt)("p",null,"Then you can copy paste the ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.42.10-0.20210829064313-2c87644925da")," part and replace the corresponding section of go.mod"),(0,n.kt)("p",null,"Then do ",(0,n.kt)("inlineCode",{parentName:"p"},"go mod vendor"),", and you're set."),(0,n.kt)("h3",{id:"changing-things-in-vendor-for-local-builds--local-testing"},"Changing things in vendor for local builds / local testing"),(0,n.kt)("p",null,"In whichever folder you're running benchmarks for, you can test via:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"go test -benchmem -bench DistributionLogicLarge -cpuprofile cpu.out -test.timeout 30m -v")),(0,n.kt)("p",null,"Then once that is done, and you get the short benchmark results out, you can do:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"go tool pprof -http localhost:8080 cpu.out")),(0,n.kt)("p",null,"and take look at the graphviz output!"),(0,n.kt)("p",null,"Note that if you are doing things that are low-level / small, the overhead of cpuprofile may mess with cache effects, etc. However for things like epoch code, or relatively large txs, this totally works!"),(0,n.kt)("h3",{id:"branch-structure-of-releases-on-v7-v6-v4"},"Branch structure of releases on v7, v6, v4"),(0,n.kt)("p",null,"People still need those versions for querying old versions of the chain, and syncing a node from genesis, so we keep these updated!"),(0,n.kt)("p",null,'For v6.x, and v4.x, most PRs to them should go to main and get a "backport" label. We typically use mergify for backporting. Backporting often takes place after a PR has been merged to main'),(0,n.kt)("h3",{id:"how-to-build-proto-files-rm--rf-vendor--make-build-reproducible-once-docker-is-installed"},"How to build proto files. (rm -rf vendor/ && make build-reproducible once docker is installed)"),(0,n.kt)("p",null,"You can do rm -rf vendor and make build-reproducible to redownload all dependencies - this should pull the latest docker image of Osmo. You should also make sure to do make proto-all to auto-generate your protobuf files. Makes ure you have docker installed. If you get something like ",(0,n.kt)("inlineCode",{parentName:"p"},"W0503 22:16:30.068560 158 services.go:38] No HttpRule found for method: Msg.CreateBalancerPool")," feel free to ignore that. Make sure to also do make all to run all the linting tests before you commit and push, as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"gofmt"),"-ing the file you've modified or added to make sure everything still abides by the standards."))}c.isMDXComponent=!0}}]);