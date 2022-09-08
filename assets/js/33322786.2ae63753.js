"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[404],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var s=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),d=n,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return o?s.createElement(k,a(a({ref:t},u),{},{components:o})):s.createElement(k,a({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6833:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=o(7462),n=(o(7294),o(3905));const r={},a="Joining Mainnet",i={unversionedId:"developing/network/join-mainnet",id:"developing/network/join-mainnet",title:"Joining Mainnet",description:"Install Osmosis Binary",source:"@site/docs/developing/network/join-mainnet.md",sourceDirName:"developing/network",slug:"/developing/network/join-mainnet",permalink:"/docs/developing/network/join-mainnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developing/network/join-mainnet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Joining Edgenet",permalink:"/docs/developing/network/join-edgenet"},next:{title:"Joining Testnet",permalink:"/docs/developing/network/join-testnet"}},l={},c=[{value:"Install Osmosis Binary",id:"install-osmosis-binary",level:2},{value:"Initialize Osmosis Node",id:"initialize-osmosis-node",level:2},{value:"Latest Version (V10) Upgrade Info",id:"latest-version-v10-upgrade-info",level:2},{value:"Go Requirement",id:"go-requirement",level:3},{value:"Memory Requirements",id:"memory-requirements",level:3},{value:"Set Up Cosmovisor",id:"set-up-cosmovisor",level:3},{value:"Download Chain Data",id:"download-chain-data",level:2},{value:"Set Up Osmosis Service",id:"set-up-osmosis-service",level:2},{value:"Start Osmosis Service",id:"start-osmosis-service",level:2},{value:"Update Cosmovisor to V10",id:"update-cosmovisor-to-v10",level:2}],u={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"joining-mainnet"},"Joining Mainnet"),(0,n.kt)("h2",{id:"install-osmosis-binary"},"Install Osmosis Binary"),(0,n.kt)("p",null,"Make sure you have ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/developing/tools/osmosisd.html#minimum-requirements"},"installed the Osmosis Binary (CLI)")," prior to following the below instructions."),(0,n.kt)("p",null,"You may also ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/developing/tools/osmosisd.html#quick-start"},"use the Osmosis installer")," if you want everything to be done automatically."),(0,n.kt)("h2",{id:"initialize-osmosis-node"},"Initialize Osmosis Node"),(0,n.kt)("p",null,"Use osmosisd to initialize your node (replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"NODE_NAME")," with a name of your choosing):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd init NODE_NAME\n")),(0,n.kt)("p",null,"Download and place the genesis file in the osmosis config folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wget -O ~/.osmosisd/config/genesis.json https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json\n")),(0,n.kt)("h2",{id:"latest-version-v10-upgrade-info"},"Latest Version (V10) Upgrade Info"),(0,n.kt)("h3",{id:"go-requirement"},"Go Requirement"),(0,n.kt)("p",null,"You will need to be running go1.18 for this version of Osmosis. You can check if you are running go1.18 with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{.sh}"},"go version\n")),(0,n.kt)("p",null,"If this does not say go1.18, you need to upgrade/downgrade. One of the many ways to upgrade/downgrade to/from go 1.18 on linux is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{.sh}"},"wget -q -O - https://git.io/vQhTU | bash -s -- --remove\nwget -q -O - https://git.io/vQhTU | bash -s -- --version 1.18\n")),(0,n.kt)("h3",{id:"memory-requirements"},"Memory Requirements"),(0,n.kt)("p",null,"As always, we recommend having 64GB of memory. "),(0,n.kt)("h3",{id:"set-up-cosmovisor"},"Set Up Cosmovisor"),(0,n.kt)("p",null,"Set up cosmovisor to ensure any future upgrades happen flawlessly. To install Cosmovisor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0\n")),(0,n.kt)("p",null,"Create the required directories:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.osmosisd/cosmovisor\nmkdir -p ~/.osmosisd/cosmovisor/genesis\nmkdir -p ~/.osmosisd/cosmovisor/genesis/bin\nmkdir -p ~/.osmosisd/cosmovisor/upgrades\n")),(0,n.kt)("p",null,"Set the environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'echo "# Setup Cosmovisor" >> ~/.profile\necho "export DAEMON_NAME=osmosisd" >> ~/.profile\necho "export DAEMON_HOME=$HOME/.osmosisd" >> ~/.profile\necho "export DAEMON_ALLOW_DOWNLOAD_BINARIES=false" >> ~/.profile\necho "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.profile\necho "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.profile\necho "export UNSAFE_SKIP_BACKUP=true" >> ~/.profile\nsource ~/.profile\n')),(0,n.kt)("p",null,"You may leave out ",(0,n.kt)("inlineCode",{parentName:"p"},"UNSAFE_SKIP_BACKUP=true"),", however the backup takes a decent amount of time and public snapshots of old states are available."),(0,n.kt)("p",null,"Copy the current osmosisd binary into the cosmovisor/genesis folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp $GOPATH/bin/osmosisd ~/.osmosisd/cosmovisor/genesis/bin\n")),(0,n.kt)("p",null,"To check your work, ensure the version of cosmovisor and osmosisd are the same:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor version\nosmosisd version\n")),(0,n.kt)("h2",{id:"download-chain-data"},"Download Chain Data"),(0,n.kt)("p",null,"Download the latest chain data from a snapshot provider. In the following commands, I will use ",(0,n.kt)("a",{href:"https://quicksync.io/networks/osmosis.html",target:"_blank"},(0,n.kt)("a",{parentName:"p",href:"https://quicksync.io/networks/osmosis.html"},"https://quicksync.io/networks/osmosis.html"))," to download the chain data. You may choose the default, pruned, or archive based on your needs."),(0,n.kt)("p",null,"Download liblz4-tool to handle the compressed file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install wget liblz4-tool aria2 -y\n")),(0,n.kt)("p",null,"Download the chain data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the tab to the desired node type (Default, Pruned, or Archive)"),(0,n.kt)("li",{parentName:"ul"},"Select the tab to the region closest to you (Netherlands, Singapore, or San Francisco) and copy the commands")),(0,n.kt)("p",null,'::::::: tabs :options="{ useUrlFragment: false }"'),(0,n.kt)("p",null,':::::: tab Default\n::::: tabs :options="{ useUrlFragment: false }"'),(0,n.kt)("p",null,":::: tab Netherlands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-default")|select (.mirror=="Netherlands")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::: tab Singapore"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-default")|select (.mirror=="Singapore")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::: tab SanFrancisco"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-default")|select (.mirror=="SanFrancisco")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::::\n::::::"),(0,n.kt)("p",null,':::::: tab Pruned\n::::: tabs :options="{ useUrlFragment: false }"'),(0,n.kt)("p",null,":::: tab Netherlands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-pruned")|select (.mirror=="Netherlands")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::: tab Singapore"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-pruned")|select (.mirror=="Singapore")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::: tab SanFrancisco"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-pruned")|select (.mirror=="SanFrancisco")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::::\n::::::"),(0,n.kt)("p",null,':::::: tab Archive\n::::: tabs :options="{ useUrlFragment: false }"'),(0,n.kt)("p",null,":::: tab Netherlands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'URL=`curl https://quicksync.io/osmosis.json|jq -r \'.[] |select(.file=="osmosis-1-archive")|select (.mirror=="Netherlands")|.url\'`\ncd $HOME/.osmosisd/\nwget -O - $URL | lz4 -d | tar -xvf -\n')),(0,n.kt)("p",null,"::::"),(0,n.kt)("p",null,":::::\n::::::"),(0,n.kt)("p",null,":::::::"),(0,n.kt)("h2",{id:"set-up-osmosis-service"},"Set Up Osmosis Service"),(0,n.kt)("p",null,"Set up a service to allow cosmovisor to run in the background as well as restart automatically if it runs into any problems:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'echo "[Unit]\nDescription=Cosmovisor daemon\nAfter=network-online.target\n[Service]\nEnvironment="DAEMON_NAME=osmosisd"\nEnvironment="DAEMON_HOME=${HOME}/.osmosisd"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\nEnvironment="DAEMON_LOG_BUFFER_SIZE=512"\nEnvironment="UNSAFE_SKIP_BACKUP=true"\nUser=$USER\nExecStart=${HOME}/go/bin/cosmovisor start\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\nLimitNPROC=infinity\n[Install]\nWantedBy=multi-user.target\n" >cosmovisor.service\n')),(0,n.kt)("p",null,"Move this new file to the systemd directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv cosmovisor.service /lib/systemd/system/cosmovisor.service\n")),(0,n.kt)("h2",{id:"start-osmosis-service"},"Start Osmosis Service"),(0,n.kt)("p",null,"Reload and start the service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl restart systemd-journald\nsudo systemctl start cosmovisor\n")),(0,n.kt)("p",null,"Check the status of the service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status cosmovisor\n")),(0,n.kt)("p",null,"To see live logs of the service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u cosmovisor -f\n")),(0,n.kt)("h2",{id:"update-cosmovisor-to-v10"},"Update Cosmovisor to V10"),(0,n.kt)("p",null,"If you want osmosisd to upgrade automatically from V9 to V10, do the following steps prior to the upgrade height (4713065):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-{.sh}"},"mkdir -p ~/.osmosisd/cosmovisor/upgrades/v9/bin\ncd $HOME/osmosis\ngit pull\ngit checkout v10.0.0\nmake build\ncp build/osmosisd ~/.osmosisd/cosmovisor/upgrades/v9/bin\n")))}m.isMDXComponent=!0}}]);