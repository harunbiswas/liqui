import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import React, { useCallback, useState } from 'react'
import Title from './basic/Title'

const JSON_RPC_URL = 'https://cloudflare-eth.com'
const UNI = '0xfcC16F9CAb16ec0D0586E5c0DC96AfdE9f78148b'

export default function Uniswap() {
  const [locale, setLocale] = useState('en-US')
  const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

  const onSelectLocale = useCallback(e => setLocale(e.target.value), [])

  // Implement the logic for connecting wallets
  const focusConnectors = () => {
    // Your logic here
  }

  return (
    <section className='uniswap' id='uniswap'>
      <div className='container'>
        <Title title={'Uniswap Widget'} />
        <div className='uniswap-wrp'>
          {typeof window !== 'undefined' && (
            <SwapWidget
              width='100%'
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              locale={locale}
              onConnectWallet={focusConnectors}
              onSelectLocale={onSelectLocale}
              defaultInputTokenAddress='NATIVE'
              defaultInputAmount='1'
              defaultOutputTokenAddress={UNI}
            />
          )}
        </div>
      </div>
    </section>
  )
}
