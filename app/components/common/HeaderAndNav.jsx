import React, {Component} from 'react';
var {Link, IndexLink, hashHistory} = require("react-router");

import * as Redux from 'react-redux';

import * as actions from 'actions';

export var HeaderAndNav = React.createClass({

    onLogoutHandler: function(e) {
        hashHistory.push('/');
    },
    render() {
        const {dispatch} = this.props;
        const {isLogin} = this.props.auth;
        const {isMenuOpen} = this.props.app;
        return (
            <div className="">
              <header>
                  <nav className="navbar navbar-inverse navbar-fixed-top" style={{
                      background: 'rgba(0, 0, 0, 0.3)'
                    }}>
                        <div className="container-fluid">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#">
                                  <strong>PAW<span style={{
                                          color: "green"
                                      }}>FULL</span>
                                  </strong>
                              </a>
                              <a style={{
                                  marginLeft: 15 + 'px'
                              }} className="navbar-brand brandNameSpace" href="#">Bangalore</a>
                          </div>

                          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                              <div className="navbar-right">
                                  <ul className="nav navbar-nav uppercase">

                                      <li>
                                          <a href="#">Blog</a>
                                      </li>
                                      <li>
                                          <a href="#" className="yellow_btn-background" style={{
                                              padding: "10px 20px 10px 20px",
                                              color: "white"
                                          }}>Claim Free Listing</a>
                                      </li>
                                      <li>
                                          <a href="#" style={{
                                              color: "rgb(200, 179, 0)"
                                          }}>Add a pet for Adoption</a>
                                      </li>
                                      <li>
                                          <a href="#">FAQ</a>
                                      </li>
                                      <li>
                                          <a href="#">Contact</a>
                                      </li>
                                      <li>
                                          <a href="#">Login</a>
                                      </li>

                                  </ul>

                              </div>
                          </div>

                      </div>
                  </nav>

              </header>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {auth: state.auth, app: state.app}
})(HeaderAndNav);

// <header>
//     <nav className="navbar navbar-inverse navbar-fixed-top" style={{
//         background: 'rgba(0, 0, 0, 0.3)'
//       }}>
//         <div className="container">
//             <div className="navbar-header">
//                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//                     <span className="sr-only">Toggle navigation</span>
//                     <span className="icon-bar"></span>
//                     <span className="icon-bar"></span>
//                     <span className="icon-bar"></span>
//                 </button>
//                 <a className="navbar-brand" href="#">
//                     <strong>PAW<span style={{
//                             color: "green"
//                         }}>FULL</span>
//                     </strong>
//                 </a>
//                 <a style={{
//                     marginLeft: 15 + 'px'
//                 }} className="navbar-brand brandNameSpace" href="#">Bangalore</a>
//             </div>
//
//             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                 <div className="navbar-right">
//                     <ul className="nav navbar-nav uppercase">
//
//                         <li>
//                             <a href="#">Blog</a>
//                         </li>
//                         <li>
//                             <a href="#" className="yellow_btn-background" style={{
//                                 padding: "10px 20px 10px 20px",
//                                 color: "white"
//                             }}>Claim Free Listing</a>
//                         </li>
//                         <li>
//                             <a href="#" style={{
//                                 color: "rgb(200, 179, 0)"
//                             }}>Add a pet for Adoption</a>
//                         </li>
//                         <li>
//                             <a href="#">FAQ</a>
//                         </li>
//                         <li>
//                             <a href="#">Contact</a>
//                         </li>
//                         <li>
//                             <a href="#">Login</a>
//                         </li>
//
//                     </ul>
//
//                 </div>
//             </div>
//
//         </div>
//     </nav>
//
// </header>
