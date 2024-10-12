import { UniqueChain } from "@unique-nft/sdk";
import { Sr25519Account } from "@unique-nft/sr25519";
import * as dotenv from "dotenv";
dotenv.config();
let sdk;
if (process.env.MNEMONIC) {
    const account = Sr25519Account.fromUri(process.env.MNEMONIC);
    sdk = UniqueChain({
        baseUrl: "https://rest.unique.network/v2/opal",
        account,
    });
}
export async function getBalance(address) {
    const balanceQuery = await sdk.balance.get({ address });
    console.log("Account's total balance:", balanceQuery.available);
    return balanceQuery;
}
export async function createCollection(address) {
}
export async function getCollection(address, collectionId) {
}
export async function mintToken(address, collectionId) {
}
//# sourceMappingURL=index.js.map