import { useWallet } from "@solana/wallet-adapter-react";
import { WalletModalButton } from "@solana/wallet-adapter-react-ui";

const Wallet = () => {
  // const { publicKey } = useWallet();

  return (
    <div>
      {/* {publicKey ? (
        <p>Wallet Connected: {publicKey.toBase58()}</p>
      ) : ( */}
        <WalletModalButton>Connect Wallet</WalletModalButton>
      {/* )} */}
    </div>
  );
};

export default Wallet;