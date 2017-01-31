import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

import SearchTab from "SearchTab";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import {firebaseDBRef} from 'app/firebase/';




export var SearchResultList = React.createClass({
    render() {
        return (
            <div className="container-fluid section-image">
              <Card className="container">
                <div className="text-center">
                    <SearchTab/>
                    <br/>
                </div>
              </Card>

                <br/>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <Card>
                          <CardHeader title="Availblity" subtitle="filter"/>
                          <CardActions>
                            <nav aria-label="Page navigation">
                              <ul className="pagination">

                                <li><a href="#">ANY</a></li>
                                <li><a href="#">MON</a></li>
                                <li><a href="#">TUE</a></li>
                                <li><a href="#">WED</a></li>
                                <li><a href="#">THU</a></li>
                                <li><a href="#">FRI</a></li>
                                <li><a href="#">SAT</a></li>
                                <li><a href="#">SUN</a></li>

                              </ul>
                              </nav>
                          </CardActions>
                      </Card>

                      <Card>
                          <CardHeader title="Fees" subtitle="filter"/>
                          <CardActions>
                                <Slider />
                          </CardActions>
                      </Card>
                    </div>
                    <div className="col-md-9">
                      <Card>
                          <CardActions>
                            <div className="row">
                              <select className="form-control pull-right" name="sort" style={{width:30+"%"}}>
                                  <option value="Select perype">
                                      Select Sort Type
                                  </option>
                                  <option value="exp">
                                      Years of experience
                                  </option>
                                  <option value="lth">
                                      Price - Low to High
                                  </option>
                                  <option value="htl">
                                      Price - High to Low
                                  </option>
                              </select>
                            </div>

                          </CardActions>
                      </Card>
                      <Card>
                          <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg"/>
                          <CardTitle title="Card title"/>
                          <CardText>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                          </CardText>
                      </Card>
                    </div>
                  </div>
                </div>




            </div>
        )
    }
});

export default Redux.connect()(SearchResultList);
