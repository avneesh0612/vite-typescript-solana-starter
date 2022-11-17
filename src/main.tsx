import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App";

// This is the chainId your dApp will work on.
const network: Network = "mainnet-beta";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider network={network}>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
