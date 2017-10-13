import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { css } from 'emotion';
import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
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
  lineHeight: 1.2;
  font-weight: 600;
  margin-bottom: 16px;
`

const heading2 = css`
  lineHeight: 1.4
`

const heading3 = css`
  padding-right: 20vw
`
const textCore = css`
  padding-right: 20vw
`

const mainContent = css`
  padding: 0 5vw
  color: #ffffff;
  background: #ff00cc;
  background: -webkit-linear-gradient(to bottom, #ff00cc), #333399; 
  background: linear-gradient(to bottom, #ff00cc, #333399);
  height: 100vh;
  display: flex
  align-items: center
`

const isWhite = css`
  color: #ffc107;
  text-decoration: none;
`

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>👏 Lyt App - vidyos IRL</title>
            <link rel="canonical" href="https://lyt.io" />
        </Helmet>
        <main className={mainContent}>
          <div className={justifyCenter}>
            <h1 className={heading1}>You have captured a newsworthy vidyo.</h1>
            <h2 className={heading2}>Now how do you make 💵💵💵 off of it?</h2>
            <h3 className={heading3}>That is what Lyt is all about and we are about to release this 🐶 early next year.</h3>
            <p className={textCore}>If you are a 🌱 investor, a 📰 bureau, or just plain curio, <a className={isWhite} href="mailto:v@lyt.io">hit us up to get early access</a>.</p>
            <p><small>* paparazzi-wannabe not welcome</small></p>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
