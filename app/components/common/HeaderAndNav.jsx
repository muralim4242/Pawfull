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
                                            <a data-toggle="modal" data-target="#login" href="#">Login</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </nav>

                </header>

                <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">

                            <div className="modal-body padding-zero">
                                <div className="row">

                                    <div className="col-md-5 section-image-2" style={{
                                        backgroundImage: `url(${require('app/images/login-left-image-cut.jpg')})`
                                    }}>
                                      <div className="text-center login-left-layout">
                                        <h2 className="border-white"><strong>PAW<span className=" green">FULL</span></strong></h2>
                                        <ul className="login-left-layout-ul ">
                                          <li>One stop Pet Care platform</li>
                                          <li>Over 200 listings </li>
                                          <li>Verified and Trusted</li>
                                        </ul>
                                      </div>

                                    </div>
                                  <div className="col-md-7 login_right section-image-2">
                                        <div className="login-right-section">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <span className="green">
                                                        <h4><strong>Login</strong></h4>
                                                    </span>
                                                </div>
                                                <div className="col-md-10">
                                                    <h4 className="pull-right black">Don't have an account? <span className="green">Sign up</span></h4>
                                                </div>
                                            </div>

                                            <br/>
                                            <br/>

                                            <form>
                                                <div className="form-group">
                                                  <div className="input-group">
                                                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                                      <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-envelope"></i></span>
                                                  </div>
                                                  </div>

                                                <div className="form-group">
                                                  <div className="input-group">
                                                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                                      <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon glyphicon-user"></i></span>
                                                  </div>
                                                </div>
                                                <br/>

                                                  <div className="row">
                                                      <div className="col-md-3">
                                                          <button className="btn btn-success radius-zero" type="text">Login</button>
                                                      </div>
                                                      <div className="col-md-9">
                                                          <h4 className="pull-right black">Forgot <span className="green">Password ?</span></h4>
                                                      </div>
                                                  </div>
                                                  <br/>



                                                  <div className="text-center">
                                                    <span className="black">or login with</span>
                                                    <br/>
                                                    <br/>
                                                    <a href="#" ><img src={require("app/images/login-facebook.jpg")} /></a>{"       "} <a href="#"> <img src={require("app/images/login-google-plus.jpg")} /></a>
                                                  </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
export default Redux.connect((state) => {
    return {auth: state.auth, app: state.app}
})(HeaderAndNav);
