import * as actions from "./actions";

import formatMoney from "$lib/util/format-money";

import { parseTransaction } from "@helius-labs/xray-proton";

import type { EnrichedTransaction } from "helius-sdk";

type Token = {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
};

export const tokenPrice = {
    loader    : actions.getTokenPrice,
};

export const solanaTps = {
    loader    : actions.getSolanaTps,
};

export const solanaTokenRegistry = {
    fetchOnFirstSubscription : true,
    formatter                : (data:any) => new Map(data.map((token:Token) => ([ token?.address, token ]))),
    loader                   : actions.getSolanaTokenRegistry,
};

export const solanaAccountInfo = {
    loader : actions.getSolanaAccountInfo,
};

export const solanaTransactions = {
    formatter : (data:any) => data.map((tx:EnrichedTransaction) => ({
        parsed : parseTransaction(tx),
        raw    : tx,
    })),
    loader    : actions.getSolanaTransactions,
};

export const solanaTransaction = {
    formatter : (data:any) => ({
        parsed : parseTransaction(data),
        raw    : data,
    }),
    loader    : actions.getSolanaTransaction,
};

export const solanaToken = {
    loader : actions.getSolanaToken,
};

