import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import { css } from 'emotion'
import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'
// import HeaderSitewide from './components/Header-sitewide'
// import FooterSitewide from './components/Footer-sitewide'

const typography = new Typography(bootstrapTheme);

typography.injectStyles();

const flex = css`
  display: flex;
`
const justifyCenter = css`
  composes: ${flex};
  flex-flow: column wrap;
  justifyContent: center;
  @media (min-width: 1200px) {
    max-width: 960px;
    margin: 0 auto;
  }
`
const logo = css`
  font-family: 'Akronim', cursive;
  color: red;
  font-size: 108px;
  line-height: 1.2;
  margin-bottom: 32px;
`

const heading1 = css`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  margin-bottom: 16px;
  padding-right: 8vw;
  color: #000000
  @media (max-width: 767px) {
    font-size: 32px;
  }
`
const heading3 = css`
  padding-right: 20vw
`
const textCore = css`
  padding-right: 8vw;
  color: #000000;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 200;
  letter-spacing: .02em
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
const mainContent = css`
  padding: 0 5vw
  color: #ffffff;
  background: #ddd6f3;
  background: -webkit-linear-gradient(to bottom, #faaca8, #ddd6f3);
  background: linear-gradient(to bottom, #faaca8, #ddd6f3);
  height: 100vh;
  display: flex;
  align-items: center;
`
const isWhite = css`
  color: #ffc107;
  text-decoration: none;
`
const isLink = css`
  color: #73a2ff;
  text-decoration: none;
`
const isSmall = css`
  color: red;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
`

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Lyt App - earn cash from shared videos</title>
            <link rel="canonical" href="https://lyt.io" />
            <link href="https://fonts.googleapis.com/css?family=Akronim" rel="stylesheet" /> 
        </Helmet>
        <main className={mainContent}>
          <div className={justifyCenter}>
            <p className={logo}>lyt</p>
            <h1 className={heading1}>You know what’s lit; now share it!</h1>
            <p className={textCore}> In a world where timing is everything, we value what you see. Capture up to 60 seconds of real-time, newsworthy footage, upload it to Lyt, and get discovered. Then share and monetize your digital assets using the <strong>Lyt Licensing DApp</strong>.</p>
            <p className={isSmall}>Built with Solidity. <a className={isLink} href="mailto:v@lyt.io">Early Access</a>.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App
