import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tos from '../pages/Tos'
import { css } from 'emotion'

const FooterSitewide__nav = css`
  position: absolute;
  bottom: 0
`
const FooterSitewide__navlist = css`
  color: #fff
`

class FooterSitewide extends Component {
  render() {
    return (
      <Router>
        <nav className={FooterSitewide__nav}>
          <ul>
            <li><Link to="/tos" className={FooterSitewide__navlist}>Terms of Service</Link></li>
          </ul>
          <Route path="/tos" component={Tos}/>
        </nav>
      </Router>
    );
  }
}

export default FooterSitewide;
