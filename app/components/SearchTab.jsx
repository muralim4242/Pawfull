import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import TextField from 'material-ui/TextField';
// import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

// const styles = {
//     headline: {
//         fontSize: 24,
//         paddingTop: 16,
//         marginBottom: 12,
//         fontWeight: 400
//     },
//     topGap: {
//         marginTop: 30
//     }
// };
//
// function handleActive(tab) {
//     alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }

export var SearchTab = React.createClass({
    render() {
        return (
            <div className="container_fluid">
                <section className="row text-center section-image" style={{
                    backgroundImage: `url(${require('app/images/page-1-header-image.jpg')})`,
                    paddingTop: 0
                }}>

                    <h1 className="header-text-gap">YOUR PET'S BEST FRIEND. AFTER YOU.</h1>
                    <div className="container">
                      <div className="row text-center">
                          <div className="col-md-6 col-md-offset-3">
                              <ul className="nav nav-justified" role="tablist">
                                  <li role="presentation">
                                      <a href="#vets" aria-controls="vets" role="tab" data-toggle="tab">VETS</a>
                                  </li>
                                  <li role="presentation" className="active">
                                      <a href="#services" aria-controls="services" role="tab" data-toggle="tab">SERVICES</a>
                                  </li>
                                  <li role="presentation">
                                      <a href="#adoption" aria-controls="adoption" role="tab" data-toggle="tab">ADOPTION</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                    </div>

                    <br></br>
                    <div className="container no-border-radius">
                        <div className="row">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane" id="vets">
                                    <form className="form-inline">
                                        <div className="form-group border-show">
                                            <input type="text" className="form-control" placeholder="location"/>
                                            <button type="submit" className="btn btn-success">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div role="tabpanel" className="tab-pane active border-yellow" id="services">
                                    <form className="form-inline">
                                        <div className="form-group border-show">
                                            <input type="text" className="form-control" placeholder="location"/>
                                            <select className="form-control" name="pet-type">
                                                <option value="Select sevices">
                                                    Select service
                                                </option>
                                                <option value="Hospital">
                                                    Hospital
                                                </option>
                                            </select>
                                            <select className="form-control" name="serivces">
                                                <option value="Select perype">
                                                    Select pettype
                                                </option>
                                                <option value="Dog">
                                                    Dog
                                                </option>
                                            </select>
                                            <button type="submit" className="btn btn-success">Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="adoption">
                                    <form className="form-inline">
                                        <div className="form-group border-show">
                                            <input type="text" className="form-control" placeholder="location"/>
                                            <select className="form-control" name="serivces">
                                                <option value="Select perype">
                                                    Select pettype
                                                </option>
                                                <option value="Dog">
                                                    Dog
                                                </option>
                                            </select>
                                            <button type="submit" className="btn btn-success">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <p className="marginCustom">Search options from over 2000 Listings for FREE!</p>

                </section>

            </div>
        )
    }
});

export default Redux.connect()(SearchTab);
