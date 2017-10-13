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
  lineHeight: 1.2
`

const heading2 = css `
  lineHeight: 1.4
`

const textCore = css`
  padding-right: 30vw
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
  color: #FFFFFF
`

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Lyt App - vidyos IRL</title>
            <link rel="canonical" href="https://lyt.io" />
        </Helmet>
        <main className={mainContent}>
          <div className={justifyCenter}>
            <h1 className={heading1}>Hello 👋.<br />Nice to meet you.</h1>
            <h3 className={heading2}>This is how Lyt works:<br /><br />Capture newsworthy 60s video.<br />
              Upload to 🕸 using <strong>Lyt App</strong>.<br />
              License to news/media outlet.<br />
              Earn 👏 or 💵💵💵.<br />
              Disco.</h3>
            <p className={textCore}>We're not ready for full scale deploy. If you are a news bureau, inquire how you can get early access to: <a className={isWhite} href="mailto:v@lyt.io">v@lyt.io</a>.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
