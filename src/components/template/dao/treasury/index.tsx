import { SimpleGrid } from "@chakra-ui/react";
import { IWallet, IWalletAsset } from "types/wallet";
import GZNoWallet from "components/organisms/common/no-wallet";
import GZWalletAssets from "./components/assets";
import GZWalletBalance from "./components/balance";
import GZWallet from "./components/wallet";
import GZWalletAction from "./components/action";

type Props = {
    daoName: string;
    wallet?: IWallet;
    addedWallets?: any[];
    walletInfo?: any;
    assets?: IWalletAsset[];
    onAddWallet: () => void;
    onAddTreasury: () => void;
    onReceive: () => void;
    onSend: () => void;
    onTransfer: () => void;
    onShare: () => void;
}
const GZDAOTreasury = ({
    daoName,
    wallet,
    addedWallets,
    walletInfo,
    assets,
    onAddWallet,
    onAddTreasury,
    onReceive,
    onSend,
    onTransfer,
    onShare,
}: Props) => {
    return <>
        {
            !wallet ? <GZNoWallet
                title={`This is ${daoName} Treasury`}
                description="Here you will see all the DAO's wallets and funds. Add at least one wallet to be able to collect money, track the balance, and initiate a transaction"
                onAdd={onAddWallet}
            /> : <>
                <GZWalletBalance
                    balance={walletInfo?.balance}
                    assets={assets}
                    onReceive={onReceive}
                    onSend={onSend}
                />
                <SimpleGrid columns={3} spacing={15} mb="16px">
                    <GZWalletAction
                        icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.09741 3.4301C5.50421 3.0233 6.16376 3.0233 6.57055 3.4301L9.90389 6.76343C10.3107 7.17023 10.3107 7.82977 9.90389 8.23657C9.49709 8.64337 8.83754 8.64337 8.43075 8.23657L6.87565 6.68147V15.8333C6.87565 16.4086 6.40928 16.875 5.83398 16.875C5.25869 16.875 4.79232 16.4086 4.79232 15.8333V6.68147L3.23722 8.23657C2.83042 8.64337 2.17088 8.64337 1.76408 8.23657C1.35729 7.82977 1.35729 7.17023 1.76408 6.76343L5.09741 3.4301ZM14.1673 3.125C14.7426 3.125 15.209 3.59137 15.209 4.16667V13.3185L16.7641 11.7634C17.1709 11.3566 17.8304 11.3566 18.2372 11.7634C18.644 12.1702 18.644 12.8298 18.2372 13.2366L14.9039 16.5699C14.4971 16.9767 13.8375 16.9767 13.4307 16.5699L10.0974 13.2366C9.69062 12.8298 9.69062 12.1702 10.0974 11.7634C10.5042 11.3566 11.1638 11.3566 11.5706 11.7634L13.1257 13.3185V4.16667C13.1257 3.59137 13.592 3.125 14.1673 3.125Z" fill="#00CE6B" />
                        </svg>
                        }
                        title="Make asset transfer"
                        description="Easily transfer assets between your treasury and other wallets."
                        onClick={onTransfer}
                    />
                    <GZWalletAction
                        icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.83333 8.33317C4.91286 8.33317 4.16667 9.07936 4.16667 9.99984V15.8332C4.16667 16.7536 4.91286 17.4998 5.83333 17.4998H14.1667C15.0871 17.4998 15.8333 16.7536 15.8333 15.8332V9.99984C15.8333 9.07936 15.0871 8.33317 14.1667 8.33317H13.75C13.2898 8.33317 12.9167 7.96007 12.9167 7.49984C12.9167 7.0396 13.2898 6.6665 13.75 6.6665H14.1667C16.0076 6.6665 17.5 8.15889 17.5 9.99984V15.8332C17.5 17.6741 16.0076 19.1665 14.1667 19.1665H5.83333C3.99238 19.1665 2.5 17.6741 2.5 15.8332V9.99984C2.5 8.15889 3.99238 6.6665 5.83333 6.6665H6.25C6.71024 6.6665 7.08333 7.0396 7.08333 7.49984C7.08333 7.96007 6.71024 8.33317 6.25 8.33317H5.83333Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.45769 1.03387C9.76976 0.766379 10.2303 0.766379 10.5423 1.03387L13.459 3.53387C13.8084 3.83339 13.8489 4.35947 13.5494 4.70891C13.2499 5.05835 12.7238 5.09882 12.3744 4.7993L10.8333 3.47844V12.4999C10.8333 12.9602 10.4603 13.3333 10 13.3333C9.53978 13.3333 9.16668 12.9602 9.16668 12.4999V3.47844L7.62567 4.7993C7.27624 5.09882 6.75015 5.05835 6.45063 4.70891C6.15112 4.35947 6.19158 3.83339 6.54102 3.53387L9.45769 1.03387Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.83333 8.33325C4.91286 8.33325 4.16667 9.07944 4.16667 9.99992V15.8333C4.16667 16.7537 4.91286 17.4999 5.83333 17.4999H14.1667C15.0871 17.4999 15.8333 16.7537 15.8333 15.8333V9.99992C15.8333 9.07944 15.0871 8.33325 14.1667 8.33325H13.75C13.2898 8.33325 12.9167 7.96016 12.9167 7.49992C12.9167 7.03968 13.2898 6.66658 13.75 6.66658H14.1667C16.0076 6.66658 17.5 8.15897 17.5 9.99992V15.8333C17.5 17.6742 16.0076 19.1666 14.1667 19.1666H5.83333C3.99238 19.1666 2.5 17.6742 2.5 15.8333V9.99992C2.5 8.15897 3.99238 6.66658 5.83333 6.66658H6.25C6.71024 6.66658 7.08333 7.03968 7.08333 7.49992C7.08333 7.96016 6.71024 8.33325 6.25 8.33325H5.83333Z" fill="#00CE6B" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.45766 1.03387C9.76974 0.766379 10.2302 0.766379 10.5423 1.03387L13.459 3.53387C13.8084 3.83339 13.8489 4.35947 13.5494 4.70891C13.2499 5.05835 12.7238 5.09882 12.3743 4.7993L10.8333 3.47844V12.4999C10.8333 12.9602 10.4602 13.3333 9.99999 13.3333C9.53975 13.3333 9.16666 12.9602 9.16666 12.4999V3.47844L7.62565 4.7993C7.27621 5.09882 6.75013 5.05835 6.45061 4.70891C6.15109 4.35947 6.19156 3.83339 6.541 3.53387L9.45766 1.03387Z" fill="#00CE6B" />
                        </svg>
                        }
                        title="Share treasury info"
                        description="Collaborate with your team by sharing your treasury information."
                        onClick={onShare}
                    />
                    <GZWalletAction
                        icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_514_28885)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.04892 2.5H13.9511C14.6219 2.49999 15.1755 2.49998 15.6265 2.53683C16.0949 2.5751 16.5255 2.65724 16.93 2.86331C17.5572 3.18289 18.0671 3.69283 18.3867 4.32003C18.5928 4.72448 18.6749 5.15506 18.7132 5.62348C18.75 6.07447 18.75 6.6281 18.75 7.2989V9.58333C18.75 10.0436 18.3769 10.4167 17.9167 10.4167C17.4564 10.4167 17.0833 10.0436 17.0833 9.58333V8.75H2.91667V12.6667C2.91667 13.3805 2.91732 13.8657 2.94796 14.2408C2.97781 14.6061 3.03192 14.793 3.09832 14.9233C3.25811 15.2369 3.51308 15.4919 3.82668 15.6517C3.95702 15.7181 4.14385 15.7722 4.5092 15.802C4.88427 15.8327 5.36952 15.8333 6.08333 15.8333H8.04167C8.5019 15.8333 8.875 16.2064 8.875 16.6667C8.875 17.1269 8.5019 17.5 8.04167 17.5H6.0489C5.3781 17.5 4.82447 17.5 4.37348 17.4632C3.90506 17.4249 3.47448 17.3428 3.07003 17.1367C2.44283 16.8171 1.93289 16.3072 1.61331 15.68C1.40724 15.2755 1.3251 14.8449 1.28683 14.3765C1.24998 13.9255 1.24999 13.3719 1.25 12.7011V7.29892C1.24999 6.62811 1.24998 6.07448 1.28683 5.62348C1.3251 5.15506 1.40724 4.72448 1.61331 4.32003C1.93289 3.69283 2.44283 3.18289 3.07003 2.86331C3.47448 2.65724 3.90506 2.5751 4.37348 2.53683C4.82447 2.49998 5.37811 2.49999 6.04892 2.5ZM2.91675 7.08333H17.0833C17.0827 6.50336 17.079 6.08875 17.052 5.7592C17.0222 5.39385 16.9681 5.20702 16.9017 5.07668C16.7419 4.76308 16.4869 4.50811 16.1733 4.34832C16.043 4.28192 15.8561 4.22781 15.4908 4.19796C15.1157 4.16732 14.6305 4.16667 13.9167 4.16667H6.08333C5.36952 4.16667 4.88427 4.16732 4.5092 4.19796C4.14385 4.22781 3.95702 4.28192 3.82668 4.34832C3.51308 4.50811 3.25811 4.76308 3.09832 5.07668C3.03192 5.20702 2.97781 5.39385 2.94796 5.7592C2.92103 6.08875 2.91727 6.50336 2.91675 7.08333ZM4.16667 11.25C4.16667 10.7898 4.53976 10.4167 5 10.4167H8.33333C8.79357 10.4167 9.16667 10.7898 9.16667 11.25C9.16667 11.7102 8.79357 12.0833 8.33333 12.0833H5C4.53976 12.0833 4.16667 11.7102 4.16667 11.25ZM15.4167 11.6667C15.8769 11.6667 16.25 12.0398 16.25 12.5V14.5833H18.3333C18.7936 14.5833 19.1667 14.9564 19.1667 15.4167C19.1667 15.8769 18.7936 16.25 18.3333 16.25H16.25V18.3333C16.25 18.7936 15.8769 19.1667 15.4167 19.1667C14.9564 19.1667 14.5833 18.7936 14.5833 18.3333V16.25H12.5C12.0398 16.25 11.6667 15.8769 11.6667 15.4167C11.6667 14.9564 12.0398 14.5833 12.5 14.5833H14.5833V12.5C14.5833 12.0398 14.9564 11.6667 15.4167 11.6667Z" fill="#00CE6B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_514_28885">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        }
                        title="Add wallet"
                        description="Connect your wallets to your treasury for easy asset management."
                        onClick={onAddTreasury}
                    />
                </SimpleGrid>
                <GZWallet
                    addedWallets={addedWallets}
                    onAddWallet={onAddTreasury}
                />
                <GZWalletAssets
                    assets={assets}
                />
            </>
        }

    </>
}
export default GZDAOTreasury