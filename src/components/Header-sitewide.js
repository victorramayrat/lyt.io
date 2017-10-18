import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tos from '../pages/Tos'

class HeaderSitewide extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/tos">Terms of Service</Link></li>
          </ul>
          <Route path="/tos" component={Tos}/>
        </div>
      </Router>
    );
  }
}

export default HeaderSitewide;
