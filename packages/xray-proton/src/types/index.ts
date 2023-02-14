import { Source } from "helius-sdk";

const supportedTransactions = {
    BURN               : "BURN",
    BURN_NFT           : "BURN_NFT",
    NFT_BID            : "NFT_BID",
    NFT_BID_CANCELLED  : "NFT_BID_CANCELLED",
    NFT_CANCEL_LISTING : "NFT_CANCEL_LISTING",
    NFT_LISTING        : "NFT_LISTING",
    NFT_SALE           : "NFT_SALE",
    SWAP               : "SWAP",
    TRANSFER           : "TRANSFER",
    UNKNOWN            : "UNKNOWN",
};

export type ProtonSupportedTypes = keyof typeof supportedTransactions;

export interface ProtonTransactionAction {
    from: string,
    fromName: string | undefined,
    to: string,
    toName: string | undefined,
    sent?: string,
    received?: string,
    amount: number,
}

export interface ProtonTransaction {
    type: ProtonSupportedTypes,
    primaryUser: string,
    fee: number,
    signature: string,
    timestamp: number,
    source: Source,
    actions: ProtonTransactionAction[],
}
