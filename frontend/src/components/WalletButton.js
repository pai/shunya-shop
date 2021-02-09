import React from 'react'
import useWeb3Modal from '../hooks/useWeb3Modal'

import { Button } from 'react-bootstrap'

const WalletButton = () => {
  function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
    return (
      <Button
        className='btn-block'
        type='button'
        onClick={() => {
          if (!provider) {
            loadWeb3Modal()
          } else {
            logoutOfWeb3Modal()
          }
        }}
      >
        {!provider ? 'Connect Wallet' : 'Disconnect Wallet'}
      </Button>
    )
  }

  //const { loading, error, data } = useQuery(GET_TRANSFERS)
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal()

  /*React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers })
    }
  }, [loading, error, data])*/
  return (
    <WalletButton
      provider={provider}
      loadWeb3Modal={loadWeb3Modal}
      logoutOfWeb3Modal={logoutOfWeb3Modal}
    />
  )
}

export default WalletButton
