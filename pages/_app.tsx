import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, Chain } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_POLYGON_RPC_API_URL || "" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
