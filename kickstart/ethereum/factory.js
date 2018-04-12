import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5685E6043a7F3bd26A309eaE27299B412A45C583'
);

export default instance;