(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{534:function(e,t,o){"use strict";o.r(t);var a=o(8),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"liquidity-mining-incentives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#liquidity-mining-incentives"}},[e._v("#")]),e._v(" Liquidity Mining Incentives")]),e._v(" "),o("p",[e._v("There are many ways pools on Osmosis can reward liquidity mining incentives. One way is through (internal) Osmosis Liquidity Mining; Osmosis allocates 45% of its inflation to incentivize users to bond their liquidity on Osmosis. In addition, Osmosis allows for the permissionless creation of (external) liquidity mining gauges, allowing projects to add thier own rewards to further incentivize users to provide liquidity into a pool.\nTo learn more about the Liquidity Mining modules, see: "),o("a",{attrs:{href:"https://docs.osmosis.zone/developing/osmosis-core/modules/spec-incentives.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Docs: Develop > Chain Development > Modules > Incentives"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"external-incentives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#external-incentives"}},[e._v("#")]),e._v(" External Incentives")]),e._v(" "),o("p",[e._v("External Incentives are an effective way to incentivize users to provide liquidity, as well as a great way to have the pool be considered for onboarding into the set of pools receiving (internal) Osmosis Liquidity Mining incentives. Creating an incentive gauge is permissionless, so anyone can deposit tokens into a gauge to be distributed as bonding incentives. This feature allows outside parties to augment Osmosis’ own liquidity incentive program. To learn more, see: "),o("a",{attrs:{href:"https://docs.osmosis.zone/overview/osmosis-app/learn-more.html#external-incentives",target:"_blank",rel:"noopener noreferrer"}},[e._v("External Incentives"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("It is possible to add incentives to any combination of 1-day, 7-day, and 14-day gauges. Incentives allocated to the 1-day gauge will be split among all three gauges. Incentives allocated to the 7-day gauge will be split among only the 7-day and 14-day gauges, but not to the 1-day gauge. Incentives allocated to the 14-day gauge will only be distributed to the 14-day gauge.")]),e._v(" "),o("p",[e._v("Currently, the only way to create an external incentive gauge is to run the "),o("a",{attrs:{href:"https://docs.osmosis.zone/developing/osmosis-core/modules/spec-incentives.html#create-gauge",target:"_blank",rel:"noopener noreferrer"}},[e._v("create-gauge command"),o("OutboundLink")],1),e._v(" using CLI.")]),e._v(" "),o("p",[e._v("Once external incentives have been added, note the gauge Id numbers and follow the procedure to "),o("a",{attrs:{href:"https://docs.osmosis.zone/integrate/frontend.html#how-to-add-external-incentive-gauges-onto-the-osmosis-pools-page",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add External Incentive Gauges onto the Osmosis Zone Pools page"),o("OutboundLink")],1),e._v(" to request to show the gauges on the "),o("a",{attrs:{href:"https://app.osmosis.zone/pools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Zone Pools page"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"external-incentive-matching-program"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#external-incentive-matching-program"}},[e._v("#")]),e._v(" External Incentive Matching Program")]),e._v(" "),o("p",[e._v("To incentivize projects to add external incentives, Osmosis governance voted to add the External Incentive Matching program. If on-chain governance approves to match external incentives for a pool, the incentives adjustment process measures the total dollar value of external incentives that have been added to the pool, matches the value in OSMO tokens, and releases that OSMO as extra liquidity mining rewards to all bonding gauges of the pool.")]),e._v(" "),o("ul",[o("li",[e._v("See "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/47",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Proposal #47: Add Incentive Matching to Prop 13 Model"),o("OutboundLink")],1),e._v(" on Mintscan.")])]),e._v(" "),o("p",[e._v("This has the potential to effectively double the incentive of a project's external incentives, although there are some restrictions to this:")]),e._v(" "),o("ul",[o("li",[e._v("There is an OSMO bias that can down-scale the value of the OSMO matching. If the pool is an OSMO pool, (e.g., FOO/OSMO,) then the value of the matching is 100%. But, if the pool is a non-OSMO pool, (e.g., FOO/ATOM,) then the value of the matching is scaled down to 50% of the value of the external incentives (subject to change if the OSMO bias changes).\n"),o("ul",[o("li",[e._v("See: "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/264",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Proposal #264: External Incentive Matching reduction within non-OSMO categories"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[e._v("There is also a cap on the value of the matching, which is no more than double the value of the standard OSMO incentives that the pool would receive from internal Osmosis Liquidity Mining.\n"),o("ul",[o("li",[e._v("See: "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Proposal #133: Incentive Matching Fee Based and 1:1 Caps"),o("OutboundLink")],1)])])])]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/178",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Proposal #178: Match External Incentives for SWTH/OSMO"),o("OutboundLink")],1),e._v(" for an example of a successful proposal to match external incentives to a new pool. As always, don't forget to precede on-chain proposals with a forum post to give an opportunity for the community to provide feedback. See "),o("a",{attrs:{href:"https://commonwealth.im/osmosis/discussion/4025-signalling-proposal-to-match-osmo-rewards-to-upcoming-swthosmo-pool",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commonwealth post: Signalling proposal to match OSMO rewards to upcoming SWTH/OSMO pool"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"osmosis-liquidity-mining"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#osmosis-liquidity-mining"}},[e._v("#")]),e._v(" Osmosis Liquidity Mining")]),e._v(" "),o("p",[e._v("Bonded Liquidity Gauges are mechanisms for distributing liquidity incentives to LP tokens that have been bonded for a minimum amount of time. 45% of the daily issuance of OSMO goes towards these liquidity incentives. When a new pool is onboarded to receive (internal) Osmosis Liquidity Mining incentives, it will be granted allocation points and recieve a portion of the 45% of daily OSMO issuance. See "),o("a",{attrs:{href:"https://docs.osmosis.zone/overview/osmosis-app/learn-more.html#bonded-liquidity-gauges",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bonded Liquidity Gauges"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"distribution-calcultions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distribution-calcultions"}},[e._v("#")]),e._v(" Distribution Calcultions")]),e._v(" "),o("h4",{attrs:{id:"category-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#category-model"}},[e._v("#")]),e._v(" Category Model")]),e._v(" "),o("p",[e._v("This model groups pools into a number of categories with fixed incentive shares, so that we can prioritize certain classes of liquidity directly.\nThe model is maintained in the "),o("a",{attrs:{href:"https://github.com/OsmosisIncentivesCommittee/OsmoIncentives",target:"_blank",rel:"noopener noreferrer"}},[e._v("OsmoIncentives"),o("OutboundLink")],1),e._v(" repo and produces a new proposal to adjust incentive allocations weekly. These are also viewable as csv outputs which are auto imported into "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1ydQfgEDot0AC9xuT2txc39VBfuum_I1gU_1-GrmrWx4/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Current Proposal"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1oEn8JtrIU1mze_3Fw4DbbxWBq6yPUM-yAoaOPxG6Y1k/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prospective Proposal"),o("OutboundLink")],1),e._v(" spreadsheets.")]),e._v(" "),o("h4",{attrs:{id:"target-share"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#target-share"}},[e._v("#")]),e._v(" Target Share")]),e._v(" "),o("p",[e._v("The share of incentives allocated to each category is then split according to the proportion of swap fees collected by each pool within the category. These values are limited by the "),o("code",[e._v("swap fee cap")]),e._v(" (currently 3), such that pools will not benefit by having more than 3x the average fee APR of the category.")]),e._v(" "),o("p",[e._v("We then recalculate shares using (capped) fees + external incentives collected by the pool. To limit the incentive increase caused by a match relative to the base incentives, we take the minimum of this "),o("code",[e._v("adjusted reveneue")]),e._v(" share, and "),o("code",[e._v("(1 + matched_multiple_cap) * capped_fee_share")]),e._v(". We set "),o("code",[e._v("matched_multiple_cap")]),e._v(" at 1, so that matches can be no more than the base incentives of a pool.")]),e._v(" "),o("h4",{attrs:{id:"minimum-share"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#minimum-share"}},[e._v("#")]),e._v(" Minimum Share")]),e._v(" "),o("p",[e._v("Pools can also have a minimum share set by governance, to incentivize liquidity ahead of observed trading volume. Minimum shares have currently been set for the OSMO/ATOM, OSMO/WETH, OSMO/WBTC, OSMO/CRO and OSMO/USDC pools.  These parameters are set and changed by governance and should be used to prioritizes the growth of strategic liquidity.")]),e._v(" "),o("h4",{attrs:{id:"maximum-share"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maximum-share"}},[e._v("#")]),e._v(" Maximum Share")]),e._v(" "),o("p",[e._v("Pools can also have a maximum share set by governance, to prevent too many incentives being allocated to any one pool and ensuring a diverse range of liquidity for trading.  Currently the OSMO/ATOM pool is the only pool with a maximum set.")]),e._v(" "),o("h4",{attrs:{id:"major"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#major"}},[e._v("#")]),e._v(" Major")]),e._v(" "),o("p",[e._v("Qualification for "),o("code",[e._v("Major")]),e._v(" status is determined by governance based on a combination of factors, namely:")]),e._v(" "),o("ul",[o("li",[e._v("Is the token market cap large relative to "),o("code",[e._v("Osmo")])]),e._v(" "),o("li",[e._v("Does the majority of the trade volume happen outside of Osmosis")]),e._v(" "),o("li",[e._v("Do we have a strategic interest in attracting more liquidity of this token")])]),e._v(" "),o("p",[e._v("Currently this means that there are 4 Major tokens: "),o("code",[e._v("Atom")]),e._v(", "),o("code",[e._v("WETH")]),e._v(", "),o("code",[e._v("WBTC")]),e._v(" and "),o("code",[e._v("Cro")])]),e._v(" "),o("h4",{attrs:{id:"categories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[e._v("#")]),e._v(" Categories")]),e._v(" "),o("p",[e._v("These determine the ratio of incentives that are allocated to each category")]),e._v(" "),o("ul",[o("li",[e._v("Osmo/Major - 45%")]),e._v(" "),o("li",[e._v("Osmo/Stable - 30%")]),e._v(" "),o("li",[e._v("Osmo/Minor - 14%")]),e._v(" "),o("li",[e._v("Stable/Major - 0%")]),e._v(" "),o("li",[e._v("Stable/Stable - 0%")]),e._v(" "),o("li",[e._v("Others - 2% - Liquidity for Minor tokens paired with non-Osmo")])]),e._v(" "),o("h4",{attrs:{id:"scale-limited-adjustments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scale-limited-adjustments"}},[e._v("#")]),e._v(" Scale Limited Adjustments")]),e._v(" "),o("p",[e._v("To prevent excessive volatility in the incentives APRs, these incentive targets are adjusted towards over multiple weeks, with each adjustment being limited to no more than +25% or -25%. This is somewhat disrupted as a result of normalization though, so when there are large changes in other pools, some pools might see changes in the range of +/- 30%.")]),e._v(" "),o("h4",{attrs:{id:"maturity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maturity"}},[e._v("#")]),e._v(" Maturity")]),e._v(" "),o("p",[e._v("This adjustment scale limiting, is also partially negated during the 4 week onboarding period, where pools are expected to grow quite quickly, and so incentives need to be able to adjust quickly as well to keep up. During this period, the setting for the pool is chosen to be a weighted average between the target level and the adjustment limited by the 25% scale, with the weighting between these shifting linearly from entirely target, to entirely scale limited adjustment over the onboarding period. (ie 100% target, 75% target/25% adjustment, 50/50, 25/75, 100% adjustment)")]),e._v(" "),o("h4",{attrs:{id:"bond-duration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bond-duration"}},[e._v("#")]),e._v(" Bond Duration")]),e._v(" "),o("p",[e._v("The above calculation determines what share of incentives go to each pool, but these shares are then further split into 3 gauges for each pool. Under current parameters, the 1day gauge receives 50%, 7day 30%, and 14day 20%. This means in effect that 100% of the incentives are available to 14 day bonders, 80% available to 7 day bonders, and only 50% available for 1 day bonders. The actual difference in APRs between bonding lengths is not this simple though, as it is heavily dependent on what percentage of the liquidity in the pool is bonded to each duration, and therefore how much competition there is within each gauge.")]),e._v(" "),o("h3",{attrs:{id:"pool-onboarding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pool-onboarding"}},[e._v("#")]),e._v(" Pool Onboarding")]),e._v(" "),o("p",[e._v("Although pools must be voted in to be onboarded to recieve Osmosis Liquidity Mining Incentives, there are ways to increase the chances of a pool being accepted.")]),e._v(" "),o("ul",[o("li",[e._v("Propose an OSMO pool. OSMO pools have the highest chances of being onboarded. The community regularly expresses concern over incentivizing non-OSMO pools, so proposing only an OSMO pool has a better chance of being accepted. It is still somewhat common to onboard an ATOM or USDC pool, as those are common base assets on Osmosis, but pools with uncommon base assets (e.g., JUNO) probably have a low chance of being onboarded.")]),e._v(" "),o("li",[e._v("Add External incentives. Pools that already have a significant amount of external incentives means that incentives will stack, and also shows that the project is serious about the pool.")]),e._v(" "),o("li",[e._v("Propose well designed pools. Pools with high swap fees, high exit fees, or with extremely asymmetrical weighting can discourage trading or providing liquidity. It is probably best to stick to a standard pool design (i.e., 50/50 weighting, 0% exit fee, and <= 0.3% swap fee)")]),e._v(" "),o("li",[e._v("Create a commonwealth post about the proposal before creating an on-chain proposal to give the community an opportunity to provide feedback and seek clarity.")])]),e._v(" "),o("p",[e._v("As an example, we can see how MARBLE was onboarded into the set of pools to receive internal Osmosis Liquidity Mining rewards:")]),e._v(" "),o("ul",[o("li",[e._v("See: "),o("a",{attrs:{href:"https://commonwealth.im/osmosis/discussion/3982-signaling-proposal-add-marble-incentivized-pool-649-osmo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commonwealth post: Signaling Proposal: Add MARBLE Incentivized Pool (#649 OSMO)"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("See: "),o("a",{attrs:{href:"https://www.mintscan.io/osmosis/proposals/180",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis Proposal #180: Signalling proposal for MARBLE/OSMO(#649) incentivized pool."),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"superfluid-staking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#superfluid-staking"}},[e._v("#")]),e._v(" Superfluid Staking")]),e._v(" "),o("p",[e._v("Osmosis Superfluid Staking can further incentivize users to provide liquidity to a pool, as they'll be able to stake their LP tokens for additional rewards. The rewards from superfluid staking come from the OSMO in the pool being staked, so only OSMO pools can qualify for superfluid staking.")]),e._v(" "),o("p",[e._v("Currently, there is no strict criteria on which pools may have Superfluid staking enabled. The feature is enabled for certain pools via on-chain governance. The reason Osmosis hasn't simply allowed all OSMO pools to enable Superfluid staking is because any sudden extreme loss of value in an asset paired with OSMO would cause the OSMO side of the pool to shrink significantly, and this poses a risk to the security of the chain. The superfluid staked OSMO is meant to be safely staked and untouchable for at least 14-days (the duration on the unbonding period), like all staked OSMO, but if the amount of OSMO in a pool suddenly shrinks, then it essentially has the effect of releasing staked OSMO before the 14-days. This is why governance must assess whether a pool seems stable before enabling superfluid staking for it. Before being enabled for Superfluid staking, the token and project should seem legitimate to the community, have a significant amount of liquidity on Osmosis, and have been around for a decent amount of time.")]),e._v(" "),o("p",[e._v("There has so far been no proven way to hasten the enabling of superfluid staking for a pool, although one could always try to gather suppport from the community and then propose on-chain to enable the feature for the pool.")]),e._v(" "),o("h2",{attrs:{id:"interfluid-staking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interfluid-staking"}},[e._v("#")]),e._v(" Interfluid Staking")]),e._v(" "),o("p",[e._v("Similar to how superfluid staking stakes a portion of the OSMO in a pool, Interfluid staking stakes a portion of the pair asset (e.g., FOO) on the corresponding foreign chain (e.g., on Foochain), but this feature is not yet live on Osmosis.")])])}),[],!1,null,null,null);t.default=i.exports}}]);