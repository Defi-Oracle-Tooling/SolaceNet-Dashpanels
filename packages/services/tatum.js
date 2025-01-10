const { TatumSDK } = require("@tatumio/tatum");

let sdk;

function initializeTatumSDK(apiKey) {
    sdk = new TatumSDK({ apiKey });
}

async function getAccountBalance(accountId) {
    if (!sdk) {
        throw new Error("SDK not initialized");
    }
    return await sdk.getAccountBalance(accountId);
}

// ...existing code...
module.exports = {
    initializeTatumSDK,
    getAccountBalance
};
