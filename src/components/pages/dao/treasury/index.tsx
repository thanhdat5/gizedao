import { useState } from "react";
import { IWallet, IWalletAsset, IWalletConfig, IWalletNetwork } from "types/wallet";
import GZComingsoonModal from "components/molecules/common/comingsoon-modal";
import GZAddWalletModal from "components/organisms/common/add-wallet-modal";
import GZConnectWalletModal from "components/organisms/common/connect-wallet-modal";
import GZDAOTreasury from "components/template/dao/treasury";
import * as Yup from 'yup';

const GZDAOTreasuryPage = () => {
    const [showAddWallet, setShowAddWallet] = useState(false);
    const [showComingsoon, setShowComingsoon] = useState(false);
    const [showAddTreasury, setShowAddTreasury] = useState(false);
    const [wallet, setWallet] = useState<IWallet | undefined>(undefined);
    const wallets: IWallet[] = [
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            address: "0xf48ee66374ac63396...91812354e8d9ce385c3930",
            description: "4 owners · 2 confirmators"
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            address: "0xf48ee66374ac63396...91812354e8d9ce385c3930",
            description: "8 owners · 3 confirmators"
        },
        {
            address: "New M Safe",
            description: "Create new safe at m-safe.io and bind to DAO "
        },
        {
            address: "New Gnosis Safe",
            description: "Create new safe at gnosis-safe.io and bind to DAO "
        }
    ]
    const walletInfo = {
        balance: "6,200,00.00 USD",
        funds: [
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "111" },
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "222" },
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "333" },
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "444" },
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "555" },
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "666" },
            { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "777" }
        ]
    }
    const addedWallets = [
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "Operating wallet",
            address: "0x9598...4A35",
            balance: "46,527.50 USD",
            assets: [
                { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "111" },
                { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "222" },
                { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "333" },
                { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "444" },
            ]
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "Operating wallet",
            address: "0x9598...1234",
            balance: "22,222.22 USD",
            assets: [
                { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "111" },
                { image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png", name: "222" },
            ]
        }
    ]
    const assets: IWalletAsset[] = [
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "SUI (SUI)",
            balance: "10,000.00",
            priceUSD: "2,100.00",
            valueUSD: "2,100,000.00",
            percent: 12.93
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "Ethereum (ETH)",
            balance: "10,000.00",
            priceUSD: "2,100.00",
            valueUSD: "2,100,000.00",
            percent: 12.93
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "USD Coin (USDC)",
            balance: "10,000.00",
            priceUSD: "1.01",
            valueUSD: "10,000.00",
            percent: -12.93
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "Polygon (MATIC)",
            balance: "10,000.00",
            priceUSD: "2,100.00",
            valueUSD: "2,100,000.00",
            percent: 12.93
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "Avalanche (AVAX)",
            balance: "10,000.00",
            priceUSD: "2,100.00",
            valueUSD: "2,100,000.00",
            percent: 12.93
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "USD Coin (USDC)",
            balance: "10,000.00",
            priceUSD: "1.01",
            valueUSD: "10,000.00",
            percent: -12.93
        },
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "USD Coin (USDC)",
            balance: "10,000.00",
            priceUSD: "1.01",
            valueUSD: "10,000.00",
            percent: -12.93
        }
    ]
    const networks: IWalletNetwork[] = [
        {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "Ethereum"
        }, {
            image: "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png",
            name: "BNB Smart Chain"
        }
    ]
    const configInitial: IWalletConfig = {
        network: '',
        name: '',
        address: ''
    }
    const configSchema = Yup.object().shape({
        network: Yup.string()
          .required('Required'),
        name: Yup.string()
          .required('Required'),
        address: Yup.string()
          .max(255, 'Too Long!')
          .required('Required'),
      });

    const handleAddAnother = () => {
        setWallet(wallets[0]);
        setShowAddWallet(false);
    }

    const handleSelect = (item: any) => {
        setWallet(item);
        setShowAddWallet(false);
    }

    const handleAddTreasury = (data: IWalletConfig) => {

    }

    return <>
        <GZDAOTreasury
            daoName="<Name of a DAO>"
            wallet={wallet}
            walletInfo={walletInfo}
            addedWallets={addedWallets}
            assets={assets}
            onAddWallet={() => setShowAddWallet(true)}
            onAddTreasury={() => setShowAddTreasury(true)}
            onReceive={() => setShowComingsoon(true)}
            onSend={() => setShowComingsoon(true)}
            onTransfer={() => setShowComingsoon(true)}
            onShare={() => setShowComingsoon(true)}
        />
        {
            showComingsoon && (<GZComingsoonModal onDismiss={() => setShowComingsoon(false)} />)
        }
        {
            showAddWallet && (
                <GZConnectWalletModal
                    wallets={wallets}
                    onClick={handleSelect}
                    onAddAnother={handleAddAnother}
                    onDismiss={() => setShowAddWallet(false)}
                />
            )
        }
        {
            showAddTreasury && (
                <GZAddWalletModal
                    title="Add treasury"
                    networks={networks}
                    configSchema={configSchema}
                    configInitial={configInitial}
                    onDismiss={() => setShowAddTreasury(false)}
                    onSubmit={handleAddTreasury}
                />
            )
        }
    </>
}
export default GZDAOTreasuryPage