export interface IWallet {
  image?: string;
  address: string;
  description: string;
}
export interface IWalletAsset {
  image?: string;
  name: string;
  balance: string;
  priceUSD: string;
  valueUSD: string;
  percent: number;
}
export interface IWalletNetwork {
  image: string;
  name: string;
}
export interface IWalletConfig {
  network: string;
  name: string;
  address: string;
}
