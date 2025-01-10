import axios from 'axios';

const ALCHEMY_API_URL = 'https://api.alchemy.com/v2/your-api-key';

/**
 * Fetches data from Alchemy API.
 * @returns {Promise<Object>} - The data from Alchemy API.
 */
export const getAlchemyData = async () => {
  try {
    const response = await axios.get(`${ALCHEMY_API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Alchemy data:', error);
    throw new Error('Failed to fetch Alchemy data');
  }
};

/**
 * Fetches wallet data from Alchemy API.
 * @param {string} walletAddress - The wallet address to fetch data for.
 * @returns {Promise<Object>} - The wallet data.
 */
export const getWalletData = async (walletAddress) => {
  try {
    const response = await axios.get(`${ALCHEMY_API_URL}/wallets/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching wallet data for ${walletAddress}:`, error);
    throw new Error('Failed to fetch wallet data');
  }
};
