import { utils } from 'ethers'

export const JSON_RPC_URL = 'https://cloudflare-eth.com'

export const networks = {
    polygon: {
    chainId: '0x89',
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18
      },
      rpcUrls: ['https://polygon-rpc.com/'],
      blockExplorerUrls: ['https://polygonscan.com']
    }
}
