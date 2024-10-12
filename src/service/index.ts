import { UniqueChain, UniqueChainInstance }  from "@unique-nft/sdk";
import { Sr25519Account } from "@unique-nft/sr25519";
import * as dotenv from "dotenv";
dotenv.config();
let sdk: any;

if (process.env.MNEMONIC) {
  const account = Sr25519Account.fromUri(process.env.MNEMONIC);
  // set "account" as a default signer
  sdk = UniqueChain({
    baseUrl: "https://rest.unique.network/v2/opal", 
    account,
  });
}


export async function getBalance(address: string): Promise<any> {
    const balanceQuery = await sdk.balance.get({address});
    console.log("Account's total balance:", balanceQuery.available);
    return balanceQuery;  // balance.amount is the user's balance
  }

export async function createCollection(address: string) {
//   const { parsed, error } = await sdk.collection.create.submitWaitResult({
//     address: account.address,
//     name: 'Test collection',
//     description: 'My test collection',
//     tokenPrefix: 'TST',
//   });

// if (error) {
//     console.log('The error occurred while creating a collection. ', error);
//     process.exit();
//   }

//   const { collectionId } = parsed;

//   return sdk.collection.get({ collectionId });
}

export async function getCollection(address: string, collectionId?:number) {
  // if (collectionId){
  //   return sdk.collection.get({});
  // }
}

export async function mintToken(address: string, collectionId?: number) {
  // const result = await sdk.token.create.submitWaitResult({
  //   address,
  //   collectionId,
  //   data: {
  //     image: {
  //       url: 'https://ipfs.unique.network/ipfs/QmTVB1R9MAQh8v2SanRUq1GxFEDinde9MPdr8UiqYUzp9P',
  //     },
  //     name: {
  //       _: 'My avt4',
  //     },
  //     description: {
  //       _: 'Sample avt4',
  //     },
  //     attributes: [{
  //       'url': 'https://bronze-perfect-gazelle-902.mypinata.cloud/ipfs/QmTVB1R9MAQh8v2SanRUq1GxFEDinde9MPdr8UiqYUzp9P', 
  //     }]
  //   },
  // })

  // const tokenId = result.parsed?.tokenId

  // console.log(`Minted token ID ${tokenId} of 1 in collection ID ${collectionId}`)
  // console.log(`View this minted token at https://uniquescan.io/opal/tokens/${collectionId}/${tokenId}`)
  // return result;
}