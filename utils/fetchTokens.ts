import axois from 'axios';
import chainIds from '../constants/chainIds';

const COVALENT_API_KEY = 'ckey_1fb3fd4bcbb840de9377e7c9414';

const fetchTokens = async ({chain, address} : {chain : any, address : any}) => {
    const chainId = chainIds[chain as keyof typeof chainIds];
    const response = await axois.get(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?key=${COVALENT_API_KEY}`);
    console.log("response", response);
    return response.data.data.items;
}

export default fetchTokens;