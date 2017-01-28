import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import TextField from 'material-ui/TextField';

export var Footer = React.createClass({
    render() {
        return (
            <div className="container_fluid">
                <footer className="section-image" style={{
                    backgroundImage: `url(${require('app/images/Rectangle-9.jpg')})`,
                    minHeight: 25 + 'em'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-md-offset-1">
                                <br></br>

                                <h3>PAW<span className="green">FULL</span>
                                </h3>
                                <br></br>
                                <p>jh hddewu dwe hddwd dnwd deu ddnnwe dnde de wee we efeff jddh euuh n ery nxshde eehbfeeyrf sdew dduef hhdeww efnfe bf eeu dduwefb bdweyb y webduy wwedydye</p>
                            </div>

                            <div className="col-md-2">
                                <br></br>
                                <br></br>
                                <h4>Subscribe</h4>
                                <br></br>
                                <div className="input-group">
                                    <input type="text" className="form-control"/>
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-arrow-right"></i>
                                    </span>
                                </div>

                            </div>

                            <div className="col-md-3">
                                <br></br>
                                <br></br>
                                <h4>Explore</h4>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <ul className="listNone">
                                            <li>Vets</li>
                                            <br></br>
                                            <li>Hospitals</li>
                                            <br></br>
                                            <li>Pet Service</li>
                                            <br></br>
                                            <li>Adoption</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 text-left">
                                        <ul className="listNone">
                                            <li>FAQ</li>
                                            <br></br>
                                            <li>Privacy Policy</li>
                                            <br></br>
                                            <li>
                                                <span className="green">Contact Us</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <br></br>
                                <br></br>
                                <h4>Social</h4>
                                <br></br>
                                <div className="" style={{
                                    marginLeft: 15 + 'px'
                                }}>
                                    <div className="row"><img src={require("app/images/facebook.jpg")}/></div>
                                    <br></br>
                                    <div className="row"><img src={require("app/images/twitter.jpg")}/></div>
                                    <br></br>
                                    <div className="row"><img src={require("app/images/google plus.jpg")}/></div>
                                    <br></br>
                                </div>

                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        )
    }
});

export default Redux.connect()(Footer);
