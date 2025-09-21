# Site for Malocchio

https://malocch.io/

## Parts of this project:
1. write Smart contracts that points its URI to an IPFS hash of a folder with all the JSONs for the NFTs in it
2. make 3333 json files, 1 for each pregenerated NFT. The image folder IPFS hash is in each JSON
3. make 3333 image files uploaded to IPFS
4. After uploading the images to IPFS, we get the hash (like an address) for them, and insert that into all the JSONs.
5. upload the JSONs, get that IPFS hash
6. put the JSON folder hash into the URI for the smart contract URI
7. deploy the contract
8. put the contract address into the UI
9. yayy celebrate

