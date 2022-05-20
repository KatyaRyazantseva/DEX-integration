import styles from '../styles/Connectors.module.css'
import { connectors, Web3Connector } from '../connectors'
import { useCallback } from 'react'
import { networks } from '../constants'

const currentAccount = undefined

function Connector({ web3Connector }: { web3Connector: Web3Connector }) {
  const [connector, hooks] = web3Connector
  const isActive = hooks.useIsActive()
  const changeNetwork = async() => {
      if (!window.ethereum) throw new Error("No crypto wallet found")
      const chain = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks['polygon']
          }
        ]
      })
      const chainId = await window.ethereum.request({
        method: "eth_chainId"})
  }  
  const onClick = useCallback(() => {
    if (!isActive) {
      connector.activate()
      changeNetwork()
    }

  }, [connector, isActive])


  return (
    <div className={styles.connector}>
      <button onClick={onClick}>{isActive ? 'Connected' : 'Connect Metamask'}</button>
      <svg className={[styles.status, isActive && styles.active].join(' ')} viewBox="0 0 2 2">
        <circle cx={1} cy={1} r={1} />
      </svg>
    </div>
  )
}

export default function Connectors() {
  return (
    <div className={styles.connectors}>
      {connectors.map((web3Connector, index) => (
        <Connector key={index} web3Connector={web3Connector} />
      ))} 
    </div>
  )
}
