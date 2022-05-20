import React from 'react'
import Web3Connectors from '../components/Web3Connectors'


const style = {
    wrapper: `p-4 w-screen flex justify-end items-center`,
    buttonsContainer: `flex w-1/4 justify-end items-center`,
    connectors: 'flex items-center rounded-2xl'
    
}

const Header = () => {

    return (
        <div className={style.wrapper}>
          <div className={style.buttonsContainer}>
              <div className={style.connectors} tabIndex={-1}>
                <Web3Connectors />
              </div>
          </div>
        </div>
      )
    }    

export default Header