import {AppProps} from 'next/app'
import React from 'react'
import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'
import Router from 'next/router'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    font-family: 'Helvetica Neue', arial, sans-serif;
  }
`

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
