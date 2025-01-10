const { ThirdwebSDK } = require("@thirdweb-dev/sdk");

let sdk;

function initializeThirdwebSDK(privateKey, network) {
    sdk = new ThirdwebSDK(privateKey, network);
}

async function getNFTs(contractAddress) {
    if (!sdk) {
        throw new Error("SDK not initialized");
    }
    const contract = await sdk.getNFTCollection(contractAddress);
    return await contract.getAll();
}

// ...existing code...
module.exports = {
    initializeThirdwebSDK,
    getNFTs
};
