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
`
const heading1 = css`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #000000
  @media (max-width: 767px) {
    font-size: 32px;
  }
`
const heading3 = css`
  padding-right: 20vw
`
const textCore = css`
  padding-right: 20vw;
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
  background: #ffecce;
  // background: -webkit-linear-gradient(to bottom, #ff00cc), #333399; 
  // background: linear-gradient(to bottom, #ff00cc, #333399);
  height: 100vh;
  display: flex
  align-items: center
`
const isWhite = css`
  color: #ffc107;
  text-decoration: none;
`
const isLink = css`
  color: #73a2ff;
  text-decoration: none;
`

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Lyt App - earn cash from shared videos</title>
            <link rel="canonical" href="https://lyt.io" />
        </Helmet>
        <main className={mainContent}>
          <div className={justifyCenter}>
            <img src="lyt_logo.png" alt="Lyt" width="160" />
            <h1 className={heading1}>You know what’s lit; now share it!</h1>
            <p className={textCore}> In a world where timing is everything, we value what you see. Capture up to 60 seconds of real-time, newsworthy footage, upload it to Lyt, and wait to be discovered. <a className={isLink} href="mailto:v@lyt.io">Sign up today</a> for early access. You’ll be the first to know when it’s time to record or discover.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App
