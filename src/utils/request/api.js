import { get } from './http'
// https://openapi.debank.com/v1/wallet/gas_market?chain_id=heco
// 获取气价
export const gasPriceApi = () => get('/v1/wallet/gas_market?chain_id=heco');

// eg:::
// import {airdropApi, receiveApi} from '../pathTo/utils/request/api';
// methods:{
//   async getDetail(){
//     let params = {
//       page: 1,
//       deviceCode: 'xxxx',
//       type: 'xxx'
//     }
//     let res = listApi(params);
//     if(res.code == 0) {
//       // doSomething
//     }
//   }
// }