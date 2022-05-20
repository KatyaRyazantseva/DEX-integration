import React from 'react'
import { SwapWidget, darkTheme, } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191B1F] rounded-2xl p-4`,
  widget: 'bg-[#191B1F] ',
}

const Main = () => {

  const provider = useActiveProvider()
  
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
      <div className={style.widget}>
            <SwapWidget
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              defaultInputTokenAddress="0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
              theme={darkTheme}
            />
          </div>
      </div>
    </div>
  )
}

export default Main