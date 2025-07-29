//#region index.d.ts
declare const moonchainMainnet: {
  id: number;
  name: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
    };
  };
  blockExplorers: {
    default: {
      name: string;
      url: string;
    };
  };
};
declare const moonchainHudson: {
  readonly id: 177888;
  readonly name: "Moonchain Hudson";
  readonly nativeCurrency: {
    readonly name: "MCH";
    readonly symbol: "MCH";
    readonly decimals: 18;
  };
  readonly rpcUrls: {
    readonly default: {
      readonly http: readonly ["https://hudson-rpc.mchain.ai"];
    };
  };
  readonly blockExplorers: {
    readonly default: {
      readonly name: "Moonchain Explorer";
      readonly url: "https://hudson-explorer.mchain.ai";
    };
  };
}; //#endregion
export { moonchainHudson, moonchainMainnet };