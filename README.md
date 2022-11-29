<div id="top"></div>

<!-- Run in Your local environment -->

# Prerequisites

* [nodejs](https://nodejs.org/en/download/) for backend smart contract deploy
* [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) Chrome extension installed in your browser
* [Hardhat](https://hardhat.org/) for local smart contracts deployement and testing
* [nft.storage](https://nft.storage/) account for IPFS storage (free account).
* [polygon(mumbai)](https://faucet.polygon.technology/) Polygon mumbai balance for your smart contract deploy and NFT mint

## How to run in your Local environment

<dl>
    <dt>Step1: Clone GitHub Project on your PC</dt>
    <dd>
        <p>git clone https://github.com/nayanrdeveloper/nuron_nft_marketplace_fronted</p>
    </dd>
    <dt>Step-2: </dt>
    <dd>
        <p>now change the file env.example to .env and update the following changes</p>
        <p>NEXT_PUBLIC_BLOG_ADDRESS = "Blog smart contract address"</p>
        <p>NEXT_PUBLIC_MYNFT_ADDRESS = "MyNFT smart contract address"</p>
        <p>NEXT_PUBLIC_MYTOKEN_ADDRESS = "MyToken smart contract address"</p>
        <p>POLYGON_RPC_API_URL = "Polygon RPC alchemy"</p>
    </dd>
    <dt>Step - 3: </dt>
    <dd>
        <p>npm install</p>
        <p>npm run dev</p>
        <p>Open your Project in browser (http://localhost:3000/)</p>
    </dd>
</dl>

### Built With
* [Solidity](https://docs.soliditylang.org/)
* [Hardhat](https://hardhat.org/getting-started/)
* [Next.js](https://nextjs.org/)
* [ethers.js](https://docs.ethers.io/v5/)
* [RainbowKit](https://www.rainbowkit.com//)
* [TailwindCss](https://tailwindcss.com/)

#### User interface
   
The front end is built with Next JS it's framework of React, it allows users to mint new NFTS and they can find on the home page a complete roadmap for the entire NFT project, the app also give a simple admin dashboard for setting minting prices and managing the sales period.

The front-end is built using the following libraries:
      <ul>
        <li><b>Next.js:</b> fronted Framework of develope UI</li>
        <li><b>Ethers.js:</b> used as interface between the UI and the deployed smart contract</li>
        <li><b>RainbowKit:</b> Connecting a Wallet</li>
        <li><b>Tailwind CSS:</b> Styles using TailwindCss</li>    
      </ul>

![Home Page](screenshots/home_page_1.png)

About

![About](screenshots/about_page_2.png)

Sell NFT

![Create Blog](screenshots/sell_nft_3.png)

Connect Wallet

![Connect Wallet](screenshots/connect_wallet_4.png)

All NFTs

![All NFTs](screenshots/all_nft_5.png)

NFT Detail

![NFT Detail](screenshots/nft_detail_6.png)

Create Blog

![Create Blog](screenshots/create_blog_7.png)

All blogs

![NFT Detail](screenshots/all_blogs_8.png)

Wallet Explain

![NFT Detail](screenshots/connect_wallet_explain.png)