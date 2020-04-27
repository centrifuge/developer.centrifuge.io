---
id: introduction
order: 1
title: Introduction
category: 1. Overview
redirect_from:
  - /chain/
---

## The Centrifuge Stack

The Centrifuge mission is to change the rules of global trade to foster economic opportunity everywhere. Global B2B spend (a.k.a. sent invoices) amounts to roughly [$180 Trillion](https://www.businesswire.com/news/home/20121017005521/en/Visa-Estimates-109.1-Trillion-Global-Commercial-Spend). With payment terms at an average of [60 days](https://www.statista.com/statistics/474224/average-wait-for-invoice-payment-by-sector-united-kingdom/), businesses, and especially SMEs, need financing to bridge the gap. It is one of the main reasons that sustainable growth is so much harder for SMEs than for larger corporates. Existing solutions today, such as factoring and reverse factoring, only address a small portion of that need. This is why we built Centrifuge OS — to allow businesses to exchange business documents (such as invoices) and tokenize those assets to have [greater access to financing](https://medium.com/centrifuge/centrifuge-tinlake-adding-real-world-assets-to-mcd-68cbcb67e9a4) — **thereby unlocking value that has previously been inaccessible.**

![](./cent-stack.png#zoom=true)

Centrifuge OS is a decentralized platform to support a new generation of applications for the financial supply chain. The stack consists of a peer-to-peer messaging protocol to store and exchange business documents in a private, secure way. As the next layer, we built Centrifuge Chain using Substrate to hold the unalterable, single source of truth of these documents for all parties. Using Centrifuge Chain and dApps built on top, businesses can tokenize documents and use this as collateral to access financing. Tinlake is our securitization protocol for these tokenized assets built on Centrifuge Chain to optimize risk allocation and connect Centrifuge to the DeFi ecosystem.


## Centrifuge Chain
[Centrifuge Chain](https://github.com/centrifuge/centrifuge-chain) is the gateway for real-world assets to the Blockchain Multiverse. We built Centrifuge Chain on [Parity Substrate](https://substrate.dev) with an initial bridge to Ethereum. This allows us to move faster and use a consistent approach for certain features.

At the same time we are able to develop a standardized bridge to Ethereum that can be reused by other projects, which in turn increases interoperability. Substrate allows us to easily tap into the [Polkadot](https://polkadot.network) ecosystem and to connect with other blockchains that support the standard.

We envision a larger ecosystem of many, connected blockchains- where Dapps on Ethereum could use data from other chains, value could move freely, and Centrifuge Chain can  [enable off-chain assets to access financing](https://medium.com/centrifuge/centrifuge-chain-the-gateway-for-real-world-assets-to-the-blockchain-multiverse-41dd5597ecf1) through DeFi.

### Centrifuge Chain Efficiencies

Centrifuge Chain is optimized specifically for the transactions required by our specific use case. This focus allows us to improve upon our current architecture in a few key ways: speed, cost, storage efficiencies, and privacy.

Ethereum works well for low volumes of high value transactions. High volumes of privacy-requiring use-cases require a different solution. The average business user, SMBs and large enterprises alike, would be paying many times more using Centrifuge on Ethereum compared to their existing solutions. It wouldn’t be worth it for most businesses to make a switch. But what if we could lower that cost and have high throughput capabilities?

The transactions on the Centrifuge Chain are optimized for the small subset of operations needed by our specific use case. This allows for faster execution of logic and finality of transactions. The optimization of transactions, together with our PoS architecture, is also what brings down the transaction costs dramatically. Centrifuge Chain also implements a state rent model that requires users to pay for continuous availability of their data over long periods of time. This encourages decentralization because less resources are required to run a node. Building our own chain also allows us to improve upon the user and developer experience for Centrifuge. Our users require privacy, and this is something we can build for directly — targeting the features they need from the start. For developers, we can provide custom APIs and tools that come with the blockchain node itself instead of smart contract APIs which are harder to integrate with.

Centrifuge Chain is optimized specifically for the transactions required by the protocol. This achieves a much more efficient execution of these transactions and allows for targeted use-cases. While there are downsides to building a single purpose chain, the advantages for our use case outweigh the costs. Integration with other Ethereum and DeFi projects becomes a bit more involved. Our experience with Ethereum development, combined with a standardized bridge to get data to/from our Parity Substrate based chain reduces the overhead substantially, while still benefiting from the upside of our own chain.

### How does Centrifuge Work?

![](./CentrifugeOS-flow.png)

A company, such as Paper Records, uses the Centrifuge P2P Network to sign and send an invoice to Spotify. Spotify verifies receipt of the document and its correctness with its signature and sends an updated, signed version of the document back to Paper Records. Centrifuge Chain is used for the node identities, allowing Paper Records to look up Spotify and for Spotify to verify Paper Records. Paper Records is then able to anchor the document hash with both signatures onto Centrifuge Chain. Using these elements Paper Records can now mint an NFT on Centrifuge Chain that represents the unpaid invoice — ***and use this NFT as collateral to access financing*** on other blockchains such as Ethereum. Third parties, from traditional lenders to DeFi lending pools, can verify the value of the NFT against the on-chain anchors and identities, as well as get access granted to the off-chain document whose authenticity can be verified against the on-chain anchor as well.


## Chain Architecture

Centrifuge Chain uses its own native token - the Radial (RAD) token. It also incentivizes Validators and Nominators to participate through a block reward.

Centrifuge Chain is built on [Parity Substrate](https://substrate.dev), and relies on staked Validators to come to consensus over 3 components to commit blocks to the blockchain:
* BABE - block production/authorship
* GRANDPA - finality gadget
* NPoS - Validator selection algorithm

Any node can offer itself as a Validator candindate, but only a limited number will be selected. Only top Validators by stake are elected into the Validator Set. Validators can stake their own RAD and can be elected by staked Nominators.

Validators must run a full node and directly particiate in block authorship, finality, and validity checks. They are able to choose a reward commission that is taken up-front from the reward before splitting the remainder with Nominators.

Validators must stay online and available with very high up-time. They will be held responsible and incur slashing penalties for deliberate attacks, running modified software, severe bugs in the code, and unresponsiveness, to name just a few slashing conditions.

For a deeper dive into the architecture and economics of Centrifuge Chain, read our **[Token Design Specification](https://docs.google.com/document/d/1T4DF3XHs8l4gTzpnk6KASpD4JWjSoIWzxNX6DyVz__Q/edit?usp=sharing)**.
